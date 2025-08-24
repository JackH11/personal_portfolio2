'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function BlogPage() {
  const [selectedLayout, setSelectedLayout] = useState<'grid' | 'list' | 'featured'>('grid');

  const layouts = [
    { id: 'featured', name: 'Featured Layout' }
  ] as const;

  const blogPosts = [
    {
      id: 1,
      title: "Understanding Convolutional Neural Networks (CNNs)",
      excerpt: "A comprehensive guide to CNNs, exploring their architecture, applications, and implementation details. Learn about convolutional layers, pooling, and practical PyTorch implementation.",
      content: "Convolutional Neural Networks (CNNs) have revolutionized the field of computer vision...",
      author: "Jack Hasselbring",
      date: "August 12, 2025",
      readTime: "15 min read",
      category: "Machine Learning",
      tags: ["Deep Learning", "Neural Networks", "CNN"],
      featured: true,
      slug: "understanding-cnns"
    }
  ];

  const renderLayout = () => {

        return (
          <div className="space-y-12 mb-16">
            {blogPosts.filter(post => post.featured).map((post) => (
              <article key={post.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative h-64 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <div className="text-white text-center p-8">
                    <svg className="w-20 h-20 mx-auto mb-6 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    <h3 className="text-2xl font-bold mb-2">{post.category}</h3>
                    <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm">Featured</span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    {post.title}
                  </h2>
                  
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-gray-500">{post.date}</span>
                    </div>
                    <Link 
                      href={`/blog/${post.slug}`}
                      className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                    >
                      Read Full Article
                    </Link>
                  </div>
                </div>
              </article>
            ))}
            
            
          </div>
        );


  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Blog</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            My writings on various topics and insights on machine learning, data engineering that interest me.
          </p>
        </div>

        {/* Blog Posts Layout */}
        {renderLayout()}

      </div>
    </section>
  );
} 