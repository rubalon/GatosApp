import './App.css'
import { useImgUrl } from './hooks/useImgUrl'
import { useFact } from './hooks/useFact'

export const Otro = () => {
  // const catImgUrl = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

  const { fact } = useFact()
  const { img } = useImgUrl({ fact })

  return (
    <>
      {fact && <p>{fact}</p>}

      {img && <img src={img} alt='Imagen extraida de la api de gatos' />}
    </>

  )
}
