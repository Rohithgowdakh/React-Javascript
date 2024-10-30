import React, { useEffect, useState } from 'react'
import axios from 'axios'
const ProductApiDemo = () => {
    const [product, setProduct] = useState([])

    const productDemo = async () => {
        const response = await axios.get("http://localhost:6363/v1/api/products")
        const result = response.data
        setProduct(result)
    }
    useEffect(() => {
        productDemo()
    },[])
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className='text-center'>Product Details</h1>
                        <table className='table table-bordered '>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>ProductName</th>
                                    <th>ProductType</th>
                                    <th>ProductDescription</th>
                                    <th>CreatedAt</th>
                                    <th>UpdatedAt</th>
                                </tr>

                            </thead>
                            <tbody>
                                <>
                                    {
                                        product.map((product1) => {
                                            return(
                                            <tr>
                                                <td> {product1.id}</td>
                                                <td>{product1.productName}</td>
                                                <td>{product1.productType}</td>
                                                <td>{product1.productDesc}</td>
                                                <td>{product1.createdAt}</td>
                                                <td>{product1.updatedAt}</td>
                                            </tr>
                                            )
                                        })
                                    }
                                </>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductApiDemo