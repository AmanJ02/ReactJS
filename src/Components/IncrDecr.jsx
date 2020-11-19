import React, {useState} from 'react';


const IncrDecr = () => {
    
    const [num,setNum] = useState(0);

    const incrNum = () => {
        setNum(num+1);
    }

    const decrNum = () => {
        (num === 0) ? alert("Zero Limit Reached") : setNum(num-1);
    }

    return (
        <>
            <div className = 'main_div'>
                <div className = "center_div">
                    <br/>
                    <br />
                    <h1> {num} </h1>
                    <div className = 'btn_div'>
                        <button onClick = {incrNum}> + </button>
                        <button onClick = {decrNum}> - </button>
                    </div>
                </div>
            </div>
        </>
    );

}


export default IncrDecr;