import React, {useState} from 'react'

import styles from "./SearchInput.module.css"
import {ReactComponent as RightArrowIcon} from "../../assets/icons/right-arrow.svg"

export default function SearchInput(props) {
    const [input, setInput] = useState("");
    const [disabled, setDisabled] = useState(true);

    function inputChangeHandler(event) {
        props.inputChangeHandler(event.target.value);
        if(event.target.value.trim() === ''){
            setDisabled(true);
          } else{
            setDisabled(false);
          }
        setInput(event.target.value);
    }

    function inputClickHanlder(event){
        event.preventDefault();
        props.inputClickHanlder(input);
        setInput("");
    }

    return (
        <div className={styles.search}>
            <div className={styles.searchBar}>
                <input type="text" placeholder="Search restaurants" onChange={inputChangeHandler} value={input}/>
                <button type = "button" className={styles.btn} onClick={inputClickHanlder} disabled={disabled}>
                    <RightArrowIcon />
                </button>
            </div>
            <div className={styles.validate}>
                {props.inValid && <p>{props.msg}</p>}
            </div>
        </div>
    )
}
