import './createProducts.css'
import FormProducts from '../formProducts/FormProducts'
import TableComponent from '../tableComponent/TableComponent'
import { useState } from 'react'
import { IProduct } from '../../interface/products.interface'

function CreateProducts() {
  const [products, setProducts] = useState([] as IProduct[])
  const [product, setProduct] = useState({} as IProduct)
  const arrayProducts: IProduct[] = []

  const handlerForm = (product: IProduct, event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct(product)
    arrayProducts.push(product)
    setProducts(arrayProducts)
    event.preventDefault()
  }

  return (
    <div className="main-table">
      <FormProducts setProducts = {() => handlerForm}/>
      <div className='container-table'>
        <div className='sub-container-table'>
          <TableComponent/>
        </div>
      </div>
    </div>
  )
}

export default CreateProducts