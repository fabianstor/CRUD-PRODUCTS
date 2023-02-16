import './createProducts.css'
import FormProducts from '../formProducts/FormProducts'
import TableComponent from '../tableComponent/tableComponent'
import { useState } from 'react'

function CreateProducts() {
  const [first, setfirst] = useState([])

  const handlerForm = (producto:any) => {
      setfirst([])
  }
  return (
    <div className="main-table">
      <FormProducts setProducto = {handlerForm}/>
      <div className='container-table'>
        <div className='sub-container-table'>
          <TableComponent/>
        </div>
      </div>
    </div>
  )
}

export default CreateProducts