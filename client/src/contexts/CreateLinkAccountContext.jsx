import React, { createContext, useEffect, useState } from "react";

export const CreateLinkAccountContext = createContext();

const CreateLinkAccountProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [title, setTitle] = useState("");
  const [id, setId] = useState(0);
  const [urlInput, setUrlInput] = useState("");

  //Link

  const handleAddToCart = () => {
    const newCart = [...cart, { urlInput: urlInput, title: title, id: id }];
    setCart(newCart);
    setId(id + 1);
    setUrlInput("");
    console.log(newCart);
  };
  const handleUrlInput = (e) => {
    setUrlInput(e.target.value);
  };
  const handleInput = (e) => {
    setTitle(e.target.value);
  };
  const handleUpdateTitle = (id, newTitle) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, title: newTitle };
      }
      return item;
    });
    setCart(updatedCart);
  };
  const handleUpdateUrl = (id, newUrl) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        return { ...item, urlInput: newUrl };
      }
      return item;
    });
    setCart(updatedCart);
  };
  const removeCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };
  const clearCart = () => {
    setCart([]);
  };
  //appearance
  const [profileTitle, setProfileTitle] = useState("");
  const handleProfileTitle = (e) => {
    setProfileTitle(e.target.value);
  };
  const [inputValueIntroduction, setInputValueIntroduction] = useState("");
  const maxInputLength = 70;
  function handleInputChange(event) {
    const value = event.target.value;
    setInputValueIntroduction(value.slice(0, maxInputLength));
  }

  //toggle
  const [checked, setChecked] = useState(true);

  const toggleChecked = () => {
    setChecked(!checked);
  };

  //selectImg
  const [selectedFile, setSelectedFile] = useState(null);
  // const [isFilePicked, setIsFilePicked] = useState(false)
  // const [selectedFile2, setSelectedFile2] = useState(null);
  const handleFileInput = (e) => {
    setSelectedFile(e.target.files[0]);
    // setIsFilePicked(true)
  };

  // img appearance
  const [imageSrc, setImageSrc] = useState(null);
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageSrc(imageUrl);
  };
  const removeFileInputChange = () => {
    setImageSrc(null);
  };

  const handleOnDragEnd = (result) => {
    console.log(result);
    if (!result.destination) return;
    const items = Array.from(cart);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setCart(items);
  };
  const [type, setType] = "navbar1";

  // themes
  const [color, setColor] = useState("");
  const [background, setBackground] = useState("");
  const [mo, setMo] = useState("");
  const [border, setBorder] = useState("");
  return (
    <CreateLinkAccountContext.Provider
      value={{
        cart,
        urlInput,
        title,
        id,
        border,
        setBorder,
        profileTitle,
        inputValueIntroduction,
        maxInputLength,
        checked,
        selectedFile,
        imageSrc,
        type,
        setType,
        color,

        setColor,
        background,
        mo,
        setMo,
        setBackground,
        handleOnDragEnd,
        removeFileInputChange,
        handleFileInputChange,
        handleUrlInput,
        handleFileInput,
        setChecked,
        toggleChecked,
        handleInputChange,
        setId,
        handleInput,
        handleProfileTitle,
        setTitle,
        setUrlInput,
        setCart,
        handleAddToCart,
        removeCart,
        clearCart,
        handleUpdateTitle,
        handleUpdateUrl,
      }}
    >
      {children}
    </CreateLinkAccountContext.Provider>
  );
};

export default CreateLinkAccountProvider;
