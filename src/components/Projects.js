import Card1 from "./Card1"
import React from "react";


const Projects = () => {
  return (
    <div className="">
      <div className="flex font-poppins font-semibold text-[30px] justify-center py-6 bg-slate-100">Projects</div>
      <div className="m-11">
        <div className="flex flex-wrap gap-[40px] justify-center">
          <Card1 imageLocation="logo1.png" name="Lost and found" description="This is my unique website for finding lost belonggings" />
          <Card1 imageLocation="logo1.png" name="Ecommerce" description="This is my unique website for finding lost belonggings" />
          <Card1 imageLocation="logo1.png" name="BDWorker" description="This is my unique website for finding lost belonggings" />
          <Card1 imageLocation="logo1.png" name="Chatting App" description="This is my unique website for finding lost belonggings" />
          <Card1 imageLocation="logo1.png" name="Real State App" description="This is my unique website for finding lost belonggings" />
          <Card1 imageLocation="logo1.png" name="Portgolio App" description="This is my unique website for finding lost belonggings" />
        </div>
      </div>
    </div>
  );
};

export default Projects;
