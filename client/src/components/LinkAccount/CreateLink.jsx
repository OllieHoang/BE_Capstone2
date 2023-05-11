import React, { useContext, useState } from "react";
import { RxCaretRight } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { IoAdd } from "react-icons/io5";
import imgtt from "../../assets/images/icontiktok.svg";
import imgtw from "../../assets/images/icontw.svg";
import imgpinter from "../../assets/images/iconpinterest.svg";
import { ModalContext } from "../../contexts/ModalContext";
import ContentLinkAccount from "./ContentLinkAccount";
import { CreateLinkAccountContext } from "../../contexts/CreateLinkAccountContext";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
const CreateLink = () => {
  const { isActive, setIsActive } = useContext(ModalContext);
  const { cart, setUrlInput, urlInput, handleAddToCart, handleOnDragEnd } =
    useContext(CreateLinkAccountContext);

  const [isLink, setIsLink] = useState(false);

  const handleUrlInputChange = (event) => {
    const value = event.target.value;
    setUrlInput(value);
    setIsLink(isValidUrl(value));
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  return (
    <div>
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="bg-red-500 text-white px-2 py-2 rounded-2xl flex justify-center cursor-pointer items-center font-medium gap-x-2"
      >
        <IoAdd className="text-xl font-medium" />
        <button>Add link</button>
      </div>
      <div className={`${isActive ? " hidden " : " block "}  `}>
        <div className="w-full h-[350px] z-20 shadow-lg px-8 py-2">
          <div className={`${isActive ? "hidden " : "block"} `}>
            <div className="flex justify-between pt-4">
              <div className="font-medium text-sm">Enter Url</div>
              <div
                onClick={() => {
                  setIsActive(!isActive);
                }}
                className="px-2 py-1 cursor-pointer flex justify-end mr-6"
              >
                <GrClose />
              </div>
            </div>
            <div className="bodyModal w-full border-b py-2">
              <div className="flex justify-between px-16 items-center gap-x-4">
                <input
                  type="url"
                  placeholder="URL"
                  value={urlInput}
                  className="border rounded-xl w-full px-2 h-12 text-sm"
                  onChange={handleUrlInputChange}
                />
                <button
                  className={`w-20 py-3 rounded-3xl font-medium ${
                    isLink
                      ? "bg-red-500 text-white "
                      : "bg-gray-300 text-gray-500 "
                  }`}
                  onClick={() => {
                    if (isLink) {
                      handleAddToCart();
                      setIsActive(!isActive);
                    }
                  }}
                >
                  Add
                </button>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <div className="text-sm font-medium text-[#666b5f]">
                  Inspired by your interests
                </div>
                <div className="flex gap-x-1 items-center font-medium text-[#8129d9] px-2 py-1 cursor-pointer ">
                  <div className="border-b border-transparent  hover:border-b hover:border-[#8129d9]">
                    View all
                  </div>
                  <RxCaretRight className="text-xl" />
                </div>
              </div>
              <div className="flex gap-x-2 px-6">
                <div className="my-2 flex flex-col items-center justify-center relative transition duration-75 ease-out first:pl-4 last:pr-4 md:first:pl-0 md:last:pr-0">
                  <button
                    className="hover:ring-sand hover:ring-2 hover:ring-inset active:bg-chalk  focus-visible:outline-black w-[88px] h-[88px] outline-none outline-offset-[-2px] bg-marble rounded-lg  antialiased text-black overflow-hidden mb-2"
                    aria-label="Pinterest"
                    onClick={() => {
                      handleAddToCart();
                      setIsActive(!isActive);
                    }}
                  >
                    <div
                      className="flex justify-center items-center"
                      aria-hidden="true"
                    >
                      <div className="rounded-sm overflow-hidden">
                        <img
                          src={imgtt}
                          alt=""
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                    </div>
                  </button>
                  <p className="text-black text-xs w-full text-center font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
                    Tiktok
                  </p>
                </div>
                <div className="my-2 flex flex-col items-center justify-center relative transition duration-75 ease-out first:pl-4 last:pr-4 md:first:pl-0 md:last:pr-0">
                  <button
                    className="hover:ring-sand hover:ring-2 hover:ring-inset active:bg-chalk  focus-visible:outline-black w-[88px] h-[88px] outline-none outline-offset-[-2px] bg-marble rounded-lg border-marble antialiased text-black overflow-hidden mb-2"
                    aria-label="Pinterest"
                  >
                    <div
                      className="flex justify-center items-center"
                      aria-hidden="true"
                    >
                      <div className="rounded-sm overflow-hidden">
                        <img
                          src={imgtw}
                          alt=""
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                    </div>
                  </button>
                  <p className="text-black text-xs w-full text-center font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
                    Twitter
                  </p>
                </div>
                <div className="my-2 flex flex-col items-center justify-center relative transition duration-75 ease-out first:pl-4 last:pr-4 md:first:pl-0 md:last:pr-0">
                  <button
                    className="hover:ring-sand hover:ring-2 hover:ring-inset active:bg-chalk  focus-visible:outline-black w-[88px] h-[88px] outline-none outline-offset-[-2px] bg-marble rounded-lg border-marble antialiased text-black overflow-hidden mb-2"
                    aria-label="Pinterest"
                  >
                    <div
                      className="flex justify-center items-center"
                      aria-hidden="true"
                    >
                      <div className="rounded-sm overflow-hidden">
                        <img
                          src={imgpinter}
                          alt=""
                          className="w-10 h-10 object-contain"
                        />
                      </div>
                    </div>
                  </button>
                  <p className="text-black text-xs w-full text-center font-semibold text-ellipsis overflow-hidden whitespace-nowrap">
                    Pinterest
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="listContentLinkAccount">
        <ContentLinkAccount isActive={isActive} />
        {/* {cart.map((item) => (
                    // <ContentLinkAccount key={item.id} isActive={isActive} urlInput={item.urlInput} data={item} />
                    <ContentLinkAccount key={item.id} isActive={isActive} urlInput={item.urlInput} />
                ))} */}
      </div>
    </div>
  );
};

export default CreateLink;
