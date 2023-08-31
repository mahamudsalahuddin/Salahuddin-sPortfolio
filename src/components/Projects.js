import Card1 from "./Card1"
import React from "react";


const Projects = () => {
  return (
    <div className="">
      <div className="flex font-poppins font-semibold text-[30px] justify-center py-6 bg-slate-100">Projects</div>
      <div className="m-11">
        <div className="flex flex-wrap gap-[40px] justify-center">
          {/* <Card1 className="no-underline" imageLocation="projectImages/chatt.png" name="Chatting App" description="This is my unique website for finding lost belonggings"/> */}
          
              <a href="https://main--stupendous-choux-697232.netlify.app/" target="_blank">
              <Card1 className="no-underline" imageLocation="projectImages/chatt.png" name="Chatting App" description="This is my unique website for finding lost belonggings"/>
              </a>
          <a href="https://github.com/mahamudsalahuddin/Lost-and-Found-Web-App"  target="_blank">
          <Card1 imageLocation="projectImages/lost&found.png" name="Lost and found" description="This is my unique website for finding lost belonggings"/>
          </a>
          <a href="https://bright-narwhal-aca432.netlify.app/" target="_blank">
          <Card1 imageLocation="projectImages/ecomm.png" name="Ecommerce" description="This is my unique website for finding lost belonggings"/>
          </a>
          <a href="https://mahamudsalahuddin.github.io/InnovateProject-5-Real-Estate-Landing-Page-/" target="_blank">
          <Card1 imageLocation="projectImages/reale estate.png" name="Real State App" description="This is my unique website for finding lost belonggings"/>
          </a>
          <a href="https://animated-sprite-b4f5e7.netlify.app/" target="_blank">
          <Card1 imageLocation="projectImages/petroil.png" name="Portgolio App" description="This is my unique website for finding lost belonggings"/>
          </a>
          <a href="https://mahamudsalahuddin.github.io/InnovateProject-6-AGENC/" target="_blank">
          <Card1 imageLocation="projectImages/agency.png" name="agency App" description="This is my unique website for finding lost belonggings"/>
          </a>
          <a href="https://mahamudsalahuddin.github.io/InnovateProject-4-PETROIL-/" target="_blank">
          <Card1 imageLocation="projectImages/portfolio.png" name="My Portfolio" description="This is my unique website for finding lost belonggings"/>
          </a>
          <a href="https://mahamudsalahuddin.github.io/InnovateProject-2/" target="_blank">
          <Card1 imageLocation="projectImages/static.png" name="Innovate" description="This is my unique website for finding lost belonggings"/>
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
