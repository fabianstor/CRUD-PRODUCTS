import { useState } from 'react'
import './formProducts.css'

function FormProducts({setProducts}: any) {
  
  const [product, setProduct] = useState({})

  const handle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value
    })
    console.log('product', product)
    event.preventDefault()
  }

  const pasarValor = () => {
    console.log("@@@@@@@@@@@@@@")
    try {
      setProducts(product)
    } catch (error) {
      console.log('error', error)
    }
  }

  return (
    <div className='main-products'>
      <div className='container-form'>
        <form className='form-products' onSubmit={pasarValor}>
          <input placeholder='PLU' name='PLU' onChange={handle}></input>
          <input placeholder='DESCRIPCION' name='DESCRIPTION' onChange={handle}></input>
          <input placeholder='PRECIO' name='PRICE' onChange={handle}></input>
          <input placeholder='CATEGORIA' name='CATEGORY' onChange={handle}></input>
          <button className='button-products' type='submit'>GUARDAR</button>
        </form>
      </div>
    </div>
  )
}

export default FormProducts