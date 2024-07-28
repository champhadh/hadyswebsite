"use client";
import React from 'react';

const Blog = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-4xl font-bold mb-4">Cybersecurity Blog</h1>
      <p className="mb-4">COMING SOON!</p>
      <div className="flex justify-center mb-8">
        <img src="images/construction.gif" alt="Under Construction" className="w-48 h-48" />
      </div>
      <article className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">soon.</h2>
        <p className="mb-2">- Hady Wehbe</p>
        {/* Add more content here */}
      </article>
      {/* Add more articles here */}
    </div>
  );
};

export default Blog;
