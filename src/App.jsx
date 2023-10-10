import './App.css'
import { useImgUrl } from './hooks/useImgUrl'
import { useFact } from './hooks/useFact'

export const App = () => {
  // const catImgUrl = `https://cataas.com/cat/says/${firstWord}?size=50&color=red&json=true`

  const { fact, refreshFact } = useFact()
  const { img } = useImgUrl({ fact })

  return (
    <main>
      <h1>App de gatos</h1>
      <button onClick={refreshFact}>Actualizar</button>

      {fact && <p>{fact}</p>}
      {img && <img src={img} alt='Imagen extraida de la api de gatos' />}

    </main>
  )
}
