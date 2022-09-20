import { useState } from "react";

function useInput(defaultValue: any) {
  const [value, setValue] = useState(defaultValue);

  function onChange(e: any) {
    setValue(e.target.value);
  }
  return {
    value,
    onChange,
  };
}


const PITyper = () => {
  const inputProps = useInput(" ");

  return (
    <div>
      <input type="text" placeholder="Begin typing π" {...inputProps} />
      <div>{inputProps.value}</div>
    </div>
  );
};

export default PITyper;
