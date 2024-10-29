import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

export default function Users() {

    const data = useStaticQuery(graphql`
        query {
            allRestApiPosts {
                edges {
                    node {
                        userId
                        title    
                    }
                }
            }
        }
    `);

    return (
        <div>
            <h3>Users</h3>
            <table>
                <thead>
                    <tr>
                        <th>Id do Usuario</th>
                        <th>Titulo</th>
                    </tr>
                </thead>
                <tbody>
                    {data.allRestApiPosts.edges.map(({ node }) => (
                        <tr key={node.userId}>
                            <td>{node.userId}</td>
                            <td>{node.title}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/">Home</Link>
        </div>
    )
}

export function Head() {return <title>Posts</title>}