import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import { render } from 'react-dom';
import { Stage, Layer, Rect, Text } from 'react-konva';
import Konva from 'konva';

function ColorWarsRect() {

  const [rectangles, setRectanges] = useState(() => {
    const initState = [];
    let w = 15;
    let h = 15;

    let rectangles = [];
    for (var x = 0; x < w; x++) {
      for (var y = 0; y < h; y++) {
        initState.push({
          id: 0,
          x: x,
          y: y,
          color: 'green'
        })
      }
    }
    return initState;
  });

  const changeColor = (x, y) => {
    const newRects = [];
    for (let r in rectangles) {
      if (r.x === x && r.y === y) {
        r.color = Konva.Util.getRandomColor();
      }
      newRects.push(r);
    }

    setRectanges(newRects);
  }

  const renderRectangles = () => {
    return(
      <Layer>
        {rectangles.map((rect) => (
          <Rect
            x={ rect['x'] * 51 }
            y={ rect['y'] * 51}
            onClick={() => { changeColor(rect['x'], rect['y']) }}
            fill={ rect['color'] }
            width={50}
            height={50}
          />

        ))}
      </Layer>
    );

  }

  return (
    renderRectangles()
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
