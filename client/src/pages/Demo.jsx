import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";
// import avatar from '../assets/imgs/avtar.jpg';

const Demo = () => {
  return (
    // theme background de ngoai ni
    <div className="h-full bg-black s:h-screen ">
      <div className="w-full sm:h-full s:h-screen">
        {/* theme background de day nua */}
        <div className="flex flex-col bg-black w-full relative">
          {/* THEME Test de day  */}
          <div className=" top-4 flex flex-col  text-white gap-y-4 pb-20 h-full">
            <div className="flex items-center flex-col">
              {/* avatarIMG  */}
              <img
                // src={avatar}
                alt=""
                className="w-28 h-28 mt-10 rounded-full object-contain flex justify-center"
              />
              <div className="flex flex-col items-center gap-y-2">
                {/* Profiletitle  */}
                <div className="text-xl  font-medium">Võ Minh</div>
                {/* Introduction  */}
                <div className="text-xs">Liên hệ: 09633765405</div>
              </div>
            </div>
            <div className="flex flex-col mt-2 lg:gap-y-4 s:gap-y-4 items-center w-full h-full">
              {/* Link , url gan o day  */}
              <a
                href={`${"https://www.facebook.com/"}`}
                target="_blank"
                className="bg-[#222222] rounded-xl lg:w-[680px] lg:h-[56px] flex items-center s:items-center s:w-[230px] md:w-[400px]"
              >
                <div className="text-base flex items-center justify-center w-[50%] s:w-full pl-10 s:px-[68px] py-[8px]">
                  Facebbook
                </div>
              </a>
            </div>
          </div>
          <div className="flex  gap-x-1 font-medium items-center justify-center w-full h-12 text-lg text-white  bottom-0  py-2">
            SCSS <BsFillSunFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demo;
