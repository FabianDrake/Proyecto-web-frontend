import React, { useState } from 'react';
import './Form.css';
import { getDatos, postDatos } from '../Generales/Backend';
function Form() {

    // Usuario predeterminado de variable
    const defaultUser = {
        name: 'usuario',
        email: 'usuario@ejemplo.com',
    };

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(''); // Estado para el mensaje
    const [messageType, setMessageType] = useState(''); // Estado para el tipo de mensaje

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        postDatos('auth/login', { email: email, password: password })
            .then((response) => {
                if (response.error) {
                    console.log(response);
                    console.log("credenciales incorrectas");
                }
                if (response.status === 200) {
                    console.log(response);
                    console.log("Bienvenido usuario");
                }
            })
            .catch((error) => {
                console.error("error al enviar los datos ", error);
            });
    };

return (
    <div className ="form-container">
        {/* Muestra el mensaje dependiendo del resultado */}
        {message && (
            <div className={`message ${messageType}`}>
                {message}
            </div>
        )}
        
        {/* El formulario */}
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Correo electronico *</label>
            <input type="text" name="email" id="email" value={email} onChange={handleEmailChange} required />

            <label htmlFor="email">Password *</label>
            <input type="text" name="password" id="password" value={password} onChange={handlePasswordChange} required />

            <div className="registration-label">
                <label>¿Es tu primera vez? <a href="/registro">Regístrate</a></label>
            </div>

            <button type="submit">Ingresar</button>
        </form>
    </div>
);
}

export default Form;
