import React from 'react'
import ReduxForm from './Form'
import m from './registrate.module.css';

const Registration = (props) => {
    const onSubmit = (formData) => {
        let today = new Date();
        let birthDate = new Date(formData.birthDate);
        let age = today.getFullYear() - birthDate.getFullYear();
        let m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age = age - 1;
        }
        let user = {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            phoneNumber: formData.phoneNumber,
            birthDate: formData.birthDate,
            age: age,
            gender: formData.gender,
            id: Date.now()
        };
        props.addUser(user);
    }
  return (
    <div className={m.registration}>
        <h3>Registration Form</h3>
        <ReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

export default Registration
