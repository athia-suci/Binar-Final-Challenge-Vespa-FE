import React from "react";
import { Button } from "react-bootstrap";
import { FiPlus } from "react-icons/fi";
import "../FloatButton/floatbutton.css"

export function FloatButton() {
    const colourButton = {
        backgroundColor: '#7126B5',
        borderRadius: '5px',
    };
    
    return (
        <Button href="/buatproduk" className="ms-auto pe-4 radius-secondary floating-button bg-color-tertiary border-0">
            <FiPlus className="mx-2 mb-1" />
            Jual
        </Button>
    );

}