/**
 * Function Select
 * Create a select list
 *
 * @param {string} id, object id
 * @param {string} label, object label
 * @param {array} choices, possible values like [{key: 'n', label: 'Key n',}]
 * @param {string} value, object current value
 * @param {function} onChange, reverse data flow for value change
 *
 * @return {string} the generated object
 *
 * Copyright © 2024, philippe@croue.com, all rights reserved unser MIT licence.
 */
export function Select({id, label, choices, value, onChange}) {

  let out = [];

  for(let choice of choices) {

    out.push(
      <option
        id={choice.key}
        key={'select_' + name + '_' + choice.key}
        value={choice.key}
      >
        {choice.label}
      </option>
    );
  }

  return <div className="form-element">
           <label
             htmlFor={id}
             className="form-label"
           >{label}</label>
           <select
             className="form-select"
             id={id}
             value={value}
             onChange={(e) => onChange(e.target.value)}
           >
             {out}
           </select>
         </div>;
}
