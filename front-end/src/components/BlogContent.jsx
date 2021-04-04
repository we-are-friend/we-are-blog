import BlockContent from '@sanity/block-content-to-react';
import HighlightCode from 'src/components/HighlightCode';
import { urlFor } from 'lib/api';

const serializers = {
  types: {
    // eslint-disable-next-line react/display-name
    code: ({ node: { language, code, filename } }) => {
      return (
        <HighlightCode language={language}>
          {code}
          <div className="code-filename">{filename}</div>
        </HighlightCode>
      );
    },
    // eslint-disable-next-line react/display-name
    image: ({ node: { asset, alt, position } }) => {
      return (
        <div className={`blog-image blog-image-${position}`}>
          <img src={urlFor(asset).height(300).fit('max').url()} alt={alt} />
          <div className="image-alt">{alt}</div>
        </div>
      );
    },
  },
};

const BlogContent = ({ content }) => (
  <BlockContent
    blocks={content}
    imageOptions={{ w: 320, h: 240, fit: 'max' }}
    serializers={serializers}
  />
);

export default BlogContent;
