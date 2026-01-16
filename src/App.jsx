import React from "react";
import { Route, Routes } from "react-router-dom";

import Main_Page from "./Components/Pages/Main_Page";
import Non_Found_Page from "./Components/Pages/Non_Found_Page";
import Layout from "./Components/Standart/Layout/Layout";
import CustomCursor from "./Components/Cursor/CustomCursor"
import About from "./Components/Pages/About/About";
// import InstallButton from "./Components/Pages/InstallButton/InstallButton";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main_Page />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Non_Found_Page />} />
        </Route>
      </Routes>

      <CustomCursor />

      {/* Кнопка установки */}
      {/* <InstallButton /> */}
    </>
  )
}

export default App
