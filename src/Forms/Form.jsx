/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import { useState } from 'react';
const Form = () => {

    const [fullName, setFullName] = useState({
        fname : '',
        lname : '',
        email: '',
        phone: '',
        qua: '',
    });

    const inputEvent = (event) => {
        // console.log(event.target.value);
        // console.log(event.target.name);

        // Object Destructuring 
        const { value,name } = event.target;

        setFullName((preValue) => {

            return {
                ...preValue,
                [name] : value,
            };
        }); 
    };

    const onSubmits = (event) => {
        event.preventDefault();
        alert('Form Submitted Successfully');
    }
    return(
        <>
            <div className='main_div'>
                <form onSubmit={onSubmits}>
                    <div>
                        <h1> Hello {fullName.fname} {fullName.lname} </h1>
                        <h3> {fullName.email} </h3>
                        <p> {fullName.phone} </p>
                        <p> {fullName.qua} </p>
                        <input 
                            type = 'text' 
                            placeholder = 'Enter Your First Name'
                            name = 'fname'
                            onChange = {inputEvent}
                            value = {fullName.fname}
                            autoComplete = 'off'
                        />
                        <br />
                        <input 
                            type = 'text' 
                            placeholder = 'Enter Your Last Name'
                            name = 'lname'
                            onChange = {inputEvent}
                            value = {fullName.lname}
                            autoComplete = 'off'
                        />
                        <input 
                            type = 'text' 
                            placeholder = 'Enter Your Email'
                            name = 'email'
                            onChange = {inputEvent}
                            value = {fullName.email}
                            autoComplete='off'
                        />
                        <input 
                            type = 'number' 
                            placeholder = 'Enter Your Phone Number'
                            name = 'phone'
                            onChange = {inputEvent}
                            value = {fullName.phone}
                            autoComplete = 'off'
                        />
                        <input 
                            type = 'text' 
                            placeholder = 'Enter Your Qualification'
                            name = 'qua'
                            onChange = {inputEvent}
                            value = {fullName.qua}
                            autoComplete = 'off'
                        />

                        <button type = 'submit'> Submit 👍 </button>
                    </div>
                </form>
            </div>
        </>
    );
};


export default Form;