import React from "react";

export default function ElencoPost({ response }) {
  console.log("Response in ElencoPost:", response);

  // Assicurati di gestire il caso in cui response sia null o undefined
  if (!response) {
    return <div className="posts">Caricando post...</div>;
  }

  // Accesso corretto ai dati dei post
  const posts = response.posts;

  // Verifica se non ci sono post
  if (posts.length === 0) {
    return <div className="posts">Nessun post trovato.</div>;
  }

  // Mapping dei post per renderizzarli
  return (
    <div className="posts">
      {posts.map(post => (
        <div key={`post${post.id}`} className="post">
          <h2>{post.title}</h2>
          <img src={post.img} alt={post.title} />
          <p>{post.content}</p>
          <p>Published: {post.published ? 'Yes' : 'No'}</p>
          <p>Tags: {post.tags.map(tag => tag.name).join(', ')}</p>
        </div>
      ))}
    </div>
  );
}