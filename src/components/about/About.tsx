import React from "react";
import Head from "next/head";
import Image from "next/image";

function About() {
  return (
    <>
      {/* SEO Meta Tags */}
      <Head>
        <title>About | Sanjeet Kumar - Full Stack Developer</title>
        <meta
          name="description"
          content="Learn more about Sanjeet Kumar, a passionate full stack developer crafting scalable and intuitive digital solutions using modern web technologies."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://yourdomain.com/about" />
      </Head>

      <main>
        {/* Hero Section */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="https://images.pexels.com/photos/3194521/pexels-photo-3194521.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="A modern workspace environment with coding tools"
            fill
            className="object-cover grayscale"
            priority
          />

          {/* Greenish translucent text box */}
          <div className="absolute bottom-6 left-6 bg-green-300 bg-opacity-70 text-white p-6 rounded-lg max-w-sm backdrop-blur-sm shadow-lg">
            <h1 className="text-2xl md:text-3xl font-bold">Full Stack Developer</h1>
            <h2 className="text-sm md:text-base mt-2">
              I turn ideas into impactful web solutions
            </h2>
          </div>
        </div>

        {/* About Content Section */}
        <section
          className="px-6 py-16 max-w-6xl mx-auto flex flex-col md:flex-row gap-12"
          aria-label="About Sanjeet Kumar"
        >
          {/* Who I Am */}
          <article className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">Who I Am</h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              I’m Sanjeet Kumar, a dedicated full-stack web developer with a strong passion for building meaningful digital experiences.
              My journey into tech started with a deep curiosity for how websites work and grew into a career of crafting scalable, efficient,
              and visually compelling applications. I enjoy learning new technologies, solving complex problems, and turning creative ideas into fully functional products.
              Beyond coding, I value clear communication, collaboration, and continuous learning, which allows me to grow with every project I take on.
            </p>
          </article>

          {/* What I Do */}
          <article className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">What I Do</h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              I specialize in building responsive and performance-optimized web applications using modern technologies such as React.js,
              Next.js, Node.js, MongoDB, and Tailwind CSS. I create everything from clean personal portfolios and business websites to complex dashboards
              and multi-tenant SaaS platforms. My focus lies in writing clean, maintainable code and designing intuitive interfaces that users enjoy.
              Whether it’s implementing API integrations, building reusable components, optimizing for SEO, or ensuring accessibility — I strive to deliver robust and user-centric solutions.
              I also keep performance, scalability, and security at the core of everything I build.
            </p>

            {/* <div className="mt-6">
              <Button url="/contact" text="Contact" />
            </div> */}
          </article>
        </section>
      </main>
    </>
  );
}

export default About;
