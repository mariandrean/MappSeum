import React from 'react'
import './Form.css'

const Create = () => {
  return (
    <div>
    <form className="container-form">
      <h1>AÑADE UNA NUEVA OBRA</h1>
    <label>Obra:</label>
    <input type="text" name="obra" placeholder='Escribe el nombre de la obra'/>
    <hr></hr>

    <label>Autor:</label>
    <input type="text" name="autor" placeholder="Escribe el nombre de Autor"/>
    <hr></hr>

    <label>Año:</label>
    <input type="text" name="año" placeholder="Escribe el año de creación"/>
    <hr></hr>

    <label>Material:</label>
    <input type="text" name="material" placeholder="Escribe el tipo de material de tu escultura"/>
    <hr></hr>

    <label>Ubicación:</label>
    <input type="text" name="ubicacion" placeholder="Escribe la ubicación de tu escultura"/>
    <hr></hr>

    <label>Imagen de la Escultura:</label>
    {/* <input className="img-file" type="file" name="imagen" accept="image/*"/> */}
    <input  placeholder="Escribe el link de tu imagen" type="link" name="imagen" accept="image/*"/>

    <button type="submit">Agregar</button>


  </form>
  </div>
  )
}

export default Create