import React, { Component } from "react";
import { Stage, Circle, Layer, Line, Text, Group } from "react-konva";
import generator from "random-array-generator";

const OFFSET = {
  x: -20,
  y: -20
};
const RADIUS = 10;
const TEXTSIZE = 10;
const X_MAX = 250;
const Y_MAX = 250;
const RANDOM_BEGIN_POSITION = generator.randomArray({
  min: 0,
  max: 100,
  elements: 21
});

class Diagram extends Component {
  render() {
    const {
      keysName,
      labels = [],
      header,
      form: { getFieldDecorator, getFieldValue, setFieldsValue },
      valuesName,
      positionsName,
      isColor
    } = this.props;
    const keys = getFieldValue(keysName);
    const values = getFieldValue(valuesName);
    const color = getFieldValue(isColor);
    return (
      <React.Fragment>
        <span className="question">{header}</span>
        {labels.map(label => (
          <div key={label}>{label}</div>
        ))}
        <div className="dynamic-list ">
          <Stage width={window.innerWidth - 45} height={320}>
            <Layer>
              <Line
                offset={OFFSET}
                x={0}
                y={0}
                points={[0, 0, 0, Y_MAX, X_MAX, Y_MAX]}
                stroke="black"
              />
              <Line
                offset={OFFSET}
                points={[X_MAX / 2, Y_MAX, X_MAX / 2, 0]}
                stroke="black"
              />
              <Line
                offset={OFFSET}
                points={[X_MAX, Y_MAX / 2, 0, Y_MAX / 2]}
                stroke="black"
              />
              {keys.map(k => {
                getFieldDecorator(`${positionsName}[${k}]`, {
                  initialValue: { x: 0, y: RANDOM_BEGIN_POSITION[k] }
                });
                if (!values[k]) {
                  return null;
                }
                const coordinates = getFieldValue(`${positionsName}[${k}]`);
                const scaledCoordinates = {
                  x: coordinates.x * 2.5,
                  y: Math.abs((coordinates.y - 100) * 2.5)
                };
                return (
                  <Group
                    key={`${coordinates.x}-${coordinates.y}`}
                    x={scaledCoordinates.x}
                    y={scaledCoordinates.y}
                    draggable
                    onDragEnd={e => {
                      const positions = [...getFieldValue(positionsName)];
                      positions[k] = {
                        x: e.target.x() / 2.5,
                        y: Math.abs(e.target.y() / 2.5 - 100)
                      };
                      setFieldsValue({
                        [positionsName]: positions
                      });
                    }}
                    dragBoundFunc={pos => {
                      let x = pos.x;
                      let y = pos.y;
                      if (x > X_MAX) {
                        x = X_MAX;
                      } else if (x < 0) {
                        x = 0;
                      }
                      if (y > Y_MAX) {
                        y = Y_MAX;
                      } else if (y < 0) {
                        y = 0;
                      }
                      return {
                        x,
                        y
                      };
                    }}
                  >
                    <Circle
                      key={k}
                      offset={OFFSET}
                      radius={RADIUS}
                      fill={color[k]}
                    />
                    <Text text={values[k]} fontSize={TEXTSIZE} x={30} y={15} />
                  </Group>
                );
              })}
              <Text
                text="IMPACT (HIGH)"
                fontSize={TEXTSIZE}
                x={TEXTSIZE - 2}
                rotation={270}
                y={Y_MAX / 2}
              />
              <Text
                text="IMPACT (LOW)"
                fontSize={TEXTSIZE}
                x={TEXTSIZE - 2}
                rotation={270}
                y={Y_MAX}
              />
              <Text
                text="COSTS (HIGH)"
                fontSize={TEXTSIZE}
                x={-2 * OFFSET.x + X_MAX / 2}
                y={Y_MAX - OFFSET.y + 2}
              />
              <Text
                text="COSTS (LOW)"
                fontSize={TEXTSIZE}
                x={-2 * OFFSET.x}
                y={Y_MAX - OFFSET.y + 2}
              />
            </Layer>
          </Stage>
        </div>
      </React.Fragment>
    );
  }
}

export default Diagram;
