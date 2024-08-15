/**
 * Function Checkbox
 * Create a checkbox input value
 *
 * @param {string} id, object identifier
 * @param {string} label, object label
 * @param {boolean} checked, object value
 * @param {function} onChange, reverse data flow for value change
 *
 * @return {string} the generated object
 *
 * Copyright © 2024, philippe@croue.com, all rights reserved unser MIT licence.
 */
export function Checkbox({id, label, checked, onChange}) {

  return <div className="form-element">
           <div className="form-check">
             <input
               id={id}
               name={id}
               type="checkbox"
               className="form-check-input"
               checked={checked}
               onChange={(e) => onChange(e.target.checked)}
             />
             <label
               className="form-check-label"
               htmlFor={id}
             >{label}</label>
           </div>
         </div>;
}
