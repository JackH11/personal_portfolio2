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
                <p className="text-xl text-gray-600 leading-relaxed">
                  I'm a passionate engineer with over 3 years of experience building 
                  accessible, data-driven web applications. I'm currently studying Computer Science at Georgia Tech and specialize in 
                  data engineering, ML, and application development, but have a history of working with other technologies like 
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
                  <p className="text-lg text-gray-600 leading-relaxed">
                    My work at AT&T has involved a broad stroke of technologies centered around software, data, machine learning, and Large Language Models.
                    I've work with Big Data Management and Application Development on Palantir's foundry platform. I've worked on LLM applications using 
                    Langchain and Langgraph, and set up web applications using Next.js, NestJS, and Streamlit. 

                    Outside of work, I work on personal projects to furhur refine my skills like training neural networks, building 3D printers, working
                    with LLM web applications. Check out my projects page for more details!
                  </p>
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Contact Me</h3>
                  <div className="text-lg text-gray-600 leading-relaxed flex flex-col gap-2">
                    <div>
                      Email: <a href="mailto:jackhasselbring@gmail.com" className="text-blue-600 hover:text-blue-800">jackhasselbring@gmail.com</a>
                    </div>
                    <div>
                      LinkedIn: <a href="https://www.linkedin.com/in/jackhasselbring/" className="text-blue-600 hover:text-blue-800">linkedin.com/in/jackhasselbring</a>
                    </div>
                    <div>
                      GitHub: <a href="https://github.com/jackh11" className="text-blue-600 hover:text-blue-800">github.com/jackh11</a>
                    </div>
                  </div>
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Hobbies</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Yoga, Guitar, Reading, Golf
                  </p>
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
