import "./App.css";
import About from "./components/About";
import Banner from "./components/banner";
import MyWork from "./components/MyWork";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import genq_image from "./img/GenQ_Screenshot.png";
import ctg_image from "./img/ctg_screenshot.png";
import Follow from "./components/Follow";
import { Helmet } from 'react-helmet';

function App() {
  const genq_title = "GenQ";
  const genq_description =
    "A text to quiz generation website that enables users to create quizzes by automatically generating questions from a provided comprehension passage and answers.";
  const genq_url = "https://github.com/SitanshuPathania/GenQ";
  const ctg_title = "Chandigarh Travel Guide";
  const ctg_description =
    "An intuitive website that guides users through the vibrant city of Chandigarh, offering insights into its attractions, events, and activities.";
  const ctg_url = "https://shootpickleball.com/chandigarhtravelguide/";
  return (
    <div className="App pl-10 pr-10">
      <Helmet>
        <title>Portfolio</title>
      </Helmet>
      <div className="hero">
        <Navbar />
        <Banner />
      </div>
      <About />
      <Skills />
      <div>
        <h2
          className="text-3xl md:text-4xl lg:text-5xl text-center mt-32 underline"
          id="projects"
        >
          My Work
        </h2>
        <MyWork
          title={genq_title}
          description={genq_description}
          img={genq_image}
          url={genq_url}
        />
        <MyWork
          title={ctg_title}
          description={ctg_description}
          img={ctg_image}
          url={ctg_url}
        />
      </div>
      <Follow />
    </div>
  );
}

export default App;
