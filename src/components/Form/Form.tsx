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
    const [hasEntered, setHasEntered] = useState(false);
    const [canEnter, setCanEnter] = useState(null);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Verificar si los campos coinciden con el usuario predeterminado
        if (name === defaultUser.name && email === defaultUser.email) {
            setHasEntered(true);
            setCanEnter(true);
        } else {
            setHasEntered(false);
            setCanEnter(false);
        }
    };

    return (
        <div className="form-container">
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

            {/* Mostrar el mensaje dependiendo de canEnter */}
            {canEnter === true && (
                <label>¡Has entrado exitosamente!</label>
            )}
            {canEnter === false && (
                <label>No puedes entrar, verifica tus datos.</label>
            )}
        </div>
    );
}

export default Form;