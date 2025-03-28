import { useEffect, useState } from 'react'


function App() {
  const [getPosts, setGetPosts] = useState([])


  function fetchData() {
    fetch('http://localhost:3000/posts')
      .then(response => response.json())
      .then(data => {
        setGetPosts(data)
      })
      .catch(error => console.log({
        error: "error",
        message: error.message
      }))
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log(getPosts)

  return (
    <>


    </>
  )
}

export default App
