import React from 'react'
import classes from "./Checkout.module.css";
import useValidateInput from "../../hooks/use-validateInput";

export default function Checkout(props) {
    const {
        value: nameValue,
        isValid : nameIsValid,
        inputHandler : nameChangeHandler,
        blurHandler : nameBlurHandler,
        error : nameError
    } = useValidateInput((data) => {return data.trim() !== '';});

    const {
        value: addressValue,
        isValid : addressIsValid,
        inputHandler : addressChangeHandler,
        blurHandler : addressBlurHandler,
        error : addressError
    } = useValidateInput((data) => {return data.trim() !== '';});


    const {
        value: cityValue,
        isValid : cityIsValid,
        inputHandler : cityChangeHandler,
        blurHandler : cityBlurHandler,
        error : cityError
    } = useValidateInput((data) => {return data.trim() !== '';});

    const {
        value: pincodeValue,
        isValid : pincodeIsValid,
        inputHandler : pincodeChangeHandler,
        blurHandler : pincodeBlurHandler,
        error : pincodeError
    } = useValidateInput((data) => {return data.length === 6;});


    const formIsValid = nameIsValid && addressIsValid && pincodeIsValid && cityIsValid;
    
    const confirmHandler = (event) => {
        event.preventDefault();
        if(formIsValid) {
            props.onConfirm({
                name:nameValue,
                address:addressValue,
                pincode:pincodeValue,
                city:cityValue
            });
        }
      };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={classes.control}>
                <label htmlFor='name'>Your Name</label>
                <input value={nameValue} onChange= {nameChangeHandler} type='text' id='name' onBlur={nameBlurHandler} />
                {nameError && <p className={classes.invalidInput}>Invalid input</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor='address'>Address</label>
                <input value = {addressValue} onChange = {addressChangeHandler} onBlur = {addressBlurHandler} type='text' id='address' />
                {addressError && <p className={classes.invalidInput}>Invalid input</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor='pincode'>Pincode</label>
                <input value = {pincodeValue} onChange = {pincodeChangeHandler} onBlur = {pincodeBlurHandler} type='number' id='pincode' />
                {pincodeError && <p className={classes.invalidInput}>Invalid input</p>}
            </div>
            <div className={classes.control}>
                <label htmlFor='city'>City</label>
                <input value = {cityValue} onChange={cityChangeHandler} onBlur={cityBlurHandler} type='text' id='city' />
                {cityError && <p className={classes.invalidInput}>Invalid input</p>}
            </div>
            <div className={classes.actions}>
                <button type='button' onClick={props.onCancel}>
                    Cancel
                </button>
                <button disabled={!formIsValid} className={classes.submit}>Pay &#x20b9; {props.payAmount}</button>
            </div>
        </form>
    )
}
