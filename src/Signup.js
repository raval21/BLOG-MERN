import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/auth/signup', { email, password });
            alert(response.data.message);
        } catch (error) {
            console.error(error);
            alert(error.response.data.message);
        }
    };

    return (
        <form onSubmit={handleSignup}>
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <button type="submit">Signup</button>
        </form>
    );
};

export default Signup;
