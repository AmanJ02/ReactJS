import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const CreateNote = (props) => {

    const [expand, setExpand] = useState();

    const [note, setNote] = useState({
        title : '',
        content : '',
    });

    const InputEvent = (event) => {

        // Object Destructuring
        const { value,name } = event.target;

        setNote((prevData) => {
            return {

                // Spread Operator
                ...prevData,
                [name] : value,
            };
        });
    };

    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: '',
            content:'',
        });
    };

    const expandIt = () => {
        setExpand(true);
    };

    const backToNormal = () => {
        setExpand(false);
    }

    return (
        <>
            <div className = 'main_note' onDoubleClick = {backToNormal}>
                <form>
                    {expand?
                        <input 
                         type = 'text' 
                         name='title'
                         value = {note.title}
                         onChange = {InputEvent} 
                         placeholder = 'Title' 
                         autoComplete = 'off' 
                        /> 
                    : null}
                    <textarea 
                     rows = '' 
                     column = '' 
                     name='content'
                     value = {note.content}
                     onChange = {InputEvent} 
                     placeholder = 'Write a note...'
                     onClick = {expandIt}
                    />
                    {expand? (
                        <Button onClick = {addEvent}>
                            <AddIcon className = 'plus_sign' />
                        </Button> 
                    ): null} 
                </form> 
            </div>

        </>
    );
};


export default CreateNote;