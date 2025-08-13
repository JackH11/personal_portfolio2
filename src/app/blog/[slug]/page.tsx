'use client'

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { use } from 'react'

// Blog post metadata with embedded HTML content
const blogPosts = {
  'understanding-cnns': {
    title: "Convolutional Neural Networks",
    excerpt: "A simple introduction to CNNs, exploring their architecture, applications, and implementation details.",
    author: "Jack Hasselbring",
    date: "August 12, 2025",
    readTime: "10 min read",
    category: "Deep Learning",
    tags: ["Deep Learning", "Neural Networks", "CNN"],
    content: `
      <h2 class="text-3xl font-bold text-gray-900 mb-4">Introduction</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-8">
      Convolutional Neural Networks (CNNs) are a core component of modern day AI advancements, and excel in areas of spatial recognition, speech, or audio signals, 
      where the model needs to understand the importance of a feature in the context of the other features around it. 
      Low-level, think about how the color at a single point in an image is closely related to the points directly around it. 
      High level, think about how the meaning of a word can be enriched by the words around it in the same sentence, or 
      how a person's face can be identified by all the features; eyes, nose, mouth, etc, in relation to each other. Convolutional Neural Networks 
      excel at identifying how smaller components near each other spatially come together to form a more complex pattern.
      </p>

      <h2 class="text-3xl font-bold text-gray-900 mb-4">What are Convolutional Neural Networks?</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-8">Neural Networks are built with many layers on top of each other. For reference, 
      modern day large language models have 100 or more layers (<a href="https://oecs.mit.edu/pub/zp5n8ivs/release/1" class="text-blue-600 hover:text-blue-800">source</a>). 
      Other common CNN models use 5 convolutional layers to derive insights (<a href="https://developer.nvidia.com/blog/deep-learning-self-driving-cars" class="text-blue-600 hover:text-blue-800">source</a>). 
      The early layers start by recognizing small features, like colors or edges, then gain in complexity to eventually make up something as complicated as a car, 
      disease, or human face. </p>
      
      <h2 class="text-3xl font-bold text-gray-900 mb-4">How Do they Work?</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-8">The computer starts with a normal image and made up of pixels, which can be represented 
      as individual numbers in a grid like in figure 1a. The CNN looks at small sections of the image at a time, 
      like taking a magnifying to the image. The numbers are outlined in figure 1b. 
      </p>
      
      <div class="my-8">
        <div class="flex justify-center items-start gap-8">
          <div class="text-center">
            <img 
              src="/blog-posts/cnn/image.svg" 
              alt="Input matrix for convolution operation"
              class="w-full max-w-[200px] mx-auto"
            />
            <p class="text-sm text-gray-600 mt-2 italic">
              1a. Input Image
            </p>
          </div>
          <div class="text-center -mt-2">
            <img 
              src="/blog-posts/cnn/image_filter.svg" 
              alt="Input matrix for convolution operation"
              class="w-full max-w-[200px] mx-auto"
            />
            <p class="text-sm text-gray-600 mt-2 italic">
              1b. Input Image with Receptive Field
            </p>
          </div>
        </div>
      </div>
      <p class="text-lg text-gray-700 leading-relaxed mb-8">
      Now that we have a specific section of the image, also refferred to as a <strong>Receptive Field</strong> in figure 1a, a <strong>Filter</strong> is then applied at that specific 
      section of the image and called a <strong>Kernel</strong>. The values of this filter is up to the neural
      network to determine, but I've included a simple example in figure 2b. The filter (or Kernel) is then used to transform the receptive field
      by simply multipling the individual elements of the grids together.
      </p>
      <div class="my-8">
        <div class="flex justify-center items-start gap-8">
          <div class="text-center">
            <img 
              src="/blog-posts/cnn/receptive_field.svg" 
              alt="Convolution filter/kernel"
              class="w-full max-w-[200px] mx-auto"
            />
            <p class="text-sm text-gray-600 mt-2 italic">
              2a. Receptive Field
            </p>
          </div>
          <div class="text-center mt-4">
            <img 
              src="/blog-posts/cnn/filter.svg" 
              alt="Convolution filter/kernel"
              class="w-full max-w-[200px] mx-auto"
            />
            <p class="text-sm text-gray-600 mt-2 italic">
              2b. Filter/Kernel
            </p>
          </div>
        </div>
      </div>
      
      <p class="text-lg text-gray-700 leading-relaxed mb-8">
      By multipling each number in the receptive field by the corresponding number in the filter, we get the output matrix. Think 1x1 + 0x1 + 1*1 ... 
      Each multiplication of the two grids is summed to get a final output. The red box in the first image can be shifted three times to create a total
      of four outputs. We thus end up with four outputs, each corresponding to a different part of the image.
      </p>
      <div class="my-8">
        <div class="flex justify-center items-start gap-8">
          <div class="text-center">
            <img 
              src="/blog-posts/cnn/output.svg" 
              alt="Convolution filter/kernel"
              class="w-full max-w-[200px] mx-auto"
            />
            <p class="text-sm text-gray-600 mt-2 italic">
              Filter/Kernel
            </p>
          </div>
        </div>
        <p class="text-sm text-gray-600 text-center mt-4 italic">
          Figure 3: Output Matrix
        </p>
      </div>
      <p class="text-lg text-gray-700 leading-relaxed mb-8">
      This output matrix is very simple, being only four numbers, and doesn't tell us or the computer very much. By itself, a single output (<strong>neuron</strong>) 
      won’t get you very far. By drastically increasing the number of inputs, filters, and computations, the neural network can begin to deduce something meaningful.
      Hence, the rush in tech companies to scale up hardware and compute. Add enough filters and a car just might be able to drive itself (of course this is drastric 
      oversimplification) A well-built CNN will be able to derive insights from these values.
      In a real AI system like those found in Modern Day self-driving cars and Medical diagnostic images, there would be tens of millions of these outputs stacked 
      horizontally to span the image or on top of each other to create something useful. AiDoc uses CNNs to assess medical X-ray images and search for disease, 
      or bone fractures (<a href="https://www.aidoc.com/learn/blog/how-ai-algorithms-work-on-x-rays/" class="text-blue-600 hover:text-blue-800">source</a>).
      </p>
      <h2 class="text-3xl font-bold text-gray-900 mb-4">Limitations</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-8">What are the requirements and limitations? Neural networks tend to lack interpretability. 
      As demonstrated above, it’s hard to express why a -4, (or a much large combination of numbers) might be relevant to predicting the task. 
      In line with standard Neural Networks, CNN’s are data-hungry, meaning they require millions of labels to derive meaningful insights from the inputs. 
      Waymo, the fast-growing self-driving car company, mentions CNN’s as a standard architecture, but that they require a lot of computation and time 
      (<a href="https://waymo.com/blog/2020/05/vectornet" class="text-blue-600 hover:text-blue-800">source</a>). 
      </p>
      <h2 class="text-3xl font-bold text-gray-900 mb-4">Conclusion</h2>
      <p class="text-lg text-gray-700 leading-relaxed mb-8">CNNs are made up of many simple components, that when combined, can begin to understand complex patterns
      within an image or other dataset that's spatially organized. To derive meaningful output, many of these computations need to be repeated and tuned, hence the
      rush in tech companies to scale up hardware and compute.
      </p>
    `
  }
}

export default function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = blogPosts[slug as keyof typeof blogPosts];

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-4"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>

      {/* Article */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Article Header */}
        <header className="mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <span className="text-gray-500 text-sm">{post.readTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div>
                <p className="font-medium text-gray-900">{post.author}</p>
                <p className="text-gray-500 text-sm">{post.date}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
          <div 
            className="max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 mb-2">Written by {post.author}</p>
              <p className="text-sm text-gray-500">Published on {post.date}</p>
            </div>
            
            <div className="flex gap-4">
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
              </button>
              <button className="text-gray-600 hover:text-gray-900 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </button>
            </div>
          </div>
        </footer>
      </article>

    </div>
  )
} 