import React from 'react'

const FormBasics = () => {
  return (
    <div>
        <form>
            <label htmlFor='firstname'>First Name:</label>
            <input type='text' name='firstname'/>
            <label htmlFor='lastname'>Last Name :</label>
            <input type='text' name='lastname'/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default FormBasics