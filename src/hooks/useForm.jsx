import  { useState } from 'react'

const useForm = (initialState={}) => {
 
const [values, setValues] = useState( initialState);


console.log('esto es lo del use Effect')



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


