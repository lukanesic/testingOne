import React from 'react'

const TextContent = ({ children, flex, pad, mini }) => {
  return (
    <section
      className={`text-content wrapper ${flex && 'flex'} ${pad && 'pad'} ${
        mini && 'mini'
      }`}
    >
      {children}
    </section>
  )
}

export default TextContent
