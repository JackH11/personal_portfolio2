'use client'

import Image from "next/image";
import { useState } from "react";

export default function AboutPage() {
  const [selectedLayout, setSelectedLayout] = useState<'left' | 'top' | 'hero' | 'grid' | 'circle'>('circle');

  const layouts = [
    { id: 'left', name: 'Left Image Layout' },
    { id: 'top', name: 'Top Image Layout' },
    { id: 'hero', name: 'Hero Background Layout' },
    { id: 'grid', name: 'Grid Layout' },
    { id: 'circle', name: 'Circular Image Layout' }
  ] as const;

  const renderLayout = () => {
    switch (selectedLayout) {
      case 'left':
        return (
          <div className="max-w-6xl mx-auto px-4 py-20">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12">
              {/* Left Image */}
              <div className="lg:w-1/3 flex justify-center">
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
              
              {/* Right Content */}
              <div className="lg:w-2/3 space-y-6">
                <h1 className="text-5xl font-bold text-gray-900">About Me</h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  I'm a passionate software engineer with over 5 years of experience building 
                  accessible, scalable web applications. I specialize in modern JavaScript 
                  frameworks and love creating intuitive user experiences.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  When I'm not coding, you can find me exploring new technologies, contributing 
                  to open source projects, or sharing knowledge with the developer community. 
                  I believe in writing clean, maintainable code and staying up-to-date with 
                  industry best practices.
                </p>
                <div className="pt-4">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Skills & Expertise</h3>
                  <div className="flex flex-wrap gap-3">
                    {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker'].map((skill) => (
                      <span key={skill} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'top':
        return (
          <div className="max-w-4xl mx-auto px-4 py-20">
            <div className="text-center mb-12">
              <h1 className="text-5xl font-bold text-gray-900 mb-8">About Me</h1>
              
              {/* Top Image - Slightly Off Center */}
              <div className="relative mb-12">
                <div className="w-72 h-72 mx-auto rounded-2xl overflow-hidden shadow-2xl relative">
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
                {/* Decorative element */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500 rounded-full opacity-20"></div>
              </div>
            </div>
            
            {/* Content Below */}
            <div className="space-y-6 text-center">
              <p className="text-xl text-gray-600 leading-relaxed">
                I'm a passionate software engineer with over 5 years of experience building 
                accessible, scalable web applications. I specialize in modern JavaScript 
                frameworks and love creating intuitive user experiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open source projects, or sharing knowledge with the developer community. 
                I believe in writing clean, maintainable code and staying up-to-date with 
                industry best practices.
              </p>
              <div className="pt-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Skills & Expertise</h3>
                <div className="flex flex-wrap gap-3 justify-center">
                  {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker'].map((skill) => (
                    <span key={skill} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'hero':
        return (
          <div className="relative min-h-screen">
            {/* Hero Background with Image */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700">
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            </div>
            
            {/* Content Overlay */}
            <div className="relative z-10 min-h-screen flex items-center">
              <div className="max-w-6xl mx-auto px-4 py-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                  {/* Left Content */}
                  <div className="text-white space-y-6">
                    <h1 className="text-6xl font-bold">About Me</h1>
                    <p className="text-xl leading-relaxed opacity-90">
                      I'm a passionate software engineer with over 5 years of experience building 
                      accessible, scalable web applications. I specialize in modern JavaScript 
                      frameworks and love creating intuitive user experiences.
                    </p>
                    <p className="text-lg leading-relaxed opacity-90">
                      When I'm not coding, you can find me exploring new technologies, contributing 
                      to open source projects, or sharing knowledge with the developer community.
                    </p>
                    <div className="pt-4">
                      <h3 className="text-2xl font-semibold mb-4">Skills & Expertise</h3>
                      <div className="flex flex-wrap gap-3">
                        {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker'].map((skill) => (
                          <span key={skill} className="bg-white bg-opacity-20 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-sm">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Right Image */}
                  <div className="flex justify-center lg:justify-end">
                    <div className="w-96 h-96 rounded-2xl overflow-hidden shadow-2xl relative">
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
                </div>
              </div>
            </div>
          </div>
        );

             case 'grid':
         return (
           <div className="max-w-6xl mx-auto px-4 py-20">
             <div className="text-center mb-16">
               <h1 className="text-5xl font-bold text-gray-900 mb-4">About Me</h1>
               <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                 Get to know me better through my background, skills, and what drives me as a developer.
               </p>
             </div>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
               {/* Left Column - Image */}
               <div className="space-y-8">
                 <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-2xl relative">
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
                 
                 <div className="bg-gray-50 rounded-xl p-6">
                   <h3 className="text-xl font-semibold text-gray-900 mb-4">Quick Facts</h3>
                   <div className="space-y-3">
                     <div className="flex justify-between">
                       <span className="text-gray-600">Experience:</span>
                       <span className="font-medium">5+ years</span>
                     </div>
                     <div className="flex justify-between">
                       <span className="text-gray-600">Location:</span>
                       <span className="font-medium">San Francisco, CA</span>
                     </div>
                     <div className="flex justify-between">
                       <span className="text-gray-600">Focus:</span>
                       <span className="font-medium">Full-Stack Development</span>
                     </div>
                   </div>
                 </div>
               </div>
               
               {/* Right Column - Content */}
               <div className="space-y-8">
                 <div>
                   <h2 className="text-3xl font-bold text-gray-900 mb-4">My Journey</h2>
                   <p className="text-lg text-gray-600 leading-relaxed">
                     I'm a passionate software engineer with over 5 years of experience building 
                     accessible, scalable web applications. I specialize in modern JavaScript 
                     frameworks and love creating intuitive user experiences.
                   </p>
                 </div>
                 
                 <div>
                   <h2 className="text-3xl font-bold text-gray-900 mb-4">What I Do</h2>
                   <p className="text-lg text-gray-600 leading-relaxed">
                     When I'm not coding, you can find me exploring new technologies, contributing 
                     to open source projects, or sharing knowledge with the developer community. 
                     I believe in writing clean, maintainable code and staying up-to-date with 
                     industry best practices.
                   </p>
                 </div>
                 
                 <div>
                   <h2 className="text-3xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
                   <div className="grid grid-cols-2 gap-3">
                     {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker'].map((skill) => (
                       <span key={skill} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg text-sm font-medium">
                         {skill}
                       </span>
                     ))}
                   </div>
                 </div>
               </div>
             </div>
           </div>
         );

       case 'circle':
         return (
           <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
             <div className="max-w-4xl mx-auto text-center">
               {/* Circular Image */}
               <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg relative mx-auto mb-8">
                 <Image
                   src="/images/profile.jpg"
                   alt="My Profile Picture"
                   fill
                   style={{
                     objectFit: 'cover',
                     objectPosition: '60% 0%',
                     transform: 'scale(1.1)',
                   }}
                   priority
                 />
               </div>
               
               {/* Content */}
               <h1 className="text-5xl font-bold mb-6 text-gray-900">About Me</h1>
               <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                 I'm a passionate software engineer with over 5 years of experience building 
                 accessible, scalable web applications. I specialize in modern JavaScript 
                 frameworks and love creating intuitive user experiences.
               </p>
               <p className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
                 When I'm not coding, you can find me exploring new technologies, contributing 
                 to open source projects, or sharing knowledge with the developer community. 
                 I believe in writing clean, maintainable code and staying up-to-date with 
                 industry best practices.
               </p>
               
               {/* Skills Section */}
               <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
                 <h2 className="text-2xl font-semibold text-gray-900 mb-6">Skills & Expertise</h2>
                 <div className="flex flex-wrap gap-3 justify-center">
                   {['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'PostgreSQL', 'AWS', 'Docker'].map((skill) => (
                     <span key={skill} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                       {skill}
                     </span>
                   ))}
                 </div>
               </div>
             </div>
           </section>
         );
    }
  };

  return (
    <div>
      {/* Layout Selector */}
        <div className="justify-start max-w-6xl px-4 py-4">
          <div className="flex flex-wrap gap-2 justify-start">
            {layouts.map((layout) => (
              <button
                key={layout.id}
                onClick={() => setSelectedLayout(layout.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedLayout === layout.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {layout.name}
              </button>
            ))}
          </div>
        </div>
      
      {/* Layout Content */}
      {renderLayout()}
    </div>
  );
}