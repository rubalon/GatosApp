import { useState, useEffect } from 'react'
import { newFact } from '../services/fetch'

export function useFact () {
  const [fact, setFact] = useState()

  const refreshFact = async () => {
    const newCatFact = await newFact()
    setFact(newCatFact)
  }

  useEffect(() => {
    refreshFact()
  }, [])

  return { fact, refreshFact }
}
