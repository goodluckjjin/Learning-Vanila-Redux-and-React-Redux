import React from "react";
import styled from "styled-components";

const Input = styled.input`
  display: none;
  :checked + label {
    position: relative;
    background-color: #fd79a8;
  }
  :checked + label .left {
    position: absolute;
    top: 20px;
    left: 2px;
    display: block;
    width: 18px;
    height: 4px;
    background-color: #fff;
    transform: rotate(45deg);
    border-radius: 4px;
  }
  :checked + label .right {
    position: absolute;
    top: 18px;
    right: 1px;
    display: block;
    width: 24px;
    height: 4px;
    background-color: #fff;
    transform: rotate(-50deg);
    border-radius: 4px;
  }
`;

const Label = styled.label`
  display: block;
  width: 36px;
  height: 36px;
  border: 2px solid #fd79a8;
  border-radius: 8px;
  :hover {
    cursor: pointer;
  }
`;

function Checkbox({ value, onChange }) {
  return (
    <div>
      <Input type="checkbox" id="cb1" value={value} onChange={onChange} />
      <Label htmlFor="cb1">
        <span className="left" />
        <span className="right" />
      </Label>
    </div>
  );
}

export default Checkbox;
