'use client'

import Link from 'next/link'
import { notFound } from 'next/navigation'
import { use } from 'react'

// Blog post metadata with embedded HTML content
const blogPosts = {
  'data-federation': {
    title: "Data Federation: Unifying Disparate Data Sources",
    excerpt: "An exploration of data federation architecture, its benefits, challenges, and real-world applications in modern data systems.",
    author: "Jack Hasselbring",
    date: "January 2025",
    readTime: "8 min read",
    category: "Data Engineering",
    tags: ["Data Federation", "Data Architecture", "Distributed Systems"],
    content: `
      <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Introduction</h2>
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      Modern Enterprises generate and maintain massive amounts of data distributed across many systems. A well-functioning organization requires these systems to exchange and coalesce information to derive business insights. Studies have reported the global market will be larger than 150B USD in 2025 (<a href="https://www.thebusinessresearchcompany.com/report/enterprise-storage-global-market-report" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">source</a>), and another study found that IT teams report spending over 30% of their budget on data storage, backup, and recovery (<a href="https://www.komprise.com/glossary_terms/data-storage-costs/" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">source</a>). This need will only grow as data-hungry deep neural networks play an increasing role in business. Unnecessarily copying data at this scale can result in massive costs and lead to competing sources of truth, which can paralyze business insights.
      </p>

      <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Lift and Shift</h2>
      <div class="my-8">
        <div class="flex justify-center items-start">
          <div class="text-center">
            <img 
              src="/blog-posts/data_federation/lift_and_shift.svg" 
              alt="Lift and Shift illustration"
              class="w-full max-w-[600px] mx-auto"
            />
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
              Figure 1: Lift and Shift
            </p>
          </div>
        </div>
      </div>
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      In the past, a common solution was to move all the data to a single location, sometimes referred to as "Lift and Shift". The advantage is the data is now located in a single space for business analysts to immediately work with. The drawback is this process can be slow, duplicate data, and continuously use compute resources to move data from one location to another, all of which drive up costs. The central domain may also experience some lag in data freshness, as information needs to be copied or streamed in periodically.
      </p>

      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      A secondary pitfall of moving everything to a central data lake is Vendor Lock-In: an enterprise becomes so dependent on a single platform that it presents a major security, financial, or technical challenge to move to another solution.
      </p>

      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      All these aspects have driven interest in Federated Data Architectures, which allows a system to interact with data where it exists without migrating it to a new location.
      </p>

      <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">What is a Federated Data Architecture?</h2>
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      Data Federation provides a unified view of many data sources in a single location without the step of moving any data. This eliminates data duplication and expensive data transfer pipelines. A federation engine can connect to multiple systems in an enterprise and query multiple data sources in real time, resulting in a seamless experience where users can access all relevant information without switching between systems.
      </p>

      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      This style of architecture reduces the need for costly data copies between different systems. Data federation is even more important in today's world of multiple competing cloud platforms where data is spread out (<a href="https://bix-tech.com/data-federation-explained-query-anywhere-cut-costs-and-deliver-real-time-insights/" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">source</a>).
      </p>

      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      Additionally, properly implemented data federation can help to avoid vendor lock-in. Since it allows a company to query, govern, and manage data without relocating or reformatting it, enterprises don't have to spend resources migrating data before they're consumed by new analytical tools. A well-designed federated architecture can sit above any individual vendor. If you switch vendors, the query interface and security remain the same. Figure 3 shows how a company could swap a vendor's application out without having to move any data.
      </p>

      <div class="my-8">
        <div class="flex justify-center items-start">
          <div class="text-center">
            <img 
              src="/blog-posts/data_federation/vendor_lock_in.svg" 
              alt="Vendor Lock-In illustration"
              class="w-full max-w-[600px] mx-auto"
            />
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
              Figure 2: Vendor Lock-In
            </p>
          </div>
        </div>
      </div>

      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      A potential case where a company wants to switch their CRM vendor for some reason. The federated data architecture above allows them to do so without migrating any data. This makes the switch between vendors simpler, and eliminates all the costs and risks with large scale data migration.
      </p>

      <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Virtual Tables</h2>
      <div class="my-8">
        <div class="flex justify-center items-start">
          <div class="text-center">
            <img 
              src="/blog-posts/data_federation/virtual_table.svg" 
              alt="Virtual Table illustration"
              class="w-full max-w-[600px] mx-auto"
            />
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
              Figure 3: Virtual Table
            </p>
          </div>
        </div>
      </div>
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      A key innovation enabling this architecture is the Virtual Table. A Virtual Table is a logical representation of data that behaves like a table, but doesn't store any data. The data is stored in another source that the virtual table accesses through a logical view. It handles accessing the true data source, translating your query in a language the source can understand, and displaying the result back to the user. You might think of it as projecting data onto a screen as seen in figure 2. The key takeaway is that a virtual table doesn't store data, but serves as an interface between backing systems and the user.
      </p>

      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      A single query engine aggregates data from one or many data sources, then projects that information to the user without moving any of the stored data. The user doesn't know any difference.
      </p>

      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      When you run a query, the federation engine builds a logical plan on how to fetch the data from different sources (such as Snowflake, Postgres, or other APIs). A key point to note is that the engine is highly flexible on the systems it's able to import from. The engine is capable of querying the various data sources, allowing expensive computation to be performed where it's most efficient. The compiled data is returned to the user in the virtual table.
      </p>

      <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Iceberg Tables</h2>
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      Iceberg is a table format specification created by Netflix and open-sourced to the Apache Foundation in 2018. It gained popularity and is now a popular format used by enterprise software such as Snowflake, AWS, and Foundry.
      </p>

      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      This table format introduced several technical innovations, but for simplicity, it could be thought of like a standardized wall outlet. Similar to the outlet, by conforming to a single design, a table opens itself up to be easily consumed by many applications (<a href="https://iceberg.apache.org/" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">source</a>).
      </p>

      <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Metadata Catalog</h2>
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      How does the federation engine know what's available and where to look? A Metadata Catalog tells the query engine what data exists, where it lives, and how to interpret it. It does not store any of the actual data. It's like a shopping list the data federation has access to and can pull from. Real world examples include Unity Catalog (Databricks), AWS Glue Data Catalog, and Hive Metastore (Hadoop) (<a href="https://aws.amazon.com/what-is/data-catalog/" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">source</a>).
      </p>

      <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Real World Implementations of Data Federation</h2>
      
      <h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-6">Salesforce</h3>
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      In the link below, Salesforce refers to zero-copy data federation, meaning you can seamlessly access all data without moving it. In <a href="https://www.salesforce.com/blog/unlock-trapped-data-in-your-data-lakes-introducing-zero-copy-file-federation-in-data-cloud/" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">this article</a>, Salesforce highlights the importance of "data fluidity" by calling out the seamless movement of data between multiple data sources. Their concept of "File Federation" enables data specialists to modify external tables within Salesforce without creating redundant copies. In the link below, they make an external table available to a data specialist, who can modify it from the Salesforce platform without needing to save any extra data outside of the source.
      </p>

      <h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-6">Snowflake</h3>
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      Snowflake has a capability called "External tables". Instead of storing the data directly, Snowflake queries that table and provides it to the user as if it were available there. A user of this feature will incur no Snowflake storage costs. Snowflake also supports iceberg tables, which reach out to external storage locations like Amazon S3, Google Cloud Storage, or Azure Storage. A limitation here is that external tables are read-only (<a href="https://docs.snowflake.com/en/user-guide/tables-external-intro" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">source</a>, <a href="https://docs.snowflake.com/en/user-guide/tables-iceberg" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">Iceberg source</a>).
      </p>

      <h3 class="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3 mt-6">Palantir</h3>
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      Palantir's concept of this architecture is referred to as the "Multi Modal Data Plane" (<a href="https://www.palantir.com/interoperability/" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">source</a>). This creates a data layer that spans any storage and compute environment. The most important part: data remains in existing systems while analytics, models, or any other business intelligence tools run where they're suited best. An analyst may interact with a single virtual data layer, unaware that the data is actually coming from multiple systems.
      </p>

      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      Additionally, Palantir has its implementation of <a href="https://www.palantir.com/docs/foundry/data-integration/virtual-tables" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300" target="_blank" rel="noopener noreferrer">virtual tables</a>, where users can query data in supported platforms without first having to store that in the Foundry. Repeated in this pattern, the configuration and controls of the source system are removed from the users, and they only need to work with the Foundry platform. Palantir Foundry also supports tables as outputs, which means transforms performed in Foundry can be written back to their external service.
      </p>

      <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Conclusion</h2>
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      As enterprises scale, the amount of data scattered across systems continues to grow. Copying or moving this data around is expensive, slow, and introduces lag between when data is generated and when it's available for analysis. Federated Data Architectures solve this by letting teams query and work with data where it already lives, without duplicating it.
      </p>

      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      Technologies like Virtual Tables, Iceberg Tables, and centralized metadata catalogs make this possible. They allow queries to reach into different systems, combine results, and return them as if they came from a single source. This approach reduces infrastructure costs, simplifies data governance, and helps avoid vendor lock-in.
      </p>

      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      In practice, platforms like Palantir, Snowflake, and Salesforce have already built these capabilities into their ecosystems, showing how zero-copy federation can make enterprise data more fluid and accessible.
      </p>

      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      Federated architectures shift the focus from moving data to connecting it, which helps organizations get value from their information faster, with less overhead and greater flexibility as they evolve.
      </p>
    `
  },
  'understanding-cnns': {
    title: "Convolutional Neural Networks",
    excerpt: "A simple introduction to CNNs, exploring their architecture, applications, and implementation details.",
    author: "Jack Hasselbring",
    date: "August 12, 2025",
    readTime: "5 min read",
    category: "Deep Learning",
    tags: ["Deep Learning", "Neural Networks", "CNN"],
    content: `
      <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Introduction</h2>
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      Convolutional Neural Networks (CNNs) are a core component of modern day AI advancements, and excel in areas of spatial recognition, speech, or audio signals, 
      where the model needs to understand the importance of a feature in the context of the other features around it. 
      On a low level, think about how the color at a single point in an image is closely related to the points directly around it. 
      On a higher level, think about how the meaning of a word can be enriched by the words around it in the same sentence, or 
      how a person's face can be identified by all the features; eyes, nose, mouth, etc, in relation to each other. Convolutional Neural Networks 
      excel at identifying how smaller components near each other come together to form a more complex pattern.
      </p>

      <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">What are Neural Networks?</h2>
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">Neural Networks are what power modern day AI, and are built with many computational layers on top of each other that 
      cascade information. For reference, modern day large language models have 100 or more layers (<a href="https://oecs.mit.edu/pub/zp5n8ivs/release/1" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">source</a>). 
      Popular open-source CNN models use 5 convolutional layers to derive insights (<a href="https://developer.nvidia.com/blog/deep-learning-self-driving-cars" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">source</a>). 
      In a CNN model, the early layers start by recognizing small features, like colors or edges, then gain in complexity to eventually make up something as complicated as a car, 
      disease, or human face. To understand the basics of CNNs, let's look at how a single part of a single layer works.</p>
      
      <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">CNN Layer</h2>
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      The computer starts with a normal grid-like input (<strong>Matrix</strong>) made up of numbers, which could represent the
      individual pixels of an image. Look at figure 1a for reference. The CNN intakes small sections of the image at a time, 
      like if you were to take a magnifying glass and slide it across the image. A snapshot view in this example is shown in figure 1b. 
      </p>
      
      <div class="my-8">
        <div class="flex justify-center items-start gap-8">
          <div class="text-center">
            <img 
              src="/blog-posts/cnn/image.svg" 
              alt="Input matrix for convolution operation"
              class="w-full max-w-[200px] mx-auto"
            />
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
              1a. Input Image
            </p>
          </div>
          <div class="text-center -mt-2">
            <img 
              src="/blog-posts/cnn/image_filter.svg" 
              alt="Input matrix for convolution operation"
              class="w-full max-w-[200px] mx-auto"
            />
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
              1b. Input Image with Receptive Field
            </p>
          </div>
        </div>
      </div>
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      Now that we have a specific section of the image, also refferred to as a <strong>Receptive Field</strong> in figure 1b, a <strong>Filter</strong> is then applied at that specific 
      section of the image and called a <strong>Kernel</strong>. The values of this filter are determined by the neural
      network and perfected through training. I've included a simple example in figure 2b to illustruate what a filter might contain. The <strong>Filter</strong> (or <strong>Kernel</strong>) 
      is then used to transform the receptive field by simply multipling the individual elements of the grids together.
      </p>
      <div class="my-8">
        <div class="flex justify-center items-start gap-8">
          <div class="text-center">
            <img 
              src="/blog-posts/cnn/receptive_field.svg" 
              alt="Convolution filter/kernel"
              class="w-full max-w-[200px] mx-auto"
            />
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
              2a. Receptive Field
            </p>
          </div>
          <div class="text-center mt-4">
            <img 
              src="/blog-posts/cnn/filter.svg" 
              alt="Convolution filter/kernel"
              class="w-full max-w-[200px] mx-auto"
            />
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
              2b. Filter/Kernel
            </p>
          </div>
        </div>
      </div>
      
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      Figure 2a shows the receptive field capture from figure 1b.By multipling each number in the receptive field by the corresponding number in the filter, we get the output matrix. 
      Think 1x1, 0x1, 1*1 ... 
      After all the numbers are multiplied in the two grids is summed to get a final output. The red box in the first image can be shifted three times to create a total
      of four outputs. We thus end up with grid of four outputs, each corresponding to a different part of the image.
      </p>
      <div class="my-8">
        <div class="flex justify-center items-start gap-8">
          <div class="text-center">
            <img 
              src="/blog-posts/cnn/output.svg" 
              alt="Convolution filter/kernel"
              class="w-full max-w-[200px] mx-auto"
            />
            <p class="text-sm text-gray-600 dark:text-gray-400 mt-2 italic">
              Filter/Kernel
            </p>
          </div>
        </div>
        <p class="text-sm text-gray-600 dark:text-gray-400 text-center mt-4 italic">
          Figure 3: Output Matrix
        </p>
      </div>
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
      This output matrix is very simple, being only four numbers, and doesn't tell us or the computer very much. By itself, a single output (<strong>neuron</strong>) 
      won’t get you very far. By drastically increasing the number of inputs, filters, and computations, the neural network can begin to deduce something meaningful.
      Tech companies building AI models are rushing to scale up hardware and compute. Add enough filters and a car just might be able to drive itself (drastric 
      oversimplification). A well-built CNN will be able to derive insights from these values.
      In a real AI system like those found in Modern Day self-driving cars and Medical diagnostic images, there would be tens of millions of these outputs stacked 
      horizontally to span the image or on top of each other to create something useful. AiDoc is a real-world example of a company that uses CNNs to assess medical X-ray 
      images and search for disease, or bone fractures (<a href="https://www.aidoc.com/learn/blog/how-ai-algorithms-work-on-x-rays/" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">source</a>).
      </p>
      <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Limitations</h2>
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">What are the requirements and limitations? Neural networks tend to lack interpretability. 
      As demonstrated above, it’s hard to express why a -4, (or a much large combination of numbers) might be relevant to predicting the task. 
      In line with standard Neural Networks, CNN’s are data-hungry, meaning they require millions of labels to derive meaningful insights from the inputs.
      And can take a lot of time to train and query.
      Waymo, the fast-growing self-driving car company, mentions CNN’s as a standard architecture, but their intense demand hurts their candidacy for
      being the prime architecture for self-driving cars.
      (<a href="https://waymo.com/blog/2020/05/vectornet" class="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300">source</a>). 
      </p>
      <h2 class="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">Conclusion</h2>
      <p class="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-8">CNNs are made up of many simple components, that when combined, can begin to understand complex patterns
      within an image or other dataset that's spatially organized. Many of these computations need to be repeated, tuned, and carefully monitored during 
      the training phase. This intense demand for compute is what's driving AIchip companies valuations' to soar and a the rush 
      of tech companies to scale up AI infrastructure.
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
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <Link 
            href="/blog" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium mb-4"
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
            <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-medium">
              {post.category}
            </span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">{post.readTime}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 dark:text-gray-100 mb-6 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 dark:text-gray-300 mb-8 leading-relaxed">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100 dark:text-gray-100">{post.author}</p>
                <p className="text-gray-500 dark:text-gray-400 text-sm">{post.date}</p>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 dark:text-gray-300 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Article Content */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 md:p-12">
          <div 
            className="max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 dark:text-gray-300 mb-2">Written by {post.author}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Published on {post.date}</p>
            </div>
            
            <div className="flex gap-4">
              <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-gray-100 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
              </button>
              <button className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:text-gray-100 transition-colors">
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