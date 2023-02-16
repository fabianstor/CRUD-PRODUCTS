import { useState } from 'react'
import './formProducts.css'

function FormProducts({setProducto}:any) {
  
  const [product, setProduct] = useState()

  const handle = (event: any) => {
    setProduct({
      ...product,
      [event?.target.name]: event.target.value
    })
  }

  return (
    <div  className='main-products'>
      <div className='container-form'>
        <form className='form-products'>
          <input placeholder='PLU'></input>
          <input placeholder='DESCRIPCION'></input>
          <input placeholder='PRECIO'></input>
          <input placeholder='CATEGORIA'></input>
          <button className='button-products'>GUARDAR</button>
        </form>
      </div>
    </div>
  )
}

export default FormProducts