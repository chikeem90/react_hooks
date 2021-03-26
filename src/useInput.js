import React, { useState } from "react";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    // function type이라면 validate를 하고 난 뒤
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    // 그 결과를 보고 값을 바꿀지 말지 처리 
    if (willUpdate) {
      setValue(value);
    }
  }
  return {value, onChange};
}

export default useInput;