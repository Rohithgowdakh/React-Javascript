import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const FakeStoreApiDemo = () => {
    const [products, setProducts] = useState([])

    const getData = async () => {
        const response = await fetch("https://fakestoreapi.com/products")
        const product =await response.json()
        setProducts(product)
    }
    useEffect(() => {
        getData()
    })
    return (
        <div>
            <div className="container-fluid">
                <div className="row justify-content-evenly">
                    {
                        products.map((productss) => {
                            return (
                                <>
                                    <div className="col-md-4 p-5 text-center">
                                        <p className='fw-bolder'>{productss.category}</p>
                                        <img src={productss.image} className='img-fluid' style={{width:"150px",height:"150px"}}/>
                                        <div >
                                            <span>Price :</span><span>{productss.price}</span>
                                        </div>
                                        <p >{productss.title}</p>
                                    </div>
                                </>
                            )

                        })
                    }
                </div>
            </div>

        </div>

    )

}

export default FakeStoreApiDemo