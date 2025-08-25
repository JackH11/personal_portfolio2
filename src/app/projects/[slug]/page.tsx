'use client'

import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function ProjectDetail() {
  const params = useParams()
  const slug = params.slug

  // This would typically fetch project data based on the slug
  // For now, I'll create a sample project structure
  const project = {
    title: "Collision Avoidance RL Agent",
    description: "A collision avoidance RL agent that uses a DQN algorithm to navigate a 2D environment.",
    longDescription: `
      
    `,
    technologies: ["Python", "PyTorch", "Gymnasium", "TensorBoard", "StableBaselines3"],
    github: "https://github.com/JackH11/collision_avoidance",
    live: "",
    image: "",
    year: "2025",
    challenges: [
      "Observation Space",
      "Is a wall just a non-moving obstacle?",
      "Reward Shaping",
      "On Policy vs Off Policy training",
    ],
    results: [
      "Successfully learned collision avoidance in 2D environments",
      "Achieved 70% success rate in obstacle navigation with 10 obstacles",
    ]
  }

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back to Projects Link */}
        <div className="mb-8">
          <Link 
            href="/projects" 
            className="inline-flex items-center text-orange-600 hover:text-orange-800 font-medium"
          >
            ← Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border-l-4 border-orange-500">
          <div className="flex justify-between items-start mb-6">
            <h1 className="text-4xl font-bold text-gray-900">{project.title}</h1>
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-lg font-medium">
              {project.year}
            </span>
          </div>
          
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span 
                key={index}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex gap-4">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              View on GitHub
            </a>
            
            {project.live && (
              <a 
                href={project.live}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Project Details */}
        <div className="space-y-8">
          {/* Project Demo Video with Tabs */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Training Progress Demo</h2>
            
            {/* Tab Description */}
            <p className="text-gray-600 text-center mb-4 italic">
              Watch the agent's learning progress from no training to fully trained
            </p>

            {/* Legend */}
            <div className="flex items-center justify-center gap-6 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <span className="text-gray-600">Agent</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-400"></div>
                <span className="text-gray-600">Obstacle</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-gray-600">Goal</span>
              </div>
            </div>

            {/* Videos Side by Side */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">

            <div className="text-center">
                <video
                  src="/no_training.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  width="320"
                  height="240"
                  className="rounded-lg w-full"
                >
                  Your browser does not support the video tag.
                </video>
                <p className="text-sm text-gray-600 mt-2">Randomly moving</p>
            </div>

             
            <div className="text-center">
                <video
                  src="/during_training.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  width="320"
                  height="240"
                  className="rounded-lg w-full"
                >
                  Your browser does not support the video tag.
                </video>
                <p className="text-sm text-gray-600 mt-2">Learning to navigate</p>
              </div>
              
              
              <div className="text-center">
                <video
                  src="/fully_trained.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  width="320"
                  height="240"
                  className="rounded-lg w-full"
                >
                  Your browser does not support the video tag.
                </video>
                <p className="text-sm text-gray-600 mt-2">Optimal behavior</p>
              </div>
            </div>
          </div>

          {/* Long Description */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Project Overview</h2>
            <div className="prose prose-lg text-gray-600 leading-relaxed">
              The goal of this project was to develop a reinforcement learning agent that would learn how to navigate a 2D environment
              and reach a goal. The goal, the agent, and the obstacles could start at any position in the environment.

              To achieve this, I used StableBaselines3 for the reinfocement learning agent and OpenAIs gymnasium to generate
              and train the agent. I tried used both DQN and PPO models to build the agent. The number of obstacles was variable,
              but for most of training, I used 10 obstacles to give the agent plenty of opportunity to learn while moving around
              them.
            </div>
          </div>

          {/* Challenges */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Observation Space</h2>
            <ul className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Observation Space Approaches</h3>
              <p>
                One of the challenges of this project was the observation space. I thought of two possibe obsercation spaces:
                1. Develop a grid-like sample of of the environment around the agent. Each grid component would get a
                encoded value indicating whether the location was a wall, goal, or obstacle. The grid component would also
                recieve horizontal and vertical velocity information.
                2. Create rays around the agent that indicate the distance to the nearest wall or obstacle. Also include
                normal and tangential velocity information of whatever the ray is hitting.

                Option 1 provides more information to the agent and doesn't limit it's vision to what's immediately around it, 
                since the agent's "vision" woudn't be blocked by the obstacles it hit. Option 2 for included less information
              </p>

              {/* Observation Space Images */}
              <div className="mt-6">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <h4 className="text-md font-medium text-gray-800 mb-2">Grid</h4>
                    <img 
                      src="/projects/collision_avoidance/dots.png" 
                      alt="Grid-based observation space approach"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600 mt-2">Grid sampling with encoded values for walls, goals, and obstacles</p>
                  </div>
                  <div className="text-center">
                    <h4 className="text-md font-medium text-gray-800 mb-2">Rays</h4>
                    <img 
                      src="/projects/collision_avoidance/rays.png" 
                      alt="Ray-based observation space approach"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                    <p className="text-sm text-gray-600 mt-2">Ray casting with distance and velocity information</p>
                  </div>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">Reward Shaping</h3>
              <p className="mb-4">
                I had to take careful consideration when shaping the rewards. Natually, I wanted to give the agent a large
                reward when the goal was reached and a large penalty when the agent hit an obstacle. I found I had to carefully
                balance the reward and penalty to encourage the agent move quickly towards the goal, but also take the time to avoid
                obstacles if needed. At a reward of 1000 and collision penalty of -150, I found the agent was not conservative enough
                and was willing to risk a collision to reach the goal. In a real life scenario like a driverless car, that's no acceptable.
                I increased the penalty to -500 which yieled and agent that was less willing to risk collision.
              </p>

              <p className="mb-4">
                With the above settings, the agent only recieves a reward at the end of the episode. This is tricky for RL algorithms, since
                for most of the episode the agent recieves 0 feedback. It has little guidance about what's good or bad until it reaches the end.
                To address this, I implemented a very small reward for moving towards the goal and small penalty for moving away. This gives the
                agent more signal to learn from. If it's closer to the goal that's generally better!
              </p>

              <p className="mb-6">
                Lastly, I included a small time penalty to encourage the agent to move fast.
              </p>

              <h3 className="text-lg font-semibold text-gray-900 mb-4">On-Policy vs Off-Policy</h3>
              <p className="mb-4">
                I tried two reinforcement learning algorithms: DQN and PPO. A core differene is DQN is
                Off-policy while PPO is on-policy. Off-policy models can learn from any experiences collected at any point in time. 
                On-policy models only learn from experiences that are collected with the current policy.
              </p>

              <p className="mb-4">
                Imagine I was learning to football
                and had years of training tapes of my plays. Should I study and learn from only my most recent games? Or should I continue to
                learn from all of my games good or bad over the years. PPO might study from only the most recent, while DQN would study from all of them.
              </p>

              <p className="mb-4">
                This makes PPO very sample inefficient, since it throws away a lot of the old data it collected. The benefit of PPO is that the learning
                is generally more stable since it's learning from it's most recent experiences, which is most likely the best solution.
              </p>

              <p className="mb-4">
                I found the PPO model took significantly longer to train than the DQN model, but exhibited stable growth and didn't require fine tuning. 
                The DQN model requires exploration rate and learning rate schedule to fine tune what they learn and avoid getting stuck in local optima. 
              </p>
            </ul>
          </div>

          {/* Results */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Results & Impact</h2>
            <ul className="space-y-2">
              <li>Success rate of <strong>66%</strong> in the final model</li>
              <li>Reduced average timesteps to completion from <strong>250</strong> to <strong>80</strong></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 