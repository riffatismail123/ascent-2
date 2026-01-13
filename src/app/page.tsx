import React from "react";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className="min-h-screen bg-sky-200 bg-cover bg-center flex items-center justify-center">
      <figure className="bg-white dark:bg-slate-900/80 backdrop-blur-lg rounded-2xl p-10 max-w-xl text-center shadow-xl">
        
        <div className="flex justify-center gap-6">
          <Image
            src="/aiv9.jpg"
            alt="Profile 1"
            width={180}
            height={180}
            className="rounded-full border-4 border-sky-500"
          />
          <Image
            src="/aiv10.jpg"
            alt="Profile 2"
            width={180}
            height={180}
            className="rounded-full border-4 border-sky-500"
          />
        </div>

        <div className="pt-6 space-y-4">
          <p className="text-lg font-medium text-slate-800 dark:text-slate-200">
            Building modern, scalable web experiences with Next.js and Tailwind CSS.
          </p>

          <Link
            href="/about"
            className="inline-block bg-sky-600 text-white px-6 py-2 rounded-full hover:bg-sky-700 transition"
          >
            About Me
          </Link>
        </div>
      </figure>
    </div>
  );
};

export default page;
