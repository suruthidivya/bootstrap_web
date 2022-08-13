import React from "react";
import Form from 'react-bootstrap/Form';


export const InputText = (props) => {
    return (
        <>
      <Form.Group>
        <Form.Control type={props.type} placeholder={props.placeholder} id={props.id} className={props.className}  value={props.value} onChange = {(e)=>props.onChange(e.target.value)}/>
      </Form.Group>
        </>
    )
}