import React, { useState, useEffect } from 'react';
import Bloglist from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState('mario');
  const [isPending, setIsPending]=useState(true);
  const [error, setError]=useState(null);
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  useEffect(() => {
   setTimeout(()=>{
    fetch('http://localhost:8000/blogs')
    
    .then(res=>{
      console.log(res);
      if(!res.ok)
      {
        throw Error('could not fetch data for that resource');
      }
      return res.json();
    })
    .then((data)=>{
      console.log(data);
      setBlogs(data);
      setIsPending(false);
      setError(null);
    })
    .catch(err=>{
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    })
   },1000)
  }, []);



  return (
    <div className="home">
      {/* {blogs && <Bloglist blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />} */}
      {error && <div> {error} </div>}
      {isPending && <div> Loading..</div>}
      {blogs && <Bloglist blogs={blogs} title="All Blogs!"/>}

      <button onClick={() => setName('luigi')}>Change name</button>
      <p>{name}</p>
    </div>
  );
}

export default Home;
