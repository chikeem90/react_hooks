import React from "react";

const usePreventLeave = () => {
    // 윈도우를 떠나기전에 해당 이벤트를 중단하고 한번 확인하도록 하는 것
    const listener = (event) => {
      event.preventDefault();
      event.returnValue = "";
    }
    // beforeunload 이벤트를 이용해서
    const enablePrevent = () => window.addEventListener("beforeunload", listener);
    const disablePrevent = () => window.removeEventListener("beforeunload", listener);
    return { enablePrevent, disablePrevent };
  }

export default usePreventLeave;