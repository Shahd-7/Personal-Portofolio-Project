export default function HeroSection() {
    return (
      <section id="heroSection" className="hero--section">
        <div className="hero--section--content--box">
          <div className="hero--section--content">
          <h1 className="hero--section--sub--title">Hey, I'm Shahd</h1>
            <h3 className="hero--section--title">
              <span className="hero--section-title--color">Digital Designer</span>{" "}
             
            </h3>
            <p className="hero--section-description">
            A digital designer is a type of graphic designer who is responsible for creating 
            digital assets for multimedia and graphic projects.
            </p>
          </div>
          <button className="btn btn-primary">Get In Touch</button>
        </div>
        <div className="hero--section--img">
          <img src="./img/hero-pic.jpg" alt="Hero Section" />
        </div>
      </section>
    );
  }
  