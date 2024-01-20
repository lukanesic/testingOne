import React from 'react'
import { gql } from '@apollo/client'
import apolloClient from './../../apollo'

const Item = ({ product }) => {
  return (
    <div>
      <h3>{product && product.naslov}</h3>
      <p>{product && product.drugiOpis}</p>
      <span>{product && product.subcategory}</span>
    </div>
  )
}

export default Item

export const getStaticProps = async (context) => {
  const { params } = context
  const { data } = await apolloClient.query({
    query: gql`
          query {
              post(id: "${params.data}", idType: SLUG) {
                productDetails {
                  brend
                  category
                  drugiOpis
                  k2
                  k1
                  k3
                  k4
                  k5
                  prviOpis
                  naslov
                  subcategory
                  detaljnije
                  slika {
                    sourceUrl
                  }
                }
              }
            }
          `,
  })

  const product = data?.post

  if (!product) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      product: product.productDetails || null,
    },
    revalidate: 120,
  }
}

export const getStaticPaths = async () => {
  const { data } = await apolloClient.query({
    query: gql`
      query NewQuery {
        posts(where: { categoryName: "featured" }) {
          nodes {
            slug
          }
        }
      }
    `,
  })

  const paths = data?.posts?.nodes.map((products) => {
    return {
      params: {
        data: products.slug,
      },
    }
  })

  return {
    paths: paths,
    fallback: true,
  }
}
