import { useState } from 'react';
import Button from './Button';
function Counter() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>{count}</h1>
            <Button bgColor="green" text="+" clickleyende={() => {
                 setCount(count + 1) 
            }}/>
            <Button bgColor="blue" text="-" clickleyende={() => {
                setCount(count - 1)
            }}/>
            <Button bgColor="red" text="log" clickleyende={()=>{
                console.log(count)
            }}/>
            <Button bgColor="purple" text="reset" clickleyende={()=>{
                setCount(count-count)
            }}/>
        </>
    )
}
export default Counter;