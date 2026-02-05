import React from "react";
import CancelIcon from "@mui/icons-material/Cancel";
export default function Delete({ onClose }) {
  return (
    <div className="DeleteBorder">
      <div className=" flex items-center justify-between">
        <h1 className="font-[700] text-[32px]">Delete ‘Entertainment’?</h1>
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
        <p className="text-[#FFFFFF]  text-center ">Yes, Confirm Deletion</p>
      </div>
      <div className=" flex-col justify-items-center  mt-[20px]">
        <p className="text-center ">No, Go Back</p>
      </div>
    </div>
  );
}
