import React from 'react';

type DisplayPropsType = {
    maxValue: number
    value: number
}

const Display = ({maxValue, value}: DisplayPropsType) => {
    return (
        <div className={'display'}>
            <span className={'max-value'}>Max value: {maxValue}</span>
            <span className={`value ${value === maxValue ? 'red' : ''}`}>{value}</span>
            <progress className={'progress-bar'} value={value} max={maxValue}></progress>
        </div>
    );
};

export default Display;