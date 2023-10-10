import { useState, useEffect } from 'react'
const catImgPrefix = 'https://cataas.com'
const numberOfWords = 3

export function useImgUrl ({ fact }) {
  const [img, setImg] = useState()

  useEffect(() => {
    if (!fact) return

    const firstWord = fact.split(' ', numberOfWords).join(' ')

    fetch(`https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(data => setImg(data.url))
  }, [fact])

  return { img: `${catImgPrefix}${img}` }
}
