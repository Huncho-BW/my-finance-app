import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
export default function Delete({ budget, setBudget, currentBudget, onClose }) {
  function handleSubmit() {
    const newItem = budget.filter(
      (item) => item.category !== currentBudget.category,
    );

    setBudget(newItem);

    onClose();
  }

  function BackTo() {
    onClose();
  }

  return (
    <div className="DeleteBorder">
      <div className=" flex items-center justify-between">
        <h1 className="font-[700] text-[32px]">
          Delete ‘{currentBudget.category}’?
        </h1>
        <div onClick={() => onClose()}>
          <CancelIcon />
        </div>
      </div>
      <div className="mt-[20px]">
        <p>
          Are you sure you want to delete this budget? This action cannot be
          reversed, and all the data inside it will be removed forever.
        </p>
      </div>

      <div className="borderDelete flex-col justify-items-center   mt-[20px]">
        <p onClick={handleSubmit} className="text-[#FFFFFF]  text-center ">
          Yes, Confirm Deletion
        </p>
      </div>
      <div className=" flex-col justify-items-center  mt-[20px]">
        <p onClick={BackTo} className="text-center ">
          No, Go Back
        </p>
      </div>
    </div>
  );
}
