import FormInput from "../components/FormInput";

export default function Contact() {
  return (
    <section className="bg-white dark:bg-gray-900 flex justify-self-center w-full">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Me
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          🚀 Let's Build Something Amazing Together! 🚀 Whether you have a
          groundbreaking idea or just want to chat about the latest web trends,
          I'm all ears. Reach out, and let's turn your digital vision into
          reality. Drop me a line, and I'll get back to you pronto!
        </p>
        <form action="#" className="space-y-8">
          <FormInput name="name" placeholder="Let me know how i can help you" />
          <FormInput name="email" placeholder="name@email" />
          <FormInput name="message" placeholder="Leave a comment" />

          <button
            type="submit"
            className="py-3 px-5 text-sm font-medium text-center bg-lime-300 text-white rounded-lg sm:w-fit focus:ring-4 focus:outline-none"
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}
