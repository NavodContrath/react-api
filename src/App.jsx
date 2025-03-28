import { useEffect, useState } from 'react'

function App() {
  const [getPosts, setGetPosts] = useState([])
  /*  const [postToRemove, setPostToremove] = useState('')*/
  const [removed, setRemoved] = useState(false)

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

  function removePost(slug) {
    fetch(`http://localhost:3000/posts/${slug}`, {
      method: "DELETE",
    })
      .then(data => {
        console.log(data)
        console.log(slug)
        setRemoved(true)
      })
      .catch(error => console.log({
        error: "error",
        message: error.message
      }))
  }

  useEffect(() => {
    fetchData()
    setRemoved(false)
  }, [removed])

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
            {/*  
           !!!implementation based on typing the slug not functionally  fixed down below!!!

           <form className='d-flex  align-items-center mt-5 mb-3' onSubmit={(e) => { removePost(e) }}>
              <input type="text" name="post-to-remove" id="post-to-remove" onChange={(e) => setPostToremove(e.target.value)} className='btn border'></input>
              <button name="posts-remover" id="posts-remover" className="btn btn-primary">Remove</button>
            </form> 
            */}
          </div>
          <table className='table table-striped table-dark'>
            <thead>
              <tr className='text-center'>
                <th>Nome</th>
                <th>Immagine</th>
                <th>Descrizione</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {
                getPosts.map(post => (
                  <tr key={`post-${post.slug}`}>
                    <td className='align-middle p-3'>{post.title}</td>
                    <td className='p-3'><img src={`http://localhost:3000/images/${post.image}`} alt="" width={"300px"} /></td>
                    <td className='p-3 border border-bottom-0 border-top-0'>{post.content}</td>
                    <td className='align-middle p-3'><button type="button" onClick={() => { removePost(post.slug) }} className="btn btn-primary">Delete</button></td>
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
