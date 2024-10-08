import React, { useEffect, useReducer } from 'react';
import './Input.css';
import { validate } from '../../utils/validate';

const inputReducer = (state, action) => {
    switch (action.type) { 
        case 'CHANGE':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val,action.validators)

            }
        case 'TOUCH':
            return {
                ...state,
                isTouched:true
            }
        default: return state
    }
}

const Input = (props) => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: '',
        isValid: false,
        isTouched: false
    });
    const { id, onInput } = props;
    const { value, isValid } = inputState;

    const changeHandler = event => { 
        dispatch({
            type: 'CHANGE',
            val: event.target.value,
            validators:props.validators
        })
    }

    const touchHandler = () => {
        dispatch({ type: 'TOUCH' })
    }

   

    useEffect(() => {
        console.log('IN');
        onInput(id, value, isValid);
    }, [id, value, isValid, onInput]);

    const element = props.element === 'input' ? (
        <input value={inputState.val} id={props.id} type={props.type} placeholder={props.placeholder}
        onInput={changeHandler}
        onBlur={touchHandler}/>) :
        (<textarea id={props.id} rows={props.rows || 3}
            onInput={changeHandler}
            onBlur={touchHandler}/>)
    
  return (
      <div className={`form-control ${(!inputState.isValid && inputState.isTouched) ? 'form-control--invalid':''}`}>
          <label htmlFor={props.id}>{props.label}</label>
          {element}
          {!inputState.isValid && inputState.isTouched && <p className='m-0'>{ props.errorText }</p>}
      </div>
  )
}

export default Input