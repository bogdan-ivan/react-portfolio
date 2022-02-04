import React, { useState } from 'react';
//import usePrompt from "react-router-dom";

const BlockingForm = () => {
    const [isBlocking, setIsBlockling] = useState(false);
    // usePrompt(
    //     "Hello from usePrompt -- Are you sure you want to leave?",
    //     isBlocking
    // );
    return (
        <form action="">
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" id="name" />
            <p>NOT SUPPORTED YET EVEN IN 6.21</p>
        </form>
    );
};

export default BlockingForm;
