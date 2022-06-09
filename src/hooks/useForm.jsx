import  { useState } from 'react'

const useForm = (initialState={}) => {
 
const [values, setValues] = useState( initialState)



const handleChangeInput = ({ target }) => {
    setValues({
    ...values,
    [target.name]: target.value,
    
  });
};

return [
    values,
    handleChangeInput
]

}

export default useForm