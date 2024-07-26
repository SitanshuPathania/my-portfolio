import "../css/MyWork.css";

export default function MyWork({ title, description, img ,url}) {
  return (
    <div>
      <div className="MyWork">
        <div className="flex items-center mt-20 work-resp-flex-wrap">
          <div className="w-1/2 resp-w-full">
            <h3 className="lg:text-3xl md:text-2xl text-lg  text-center">
              <i class="fa-solid fa-circle"></i> {title}
            </h3>
          </div>
          <div className="w-1/2 resp-w-full">
            <p className="text-lg work-resp-mx-width">{description}</p>
            <div className="mt-5">
              <a href={url} target="_blank" className="text-green-600 text-lg">
                View Project{" "}
                <i class="fa-solid fa-arrow-right text-green-600"></i>
              </a>
            </div>
          </div>
        </div>
        <div>
          <img src={img} className="mt-10 resp-mt"></img>
        </div>
        <hr className="mt-10" />
        
      </div>
    </div>
  );
}
