import React from "react"
import { useStaticQuery, graphql } from "gatsby"

//query name must be unique
const getData = graphql`
  query FirstQuery {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        person {
          age
          name
        }
        complexData {
          age
          name
        }
      }
    }
  }
`

const FetchData = () => {
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h1>Name: {title}</h1>
    </div>
  )
}

export default FetchData
