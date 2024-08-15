/**
 * Function Textarea
 * Create a textarea value
 *
 * @param {string} id, object identifier
 * @param {string} label, object label
 * @param {string} placeholder, text shown inside empty object
 * @param {string} value, object value
 * @param {function} onChange, reverse data flow for value change
 *
 * @return {string} the generated object
 *
 * Copyright © 2024, philippe@croue.com, all rights reserved unser MIT licence.
 */
export function Textarea({id, label, placeholder, value, onChange}) {

  return <div className="form-element">
           <label
             htmlFor={id}
             className="form-label"
           >
             {label}
           </label>
           <textarea
             id={id}
             className="form-control"
             placeholder={placeholder}
             onChange={(e) => onChange(e.target.value)}
             defaultValue={value}
           />
         </div>;
}
