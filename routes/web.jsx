import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ListPage from "../views/pages/ListPage.jsx";
import CreatePage from "../views/pages/CreatePage.jsx";

const Web = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListPage/>}/>
                <Route path="/create" element={<CreatePage/>}/>
            </Routes>
        </BrowserRouter>
    );
};
export default Web;