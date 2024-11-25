import React, { useEffect, useState } from "react";
import axios from "axios";

const DisplayMaterials = () => {
    const [materials, setMaterials] = useState([]);
    const [newMaterial, setNewMaterial] = useState({
        name: "",
        materialType: "",
    });
    const [newDetail, setNewDetail] = useState({
        materialId: "",
        description: "",
        quantity: "",
        price: "",
        supplier: "",
    });

    // Fetch all materials from localStorage or backend
    const showMaterials = async () => {
        try {
            // Check localStorage first
            const storedMaterials = localStorage.getItem("materials");
            if (storedMaterials) {
                setMaterials(JSON.parse(storedMaterials)); // Load from localStorage
            } else {
                // If not found in localStorage, fetch from the backend
                const response = await axios.get("http://localhost:6362/v1/api/material");
                setMaterials(response.data);
                localStorage.setItem("materials", JSON.stringify(response.data)); // Save to localStorage
            }
        } catch (error) {
            console.error("Error fetching materials:", error);
        }
    };

    // Add new material
    const addMaterial = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:6362/v1/api/material", newMaterial);
            const updatedMaterials = [...materials, response.data];
            setMaterials(updatedMaterials);
            localStorage.setItem("materials", JSON.stringify(updatedMaterials)); // Update localStorage
            setNewMaterial({ name: "", materialType: "" });
        } catch (error) {
            console.error("Error adding material:", error);
        }
    };

    // Add new detail to the child table
    const addDetail = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(
                "http://localhost:6362/v1/api/material-details",
                newDetail
            );

            // Update the relevant material's details in the state
            const updatedMaterials = materials.map((material) => {
                if (material.id === parseInt(newDetail.materialId)) {
                    return {
                        ...material,
                        details: [...material.details, response.data],
                    };
                }
                return material;
            });

            setMaterials(updatedMaterials);
            localStorage.setItem("materials", JSON.stringify(updatedMaterials)); // Update localStorage
            setNewDetail({
                materialId: "",
                description: "",
                quantity: "",
                price: "",
                supplier: "",
            });
        } catch (error) {
            console.error("Error adding detail:", error);
        }
    };

    // Delete material
    const deleteMaterial = async (id) => {
        try {
            await axios.delete(`http://localhost:6362/v1/api/material/${id}`);
            const updatedMaterials = materials.filter((material) => material.id !== id);
            setMaterials(updatedMaterials);
            localStorage.setItem("materials", JSON.stringify(updatedMaterials)); // Update localStorage
        } catch (error) {
            console.error("Error deleting material:", error);
        }
    };

    // Handle input changes for the material form
    const handleMaterialInputChange = (e) => {
        const { name, value } = e.target;
        setNewMaterial({ ...newMaterial, [name]: value });
    };

    // Handle input changes for the detail form
    const handleDetailInputChange = (e) => {
        const { name, value } = e.target;
        setNewDetail({ ...newDetail, [name]: value });
    };

    useEffect(() => {
        showMaterials(); // Fetch materials when the component mounts
    }, []);

    return (
        <div className="container-fluid">
            <div className="row mt-5">
                <div className="col-md-6">
                    <h3>Add New Material</h3>
                    <form onSubmit={addMaterial}>
                        <div className="form-group">
                            <label>Material Name</label>
                            <input
                                type="text"
                                name="name"
                                value={newMaterial.name}
                                onChange={handleMaterialInputChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Material Type</label>
                            <input
                                type="text"
                                name="materialType"
                                value={newMaterial.materialType}
                                onChange={handleMaterialInputChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">
                            Add Material
                        </button>
                    </form>
                </div>

                <div className="col-md-6">
                    <h3>Add Material Details</h3>
                    <form onSubmit={addDetail}>
                        <div className="form-group">
                            <label>Material</label>
                            <select
                                name="materialId"
                                value={newDetail.materialId}
                                onChange={handleDetailInputChange}
                                className="form-control"
                                required
                            >
                                <option value="">Select Material</option>
                                {materials.map((material) => (
                                    <option key={material.id} value={material.id}>
                                        {material.name} (ID: {material.id})
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <input
                                type="text"
                                name="description"
                                value={newDetail.description}
                                onChange={handleDetailInputChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Quantity</label>
                            <input
                                type="number"
                                name="quantity"
                                value={newDetail.quantity}
                                onChange={handleDetailInputChange}
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
                                value={newDetail.price}
                                onChange={handleDetailInputChange}
                                className="form-control"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Supplier</label>
                            <input
                                type="text"
                                name="supplier"
                                value={newDetail.supplier}
                                onChange={handleDetailInputChange}
                                className="form-control"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary mt-3">
                            Add Detail
                        </button>
                    </form>
                </div>
            </div>

            <div className="row mt-5">
                <div className="col-md-12">
                    <h3>Material Details</h3>
                    <table className="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Material Name</th>
                                <th>Material Type</th>
                                <th>Material Details</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {materials.map((material) => (
                                <React.Fragment key={material.id}>
                                    <tr>
                                        <td>{material.id}</td>
                                        <td>{material.name}</td>
                                        <td>{material.materialType}</td>
                                        <td>
                                            {material.details?.length > 0
                                                ? "View Details"
                                                : "No Details Available"}
                                        </td>
                                        <td>
                                            <button
                                                onClick={() => deleteMaterial(material.id)}
                                                className="btn btn-danger btn-sm"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                    {material.details?.length > 0 && (
                                        <tr>
                                            <td colSpan="5">
                                                <table className="table table-bordered">
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
                                                        {material.details.map((detail) => (
                                                            <tr key={detail.id}>
                                                                <td>{detail.id}</td>
                                                                <td>{detail.description}</td>
                                                                <td>{detail.quantity}</td>
                                                                <td>{detail.price}</td>
                                                                <td>{detail.supplier}</td>
                                                            </tr>
                                                        ))}
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default DisplayMaterials;
