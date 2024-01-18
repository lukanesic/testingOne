import React from 'react'

const About = ({ sampleData }) => {
  return (
    <div>
      {' '}
      It should display sample data
      {sampleData &&
        sampleData.map((data, index) => (
          <div key={data.id}>
            <h3>{data.name}</h3>
            <p>{data.content}</p>
          </div>
        ))}
    </div>
  )
}

export default About

export const getStaticProps = async () => {
  // ovde mozes da ucinis api poziv da znas - direktno

  const sampleData = [
    { id: 1, name: 'Sample 4', content: 'This is sample 4' },
    { id: 2, name: 'Sample 5', content: 'This is sample 5' },
    { id: 3, name: 'Sample 6', content: 'This is sample 6' },
  ]

  return {
    props: {
      sampleData,
    },
  }
}
