import React, { useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const AddMaterial = () => {
    const [material, setMaterial] = useState({
        name: '',
        materialType: '',
        details: [{
            description: '',
            quantity: 0,
            price: 0.0,
            supplier: ''
        }]
    });
    const location = useLocation();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMaterial({
            ...material,
            [name]: value
        });
    };

    const handleDetailChange = (e) => {
        const { name, value } = e.target;
        setMaterial({
            ...material,
            details: [{
                ...material.details[0],
                [name]: value
            }]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:6362/v1/api/material', material);
          
            const addedMaterial = response.data;
            
            if (location.state && location.state.onMaterialAdded) {
                location.state.onMaterialAdded(addedMaterial);
            }
            navigate("/material"); 
        } catch (error) {
            console.error("Error adding material:", error);
        }
    };

    return (
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-md-12">
                    <h3>Add New Material</h3>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Material Name</label>
                            <input
                                type="text"
                                name="name"
                                value={material.name}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Material Type</label>
                            <input
                                type="text"
                                name="materialType"
                                value={material.materialType}
                                onChange={handleInputChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input
                                type="text"
                                name="description"
                                value={material.details[0].description}
                                onChange={handleDetailChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Quantity</label>
                            <input
                                type="number"
                                name="quantity"
                                value={material.details[0].quantity}
                                onChange={handleDetailChange}
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
                                value={material.details[0].price}
                                onChange={handleDetailChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Supplier</label>
                            <input
                                type="text"
                                name="supplier"
                                value={material.details[0].supplier}
                                onChange={handleDetailChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">Add Material</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddMaterial;
