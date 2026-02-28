import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const [article, setArticle] = useState("")

  function nextPage () {
    setCount (count + 1)
  }
  
  function prevPage () {
    setCount (count - 1)
  }

  useEffect(() => {
    fetch('https://dummyjson.com/post/' + count)
    .then((res => res.json()))
    .then(data => setArticle(data))
  }, [count])

  return (
    <>
      <main>
        <header>
          <p>{count}</p>
        </header>
        <button onClick={prevPage} style={{ marginRight: '16px'}}>Prev Page</button>
        <button onClick={nextPage}>Next Page</button>
        <article>
          <h3>{article.title}</h3>
          <p>{article.body}</p>
        </article>
      </main>
    </>
  )
}

export default App
