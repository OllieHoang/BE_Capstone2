import React, { useContext } from "react";
// import { FiFacebook, FiInstagram } from 'react-icons/fi';
import { BsFillSunFill } from "react-icons/bs";
import avatar from "../../assets/images/avtar.jpg";
import { Link } from "react-router-dom";
import { CreateLinkAccountContext } from "../../contexts/CreateLinkAccountContext";

const ViewLinkAccount = () => {
  const { cart, profileTitle, inputValueIntroduction, imageSrc } = useContext(
    CreateLinkAccountContext
  );

  return (
    <div className={`flex justify-center relative w-full`}>
      <div className="w-full h-full border-[10px] border-black rounded-[40px] bg-black"></div>
      <div className="absolute top-4  w-[90%] h-[90%] flex flex-col items-center text-white gap-y-4">
        <div className="flex items-center flex-col gap-y-2">
          {imageSrc ? (
            <img
              src={imageSrc}
              alt=""
              className="w-20 h-20 mt-10 rounded-full object-cover flex justify-center"
            />
          ) : (
            <img
              src={avatar}
              alt=""
              className="w-20 h-20 mt-10 rounded-full object-contain flex justify-center"
            />
          )}

          {/* text  */}
          <div className="flex flex-col items-center gap-y-1">
            <div className="text-sm  font-medium">
              {profileTitle ? profileTitle : "Your Name"}
            </div>
            <p className="text-xs word-wrap max-w-[180px] break-words">
              {inputValueIntroduction ? inputValueIntroduction : "Introduction"}
            </p>
          </div>
        </div>
        <div className="flex flex-col mt-2 gap-y-4 lg:gap-y-3 items-center w-full ">
          {cart.map((item, index) => (
            <Link
              key={index}
              to={`${item.urlInput}`}
              id={item.id}
              className={`bg-[#222222] rounded-xl w-[90%] h-[36px] flex items-center `}
              target="_blank"
            >
              <div className="h-full  flex items-center justify-center"></div>
              <div
                onClick={() => {
                  console.log(item.id);
                }}
                className=" text-xs flex items-center justify-center w-full"
              >
                {item.title ? item.title : "Title"}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex gap-x-1 text-xs font-medium items-center absolute bottom-10 text-white ">
        SCSS <BsFillSunFill />
      </div>
    </div>
  );
};

export default ViewLinkAccount;
