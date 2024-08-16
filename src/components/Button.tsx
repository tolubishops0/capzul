import { google } from "../assets";
import { ButtonProps } from "../vite-env";


export default function Button({ label, variant, buttonType }: ButtonProps) {
  return (
    <button
      type={buttonType}
      className={`h-[3rem] w-[48%] text-white font-semibold text-[0.875rem] rounded-[5px] flex items-center justify-center transition duration-300 ease-in ${
        variant === "google"
          ? "bg-[#2D3748] hover:bg-[#3a3d42]"
          : "bg-[#007AFF] hover:bg-[#2a71bd]"
      }`}>
      {variant === "google" && (
        <img src={google} alt="google-icon" className="mr-2 mt-1" />
      )}
      {label}
    </button>
  );
}
