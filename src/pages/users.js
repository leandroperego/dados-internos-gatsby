import * as React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

export default function Users() {

    const data = useStaticQuery(graphql`
        query {
            allRestApiUsers {
                edges {
                    node {
                        id
                        name
                        email
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
                        <th>id</th>
                        <th>name</th>
                        <th>email</th>
                    </tr>
                </thead>
                <tbody>
                    {data.allRestApiUsers.edges.map(({ node }) => (
                        <tr key={node.id}>
                            <td>{node.id}</td>
                            <td>{node.name}</td>
                            <td>{node.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Link to="/">Home</Link>
        </div>
    )
}

export function Head() {return <title>Users</title>}