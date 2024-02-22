import React from 'react';
import {Toaster} from "react-hot-toast";

const AppLayout = (props) => {
    return (
        <>
            {props.children}
            <Toaster position="bottom-center"/>
        </>
    );
};

export default AppLayout;