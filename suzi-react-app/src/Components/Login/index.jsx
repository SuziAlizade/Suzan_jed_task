import Button from "../Button";
import styles from "./index.module.css"
import { useEffect, useState } from "react";


const initialValue = {
    email: "",
    password: ""
}
function Login() {
    const [input, setInput] = useState(initialValue)
    // useEffect(() => {
    //     console.log('Component is created')
    // }, [])
    // useEffect(() => {
    //     console.log('Input is changed')
    // }, [input])
    
    // useEffect(() => {
    //     return () => {
    //         console.log('Component is unmounted')
    //     }
    // }, [])
    
    return (
        <div className={styles.form}>
            <input onChange={({ target }) => {
                setInput({ ...input, email: target.value })

            }} type="email" value={input.email} placeholder="enter your email" />
            <input onChange={({ target }) => {
                setInput({ ...input, password: target.value })
            }} type="password" value={input.password} placeholder="enter password" />
            <Button bgColor="red" text="submit" clickleyende={() => {
                console.log(input)
            }} />
            <Button bgColor="red" text="add gmail" clickleyende={() => {
                setInput({ ...input, email: addGmail(input.email) })
            }} />
        </div>
    )
}
function addGmail(txt) {
    if (!txt.endsWith("@gmail.com")) {
        return txt + "@gmail.com"
    }
    return txt;
}

export default Login;