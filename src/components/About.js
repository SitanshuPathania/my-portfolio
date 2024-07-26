import aboutImage from "../img/About-image.avif";
import "../css/About.css";
import aboutGif from "../img/About-gif.webp";

export default function About() {
  return (
    <div id="about">
      <div className="About flex justify-between items-center gap-20 resp-about-flex-wrap">
        <div className="w-1/3 resp-about-w-full">
          <img src={aboutGif} alt="about-image" className="rounded-3xl"></img>
        </div>
        <div className="w-2/3 resp-about-w-full">
          <h2 className="text-3xl md:text-4xl lg:text-5xl text-center underline">About Me</h2>
          <p className="text-center text-lg mt-10 m-auto">
            As a Computer Engineering student at Thapar Institute of Engineering
            & Technology, I’m passionate about web development and creating
            engaging, user-friendly web interfaces. My studies and hands-on
            experience have equipped me with strong skills in HTML, CSS,
            JavaScript, and React. I specialize in turning design concepts into
            responsive, interactive websites, ensuring cross-browser
            compatibility, and optimizing performance. I am dedicated to staying
            updated with the latest technologies and design trends. My goal is
            to build high-performance, accessible web solutions that exceed user
            expectations. I’m excited about new opportunities and
            collaborations. Feel free to get in touch if you’d like to discuss a
            project or connect!
          </p>
        </div>
      </div>
    </div>
  );
}
