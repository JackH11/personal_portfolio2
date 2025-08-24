'use client'

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [selectedLayout, setSelectedLayout] = useState<'left'>('left');

  const layouts = [
    { id: 'left', name: 'Left Image Layout' },
  ] as const;

  const renderLayout = () => {
    switch (selectedLayout) {
      case 'left':
        return (
          <div className="max-w-6xl mx-auto px-4 py-20">
                      <div className="flex flex-col lg:flex-row items-start gap-12">
            {/* Left Column - Image and Blog Post */}
            <div className="lg:w-1/3 space-y-6">
              {/* Profile Image */}
              <div className="flex justify-center">
                <div className="w-80 h-80 rounded-2xl overflow-hidden shadow-2xl relative">
                  <Image
                    src="/images/profile.jpg"
                    alt="Profile Picture"
                    fill
                    style={{
                      objectFit: 'cover',
                      objectPosition: '60% 0%',
                    }}
                    priority
                  />
                </div>
              </div>
              
              {/* Blog Post Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Latest Post</h3>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Understanding Convolutional Neural Networks (CNNs)</h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  A beginner's guide to CNNs, exploring their architecture, applications, and implementation details.
                </p>
                <a 
                  href="/blog/understanding-cnns" 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  Read the full article →
                </a>
              </div>

              {/* Latest Project Card */}
              <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Latest Project</h3>
                <h4 className="text-lg font-bold text-gray-900 mb-3">Collision Avoidance RL Agent</h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  A collision avoidance RL agent built with stable-baselines3 and openai gym.
                </p>
                <a 
                  href="/projects/collision-avoidance-rl-agent" 
                  className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium text-sm"
                >
                  View project details →
                </a>
              </div>
            </div>
              
              {/* Right Content */}
              <div className="lg:w-2/3 space-y-6">
                <h1 className="text-5xl font-bold text-gray-900">About Me</h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  I'm a passionate engineer with over 3 years of experience building 
                  data driven solutions at an enterprise level. I'm studying Computer Science at Georgia Tech with a specialization in 
                  AI and ML. I have a history of working with a broad range of technologies like 
                  building 3D printers, training neural networks, and building drones.
                  

                  Outside of work and school, I enjoy yoga, golf, and traveling with friends.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                </p>
                <div className="pt-4">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Skills & Expertise</h3>
                  <div className="flex flex-wrap gap-3">
                    {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'Docker', 'Streamlit','NestJS','Azure'].map((skill) => (
                      <span key={skill} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Roles</h3>
                  <h4 className="text-xl font-medium text-gray-800 mb-3">Member of Technical Staff at AT&T</h4>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    My work at AT&T has involved a broad stroke of technologies centered around software, data, machine learning, and generative AI.
                    I've worked with Big Data Management and Application Development on Palantir's foundry platform, built LLM applications using 
                    Langchain and Langgraph, and set up web applications using Next.js, NestJS, and Streamlit. 

                    Outside of work, I work on personal projects to furthur refine my skills like training neural networks, building 3D printers, working
                    with LLM web applications.
                  </p>
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">My Thoughts</h3>
                    <ul className="text-lg text-gray-600 leading-relaxed space-y-2">
                      <li>• Stay focused on a product's end goal. It's easy to lose focus and build something that works but doesn't fit the problem</li>
                      <li>• Peoples' time and attention are limited resources. Communicate your ideas concisely.</li>
                      <li>• Good practices become good habits and good habits compound overtime. Prioritze doing good work over fast work.</li>
                    </ul>
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Me</h3>
                  <div className="text-lg text-gray-600 leading-relaxed flex flex-col gap-2">
                      <div className="flex items-center gap-2">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                        </svg>
                        Email: <a href="mailto:jackhasselbring@gmail.com" className="text-blue-600 hover:text-blue-800">jackhasselbring@gmail.com</a>
                      </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                      </svg>
                      LinkedIn: <a href="https://www.linkedin.com/in/jackhasselbring/" className="text-blue-600 hover:text-blue-800">linkedin.com/in/jackhasselbring</a>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                      </svg>
                      GitHub: <a href="https://github.com/jackh11" className="text-blue-600 hover:text-blue-800">github.com/jackh11</a>
                    </div>
                    
                  </div>
                  </div>
                </div>
              </div>
              
            </div>
          
        );
    }
  };

  return (
    <div>
      {renderLayout()}
    </div>
  );
}
