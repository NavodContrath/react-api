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
      <header>
        <nav className="navbar navbar-expand-sm navbar-light bg-primary py-3">
          <div className="container-fluid">
            <a className="navbar-brand  text-white" href="#">Logo</a>
            <div className="collapse navbar-collapse" id="navbarID">
              <div className="navbar-nav">
                <a className="nav-link active  text-white" aria-current="page" href="#">Home</a>
              </div>
            </div>
          </div>
        </nav>
      </header >
    </>
  )
}

export default App
