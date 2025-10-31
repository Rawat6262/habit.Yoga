import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function PhoneNumberInput() {
  const [phone, setPhone] = useState("");

  return (
    <div className="flex flex-col items-start gap-2">
      <div className="inline-block">
        <PhoneInput
          country={"in"}
          value={phone}
          onChange={(phone) => setPhone(phone)}
          inputClass="!w-[105px] !h-[56px] !border !border-gray-400 !rounded-[12px] !text-[18px] !font-medium !pl-[48px] !pr-2 !text-gray-800 focus:!outline-none focus:!ring-2 focus:!ring-blue-200"
          buttonClass="!border-none !bg-transparent !pl-3"
          containerClass="!rounded-[12px]"
        />
      </div>
    </div>
  );
}

export default PhoneNumberInput;
