import React, {useState} from 'react';
import {Input} from './components/forms/Input.jsx';
import {Range} from './components/forms/Range.jsx';
import {Checkbox} from './components/forms/Checkbox.jsx';
import {Textarea} from './components/forms/Textarea.jsx';
import {Radio} from './components/forms/Radio.jsx';
import {Select} from './components/forms/Select.jsx';
import {Button} from './components/forms/Button.jsx';
import {Buttons} from './components/forms/Buttons.jsx';

function App() {

  // Define input radio choices
  const radioChoices = [
      {key: 'key1', label: 'Label of key 1',},
      {key: 'key2', label: 'Label of key 2',},
      {key: 'key3', label: 'Label of key 3',},
  ];

  // Define select choices
  const selectChoices = [
      {key: 'keyA', label: 'Label of key A',},
      {key: 'keyB', label: 'Label of key B',},
      {key: 'keyC', label: 'Label of key C',},
      {key: 'keyD', label: 'Label of key D',},
  ];

  // Click event for button(s) in Buttons object
  const buttonClicked = (e) => {
    e.stopPropagation();
    e.preventDefault();
    console.log(e.target.innerText + ' clicked!');
  };

  // Define buttons list in Buttons object
  const buttonsList = [
    {type: 'primary', label: 'My primary button', onClick: buttonClicked},
    {type: 'secondary', label: 'My secondary button', onClick: buttonClicked},
    {type: 'warning', label: 'My warning button', onClick: buttonClicked},
  ];

  // Define useState
  const [inputTextValue, setInputTextValue] = useState('');
  const [inputNumberValue, setInputNumberValue] = useState(0);
  const [inputRangeValue, setInputRangeValue] = useState(2);
  const [checkedValue, setCheckedValue] = useState(false);
  const [textareaValue, setTextareaValue] = useState('');
  const [radioChoiceValue, setRadioChoiceValue] = useState('key2');
  const [selectChoiceValue, setSelectChoiceValue] = useState('keyC');

  // Click event for myButton object
  const myButtonClicked = (e) => {

    e.stopPropagation();
    e.preventDefault();
    console.log("Data result:", inputTextValue, inputNumberValue, inputRangeValue, checkedValue, textareaValue, radioChoiceValue, selectChoiceValue);
  };

  // Generate view
  return <div className="container mv-2 p-2">
    <h1>React Form tools</h1>
    <p>This page is used to demonstrate the usage of the following form tools:</p>
    <ul>
    <li>Input</li>
    <li>Range</li>
    <li>Checkbox</li>
    <li>Textarea</li>
    <li>Radio</li>
    <li>Select</li>
    <li>Button</li>
    <li>Buttons</li>
    </ul>
    <p>These tools are using React v18.3.1, ViteJS v4.3.1 and  Bootstrap v5.3.</p>
    <form>
      <Input
        id="myInputText"
        type="text"
        label="My input (type text)"
        placeholder="Set some simple text here..."
        value={inputTextValue}
        onChange={setInputTextValue}
      />
      <Input
        id="myInputText"
        type="number"
        label="My input (type number)"
        placeholder="Set some number here..."
        value={inputNumberValue}
        onChange={setInputNumberValue}
      />
      <Range
        id="myRange"
        label="My range number"
        min="0"
        max="5"
        step="0.5"
        value={inputRangeValue}
        onChange={setInputRangeValue}
      />
      <Checkbox
        id="myCheckValue"
        label="My check value"
        checked={checkedValue}
        onChange={setCheckedValue}
      />
      <Textarea
        id="myTextarea"
        label="My text area"
        placeholder="Set some multiple text here..."
        value={textareaValue}
        onChange={setTextareaValue}
      />
      <Radio
        name="myRadioChoice"
        label="My radio choice"
        choices={radioChoices}
        value={radioChoiceValue}
        onChange={setRadioChoiceValue} />
      <Select
        id="mySelectChoice"
        label="My select choice"
        choices={selectChoices}
        value={selectChoiceValue}
        onChange={setSelectChoiceValue} />
      <Button
        id="myButton"
        type="primary"
        label="My button"
        onClick={myButtonClicked}
      />
      <Buttons
        buttons={buttonsList}
      />
    </form>
  </div>;
}

export default App;
