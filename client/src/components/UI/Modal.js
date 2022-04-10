import React, {Fragment, useState} from 'react'
import ReactDOM from 'react-dom';
import classes from "./Modal.module.css"

export function Backdrop(props) {
    return (
        <div className = {classes.backdrop}onClick={props.onClick} ></div>
    );
} 

export function ModalOverlay(props) {
  
    return (
        <div className = {classes.modal} >
            <div className = {classes.content} >
                {props.children}
            </div>
        </div>
    );
} 

export default function Modal(props) {
    return (
        <Fragment>
           { ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>, document.getElementById("overlay-root"))}
            {ReactDOM.createPortal(<ModalOverlay > {props.children} </ModalOverlay>, document.getElementById("modal-root"))}
        </Fragment>
    
    );

}
