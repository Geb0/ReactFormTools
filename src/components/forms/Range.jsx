/**
 * Function Range
 * Create an range input
 *
 * @param {string} id, object identifier
 * @param {string} label, object label
 * @param {string} min, object min value
 * @param {string} max, object max value
 * @param {string} step, object value step
 * @param {string} value, object value
 * @param {function} onChange, reverse data flow for value change
 *
 * @return {string} the generated object
 *
 * Copyright © 2024, philippe@croue.com, all rights reserved unser MIT licence.
 */
export function Range({id, label, min, max, step, value, onChange}) {

  return <div className="form-element">
           <label
             htmlFor={id}
             className="form-label"
           >
             {label}
           </label>
           <span className="form-range-value">{value}</span>
           <input
             id={id}
             type="range"
             className="form-range"
             min={min}
             max={max}
             step={step}
             value={value}
             onChange={(e) => onChange(e.target.value)}
           />
         </div>;
}
