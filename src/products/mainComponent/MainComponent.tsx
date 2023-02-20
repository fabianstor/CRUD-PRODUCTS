import './mainComponent.css'
import FormProducts from '../formProducts/FormProducts'
import TableComponent from '../tableComponent/TableComponent'
import { useState } from 'react'
import { IProduct } from '../../interface/products.interface'

function MainComponent() {
  const [products, setProducts] = useState([] as IProduct[])
  const [edit, setEdit] = useState(false)
  const [productEdit, setProductEdit] = useState({} as IProduct)

  return (
    <div className="main-table">
      <FormProducts setProducts = {setProducts} products = {products} edit = {edit} setEdit = {setEdit} productEdit = {productEdit} />
      <div className='container-table' >
        <div className='sub-container-table'>
          <TableComponent products = {products} edit = {edit} setEdit = {setEdit} setProductEdit = {setProductEdit} setProducts = {setProducts} />
        </div>
      </div>
    </div>
  )
}

export default MainComponent