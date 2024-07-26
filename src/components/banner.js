import "../css/Banner.css";
import portfolioImage from "../img/portfolioImage.jpg";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

const skills = ["Computer Engineer", "Web Developer", "Front-end Developer"];

export default function Banner() {
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSkillIndex((prevIndex) => (prevIndex + 1) % skills.length);
    }, 2000); // Change skill every 2 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);
  return (
    <div class="mt-20">
      <div className="Banner flex items-center justify-between resp-flex-wrap">
        <div className="w-1/2 resp-w-full">
          <h2 className="text-3xl md:text-3xl lg:text-4xl">Hi, I'm</h2>
          <h1 className="lg:text-6xl md:text-4xl text-4xl">Sitanshu Pathania</h1>
          <h2 className="text-3xl md:text-3xl lg:text-4xl">{skills[currentSkillIndex]}</h2>
          <div className="w-3/5 flex justify-between banner-resp-flex-wrap">
            <div className="w-1/2 banner-resp-w-full">
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="bg-transparent"
              >
                <button className="mt-10 text-lg p-3 border-2 border-green-600 rounded-2xl hover:bg-green-600">
                  Contact Me
                </button>
              </Link>
            </div>
            <div className="w-1/2 banner-resp-w-full">
              <a
                href={`${process.env.PUBLIC_URL}/Sitanshu_Pathania_Resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="mt-10 text-lg p-3 border-2 border-red-600 rounded-2xl hover:bg-red-600">
                  View Resume
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="w-1/2 resp-w-full">
          <img src={portfolioImage} alt="my-image" className="rounded-full" />
        </div>
      </div>
    </div>
  );
}
