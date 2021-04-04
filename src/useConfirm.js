import React from "react";

const useConfirm = (message = "", onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== "function") {
        return;
    }
    if (onCancel && typeof onCancel !== "function") {
        return;
    }
    const confimrAction = () => {
      if (window.confirm(message)) {
        onConfirm();
      } else {
        onCancel();
      }
    }
    return confimrAction;
  }

export default useConfirm;