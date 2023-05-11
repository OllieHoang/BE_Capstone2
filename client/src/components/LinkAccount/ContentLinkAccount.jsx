import React, { useState } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsArrowsMove } from "react-icons/bs";
// import ToggleSwitch from '../../components/Toggle//ToggleSwitch';
import { useContext } from "react";
import { CreateLinkAccountContext } from "../../contexts/CreateLinkAccountContext";
import "../Toggle/toggle.css";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const ContentLinkAccount = ({ isActive }) => {
  const {
    handleUpdateTitle,
    removeCart,
    handleUpdateUrl,
    cart,
    handleOnDragEnd,
  } = useContext(CreateLinkAccountContext);

  const updateTitle = (id, newTitle) => {
    handleUpdateTitle(id, newTitle);
  };

  const updateUrl = (id, newUrl) => {
    handleUpdateUrl(id, newUrl);
  };

  return (
    <div className="h-full">
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="list1">
          {(provided) => (
            <div
              className="list"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {cart.map((item, index) => {
                return (
                  <Draggable
                    key={item.id}
                    draggableId={item.urlInput}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className={`${
                          isActive
                            ? "border rounded-md mt-10 flex px-4 py-2 gap-x-8 h-[100px] shadow-sm "
                            : "border rounded-md mt-10 flex px-4 py-2 gap-x-8 h-[100px] opacity-50"
                        }`}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <div className="flex items-center justify-center cursor-pointer h-full">
                          <BsArrowsMove />
                        </div>
                        <div className="flex flex-col w-[70%] gap-x-4">
                          <div className="flex gap-x-4 relative">
                            <input
                              type="text"
                              id={item.id}
                              name={item.title}
                              value={item.title}
                              placeholder="title"
                              onChange={(e) =>
                                updateTitle(item.id, e.target.value)
                              }
                              className="outline-none py-2 text-base"
                            />
                          </div>
                          <div className="flex gap-x-4 ">
                            <input
                              type="text"
                              id={item.id}
                              placeholder="Url"
                              defaultValue={item.urlInput}
                              className="outline-none w-full"
                              onChange={(e) => {
                                updateUrl(item.id, e.target.value);
                              }}
                            />
                          </div>

                          <div className="flex justify-between items-start pt-2 gap-2 text-concrete">
                            <div className="flex gap-2 flex-wrap"></div>
                          </div>
                        </div>

                        <div className="flex flex-col justify-center items-center gap-y-2">
                          <div className="py-1 px-1"></div>
                          <div
                            className="cursor-pointer px-1 py-1"
                            onClick={() => {
                              removeCart(item.id);
                            }}
                          >
                            <RiDeleteBinLine className="text-lg font-normal" />
                          </div>
                        </div>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};

export default ContentLinkAccount;
