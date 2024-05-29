import React from "react";
import Layout from "../components/layout/Layout";

 
const About = () => {
  return (
   <Layout title={"About us - Ecommerce app"}>
       <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpg"
            alt="about"
            style={{ width: "90%" }}
          />
        </div>
        <div className="col-md-4">
        <h1 className="bg-dark p-2 text-white text-center">ABOUT US</h1>
          <p className="text-justify mt-2">
          This is Sai Kiran Manchala I have nearly 1.5 years of hands-on experience in crafting and shaping Web-based Applications and
User Interfaces, leveraging a robust toolkit including HTML5, CSS3, ES6, Bootstrap, JavaScript, JSON,
ReactJS, Redux. Proficiently handled React JS components, Forms, Events, Keys, Router, and mastered
Redux concepts. Employed Responsive Web Design methodologies, showcasing expertise in media queries,
Bootstrap, and Flexbox. Possess foundational knowledge of JavaScript server-side scripting with Node.js
and its framework, Express.js. Utilized JIRA for streamlined project tracking and task management.
Demonstrated prowess in Redux architecture and workflow management, ensuring optimal state maintenance.
Skilled in debugging and troubleshooting, with a deep understanding of DOM (Document Object Model)
functions. Known for effective problem-solving skills and adept time management. Thrives both
independently and within collaborative team settings, consistently meeting deadlines and delivering robust.
          </p>
        </div>
      </div>
   </Layout>
  );
};
 
export default About;