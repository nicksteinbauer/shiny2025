
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { client } from "../models/contentful.server";
//import { MetaFunction } from "@remix-run/node";
import RichTextRenderer from "../components/RichTextRenderer";
import SimpleImageMap from "../components/SimpleImageMap";
import FaqsMap from "../components/faqsMap";

export async function loader(){
	return json(await client.getPageByTitle("Asked Questions"))
}



export default function Index() {
	const {title, secondaryTitle, content, pageClass, bannersCollection, simpleReferenceCollection } = useLoaderData();
	
  return (
	<div className={pageClass}>
		
		{bannersCollection?.items?.length > 0 && (
			<section>
				<div className="inside-xl no-padd">
					<SimpleImageMap bannersCollection={bannersCollection}/>
				</div>
			</section>
		)}
		<section className="backWhite">
			<div className="inside-lg">
				<h1><span>{secondaryTitle}</span>{title}</h1>
				{content?.json && (
					<div><RichTextRenderer content={content?.json} /></div>
				)}
				{simpleReferenceCollection?.items?.length > 0 && (
					<div className="">
						<FaqsMap simpleReferenceCollection={simpleReferenceCollection}/>
					</div>
				)}
			</div>
		</section>
	</div>
  );
}
