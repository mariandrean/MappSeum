import React from 'react'
import './Form.css'
import { createSculptures } from '../services/sculptures-services'
import { useForm } from 'react-hook-form'

const Form = () => {
  const { register, handleSubmit, reset, formState: {errors} } = useForm()

  const validateLink = (value) => {
    // Expresion regular que valida links
    const linkRegex = /^(ftp|http|https):\/\/[^ "]+$/;
    if (!linkRegex.test(value)) {
      return "Por favor, añade solo formato http";
    }
    return true;
  };

  const validateNumber = (value) => {
    // Regular expression to validate if value contains only numbers
    const numberRegex = /^[0-9]+$/;
    if (!numberRegex.test(value)) {
      return "Escribe solo números";
    }
    return true;
  };

return (
  <>
  
      <form onSubmit = {handleSubmit(newSculpture => {createSculptures(newSculpture); reset()})} className="container-form">
        
        <label>Obra:
        <input {...register("title", {required: "El campo obra esta vacio"})} type="text" placeholder='Escribe el nombre de la obra' />
        {errors.title && <div className="text-error">{errors.title.message}</div>}
        </label>

        <label>Autor:
        <input {...register("author", {required: true})} type="text" placeholder="Escribe el nombre de Autor" />
        </label>

        <label>Año:
        <input {...register("year", {validate: validateNumber})} type="text" placeholder="Escribe el año de creación" />
        {errors.year && <div className="text-error">{errors.year.message}</div>}
        </label>

        <label>Material:
        <input {...register("material")} type="text" placeholder="Escribe el tipo de material" />
        </label>

        <label>Ubicación:
        <input {...register("location")} type="text" placeholder="Escribe la ubicación" />
        </label>

        <label>Imagen de la Escultura:
        <input {...register("imageUrl", {validate: validateLink, required: "Hace falta un link"})} placeholder="Escribe el link de tu imagen" type="link"/>
        {errors.imageUrl && <div className="text-error">{errors.imageUrl.message}</div>}
        {/* <input className="img-file" type="file" name="imagen" accept="image/*"/> */}
        </label>

        <button type="submit">Guardar</button>

      </form>
    </>
)};

export default Form