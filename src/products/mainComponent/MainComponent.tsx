import './mainComponent.css'
import FormProducts from '../formProducts/FormProducts'
import TableComponent from '../tableComponent/TableComponent'
import { useState } from 'react'
import { IProduct } from '../../interface/products.interface'

function MainComponent() {
  const [products, setProducts] = useState([] as IProduct[])
  const [edit, setEdit] = useState(false)
  const [productEdit, setProductEdit] = useState({} as IProduct)
  const [create, setCreate] = useState(false)

  const changeStateCreate = () => {
    setCreate(!create)
  }

  return (
    <div className='main-table'>
      <FormProducts create = {create} setCreate = {setCreate} setProducts = {setProducts} products = {products} edit = {edit} setEdit = {setEdit} productEdit = {productEdit} />
      <div className={create || (edit && window.innerWidth <= 440) ? 'container-table-none' : 'container-table'} >
        <div className={edit && window.innerWidth <= 440 ? 'sub-container-table-none' : 'sub-container-table'}>
          <TableComponent products = {products} edit = {edit} setEdit = {setEdit} setProductEdit = {setProductEdit} setProducts = {setProducts} />
        </div>
      </div>
      <button className={create || edit ? 'btn-float-none' : 'btn-float'} onClick={changeStateCreate}>+</button>
    </div>
  )
}

export default MainComponent