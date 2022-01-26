import React from 'react';

import './form-input.styles.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => (
   <div className='group'> {/* passing props in sign-in component name,type, value , required etc, they come in otherProps */}
       <input className='form-input' onChange={handleChange} {...otherProps} />
       {
           label ?
           (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label `}>
             {label}
           </label>)
           : null 
       }
   </div>
);

export default FormInput;