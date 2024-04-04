import React from "react";

export default function MyPortfolio() {
  const portfolioData = [
    {
      id: "1",
      src: "./img/Fitness App.png",
      title: "Fitness Mobile-App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",
      link: "View In Github",
    },
    {
      id: "2",
      src: "./img/bank ms.png",
      title: "Bank Management System",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",
      link: "View In Github",
    },
    {
      id: "3",
      src: "./img/web.png",
      title: "To-Do List Application",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspenmdisse varius eim in eros elementum tristique",
      link: "View In Github",
    },
  ];

  return (
    <section className="portfolio--section" id="MyPortfolio">
      <div className="portfolio--container-box">
        <div className="portfolio--container">
          
          <h2 className="section--heading"> Recent Projects</h2>
        </div>
        
      </div>
      <div className="portfolio--section--container">
        {portfolioData.map((item) => (
          <div key={item.id} className="portfolio--section--card">
            <div className="portfolio--section--img">
              <img src={item.src} alt="Placeholder" />
            </div>
            <div className="portfolio--section--card--content">
              <div>
                <h3 className="portfolio--section--title">{item.title}</h3>
                <p className="text-md">{item.description}</p>
              </div>
              <p className="text-sm portfolio--link">
                {item.link}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 20 19"
                  fill="none"
                >
                  {/* SVG path code */}
                </svg>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}