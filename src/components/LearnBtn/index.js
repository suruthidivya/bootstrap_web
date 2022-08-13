import React from "react";
import Button from 'react-bootstrap/Button';

export const LearnBtn = (props) => {
    return (
        <>
           <Button id={props.id} class={props.className} variant="primary" onClick={props.onClick}>{props.value}</Button> 
        </>
    )
}