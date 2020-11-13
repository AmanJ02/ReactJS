/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import SlotM from './SlotMachine';

const App1 = () => {
return (
    <>
        <h1 className='heading_style'> 
            🎰 Welcome to {" "}
            <span style = { {fontWeight: "bold" }}> Slot machine game </span> 🎰 
        </h1>
        <div className='slotmachine'>
            <SlotM x='🎅' y='🎅' z='🎅' />

            <SlotM x='😢' y='😢' z='😆' />

            <SlotM x='🍎' y='🍌' z='🍎' />

            <SlotM x='🍒' y='🍒' z='🍒' />
        </div>
    </>
    );

};


export default App1;