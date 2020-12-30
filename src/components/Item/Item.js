import React from "react"
import ReactMarkdown from "react-markdown"
import { useParams } from "react-router-dom"
import HtmlPageMetadata from "../HtmlPageMetadata"


export default function Item() {
  let { id } = useParams()

  return (
    <article>
      <HtmlPageMetadata title={`title`} description={`title - subtitle`} />
      <header>
        <h1 className="post-title">{`title`}</h1>
        <h2 className="post-subtitle">{`subtitle`}</h2>
      </header>
      <ReactMarkdown
        source={` # hello`}
        linkTarget="_blank"
        escapeHtml={false}
      />
    </article>
  )
}
