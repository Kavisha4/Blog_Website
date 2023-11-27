import React, { useState, useEffect } from 'react';
import Bloglist from './BlogList';

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  const [name, setName] = useState('mario');

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter(blog => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
    .then(res=>{
      return res.json();
    })
    .then((data)=>{
      console.log(data);
      setBlogs(data);
    })
  }, []);

  return (
    <div className="home">
      {/* {blogs && <Bloglist blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />} */}
      {blogs && <Bloglist blogs={blogs} title="All Blogs!"/>}

      <button onClick={() => setName('luigi')}>Change name</button>
      <p>{name}</p>
    </div>
  );
}

export default Home;
