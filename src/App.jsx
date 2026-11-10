import { useEffect, useState } from 'react'

function App() {
  const [prices, setPrices] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('http://localhost:3000/prices')
      .then((res) => res.json())
      .then((data) => setPrices(data))
      .catch((err) => setError(err.message))
  }, [])

  return (
    <div style={{ padding: 20 }}>
      <h1>Цены с моего сервера</h1>
      {error && <p style={{ color: 'red' }}>Ошибка: {error}</p>}
      {!error && !prices && <p>Загрузка...</p>}
      {prices && (
        <ul>
          {prices.map((p) => (
            <li key={p.coin}>
              {p.coin}: ${p.price.toLocaleString()}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default App
