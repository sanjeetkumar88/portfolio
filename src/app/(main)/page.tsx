import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import React from "react";
import Image from "next/image";
import Head from "next/head";
import Button from "@/components/button/Button";
import TypingText from "@/components/typingtext/TypingText";

function Page() {
  return (
    <>
      <Head>
        <title>Welcome to My Digital Space | Sanjeet Kumar</title>
        <meta
          name="description"
          content="Explore Sanjeet Kumar's digital portfolio. Dive into projects, learn more about him, access the dashboard, or get in touch."
        />
        <meta
          name="keywords"
          content="portfolio, Sanjeet Kumar, web developer, contact, dashboard, about"
        />
        <meta name="author" content="Sanjeet Kumar" />

        {/* Open Graph / Facebook */}
        <meta
          property="og:title"
          content="Welcome to My Digital Space | Sanjeet Kumar"
        />
        <meta
          property="og:description"
          content="Explore Sanjeet Kumar's work, background, dashboard, and contact details."
        />
        <meta property="og:image" content="/sanjeet.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourdomain.com" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Welcome to My Digital Space | Sanjeet Kumar"
        />
        <meta
          name="twitter:description"
          content="Explore Sanjeet Kumar's work, background, dashboard, and contact details."
        />
        <meta name="twitter:image" content="/sanjeet.png" />
      </Head>

      <main className="flex flex-col md:flex-row items-center gap-[100px] px-6 py-12 max-w-screen-xl mx-auto">
        {/* Left Text Content */}
        <div className="flex-1 flex flex-col gap-[20px]">
          <h1 className="font-extrabold text-[48px] md:text-[72px] bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text text-transparent pb-0">
            Hi, I am
          </h1>
          <h2 className="font-bold text-[35px] md:text-[55px] bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text text-transparent">
            Sanjeet Kumar
          </h2>

          <h3 className="font-semibold text-[18px] md:text-[22px]">
            I am a <TypingText words={["Full Stack Developer"]} />
          </h3>

          <p className="text-lg md:text-xl text-gray-700">
            I am a MERN-stack developer with 1 Year of experience in building
            scalable web applications. Skilled in both front-end and back-end
            development, I specialize in the MERN stack and other modern
            technologies to create seamless user experiences and efficient
            solutions.
          </p>

          <Button url="/portfolio" text="See Our Works" />
        </div>

        {/* Right: Your Photo */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/Sanjeet.jpg" 
            alt="Sanjeet Kumar"
            width={400}
            height={400}
            className="rounded-full shadow-lg shadow-[#63e9a8] w-full max-w-[400px] h-auto transition-transform duration-700 transform -translate-y-[15px] hover:translate-y-0 hover:scale-105 z-10"
          />
        </div>
      </main>
    </>
  );
}

export default Page;
