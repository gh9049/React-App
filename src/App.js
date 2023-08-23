import React, { useState } from "react";
import "./App.css";

const Button = ({
  //applying multiple properties for the functional component Button
  buttonText,
  onClick,
  selected,
  tooltipText,
  textSize,
  padding,
  textColor,
  bgColor,
  cornerRadius,
  tooltipWidth,
  arrowHeight,
  arrowWidth,
}) => (
  <div className="tooltip">
    <button onClick={onClick}>{buttonText}</button>
    <span
      className={`tooltiptext ${selected ? "visible" : ""}`}
      style={{
        fontSize: `${textSize}px`,
        padding: `${padding}px`,
        color: textColor,
        backgroundColor: bgColor,
        borderRadius: `${cornerRadius}px`,
        width: `${tooltipWidth}px`,
        top: `-${arrowHeight}px`,
        bottom: `${arrowWidth}px`,
      }}
    >
      {tooltipText}
    </span>
  </div>
);

const App = () => {
  const buttonLabels = [
    "Button 1",
    "Button 2",
    "Button 3",
    "Button 4",
    "Button 5",
  ];

  const tooltipTexts = [
    "Tooltip 1",
    "Tooltip 2",
    "Tooltip 3",
    "Tooltip 4",
    "Tooltip 5",
  ];
  //Initializations
  const [selectedButtonIndex, setSelectedButtonIndex] = useState(null);
  const [tooltipInput, setTooltipInput] = useState("");
  const [tooltips, setTooltips] = useState(
    new Array(buttonLabels.length).fill("")
  );
  const [textSizes, setTextSizes] = useState(
    new Array(buttonLabels.length).fill(12)
  );
  const [paddings, setPaddings] = useState(
    new Array(buttonLabels.length).fill(0)
  );
  const [textColors, setTextColors] = useState(
    new Array(buttonLabels.length).fill("#fff")
  );
  const [bgColors, setBgColors] = useState(
    new Array(buttonLabels.length).fill("#00000")
  );
  const [cornerRadii, setCornerRadii] = useState(
    new Array(buttonLabels.length).fill(0)
  );
  const [tooltipWidths, setTooltipWidths] = useState(
    new Array(buttonLabels.length).fill(120)
  );
  const [arrowWidths, setArrowWidths] = useState(
    new Array(buttonLabels.length).fill(10)
  );
  const [arrowHeights, setArrowHeights] = useState(
    new Array(buttonLabels.length).fill(8)
  );

  //To handle the already given tooltip text
  const handleSaveTooltip = () => {
    if (selectedButtonIndex !== null && tooltipInput !== "") {
      const updatedTooltips = [...tooltips];
      updatedTooltips[selectedButtonIndex] = tooltipInput;
      setTooltips(updatedTooltips);
    }
  };

  return (
    <div className="App">
      <div className="App-content">
        <div className="input-container">
          <div className="input-wrapper">
            <p className="text">Target Element</p>
            <select
              className="dropdownlist"
              onChange={(e) => setSelectedButtonIndex(parseInt(e.target.value))} // triggers when the value of the dropdown changes
            >
              <option value={null}>Select a button</option>
              {buttonLabels.map(
                (
                  buttonText,
                  index //gives set of buttons to select
                ) => (
                  <option key={index} value={index}>
                    {buttonText}
                  </option>
                )
              )}
            </select>
            <p className="text">Tooltip text</p>
            <input
              className="input"
              type="text"
              placeholder="Input"
              value={tooltipInput}
              onChange={(e) => setTooltipInput(e.target.value)} // triggers when the value of the dropdown changes
            />
            <button onClick={handleSaveTooltip}>Save Tooltip</button>
            <div className="input-container">
              <div className="input-wrapper">
                <p className="text">Text Size</p>
                <input
                  className="input1"
                  type="text"
                  placeholder="Input"
                  value={textSizes[selectedButtonIndex] || 12}
                  onChange={(e) => {
                    const newSize = parseInt(e.target.value); // triggers when the value of the dropdown changes
                    const updatedSizes = [...textSizes];
                    updatedSizes[selectedButtonIndex] = newSize;
                    setTextSizes(updatedSizes);
                  }}
                />
              </div>
              <div className="input-wrapper">
                <p className="text">Padding</p>
                <input
                  className="input1"
                  type="text"
                  placeholder="Input"
                  value={paddings[selectedButtonIndex] || 0}
                  onChange={(e) => {
                    const newPadding = parseInt(e.target.value);
                    const updatedPaddings = [...paddings];
                    updatedPaddings[selectedButtonIndex] = newPadding;
                    setPaddings(updatedPaddings);
                  }}
                />
              </div>
            </div>
            <p className="text">Text Colour</p>
            <input
              className="input"
              type="color"
              value={textColors[selectedButtonIndex] || "#fff"}
              onChange={(e) => {
                const newColor = e.target.value;
                const updatedColors = [...textColors];
                updatedColors[selectedButtonIndex] = newColor;
                setTextColors(updatedColors);
              }}
            />
            <p className="text">Background Colour</p>
            <input
              className="input"
              type="color"
              value={bgColors[selectedButtonIndex] || "#ffffff"}
              onChange={(e) => {
                const newColor = e.target.value;
                const updatedColors = [...bgColors];
                updatedColors[selectedButtonIndex] = newColor;
                setBgColors(updatedColors);
              }}
            />
            <div className="input-container">
              <div className="input-wrapper">
                <p className="text">Corner radius</p>
                <input
                  className="input1"
                  type="text"
                  placeholder="Input"
                  value={cornerRadii[selectedButtonIndex] || 0}
                  onChange={(e) => {
                    const newRadius = parseInt(e.target.value);
                    const updatedRadii = [...cornerRadii];
                    updatedRadii[selectedButtonIndex] = newRadius;
                    setCornerRadii(updatedRadii);
                  }}
                />
              </div>
              <div className="input-wrapper">
                <p className="text">Tooltip width</p>
                <input
                  className="input1"
                  type="number"
                  placeholder="Input"
                  value={tooltipWidths[selectedButtonIndex] || 120}
                  onChange={(e) => {
                    const newWidth = parseInt(e.target.value);
                    const updatedWidths = [...tooltipWidths];
                    updatedWidths[selectedButtonIndex] = newWidth;
                    setTooltipWidths(updatedWidths);
                  }}
                />
              </div>
            </div>
            <div className="input-container">
              <div className="input-wrapper">
                <p className="text">Arrow width</p>
                <input
                  className="input1"
                  type="number"
                  placeholder="Input"
                  value={arrowWidths[selectedButtonIndex] || 10}
                  onChange={(e) => {
                    const newWidth = parseInt(e.target.value);
                    const updatedWidths = [...arrowWidths];
                    updatedWidths[selectedButtonIndex] = newWidth;
                    setArrowWidths(updatedWidths);
                  }}
                />
              </div>
              <div className="input-wrapper">
                <p className="text">Arrow height</p>
                <input
                  className="input1"
                  type="number"
                  placeholder="Input"
                  value={arrowHeights[selectedButtonIndex] || 8}
                  onChange={(e) => {
                    const newHeight = parseInt(e.target.value);
                    const updatedHeights = [...arrowHeights];
                    updatedHeights[selectedButtonIndex] = newHeight;
                    setArrowHeights(updatedHeights);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mobile">
            <div className="screen">
              <div className="butun">
                {buttonLabels.slice(0, 2).map(
                  (
                    buttonText,
                    index //for first two buttons , button1 and button2
                  ) => (
                    <Button
                      key={index}
                      buttonText={buttonText}
                      onClick={() => setSelectedButtonIndex(index)}
                      selected={selectedButtonIndex === index}
                      tooltipText={tooltips[index] || tooltipTexts[index]}
                      textSize={textSizes[index] || 12}
                      padding={paddings[index] || 0}
                      textColor={textColors[index] || "#fffff"}
                      bgColor={bgColors[index] || "#00000"}
                      cornerRadius={cornerRadii[index] || 0}
                      tooltipWidth={tooltipWidths[index] || 120}
                      arrowWidth={arrowWidths[index] || 10}
                      arrowHeight={arrowHeights[index] || 8}
                    />
                  )
                )}
              </div>
              <div
                className="butun-1"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "450px",
                }}
              >
                <Button
                  buttonText={buttonLabels[2]} //for the button 3 with special characteristics
                  onClick={() => setSelectedButtonIndex(2)}
                  selected={selectedButtonIndex === 2}
                  tooltipText={tooltips[2] || tooltipTexts[2]}
                  textSize={textSizes[2] || 12}
                  padding={paddings[2] || 0}
                  textColor={textColors[2] || "#ffff"}
                  bgColor={bgColors[2] || "#00000"}
                  cornerRadius={cornerRadii[2] || 0}
                  tooltipWidth={tooltipWidths[2] || 120}
                  arrowWidth={arrowWidths[2] || 10}
                  arrowHeight={arrowHeights[2] || 8}
                />
              </div>
              <div className="butun">
                {buttonLabels.slice(3, 5).map((buttonText, index) => (
                  <Button
                    key={index + 3}
                    buttonText={buttonText}
                    onClick={() => setSelectedButtonIndex(index + 3)}
                    selected={selectedButtonIndex === index + 3}
                    tooltipText={tooltips[index + 3] || tooltipTexts[index + 3]}
                    textSize={textSizes[index + 3] || 12}
                    padding={paddings[index + 3] || 0}
                    textColor={textColors[index + 3] || "#fffff"}
                    bgColor={bgColors[index + 3] || "#00000"}
                    cornerRadius={cornerRadii[index + 3] || 0}
                    tooltipWidth={tooltipWidths[index + 3] || 120}
                    arrowWidth={arrowWidths[index + 3] || 10}
                    arrowHeight={arrowHeights[index + 3] || 8}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
