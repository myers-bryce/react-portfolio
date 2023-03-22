import AboutImage from "../../assets/about2.jpg";
import CV from "../../assets/Bryce-Myers-Resume-Update.pdf";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container" data-aos="fade-in">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Portfolio" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            I am a software engineer in Colorado who is excited to create. I
            look forward to growing my skills and making sites look great.
          </p>
          <p>
            Since high school I have had an interest in coding and programming.
            I am excited to have finally taken the steps required to pursue out
            this great career. I want to design amazing products, help people
            get an end result they want, and an experience they enjoy.
          </p>
          <a href={CV} download className="btn primary">
            Download Resume <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
