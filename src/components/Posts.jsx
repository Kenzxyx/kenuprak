import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);    

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=12')
      .then((response) => {
        setPosts(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Terjadi kesalahan saat mengambil data.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className='container mx-auto mt-16 px-20'>
      <div className="uppercase font-bold text-teal-400 text-2sm mb-2">Update</div>
      <h2 className='text-4xl font-bold mb-2 text-white'>Apa yang baru di Petani Kode? 🔥</h2>
      <p className='text-lg mb-8 text-slate-300'>Baca Artikel terbaru yang masih fresh dan hangat.</p>

      <div className='grid grid-cols-3 gap-5'>
        {posts.map(post => (
          <div key={post.userId} className='rounded-2xl bg-slate-800 hover:outline-slate-600 hover:outline-1 p-6 cursor-pointer'>
              <span className='text-3xl text-white'>{post.id + ' '}</span>
              <strong className='text-blue-500 font-bold text-lg'>{post.title}</strong><br />
              <span className='text-white'>{post.body}</span>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Posts;

