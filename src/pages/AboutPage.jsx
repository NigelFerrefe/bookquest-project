import Piet from "../assets/piet-profile.jpeg"
import Nigel from "../assets/Nigel-profile-img.png"

function AboutPage() {
  return (
    <>
      <div className="about-top">
        <h1>About us</h1>
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
          <img width={100} src={Piet} alt="Image-Piet" />
          <p></p>
        </div>
        <div className="profile2">
          <h2>Piet-Hein Schouten</h2>
          <img width={100} src={Nigel} alt="Image-Nigel" />
          <p></p>
        </div>
      </div>
    </>
  );
}

export default AboutPage;
