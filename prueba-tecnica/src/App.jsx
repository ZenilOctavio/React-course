import { useEffect, useState } from 'react'

export function App () {
  const [fact, setFact] = useState('lorem ipsum dolor sit amet')

  const CAT_ENDPOINT_FACT = 'https://catfact.ninja/fact'
  // const CAT_ENDPOINT_IMAGE = `https://cataas.com/cat/says/${fact}?json=true`

  function useImage (fact) {
    const [image, setImage] = useState()
    const threeWords = fact.split(' ', 3)

    useEffect(() => {
      if (!fact) return

      fetch(`https://cataas.com/cat/says/${threeWords}?json=true`)
        .then(res => res.json())
        .then(data => setImage(data.url))
    }, [fact])

    return image
  }

  useEffect(
    () => {
      fetch(CAT_ENDPOINT_FACT)
        .then(res => res.json())
        .then(data => setFact(data.fact))
    }, [])

  const image = useImage(fact)

  function handleClick () {
    fetch(CAT_ENDPOINT_FACT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }

  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      placeItems: 'center',
      justifyContent: 'center'
    }}
    >
      <h1>App de gatitos </h1>
      <section style={{
        backgroundColor: '#1e2227',
        color: '#d7dae0',
        padding: '2em',
        borderRadius: 10,
        fontFamily: 'system-ui',
        maxWidth: 600,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '2em'
      }}
      >
        {fact && <p>{fact}</p>}
        <img
          style={{ maxWidth: 200, height: 'auto', border: '2px solid #afc5d6', borderRadius: 10 }}
          src={`https://cataas.com/${image}`}
          alt='Image copiled from picsum'
        />
      </section>
      <button
        style={{
          backgroundColor: '#393d41',
          color: '#bec8da',
          padding: '0.8em 0.5em',
          marginTop: '2em',
          borderRadius: 20,
          fontFamily: 'system-ui',
          fontWeight: 500,
          fontSize: '1.2rem',
          border: '0.1em solid #afc5d6'
        }}
        onClick={handleClick}
      >
        Reiniciar
      </button>
    </main>
  )
}
