import axios from "axios"

const BASE_URL_MATERIAL='http://localhost:6362/v1/api/material'
const BASE_URL_MATERIAL_DETAILS='http://localhost:6362/v1/api/material-details'

export const createMaterial=(material)=>{
    axios.post(BASE_URL_MATERIAL, material)
}


export const getAllMaterial=()=>{
    axios.get('http://localhost:6362/v1/api/material')
}
export const createMaterialDetails=(matDet)=>{
    axios.post(BASE_URL_MATERIAL_DETAILS, matDet)
}