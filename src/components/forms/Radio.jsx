/**
 * Function Radio
 * Create a radio list
 *
 * @param {string} name, object name
 * @param {array} choices, possible values like [{key: 'n', label: 'Key n'},...]
 * @param {string} value, object current value
 * @param {function} onChange, reverse data flow for value change
 *
 * @return {string} the generated object
 *
 * Copyright © 2024, philippe@croue.com, all rights reserved unser MIT licence.
 */
export function Radio({name, label, choices, value, onChange}) {

  let out = [];

  for(let choice of choices) {

    out.push(
      <div key={'radio_key_' + name + '_' + choice.key}>
        <input
          type="radio"
          className="form-check-input"
          name={name}
          id={name + '_' + choice.key}
          value={choice.key}
          checked={choice.key === value}
          onChange={(e) => onChange(e.target.value)}
        />
        <label
          htmlFor={name + '_' + choice.key}
          className="form-check-label"
        >{choice.label}</label>
      </div>
    );
  }

  return <div className="form-element">
           <label
             htmlFor={'radio_div_' + name}
             className="form-label"
           >
             {label}
           </label>
           <div id={'radio_div_' + name} className="form-check">
             {out}
           </div>
         </div>;
}
