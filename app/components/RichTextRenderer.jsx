import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function RichTextRenderer({ content }) {
  if (!content) return null;

  const options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <strong>{text}</strong>,
      [MARKS.ITALIC]: (text) => <em>{text}</em>,
      [MARKS.UNDERLINE]: (text) => <u>{text}</u>,
      [MARKS.CODE]: (text) => <code>{text}</code>,
    },
    // 👇 this is the key bit
    renderText: (text) => {
      return text.split('\n').reduce((acc, segment, i) => {
        if (i > 0) acc.push(<br key={`br-${i}`} />);
        acc.push(segment);
        return acc;
      }, []);
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
      [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
      [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
      [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
      [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
      [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
      [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
      [BLOCKS.HR]: () => <hr />,
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const asset = node?.data?.target?.fields;
        if (!asset?.file?.url) return null;
        return (
          <img
            src={asset.file.url}
            alt={asset.title || 'Embedded asset'}
            loading="lazy"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        );
      },

      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data;
        return (
          <a href={uri} target="_blank" rel="noreferrer">
            {children}
          </a>
        );
      },
      [INLINES.ENTRY_HYPERLINK]: (node, children) => (
        <a href={`/${node.data.target.fields.slug}`}>{children}</a>
      ),
      [INLINES.ASSET_HYPERLINK]: (node, children) => {
        const url = node.data.target.fields.file.url;
        return (
          <a href={url} target="_blank" rel="noreferrer">
            {children}
          </a>
        );
      },
      [INLINES.EMBEDDED_ENTRY]: (node) => {
        const entry = node.data.target.fields;
        return (
          <div className="embedded-entry">
            <h4>{entry.title}</h4>
            <p>{entry.summary}</p>
          </div>
        );
      },
    },
  };

  return documentToReactComponents(content, options);
}
