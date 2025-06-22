import React from 'react'
import Image from 'next/image'
import Head from 'next/head'

function Contact() {
  return (
    <>
      <Head>
        <title>Contact | Sanjeet Kumar</title>
        <meta name="description" content="Get in touch with Sanjeet Kumar for web development projects, collaborations, or inquiries." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/contact" />
      </Head>

      <main className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Let's Keep in Touch
        </h1>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Contact Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src="/contact.png"
              alt="Contact illustration"
              width={400}
              height={400}
              className="rounded-lg shadow-md transition-transform duration-700 transform -translate-y-[15px] hover:translate-y-0"
              priority
            />
          </div>

          {/* Contact Form */}
          <div className="w-full md:w-1/2">
            <form className="flex flex-col gap-4">
              <label className="flex flex-col">
                <span className="text-sm font-medium mb-1">Name</span>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium mb-1">Email</span>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
                  required
                />
              </label>

              <label className="flex flex-col">
                <span className="text-sm font-medium mb-1">Message</span>
                <textarea
                  placeholder="Write your message..."
                  rows={6}
                  className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
                  required
                ></textarea>
              </label>

              <button
                type="submit"
                className="mt-4 w-fit px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  )
}

export default Contact
