import React from "react";

const CustomerDetails=()=>{
    return(
        <>
            <CustomerName/>
            <CustomerLocation/>
        </>
    )
}
export const CustomerName=()=><h1>Rohith</h1>
console.log(CustomerName)
const CustomerLocation=()=><h1>Bengaluru</h1>

export default CustomerDetails