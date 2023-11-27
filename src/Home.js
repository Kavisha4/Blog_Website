import React, { useState, useEffect } from 'react';
import Bloglist from './BlogList';
import useFetch from './useFetch'
const Home = () => {
  
  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // };
  const [name, setName] = useState('mario');

  const {data: blogs,isPending,error}=useFetch('http://localhost:8000/blogs');


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
