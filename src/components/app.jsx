import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main, Navbar, Project } from "./";

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route element={<Main />} path="/" />
                <Route element={<Project />} path="/project" />
            </Routes>
        </div>
    );
};
export default App;
