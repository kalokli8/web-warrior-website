import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import * as styles from "../styles/project-details.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark
  const { title, stack, featuredImg } = data.markdownRemark.frontmatter
  const image = getImage(
    data.markdownRemark.frontmatter.featuredImg.childImageSharp.gatsbyImageData
  )
  return (
    <Layout>
      <div className="styles.details">
        <h2>{title}</h2>
        <h3>{stack}</h3>
        <div className="styles.featured">
          <GatsbyImage image={image} />
        </div>
        <div
          className="styles.html"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        stack
        title
        featuredImg {
          childImageSharp {
            gatsbyImageData(
              formats: NO_CHANGE
              placeholder: BLURRED
              layout: FULL_WIDTH
            )
          }
        }
      }
      html
    }
  }
`
