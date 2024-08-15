/**
 * Function Buttons
 * Create a group of buttons
 *
 * @param {array} buttons, list of buttons to add like [{type: 'primary', label: 'text', onClick: function},...]
 *
 * @return {string} the generated object
 *
 * Copyright © 2024, philippe@croue.com, all rights reserved unser MIT licence.
 */
export function Buttons({buttons}) {

  let key = -1;
  let out = [];

  for(let button of buttons) {

    key++;
    out.push(
      <button
        key={key}
        className={'btn btn-' + button.type}
        onClick={(e) => button.onClick(e)}
      >{button.label}</button>
    );
  }

  return <div className="form-element">
           <div className="form-buttons">
             {out}
           </div>
         </div>;
}
