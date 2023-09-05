import ResumeSkill from "../components/ResumeSkill";

export default function Resume() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Resume and Proficiencies
          </h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">
            An overview of my career trajectory and specialized skills.
          </p>
          <a
            href="https://docs.google.com/document/d/1njBsQviBda8d7nuGV6G6cKAavWCBWncp5onEI8ryUow/edit?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="inline-flex mt-3 items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            See My Resume
          </a>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <ResumeSkill
            title="Javascript"
            text="Adept in JavaScript with a strong foundation in ES6+ features, asynchronous programming, and front-end frameworks."
          />
          <ResumeSkill
            title="React"
            text="Proficient in React with experience in building and optimizing dynamic, user-centric web applications."
          />
          <ResumeSkill
            title="Mongoose"
            text="Proficient in Mongoose, adept at designing and managing MongoDB schemas with an emphasis on optimal performance and data integrity. Experienced in leveraging Mongoose's advanced querying, validation, and middleware capabilities to build scalable and maintainable applications."
          />
          <ResumeSkill
            title="MySql"
            text="Proficient in MySQL with a strong foundation in database design, query optimization, and performance tuning"
          />
          <ResumeSkill
            title="NodeJs"
            text="Skilled in Node.js with experience in developing scalable backend services, APIs, and microservices"
          />
          <ResumeSkill
            title="Express"
            text="Proficient in Express.js with a track record of building robust and efficient backend architectures. Skilled in designing API endpoints, integrating middleware for request processing, and ensuring seamless integration with databases and other services."
          />
        </div>
      </div>
    </section>
  );
}
