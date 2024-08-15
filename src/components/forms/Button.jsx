/**
 * Function Button
 * Create a button
 *
 * @param {string} label, object label
 * @param {string} type, button type (primary, secondary...)
 * @param {string} label, button label
 * @param {function} onClick, reverse data flow for click
 *
 * @return {string} the generated object
 *
 * Copyright © 2024, philippe@croue.com, all rights reserved unser MIT licence.
 */
export function Button({id, type, label, onClick}) {

  const buttonClass = 'btn btn-' + type;

  return <div className="form-element">
           <button
             className={buttonClass}
             onClick={(e) => onClick(e)}
           >{label}</button>
         </div>;
}
