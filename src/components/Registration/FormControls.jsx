import React from 'react';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import m from './registrate.module.css';

export const PhoneNumber = ({ input, meta, ...props }) => {
  return (
    <div className={m.phoneNumber}>
      <PhoneInput
        country='am'
        inputStyle={{
          width: '100%',
          border: ' 0.6px solid #758690',
          'boxSizing': 'border-box',
          'borderRadius': '6px',
        }
        }
        {...input} {...props} />
    </div>
  )
}
export const Input = ({ input, meta, ...props }) => {
  let haserror = meta.touched && meta.error
  return (
      <div className={m.formControl}>
        <input {...input} {...props} autoComplete='off'/>
        {haserror &&
            <div className={m.error}>{meta.error}</div>
            }
      </div>
  )
}
