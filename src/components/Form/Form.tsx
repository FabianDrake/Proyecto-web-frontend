import "./Form.css";

function Form (){
    return(
        <div className="form-container">
            <label htmlFor="name">Nombre *</label>
            <input type="text" name="name" id="name"/>
            <label htmlFor="email">Correo electronico *</label>
            <input type="email" name="email" id="email"/>

            <div className="registration-label">
                <label>¿Es tu primera vez? <a href="/registro">Regístrate</a></label>
            </div>
            
            <button type="submit">Ingresar</button>
        </div>
    )
}

export default Form;