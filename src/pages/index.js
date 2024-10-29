import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"

export default function Index() {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }`);

  return (
    <main>
      <h1>Home Page</h1>
      <h2>Segundo titulo com o title do gatsby-config: {data.site.siteMetadata.title}</h2>
      <p>Aqui é a home page!</p>
      <p>Segundo paragrafo criado para dar novo push e observar no netlify o comportamento</p>
    </main>
  )
}

export const Head = () => <title>Home Page</title>
