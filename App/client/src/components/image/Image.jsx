import React from 'react'

const Image = ({ src, borderRadius, height, width, maxHeight,maxWidth ,alt='Image'}) => {
  const style = {
    height,
    width,
    borderRadius,
    maxHeight,
    maxWidth
  }
  
  const imgStyle = { width: 'inherit', height: 'inherit', borderRadius: borderRadius || '9999px'}
  return (
    <div style={style}>
      <img src={src} alt={alt} style={imgStyle}/>
    </div>
  )
}

export default Image
