/**
 * Function Input
 * Create an input value
 *
 * @param {string} id, object identifier
 * @param {string} type, object type (text, number, password...)
 * @param {string} label, object label
 * @param {string} placeholder, text shown inside empty object
 * @param {string} value, object value
 * @param {function} onChange, reverse data flow for value change
 *
 * @return {string} the generated object
 *
 * Copyright © 2024, philippe@croue.com, all rights reserved unser MIT licence.
 */
export function Input({id, type, label, placeholder, value, onChange}) {

  return <div className="form-element">
           <label
             htmlFor={id}
             className="form-label"
           >
             {label}
           </label>
           <input
             id={id}
             type={type}
             className="form-control"
             value={value}
             placeholder={placeholder}
             onChange={(e) => onChange(e.target.value)}
           />
         </div>;
}
