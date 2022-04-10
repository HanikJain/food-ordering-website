import React, {useState} from 'react'

export default function useValidateInput(validate) {
    const [value, setValue] = useState("");
    const [isTouched, setIsTouched] = useState(false);

    const isValid = validate(value);
    const error = !isValid && isTouched;

    function inputHandler(event){
        setValue(event.target.value);
    }

    function blurHandler(event){
        setIsTouched(true);
    }

    return {
        value, inputHandler, blurHandler, isValid, error
    }
}
