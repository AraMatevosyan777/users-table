import React from 'react';
import { Field, reduxForm, reset } from 'redux-form';
import m from './registrate.module.css';
import { PhoneNumber, Input } from './FormControls';
import { maxLengthCreator, required } from '../../validators/validators';

const Form = (props) => {
    let maxLength15 = maxLengthCreator(15);
    let maxLength8 = maxLengthCreator(8);

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={m.item +' '+ m.nameField}>
                <label htmlFor="">Name</label>
                <div className={m.nameItem}>
                    <Field name='firstName' component={Input} placeholder='First' validate={[required,maxLength15]}/>
                </div>
                <div className={m.nameItem}>
                    <Field name='lastName' component={Input} placeholder='Last' validate={[required,maxLength15]}/>
                </div>
            </div>
            <div className={m.item}>
                <label htmlFor="">Email</label>
                <Field name='email' component={Input} type='email' validate={required}/>
            </div>
            <div className={m.item}>
                <label htmlFor="">Phone number</label>
                <Field name='phoneNumber' component={PhoneNumber} validate={[required]}/>
            </div>
            <div className={m.item}>
                <label htmlFor="">Birth date</label>
                <Field name='birthDate' component={Input} placeholder='mm / dd / yy' validate={[required,maxLength8]}/>
            </div>
            <div className={m.gender}>
                <label htmlFor="">Gender</label>
                <div className={m.genderItem}>
                    <Field name='gender' value='male' component={Input} type='radio' validate={required}/> 
                    <div>Male</div>
                </div>
                <div className={m.genderItem}>
                    <Field name='gender' value='female' component={Input} type='radio' validate={required}/> 
                    <div>Female</div>
                </div>
            </div>
            <div className={m.item}>
                <button>Submit</button>
            </div>
        </form>
    )
}

const afterSubmit = (result, dispatch) => {
    dispatch(reset('form'))
  }
const ReduxForm = reduxForm({ 
    form: 'form',
    onSubmitSuccess: afterSubmit
})(Form);

export default ReduxForm;
