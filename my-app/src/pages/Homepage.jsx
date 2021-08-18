import { useEffect, useState } from "react";
import useFetch from "../services/hooks/useFetch";

const Homepage = () => {
    const [title, setTitle] = useState("Homepage");
    const [inputUser, setInputUser] = useState({ name: "", email: "" })
    const [users, setUsers] = useState([])
    const [dataUser, loadingUser, errorUser] = useFetch("https://jsonplaceholder.typicode.com/users")

    // kalau dep kosong update setiap perubahan semua state
    useEffect(() => {
        // fetch server
        // fetch('https://jsonplaceholder.typicode.com/users')
        //     .then(response => response.json())
        //     .then(usersData => {
        //         usersData = usersData.map(u => {
        //             return { name: u.name, email: u.email }
        //         })
        //         setUsers(usersData)
        //     })

        // contoh kasus untuk destroy
        // contoh cleaning
        return function clearLocalStorage() {
            localStorage.clear()
        }
        // panggil function luar
        // cuma berjalan di awal pakai []
    }, [])

    useEffect(() => {
        console.log("masuk")
        setUsers(dataUser)
        // dengan deps
    }, [dataUser])

    const inputUserHandler = (e) => {
        const { name, value } = e.target
        setInputUser({ ...inputUser, [name]: value })
    }

    const submitUser = (e) => {
        e.preventDefault()
        const userBaru = [...users]
        // const { email, value } = inputUser
        userBaru.push(inputUser)
        setUsers(userBaru)
    }

    if (errorUser) {
        return <h1>Error</h1>
    }

    if (loadingUser) {
        return <h1>Masih loading boss</h1>
    }

    return (
        <>
            <h1>{title}</h1>
            <hr />
            <form onSubmit={submitUser}>
                <input type="text" name="name" onChange={inputUserHandler} value={inputUser.name} />
                <input type="text" name="email" onChange={inputUserHandler} value={inputUser.email} />
                <input type="submit" value="Add User" />
            </form>
            <hr />
            <pre>
                {
                    JSON.stringify(users, null, 4)
                }
            </pre>
        </>
    );
};

export default Homepage;
