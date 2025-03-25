import './App.css'
import Display from "./components/Display.tsx";
import {Button} from "./components/Button.tsx";
import {useState} from "react";

function getRandomInt() {
    return Math.floor(Math.random() * 10) + 1;
}

function App() {
    const MIN_VALUE = 0;
    const [value, setValue] = useState<number>(0);
    const [maxValue, setMaxValue] = useState<number>(getRandomInt());
    const handleButtonIncClick = () => {
        if (value < maxValue) {
            setValue(value + 1)
        }
    }
    const handleButtonResClick = () => {
        setValue(0);
        setMaxValue(getRandomInt());
    }

  return (
    <>
        <Display maxValue={maxValue} value={value}/>
        <Button className={'button button-inc'} title={'Inc'} onClickHandler={handleButtonIncClick} disabled={!(value < maxValue)}/>
        <Button className={'button'} title={'Res'} onClickHandler={handleButtonResClick} disabled={value === MIN_VALUE}/>
    </>
  )
}

export default App
