import React, { useState } from 'react';

const Example = () => {
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <p>Введите имя <input type="text" onChange={event => setName(event.target.value)} /><span>{name}</span></p>
            <p>Введите фамилию <input type="text" onChange={event => setLastName(event.target.value)} /><span>{lastName}</span></p>
            <p>Введите адрес почты <input type="text" onChange={event => setEmail(event.target.value)} /><span>{email}</span></p>
            <p>Введите пароль <input type="text" onChange={event => setPassword(event.target.value)} /><span>{password}</span></p>
        </div>
    );
};

export default Example;
