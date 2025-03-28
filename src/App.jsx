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
  function removePost() {

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
      <main>
        <section className='infos bg-light '>
          <div className="container py-5">
            <h1 className='mb-5'>Dolci italiani</h1>
            <div className="desription mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, officiis saepe. Delectus velit, eum error et eos ex excepturi dolor tempora? Cumque sapiente dolore nesciunt aliquid fugit temporibus sed itaque!
            </div>
            <button className='btn btn-primary'>Explore Now!</button>
          </div>
        </section>
        <section className="posts-container container">
          <div className='d-flex justify-content-end'>
            <form className='d-flex  align-items-center mt-5 mb-3'>
              <input type="text" name="post-to-remove" id="post-to-remove" className='btn border'></input>
              <button name="posts-remover" id="posts-remover" className="btn btn-primary">Remove!</button>
            </form>
          </div>
          <table className='table table-dark'>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Immagine</th>
                <th>Descrizione</th>
              </tr>
            </thead>
            <tbody>
              {
                getPosts.map(post => (
                  <tr key={`post-${post.slug}`}>
                    <td>{post.title}</td>
                    <td><img src={`http://localhost:3000/images/${post.image}`} alt="" width={"300px"} /></td>
                    <td>{post.content}</td>
                  </tr>

                ))
              }
            </tbody>
          </table>

        </section>

      </main>

    </>
  )
}

export default App
