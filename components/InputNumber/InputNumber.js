import { useState } from "react";

export default function InputNumber(props) {
  const minValue = 0;
  const maxValue = 1000;
  const [inputNumber, setInputNumber] = useState(4);

  function inputNumberPlus(){
    if(inputNumber < maxValue) {
      setInputNumber(inputNumber + 1);
    }
  }

  function inputNumberMinus(){
    if(inputNumber > minValue) {
      setInputNumber(inputNumber - 1);
    }
  }

  return (
    <div className="input-number">
    <button type="button" onClick={inputNumberPlus}>
      <span className="icon icon-i-add" />
    </button>
    <input min={1} name="token" value={inputNumber} type="number" />
    <button type="button" onClick={inputNumberMinus}>
      <span className="icon icon-i-delete" />
    </button>
  </div>
  );
}
