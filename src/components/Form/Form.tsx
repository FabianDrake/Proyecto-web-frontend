import React, { useState } from 'react';
import './Form.css';

function Form() {
    // Usuario predeterminado
    const defaultUser = {
        name: 'usuario',
        email: 'usuario@ejemplo.com',
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState(''); // Estado para el mensaje
    const [messageType, setMessageType] = useState(''); // Estado para el tipo de mensaje

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // Verificar si los campos coinciden con el usuario predeterminado
        if (name === defaultUser.name && email === defaultUser.email) {
            setMessage('Inicio exitoso');
            setMessageType('success');
        } else {
            setMessage('Datos incorrectos');
            setMessageType('error');
        }
    };

    return (
        <div className="form-container">
            {/* Muestra el mensaje dependiendo del resultado */}
            {message && (
                <div className={`message ${messageType}`}>
                    {message}
                </div>
            )}

            {/* El formulario */}
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre *</label>
                <input type="text" name="name" id="name" value={name} onChange={handleNameChange} required />

                <label htmlFor="email">Correo electrónico *</label>
                <input type="email" name="email" id="email" value={email} onChange={handleEmailChange} required />

                <div className="registration-label">
                    <label>¿Es tu primera vez? <a href="/registro">Regístrate</a></label>
                </div>

                <button type="submit">Ingresar</button>
            </form>
        </div>
    );
}

export default Form;
