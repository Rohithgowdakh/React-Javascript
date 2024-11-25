import React, { useEffect, useState } from 'react'
import axios from 'axios'

const DisplayMaterialDetails = () => {
    const [materials, setMaterials] = useState([])
    const [newMaterial, setNewMaterial] = useState({
        description: '',
        quantity: '',
        price: '',
        supplier: ''
    })

    // Fetch materials from the backend
    async function showMaterials() {
        try {
            const response = await axios.get('http://localhost:6362/v1/api/material-details')
            setMaterials(response.data)
        } catch (error) {
            console.error("Error fetching materials:", error)
        }
    }

    // Handle input changes in the form
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setNewMaterial({ ...newMaterial, [name]: value })
    }

    // Handle form submission to add a new material
    const addMaterial = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('http://localhost:6362/v1/api/material-details', newMaterial)
            setMaterials([...materials, response.data]) // Update materials list
            setNewMaterial({ description: '', quantity: '', price: '', supplier: '' }) // Reset form
        } catch (error) {
            console.error("Error adding material:", error)
        }
    }

    useEffect(() => {
        showMaterials()
    }, [])

    return (
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-md-6">
                    <h3>Add New Material</h3>
                    <form onSubmit={addMaterial}>
                        <div className="form-group">
                            <label>Description</label>
                            <input
                                type="text"
                                name="description"
                                value={newMaterial.description}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Quantity</label>
                            <input
                                type="number"
                                name="quantity"
                                value={newMaterial.quantity}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Price</label>
                            <input
                                type="number"
                                step="0.01"
                                name="price"
                                value={newMaterial.price}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Supplier</label>
                            <input
                                type="text"
                                name="supplier"
                                value={newMaterial.supplier}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Add Material Details</button>
                    </form>
                </div>

                <div className="col-md-6">
                    <h3>Material Details</h3>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Description</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Supplier</th>
                            </tr>
                        </thead>
                        <tbody>
                            {materials.map((material) => (
                                <tr key={material.id}>
                                    <td>{material.id}</td>
                                    <td>{material.description}</td>
                                    <td>{material.quantity}</td>
                                    <td>{material.price}</td>
                                    <td>{material.supplier}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default DisplayMaterialDetails
