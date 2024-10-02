import React from 'react'

function Contact() {
  return (
    <form>
      <form className="formLayout">
          <h4 className="formTitle">Registro de usuario</h4>

        <label htmlFor="email">Email</label>
        <input type="email" name="email"/>

        <label htmlFor="name">Nombre</label>
        <input type="text" name="name" />

        <label htmlFor="lastName">Apellido</label>
        <input type="text" name="lastName" />

        <label htmlFor="birthdate">Fecha de nacimiento</label>
        <input type="date" name="birthdate" />

        <label htmlFor="gender">Sexo</label>
        <select name="gender">
          <option value="M">Masculino</option>
          <option value="F">Femenino</option>
          <option value="NB">No Binario</option>
          <option value="O">Otro</option>
        </select>

        <label htmlFor='password'>Cree su contraseña</label>
        <input type="password" name="password" />

        <div className="formButtonContainer">
          <button type="submit">Enviar</button>
          <button type="reset">Borrar</button>
        </div>
      </form>
    </form>
  )
  )
}

export default Contact
