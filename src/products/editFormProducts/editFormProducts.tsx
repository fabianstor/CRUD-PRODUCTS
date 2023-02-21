import { useState } from "react"
import { IProduct, IPropsEditProduct } from "../../interface/products.interface"
import './editFormProducts.css'
function EditoFormProducts({products, setProducts, productEdit, setEdit}: IPropsEditProduct) {
  const [product, setProduct] = useState({} as IProduct)


  const handle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value
    })
    event.preventDefault()
  }

  const updateProduct = () => {
    const arrayProduct = [...products];
    const index = arrayProduct.findIndex((p) => p.PLU === productEdit.PLU)
    if (index >= 0) {
      const updatedProduct = { ...arrayProduct[index], ...product }
      arrayProduct[index] = updatedProduct
      setProducts(arrayProduct)
      setEdit(false)
    }
  }

  return (
    <div className='main-edit-products'>
    <div className='container-edit-form'>
      <form className='form-edit-products'>
        <input className="input-plu" placeholder='PLU' name='PLU' value={productEdit.PLU} disabled={true} required></input>
        <input placeholder='DESCRIPCION' name='DESCRIPTION' onChange={handle} value={productEdit.DESCRIPTION} required></input>
        <input placeholder='PRECIO' name='PRICE' onChange={handle} value={productEdit.PRICE} required></input>
        <input placeholder='CATEGORIA' name='CATEGORY' onChange={handle} value={productEdit.CATEGORY} required></input>
        <button className='button-edit-products' type="button" onClick={updateProduct}>EDITAR</button>
      </form>
    </div>
  </div>
  )
}

export default EditoFormProducts