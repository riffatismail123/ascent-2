import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <main className="min-h-screen bg-sky-200 dark:bg-slate-900 flex items-center justify-center px-6">
      <section className="max-w-4xl bg-white dark:bg-slate-800 rounded-2xl shadow-xl p-10 grid md:grid-cols-2 gap-10 items-center">
        
        {/* Image Section */}
        <div className="flex justify-center">
          <Image
            src="/riffat-4.jpeg"
            alt="About profile"
            width={300}
            height={300}
            className="rounded-2xl object-cover"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="space-y-5">
          <h1 className="text-3xl font-bold text-slate-800 dark:text-white">
            About Me
          </h1>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            I am a passionate developer focused on building modern web
            applications using <strong>Next.js</strong>, <strong>React</strong>,
            and <strong>Tailwind CSS</strong>. I enjoy creating clean UI,
            scalable architectures, and performance-optimized solutions.
          </p>

          <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
            My work spans AI automation, frontend engineering, and full-stack
            development. I believe in writing maintainable code and delivering
            meaningful digital experiences.
          </p>

          <div className="pt-4">
            <a
              href="/"
              className="inline-block bg-sky-600 text-white px-6 py-2 rounded-full hover:bg-sky-700 transition"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;
