import React from "react";

const Banner = () => {
  return (
    <div>
      <div className="flex font-[poppins] h-[368px] lg:h-[600px] bg-slate-200 justify-around items-center">
        <div className="">
          <div className="px-4 font-bold text-4xl mb-6">Introduction</div>
          <div className="px-6 lg:w-[700px]">
            <span className="font-bold text-2xl">I'm Salahuddin Mahamud,</span> a seasoned software engineer. I craft digital solutions that merge
            code with creativity. Tech is my tool, and innovation is my fuel. My code is clean, my algorithms robust, and my curiosity endless. Let's
            dive into my portfolio and explore the possibilities.
            <br />
            Connect with me at{" "}
            <a href="mailto: mahamudmdsalahuddin@gmail.com" className="text-blue-600">
              Send Email.
            </a>
            Looking forward to connecting!
          </div>
        </div>
        <div className="hidden w-[413px] lg:block">
          <img src="BannerProfile.png" />
        </div>
      </div>
      <div className="lg:hidden flex items-center justify-center">
      <img src="BannerProfile2.png" />
      </div>
    </div>
  );
};

export default Banner;
