import { React, useState } from 'react';
import App from '../App';
function Contact() {

  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    contact: '',
    message: '',
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    })
  }

  const [thanks, setThanks] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.firstName === '' || formData.email === '' || formData.contact === '' || formData.message === '') {
      alert("Los campos 'Nombre', 'Correo electrónico' y 'Mensaje/Comentario', así como la forma de contacto, son obligatorios.")
    }
    else {setThanks(true);
          setTimeout(() => {setThanks(false)}, 2000);
    }
  }

  return (
    <App>
      <form>
        <form className="formLayout">
            <h4 className="formTitle">¡CONTACTANOS!</h4>

            <span className='alert'>Los campos con señalados con * son obligatorios</span>

            <label htmlFor="firstName" >Nombre *</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}  />

            <label htmlFor="lastName">Apellido</label>
            <input type="text" name="lastName"  />

            <label htmlFor="gender" className='gender'>Sexo</label>
            <select name="gender" >
              <option selected>Selecciona género</option>
              <option value="M">Masculino</option>
              <option value="F">Femenino</option>
              <option value="NB">No Binario</option>
              <option value="O">Otro</option>
            </select>

            <label htmlFor="email">Correo electrónico *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange}  />

            <select className="form-select" aria-label="¿Cómo preferís ser contactado/a?" name="contact" value={formData.contact} onChange={handleChange} >  
                      <option selected>¿Cómo preferís ser contactado/a? *</option>
                      <option value="1">Por mail.</option>
                      <option value="2">No quiero que me contacten, sólo quería hacer un comentario. </option>
            </select>   

            <label htmlFor="message">Tu mensaje/comentario * </label>
            <textarea name="message" id="message" rows={6} placeholder="Escriba su mensaje..." value={formData.message} onChange={handleChange} /> 

            <div className="formButtonContainer">
              <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Enviar</button>
              <button type="reset" className="btn btn-dark">Borrar</button>
            </div>
            {thanks && <h4 className='thanksMsg'>¡Gracias por contactarnos!</h4>}
        </form>
      </form>
    </App>
  )
}

export default Contact
