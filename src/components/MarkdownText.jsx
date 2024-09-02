import React from "react";

// remark
import { remark } from "remark";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeExternalLinks from "rehype-external-links";

const MarkdownText = ({ children }) => {
  const html = remark()
    .use(remarkRehype)
    .use(rehypeExternalLinks, { target: "_blank", rel: "noopener noreferrer" }) // Add target="_blank" to links
    .use(rehypeStringify) // Convert AST to HTML string
    .processSync(children)
    .toString();

  return (
    <div className="markdown-text" dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default MarkdownText;
