import { IProduct, IPropsTable } from "../../interface/products.interface"
import './tableComponent.css'
import imageTrash from '../../assets/trash.png'
import imagePencil from '../../assets/pencil.png'

function TableComponent({products, setEdit, edit, setProductEdit, setProducts}: IPropsTable) {

  const deleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.ID != id))
  }

  const editProduct = (product: IProduct) => {
      setProductEdit(product)
      setEdit(!edit)
  }

  const renderTable = () => {
    return products.map((product, index) => {
      return(
        <tr key={product.PLU} className={index%2 == 0 ? 'tr-products-even' : 'tr-products-odd'}>
          <td>{product.PLU}</td>
          <td>{product.DESCRIPTION}</td>
          <td>{product.PRICE}</td>
          <td>{product.CATEGORY}</td>
          <td>
            <div className="container-btn-img">
              <button className={index%2 == 0 ? "btn-img" : "btn-img-white"} type="button" onClick={() => editProduct(product)}><input type="image" className="img" src={imagePencil}/></button>
              <button className={index%2 == 0 ? "btn-img" : "btn-img-white"} type="button" onClick={() => deleteProduct(product.ID)}><input type="image" className="img" src={imageTrash}/></button>
            </div>
          </td>
        </tr>
      )
    }) 
  }

  return (
        <table className="table-products">
        <thead>
        <tr>
            <th>PLU</th>
            <th>DESCRIPCION</th>
            <th>PRECIO</th>
            <th>CATEGORIA</th>
            <th>ACCIONES</th>
        </tr>
        </thead>
        <tbody>
          {renderTable()}
        </tbody>
    </table>
  )
}

export default TableComponent