import React from "react"
import AllRecipes from "../components/AllRecipes"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
export default function Recipes() {
  return (
    <Layout>
      <SEO title="Recipes" />
      <main className="page">
        <AllRecipes />
      </main>
    </Layout>
  )
}
