'use client'

import * as Tooltip from '@radix-ui/react-tooltip'
import { useState } from 'react'

export default function Projects() {
  const [selectedLayout, setSelectedLayout] = useState<'vertical'>('vertical');

  const layouts = [
    { id: 'vertical', name: 'Vertical Stack' },
  ] as const;

  const projects = [
    {
      id: 1,
      title: "Collision Avoidance RL Agent",
      description: "A collision avoidance RL agent that uses a DQN algorithm to navigate a 2D environment.",
      technologies: ["Python", "PyTorch", "Gymnasium", "RLlib", "TensorBoard"],
      github: "https://github.com/example/ecommerce",
      live: "https://ecommerce-demo.com",
      image: "/images/ecommerce-preview.jpg",
      year: "2025"
    }
  ]

  const renderLayout = () => {
    switch (selectedLayout) {
      case 'vertical':
        return (
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="flex flex-col lg:flex-row">
                  {/* Left: Image */}
                  <div className="lg:w-1/3 relative h-64 lg:h-auto bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                    <div className="text-white text-center p-6">
                      <svg className="w-16 h-16 mx-auto mb-4 opacity-80" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      <h3 className="text-2xl font-bold">{project.title}</h3>
                    </div>
                  </div>
                  
                  {/* Right: Content */}
                  <div className="lg:w-2/3 p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-gray-900 lg:hidden">{project.title}</h3>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {project.year}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-3">
                      <Tooltip.Provider>
                        <Tooltip.Root>
                          <Tooltip.Trigger asChild>
                            <a 
                              href={project.github} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
                            >
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                              </svg>
                              GitHub
                            </a>
                          </Tooltip.Trigger>
                          <Tooltip.Portal>
                            <Tooltip.Content 
                              className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm"
                              sideOffset={5}
                            >
                              View on GitHub
                              <Tooltip.Arrow className="fill-gray-900" />
                            </Tooltip.Content>
                          </Tooltip.Portal>
                        </Tooltip.Root>
                      </Tooltip.Provider>

                      <Tooltip.Provider>
                        <Tooltip.Root>
                          <Tooltip.Trigger asChild>
                            <a 
                              href={project.live}
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                              See More
                            </a>
                          </Tooltip.Trigger>
                          <Tooltip.Portal>
                            <Tooltip.Content 
                              className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm"
                              sideOffset={5}
                            >
                              View Live Demo
                              <Tooltip.Arrow className="fill-gray-900" />
                            </Tooltip.Content>
                          </Tooltip.Portal>
                        </Tooltip.Root>
                      </Tooltip.Provider>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">My Projects</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These are projects I've worked on to showcase my skills in Machine Learning, Data Engineering,
            and Application Development. Each project includes live demos and GitHub repositories. 
            I present them to demonstrate my technical abilities, learn new technologies, 
            and most importantly, to have fun building innovative solutions.
          </p>
        </div>
        {renderLayout()}
      </div>
    </section>
  )
}
  