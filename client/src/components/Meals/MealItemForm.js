import react, {useRef, useState} from 'react';
import Input from '../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    if(amountInputRef.current.value.trim() != '') {
      const enteredAmount = parseInt(amountInputRef.current.value);
      if(enteredAmount >= 1){
        setAmountIsValid(true);
        props.onAddToCart(enteredAmount);
      }
    }
    setAmountIsValid(false);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref = {amountInputRef}
        label=''
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          step: '1',
          defaultValue: '1',
        }}
      />
      {/* <div className = {classes.InputAmount} >0</div> */}
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;