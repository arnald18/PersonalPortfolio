import AboutMePhoto from "../assets/AboutMe-Picture.jpg";

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-20 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-2 lg:px-6">
        <div className="font-light text-black-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            We didn&apos;t reinvent the wheel
          </h2>
          <p className="mb-4">
            Greetings, I'm Arnaldo. At the crossroads of creativity and
            functionality, you'll find my work as a front-end developer. While I
            appreciate the rich tapestry of web development's history (yes,
            including those '90s web pages), my focus has always been on
            contemporary, clean, and user-centered design. Throughout my career,
            I've made it a mission to craft seamless digital experiences. My
            proficiency in HTML, CSS, and JavaScript isn't just about coding;
            it's about delivering an intuitive user interface that operates
            smoothly across devices, from the compact screens of mobile phones
            to the expansive canvases of desktop displays.
          </p>
          <br />
          <p>
            Beyond the screen, I'm an advocate for continuous learning, staying
            updated with the latest web design methodologies and trends. It's
            this commitment that drives me to deliver products that aren't just
            visually appealing but also technically sound. If you value a blend
            of innovation, precision, and dedication, you're in the right place.
            I'm here to bring your digital visions to life. Let's navigate the
            future of web design together.
          </p>
        </div>
        <img
          className="h-1/2 mt-8 rounded-lg"
          src={AboutMePhoto}
          alt="A male standing upright with a black shirt and black pants posing for a picture"
        />
      </div>
    </section>
  );
}
