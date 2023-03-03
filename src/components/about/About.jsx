import "./about.css";
import College_pic from "../../img/LNCT-college.jpg";
import Me from "../../img/me2.jpg";


const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src={Me}
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I am a 3rd-year student pursuing Computer Science Engineering @ lncts, My passion for new tech brought me to the college of technology and science, where I am exploring new technologies and working on my problem-solving skills.
        </p>
        <p className="a-desc">
        🔹I'm very well familiar with java, c, c++, and currently learning python.<br></br>
        🔹Working on some projects which can solve real-life problems.<br></br>
        🔹Obsessed with artificial intelligence and machine learning.<br></br>
        🔹An aspiring web developer (Front-end + Back-end), very well familiar with HTML, CSS, JavaScript and proficiency in React Js and Currently learning React Native .<br></br>
        🔹2 star coder at CodeChef.
        </p><br></br>
        <p className = "aboutp">Education : </p>
        <div className="a-award">
          <img src={College_pic} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Lakshmi Narain College of Technology & Science</h4>
            <p className="a-award-desc">
            Bachelor of Technology in Computer Science Engineering </p><br></br><p>— CGPA : 8.37/10    (2020 - 2024)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
