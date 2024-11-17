import Piet from "../assets/piet-profile.jpeg";
import Nigel from "../assets/Nigel-profile-img.png";
import GithubLogo from "../assets/github-mark.png";
import Linkedin from "../assets/linkedin.png";
import "./AboutPage.css";

function AboutPage() {
  return (
    <>
      <div className="about-top">
        <h1>About Us</h1>
        <p>
          BookQuest is created out of our passion for reading and the absence of
          a good book-storing application. BookQuest is our personal library,
          designed to help us organize the books we’ve read, and to track those
          we want to read. Its a tool build to grow your reading space together
          with your reading journey.
        </p>
      </div>
      <div className="profiles">
        <div className="profile1">
          <h2>Nigel Ferres</h2>
          <img width={100} src={Nigel} alt="Image-Nigel" />
          <p>
            With a background in History and a Masters in Digital Humanities, I
            bring the past into the future through technology. My background
            includes a deep dive into 3D animation and interactive design, and
            now, as a future web developer at Ironhack, I combine creativity
            with coding to shape the digital world.
          </p>
          <div className="social-links">
            <a href="https://github.com/NigelFerrefe">
              <img
                className="social-links"
                width={30}
                src={GithubLogo}
                alt="github-logo"
              />
            </a>
            <a href="https://www.linkedin.com/in/nigel-ferreres-f%C3%A9lix/">
              <img
                className="social-links"
                width={30}
                src={Linkedin}
                alt="Image-Piet"
              />
            </a>
          </div>
        </div>
        <div className="profile2">
          <h2>Piet-Hein Schouten</h2>
          <img className="image-piet" width={100} src={Piet} alt="Linkedin" />
          <p>
            Hi! I’m Piet-Hein, a web developer with a strong foundation in
            entrepreneurship and a passion for building engaging, user-friendly
            digital experiences. I’m passionate about combining my technical
            skills with a strategic business mindset, always aiming to bridge
            the gap between innovative tech and practical, user-centered design.
          </p>
          <div className="social-links">
            <a href="https://github.com/phsworks?tab=repositories">
              <img width={30} src={GithubLogo} alt="github-logo" />
            </a>
            <a href="https://www.linkedin.com/in/piet-hein-schouten-4a2b451bb/">
              <img width={30} src={Linkedin} alt="Linkedin" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
