import React from "react";
import Select from "react-select";
import "./customSelect.scss";
const CustomSelect = (props) => {
  return (
    <Select
      options={props.pokemonTypes}
      className={"react-select-container custom-select"}
      isMulti
      classNamePrefix="react-select"
      value={props.selectedTypes}
      onChange={props.handleChange}
      placeholder="Select pokemon type..."
      components={{ Option: customSingleOption }}
    />
  );
};
const customSingleOption = (props) => {
  const { data, innerRef, innerProps } = props;
  const { name, effective, ineffective, noEffect } = data.data;
  return (
    <div
      ref={innerRef}
      {...innerProps}
      style={{ padding: "10px", borderBottom: "1px solid #eee" }}
    >
      <div className={""}>{name}</div>

      <div className={"custom-select__types"}>
        {effective.map((type, index) => {
          return (
            <div key={index} className={"chip effective"}>
              {type}
            </div>
          );
        })}
        {ineffective.map((type, index) => {
          return (
            <div key={index} className={"chip ineffective"}>
              {type}
            </div>
          );
        })}
        {noEffect.map((type, index) => {
          return (
            <div key={index} className={"chip noEffect"}>
              {type}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CustomSelect;
