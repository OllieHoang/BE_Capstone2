import React, { useContext, useState } from "react";
// import icon

import avatar from "../../assets/images/avtar.jpg";
import { CreateLinkAccountContext } from "../../contexts/CreateLinkAccountContext";
import { useRef } from "react";

const THEMES = [
  { color: "text-white", background: "bg-black", box: "bg-[#222222]" },
  { color: "text-black", background: "bg-white", box: "bg-slate-200" },
  {
    color: "text-white",
    background: "bg-red-800",
    box: "",
    border: "border-white border",
  },
  {
    color: "text-black",
    background: "bg-[#ebeef1]",
    box: "bg-white",
  },
  {
    color: "text-black",
    background: "bg-[#e0faee]",
    box: "",
    border: "border-[#b3c9bf] border",
  },
];

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
    setColor,
    setBackground,
    setBorder,
    setBox,
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
      <div className=" py-2 flex justify-around relative  flex-col gap-y-4">
        <div className="text-xl font-medium">Display</div>
        <div className="w-full h-full mt-4  placeholder:">
          <div className="flex flex-col gap-y-4">
            <div className="flex gap-x-4 ">
              {imageSrc ? (
                // eslint-disable-next-line jsx-a11y/alt-text
                <img
                  src={imageSrc}
                  type="file"
                  name="file"
                  className="w-20 h-20 rounded-full object-contain"
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
                <label htmlFor="input-field" className="text-xs font-sans">
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
                <label htmlFor="Introduction" className="text-xs font-sans">
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
        <div className="flex xs:gap-4 s:gap-2 lg:gap-6 h-full lg:w-[600px] xs:w-[440px] s:w-[320px] flex-wrap s:grid grid-flow-row grid-cols-2 sm:grid-cols-3 lg:grid-cols-4">
          {THEMES.map((item) => {
            return (
              <div
                key={item.background}
                className={`w-[130px] h-[200px] border-black border rounded-md ${item.background} ${item.backgroundBlendMode} ${item.color}`}
                onClick={() => {
                  setBackground(item.background);
                  setColor(item.color);
                  setBox(item.box);
                  setBorder(item.border);
                }}
              >
                <div className="w-full h-full flex flex-col items-center justify-center gap-y-1">
                  <div
                    className={`w-[80%] h-6 rounded-lg ${item.box} ${item.color} ${item.border} flex items-center justify-center`}
                  ></div>
                  <div
                    className={`w-[80%] h-6 rounded-lg ${item.box} ${item.color} ${item.border} flex items-center justify-center`}
                  ></div>
                  <div
                    className={`w-[80%] h-6 rounded-lg ${item.box} ${item.color} ${item.border} flex items-center justify-center`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
        <div
          onClick={() => {}}
          className="bg-violet-700 text-white px-2 py-2 rounded-2xl flex justify-center cursor-pointer items-center font-medium gap-x-2 mt-8"
        >
          <button>Update</button>
        </div>
      </div>
    </section>
  );
};

export default Appearance;
