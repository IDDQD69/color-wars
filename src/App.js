import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

function ColorWarsRect() {

  const [color, setColor] = useState('green');

  const changeColor = () => {
    setColor(Konva.Util.getRandomColor());
  }

  const getRectangles = () => {
    return(
      <Layer>
        <Rect
          x={20}
          y={20}
          width={50}
          height={50}
          fill={'green'}
          fill={color}
          shadowBlur={5}
          onClick={() => {changeColor() }}
        />
      </Layer>
    );

  }

  return (
    getRectangles()
  );

}

function App() {
  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
      draggable={ true }
    >
      <ColorWarsRect />
    </Stage>
  );
}

export default App;
