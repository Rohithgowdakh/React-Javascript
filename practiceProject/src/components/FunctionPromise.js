 const FunctionPromise = () => {
  fetch("https://api.github.com/users").then(response=>{
    return(response.json)
  }).then(data=>{
    console.log(data)
  })
}
FunctionPromise()
