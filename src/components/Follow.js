import "../css/MyWork.css";
export default function Follow() {
  return (
    <div className="mt-10 mb-10" id="contact">
      <h2 className="text-3xl md:text-3xl lg:text-5xl text-center underline ">Contact</h2>
      <div className="MyWork flex justify-between mt-10">
        <a
          href="https://www.linkedin.com/in/sitanshu-pathania-112976230/"
          target="_blank"
          className="text-5xl hover:animate-pulse"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a
          href="https://github.com/SitanshuPathania"
          target="_blank"
          className="text-5xl hover:animate-pulse"
        >
          <i class="fa-brands fa-github"></i>
        </a>
        <a
          href="mailto:sitanshupathania5234@gmail.com"
          target="_blank"
          className="text-5xl hover:animate-pulse"
        >
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>
    </div>
  );
}
