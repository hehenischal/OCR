import React from 'react'

const About = () => {
  return (
    <section className="flex justify-center flex-col items-center mt-20 mb-10 mr-7 ml-7 ">
      <h1 className=" font-bold text-[2rem] md:text-[2.8rem]  underline underline-offset-2 text-center">
        OCR (Optical Character Recognition){" "}
      </h1>
      <div className=" mt-4">
        <p className=" md:max-w-3xl max-w-sm">
          Optical Character Recognition (OCR) is the process of electronically
          extracting text from images or any documents like PDF and reusing it
          in a variety of ways such as full text searches. OCR is a field of
          research in pattern recognition, artificial intelligence and computer
          vision.
        </p>
      </div>
      <div className="mt-4 mb-3">
        <h2 className="text-[2rem] underline underline-offset-2">
          About the project:
        </h2>
        <p className=" md:max-w-3xl max-w-sm">
          This is a hobby project made using django as the framework, and
          next.js as the frontend. The project is hosted on a Vercel. The
          project is made to learn about OCR and how it works with API from OCR
          space. @saagarbhujel has done all the work on the next.js frontend.
          His code is on the OCR-front branch. the backend code is on the main
          branch(django templtes frontend is also there). I didnt originally
          intend to make API. When I was making the project, I thought it would
          be cool to make an API for the project(and also the frontend required
          it). So I made it. I have made the API using django rest framework.
          The API is hosted on vercel.
        </p>
      </div>
    </section>
  );
}

export default About