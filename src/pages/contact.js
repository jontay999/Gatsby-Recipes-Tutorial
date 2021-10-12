import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import RecipeList from "../components/RecipeList"
import SEO from "../components/SEO"
const contact = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <SEO title="Contact" />
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to Get in Touch?</h3>
            <p>
              Heirloom small batch blog, affogato air plant four loko everyday
              carry williamsburg before they sold out stumptown ethical chia. +1
              narwhal poutine flannel fingerstache.
            </p>
            <p>
              Meggings pinterest quinoa shabby chic lyft truffaut plaid migas
              authentic bushwick lomo kitsch stumptown forage la croix. freegan
              flannel quinoa selvage.
            </p>
            <p>
              VHS four loko authentic etsy woke retro. Meggings swag pour-over,
              vegan enamel pin tumeric celiac cold-pressed direct trade banjo
              toast poke trust fund mumblecore.
            </p>
          </article>
          <article>
            <form
              className="form contact-form"
              method="POST"
              action="https://formspree.io/f/xjvjzqla"
            >
              <div className="form-row">
                <label htmlFor="name">your name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="email">your email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">your message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                submit
              </button>
            </form>
          </article>
        </section>
        <section className="featured-recipes">
          <h5>Look at this awesome food</h5>
          <RecipeList recipes={recipes} />
        </section>
      </main>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulRecipe(
      sort: { fields: title, order: ASC }
      filter: { featured: { eq: true } }
    ) {
      nodes {
        cookTime
        title
        prepTime
        id
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`

export default contact
