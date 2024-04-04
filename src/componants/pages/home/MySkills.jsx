export default function MySkills() {
    return (
      <section className="skills--section" id="mySkills">
        <div className="portfolio--container">
       
          <h2 className="skills--section--heading">My Expertise</h2>
        </div>
        <div className="skills--section--container">
          
          <div className="skills--section--card">
            <div className="skills--section--img">
              <img src="./img/Skill-1.png" alt="Tag" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">wordPress Developer</h3>
              <p className="skills--section--description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspenmdisse varius eim in eros elementum tristique</p>
            </div>
          </div>

          <div className="skills--section--card">
            <div className="skills--section--img">
              <img src="./img/Skill-2.png" alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">UI & UX Design</h3>
              <p className="skills--section--description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspenmdisse varius eim in eros elementum tristique</p>
            </div>
          </div>
    
          <div className="skills--section--card">
            <div className="skills--section--img">
              <img src="./img/Skill-3.png" alt="Feather Pen" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">Full Stack Developer</h3>
              <p className="skills--section--description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Suspenmdisse varius eim in eros elementum tristique
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }