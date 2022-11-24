import React, {useState} from "react";
import './ClickCounter.css'

const ClickCounter = () => {
        const buttonStyle = {
            display: 'inline-flex',
            backgroundColor: '#7b38d8',
            border: '10px 5px',
            fontSize: '30px',
            margin: 'auto',
            textAlign: 'center',
            color:'#eeeeee' ,
        };
        const [count, setCount] = useState(0);


        return(
            <div>
                <h2> Count: {count}</h2>
                <div>Click the button below to increment the counter</div>
                <button type="button" style={buttonStyle} onClick={()=> setCount(count + 1)}>Click!</button>
           <div>
                <h2>Unclick</h2>
                <div>Click this button to decrement the counter</div>
                <button type="button"style={buttonStyle} onClick={()=> count > 0 ? setCount(count - 1): null } >Click?</button>
            </div> 
            </div>


        );
}
export default ClickCounter;