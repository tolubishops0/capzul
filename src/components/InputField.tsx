import { useState } from "react";
import { InputFieldProps } from "../vite-env";
import { passwordopen, passwordclose, dateicon } from "../assets";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function InputField({
  error,
  label,
  fieldname,
  register,
  type,
}: InputFieldProps) {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [date, setDate] = useState<Date | null>(null);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="flex flex-col w-full xl:w-[48%] h-[5rem]">
      <p className="text-[#2D3748] text-sm font-normal">{label}</p>
      {type !== "date" ? (
        <div className="h-[3rem] w-full relative">
          <input
            type={isPasswordVisible ? "text" : type}
            className="h-full w-full pl-4 border rounded-[5px] border-[#e6e6e6] focus:border-[#007AFF] focus:outline-none"
            {...register(fieldname)}
          />
          {type === "password" && (
            <span
              onClick={togglePasswordVisibility}
              className="absolute right-[1rem] top-[50%] cursor-pointer transform -translate-y-1/2">
              <img
                src={isPasswordVisible ? passwordopen : passwordclose}
                alt="password-icon"
              />
            </span>
          )}
        </div>
      ) : (
        <div className="w-full relative">
          <DatePicker
            className="h-[2.95rem] w-full pl-4 border rounded-[5px] border-[#e6e6e6] focus:border-[#007AFF] focus:outline-none"
            selected={date}
            onChange={(date) => {
              setDate(date);
              register(fieldname).onChange({
                target: { name: fieldname, value: date },
              });
            }}
            dateFormat="MM/dd/yyyy"
          />
          {type === "date" && (
            <span className="absolute right-[1rem] top-[50%] cursor-pointer transform -translate-y-1/2">
              <img src={dateicon} alt="date-icon" />
            </span>
          )}
        </div>
      )}
      {error ? (
        <p className="text-red-500 text-xs opacity-1">{error}</p>
      ) : (
        <p className="text-red-500 text-xs opacity-1">{error}</p>
      )}
    </div>
  );
}
