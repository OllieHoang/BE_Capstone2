import React, { useContext, useState } from "react";
// import icon

import avatar from "../../assets/images/avtar.jpg";
import { CreateLinkAccountContext } from "../../contexts/CreateLinkAccountContext";
import { useRef } from "react";

const Appearance = () => {
  const {
    profileTitle,
    handleProfileTitle,
    inputValueIntroduction,
    handleInputChange,
    maxInputLength,
    handleFileInputChange,
    imageSrc,
    removeFileInputChange,
  } = useContext(CreateLinkAccountContext);

  const [isFocus, setIsFocus] = useState(false);
  const [isFocus1, setIsFocus1] = useState(false);
  const handleInFocus = () => {
    setIsFocus(true);
  };
  const handleInFocus1 = () => {
    setIsFocus1(true);
  };
  const handleOutFocus = () => {
    setIsFocus(false);
    setIsFocus1(false);
  };

  //introduction

  //img
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <section>
      <div className=" py-2 flex justify-around relative pb-20 flex-col gap-y-4">
        <div className="text-xl font-medium">Profile</div>
        <div className="w-full h-full mt-4  placeholder:">
          <div className="flex flex-col gap-y-4">
            <div className="flex gap-x-4 ">
              {imageSrc ? (
                // eslint-disable-next-line jsx-a11y/alt-text
                <img
                  src={imageSrc}
                  type="file"
                  name="file"
                  className="w-20 h-20 rounded-full object-cover"
                />
              ) : (
                <img
                  alt=""
                  src={avatar}
                  type="file"
                  name="file"
                  className="w-20 h-20 rounded-full object-contain"
                />
              )}

              <div className="flex flex-col w-[70%] justify-center gap-y-1">
                <button
                  className="bg-[#8129d9] text-white font-medium rounded-3xl w-full py-2"
                  onClick={handleButtonClick}
                >
                  Pick an image
                </button>
                <input
                  type="file"
                  ref={inputRef}
                  style={{ display: "none" }}
                  onChange={handleFileInputChange}
                />
                {/* <div className="bg-[#8129d9] text-white font-medium rounded-3xl w-full py-2">
                                    <input type="file" onClick={handleFileInput} />
                                    <label htmlFor="">Pick an image</label>
                                </div> */}

                <button
                  className=" text-black border-2 font-medium rounded-3xl w-full py-2"
                  onClick={removeFileInputChange}
                >
                  Remove
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-y-4">
              <div
                className={`flex flex-col border-2  rounded-xl px-6 py-1 ${
                  isFocus ? "outline" : ""
                }`}
              >
                <label
                  htmlFor="input-field"
                  className="text-xs font-extralight"
                >
                  Profile Title
                </label>
                <input
                  type="text"
                  id="input-field"
                  defaultValue={profileTitle}
                  className="outline-none"
                  onChange={handleProfileTitle}
                  onFocus={handleInFocus}
                  onBlur={handleOutFocus}
                />
              </div>
              <div
                className={`flex flex-col border-2 relative  rounded-xl px-6 py-2 ${
                  isFocus1 ? "outline" : ""
                }`}
              >
                <label
                  htmlFor="Introduction"
                  className="text-xs font-extralight"
                >
                  Introduction
                </label>
                <textarea
                  maxLength={maxInputLength}
                  value={inputValueIntroduction}
                  type="text"
                  id="Introduction"
                  className="outline-none flex-wrap h"
                  onChange={handleInputChange}
                  onFocus={handleInFocus1}
                  onBlur={handleOutFocus}
                />
                <p className="absolute top-0 right-2 text-gray-400 text-sm">
                  {inputValueIntroduction.length}/{maxInputLength}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-xl font-medium mt-10">Themes</div>
        <div className="flex gap-4 h-full ">
          <div className="w-[130px] h-[200px] border-black border rounded-md bg-slate-400 text-white">
            <div className="w-full h-full flex flex-col items-center justify-center gap-y-1">
              <div className="w-[80%] h-6 rounded-lg bg-slate-300 text-black flex items-center justify-center"></div>
              <div className="w-[80%] h-6 rounded-lg bg-slate-300 text-black flex items-center justify-center"></div>
              <div className="w-[80%] h-6 rounded-lg bg-slate-300 text-black flex items-center justify-center"></div>
            </div>
          </div>
          <div className="w-[130px] h-[200px] border-black border rounded-md bg-slate-400 text-white">
            <div className="w-full h-full flex flex-col items-center justify-center gap-y-1">
              <div className="w-[80%] h-6 rounded-lg bg-slate-300 text-black flex items-center justify-center"></div>
              <div className="w-[80%] h-6 rounded-lg bg-slate-300 text-black flex items-center justify-center"></div>
              <div className="w-[80%] h-6 rounded-lg bg-slate-300 text-black flex items-center justify-center"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appearance;
