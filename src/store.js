import React, { createContext, useReducer } from "react"
import { useStaticQuery, graphql } from "gatsby"

const Store = createContext()

const StoreProvider = ({ children }) => {
  const { orgs } = useStaticQuery(graphql`
    {
      orgs: allShinkanWebOrg {
        edges {
          node {
            posterImageUrls
            name
            primaryKey
            activityType
            activityIntroduce
          }
        }
      }
    }
  `)

  const shuffle = () => Math.random() - 0.5

  const [state] = useReducer(null, {
    edges: orgs.edges.sort(shuffle),
  })

  return <Store.Provider value={state}>{children}</Store.Provider>
}

export { Store, StoreProvider }
