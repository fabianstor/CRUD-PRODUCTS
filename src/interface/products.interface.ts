import { Dispatch, SetStateAction } from "react"

export interface IProduct {
    ID: number
    PLU: number
    DESCRIPTION: string
    PRICE: number
    CATEGORY: string
}
export interface IProps {
    setProducts:Dispatch<SetStateAction<IProduct[]>>
    products: IProduct[]
    edit: boolean
    setEdit: Dispatch<SetStateAction<boolean>>
    productEdit: IProduct
}
export interface IPropsTable {
    products: IProduct[]
    edit: boolean
    setEdit: Dispatch<SetStateAction<boolean>>
    setProductEdit: Dispatch<SetStateAction<IProduct>>
    setProducts: Dispatch<SetStateAction<IProduct[]>>
}
export interface IPropsEditProduct {
    products: IProduct[]
    productEdit: IProduct
    setProducts: Dispatch<SetStateAction<IProduct[]>>
}