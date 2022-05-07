// /src/components/Calculator.js

import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { value } = props;
  let classes4btn = 'calcBtn';
  if (value === '0') {
    classes4btn = 'calcBtn span2';
  }
  if (value === '+' || value === 'x' || value === '-' || value === '=') {
    classes4btn = 'calcBtn orangeBtn';
  }
  return (
    <button className={classes4btn} type="button">
      {value}
    </button>
  );
}

Button.defaultProps = {
  value: '-1',
};

Button.propTypes = {
  value: PropTypes.string,
};

function Output(props) {
  const { result } = props;
  return (
    <div className="outputContainer">
      <span className="output">
        {result}
      </span>
    </div>
  );
}

Output.defaultProps = {
  result: '-1',
};

Output.propTypes = {
  result: PropTypes.number,
};

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.calculation = 0;
  }

  render() {
    return (
      <div className="calcContainer">
        <Output result={0} />
        <div className="keysGrid">
          <Button value="+/-" />
          <Button value="AC" />
          <Button value="%" />
          <Button value="+" />
          <Button value="7" />
          <Button value="8" />
          <Button value="9" />
          <Button value="x" />
          <Button value="4" />
          <Button value="5" />
          <Button value="6" />
          <Button value="-" />
          <Button value="1" />
          <Button value="2" />
          <Button value="3" />
          <Button value="+" />
          <Button value="0" />
          <Button value="." />
          <Button value="=" />
        </div>
      </div>
    );
  }
}

export default Calculator;
