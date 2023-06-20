"use client";

import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containersStyle,
  onClick,
  btnType,
  rightIcon,
  textStyle,
  isDisabled,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType}
      className={`flex flex-row relative justify-center items-center py-3 px-6 outline-none ${containersStyle}`}
      onClick={onClick}
    >
      <span className={`flex-1 ${textStyle}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image src={rightIcon} alt="icon" fill className="object-contain" />
        </div>
      )}
    </button>
  );
};

export default CustomButton;
