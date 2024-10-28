import * as React from "react"

export default function Index() {
  return (
    <main>
      <h1>Home Page</h1>
      <p>Aqui é a home page!</p>
      <p>Segundo paragrafo criado para dar novo push e observar no netlify o comportamento</p>
    </main>
  )
}

export const Head = () => <title>Home Page</title>
