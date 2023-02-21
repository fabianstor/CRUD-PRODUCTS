import { useState } from 'react'
import { IProduct, IProps } from '../../interface/products.interface'
import './formProducts.css'
import EditoFormProducts from '../editFormProducts/editFormProducts'
function FormProducts({setProducts, products, edit, productEdit, setCreate, create, setEdit}: IProps) {
  
  const [product, setProduct] = useState({} as IProduct)
  const [id, setId] = useState(1)

  const handle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value
    })
    event.preventDefault()
  }

  const idIncrement = () => {
    const productId = product
    productId.ID = id
    setId(id + 1)
    setProduct(productId)
  }

  const validateExistProduct = () => {
    let notExistProduct = true
    if(product.PLU){
      products.forEach((productList) => {
          if(productList.PLU === product.PLU) notExistProduct = false
      })
    }
    return notExistProduct
  }

  const createProduct = (event: React.ChangeEvent<HTMLInputElement>) => {
      if(validateExistProduct()){
          setProducts((prev)=>{
            idIncrement()
            return [...prev,product]
          })
          setCreate(false)
      } else {
        alert("El producto ya se encuentra registrado")
      }
      event.preventDefault()
  }

  return (
    edit ? <EditoFormProducts products = {products} setProducts = {setProducts} productEdit = {productEdit} setEdit = {setEdit} /> :
    <div className={create ? 'main-products-none' : 'main-products'}>
      <div className={create ? 'container-form-none' : 'container-form'}>
        <form className='form-products' onSubmit={(e: any) => createProduct(e)}>
          <input placeholder='PLU' name='PLU' onChange={handle} required></input>
          <input placeholder='DESCRIPCION' name='DESCRIPTION' onChange={handle} required></input>
          <input placeholder='PRECIO' name='PRICE' onChange={handle} required></input>
          <input placeholder='CATEGORIA' name='CATEGORY' onChange={handle} required></input>
          <button className='button-products' type='submit'>GUARDAR</button>
        </form>
      </div>
    </div>
  )
}

export default FormProducts