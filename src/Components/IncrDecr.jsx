import React, {useState} from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';


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
                        <Tooltip title="Add">
                            <Button onClick = {incrNum} className = 'btn_green'> < AddIcon /> </Button>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Button onClick = {decrNum} className = 'btn_red'> < DeleteIcon />  </Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>
    );

}


export default IncrDecr;