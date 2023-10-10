const factUrl = 'https://catfact.ninja/fact'

export const newFact = async () => {
  const res = await fetch(factUrl)
  const data = await res.json()
  return data.fact
}
