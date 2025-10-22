import { getPlaiceholder } from "plaiceholder";

const SPACE = process.env.CONTENTFUL_SPACE_ID
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN

async function apiCall(query, variables) {
    const fetchUrl = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`;
    const options = {
        method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Authorization: `Bearer ${TOKEN}`,
		},
		body: JSON.stringify({ query, variables }),
    }
    return await fetch(fetchUrl, options)
}

async function apiJSON(query, variables) {
  const resp = await apiCall(query, variables); // your existing fetcher
  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`Contentful HTTP ${resp.status}: ${text}`);
  }
  const json = await resp.json();
  if (json.errors) {
    // Log but don't crash — let callers decide
    console.error("Contentful GQL errors:", JSON.stringify(json.errors, null, 2));
  }
  return json;
}

async function getProjects() {
    
    const query = `
    {
        projectsCollection (order:releaseDate_DESC){
            items {
                title
                desc {
                    json
                }
                releaseDate
                link
                previewImage {
                    description
                    url
                }
            }
        }
    }`;
    const response = await apiCall(query);
    const json = await response.json()
    const formattedData = await json.data.projectsCollection.items.map(
		async (project) => {
			const { title, desc, releaseDate, link, previewImage } = project;
			const { css, img } = await getPlaiceholder(previewImage.url);
			return {
				title,
				desc,
				releaseDate,
				link,
				image: img,
				imageAlt: previewImage.description,
				css,
			};
		}
	);
	return Promise.all(formattedData)
}

async function getTalks() {
    const query = `{
        talksCollection {
            items {
                sys {
                    id
                }
                title
                description {
                    json
                }
                link
                type
                previewImage {
                    description
                    url
                }
            }
        }
    }`;
    const response = await apiCall(query);
    const json = await response.json();
    return await json.data.talksCollection.items

}

async function getAllBlogs() {
    const query = `
    {
        blogCollection(order:sys_firstPublishedAt_DESC) {
        items {
          title
          slug
          description
          tag
          sys {
            firstPublishedAt
          }
        }
      }
    }
    `;
    const response = await apiCall(query);
    const json = await response.json();
    return await json.data.blogCollection.items
}

async function getSingleBlog(slug) {
    const query = `
    query($slug: String){
        blogCollection(where: {slug:$slug}) {
            items {
                title
                description
                tag
                canonicalUrl
                blogBody {
                  json
                }
                sys {
                  publishedAt
                }
                openGraphImage {
                  url
                }
              }
            }
    }
    `;
    const variables = {
        slug: slug
    };
    const response = await apiCall(query,variables);
    const json = await response.json();
    return await json.data.blogCollection.items[0]
}

async function getPageByTitle(title) {
    const query=`
    query($title:String) {
        pageCollection(where:{title:$title}){
          items{
            title
            secondaryTitle
            pageClass
            content{
              json
            }
            bannersCollection(limit: 2) {
              items {
                imageClass
                image {
                  url
                  width
                  height
                  description
                }
              }
            }
            buttonsCollection(limit: 2) {
              items {
                title
                buttonText
                buttonLink
                buttonClass
              }
            }
            simpleReferenceCollection(limit: 20) {
              items {
                title
                visualTitle
                content {
                  json
                }
              }
            }
          }
        }
      }
    `
    const variables = {
        title: title
    };
    const response = await apiCall(query,variables);
    const json = await response.json();
    return await json.data.pageCollection.items[0]
}

// --- query by SLUG (use this if your content type has a slug field) ---
async function getPageBySlug(slug) {
  const query = /* GraphQL */ `
    query ($slug: String!, $limit: Int = 1) {
      pageCollection(where: { slug: $slug }, limit: $limit) {
        items {
          title
          secondaryTitle
          pageClass
          content { json }
          bannersCollection(limit: 2) {
            items {
              imageClass
              image { url width height description }
            }
          }
          buttonsCollection(limit: 2) {
            items { title buttonText buttonLink buttonClass }
          }
          simpleReferenceCollection(limit: 20) {
            items { title visualTitle content { json } }
          }
        }
      }
    }
  `;
  const json = await apiJSON(query, { slug });
  return json?.data?.pageCollection?.items?.[0] ?? null;
}

export const client = {getProjects, getTalks, getAllBlogs, getSingleBlog, getPageByTitle, getPageBySlug}