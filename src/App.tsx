import { useState } from "react";
import { logo, phone, dots, playstore, apple } from "./assets";
import { signupSchema } from "./formSchema/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData } from "./vite-env";
import InputField from "./components/InputField";
import "./App.css";
import Button from "./components/Button";
import Loader from "./components/Loader";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(signupSchema),
  });
  const [isTermChecked, setIsTermChecked] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = handleSubmit((_data) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  });

  return (
    <>
      {isLoading && <Loader />}
      <main className="min-h-screen flex justify-center 2xl:items-center">
        <div className="min-h-[100vh] bg-right-bggradient w-[45%] z-10 hidden lg:block">
          <div className="py-[1rem] w-[60%] mx-auto h-full flex flex-col items-center justify-between">
            <h1 className="text-white font-semibold text-[1.5rem] text-center px-4">
              Social media shared today, tomorrow or by location
            </h1>
            <div className="relative">
              <img src={phone} alt="phone-image" className="w-[20rem]" />
              <div className="z-[-2] bg-circle-bggradient w-[27rem] h-[27rem] rounded-full absolute bottom-[-44%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <img src={dots} alt="dots-image" className="w-[4rem]" />
          </div>
        </div>
        <div className="bg-white w-[90%] md:w-[70%] lg:w-[55%]">
          <div className=" w-full lg:w-[90%] py-4 mx-auto flex flex-col gap-y-2">
            <div className="flex items-center gap-x-2 ">
              <img src={logo} alt="logo-image" className="" />
              <p className="font-bold text-[1.125rem] leading-5">Capzul</p>
            </div>
            <div className="flex flex-col justify-center gap-y-3">
              <div className="2xl:mb-6 2xl:mt-4">
                <h4 className="font-bold text-[1.5rem]">Create account</h4>
                <h4 className="font-normal text-[#2D3748] text-[0.875rem]">
                  For business, band or celebrity.
                </h4>
              </div>

              <form onSubmit={onSubmit} className="w-full flex flex-col mt-2">
                <div className="w-full flex flex-col xl:flex-row xl:flex-wrap justify-between items-center gap-y-[0.5rem]">
                  <InputField
                    type="text"
                    label="First name"
                    fieldname="firstName"
                    register={register}
                    error={errors.firstName?.message}
                  />
                  <InputField
                    type="text"
                    label="Last name"
                    fieldname="lastName"
                    register={register}
                    error={errors.lastName?.message}
                  />
                  <InputField
                    type="text"
                    label="Email or phone number"
                    fieldname="email"
                    register={register}
                    error={errors.email?.message}
                  />
                  <InputField
                    type="date"
                    label="Date of birth (MM/DD/YY)"
                    fieldname="dob"
                    register={register}
                    error={errors.dob?.message}
                  />
                  <InputField
                    type="password"
                    label="Password"
                    fieldname="password"
                    register={register}
                    error={errors.password?.message}
                  />
                  <InputField
                    type="password"
                    label="Confirm password"
                    fieldname="confirmPassword"
                    register={register}
                    error={errors.confirmPassword?.message}
                  />
                </div>
                <div className="w-full mt-">
                  <div className="flex justify-between">
                    <div className="flex items-center justify-start gap-x-2">
                      <input type="checkbox" />
                      <span className="font-normal text-[#2D3748] text-[0.875rem]">
                        Remember me
                      </span>
                    </div>
                    <span className="cursor-pointer text-[#007AFF] text-[0.875rem] hover:text-[#2a71bd] transition duration-300 ease-in">
                      Forgot password?
                    </span>
                  </div>

                  <div className="flex flex-col mt-1">
                    <div className="flex items-center gap-x-2">
                      <input
                        type="checkbox"
                        checked={isTermChecked}
                        {...register("terms", {
                          onChange: (e) => setIsTermChecked(e.target.checked),
                        })}
                      />
                      <p className="font-normal text-[#2D3748] text-[0.875rem]">
                        I agree to all the{" "}
                        <span className="cursor-pointer text-[#007AFF] hover:text-[#2a71bd] transition duration-300 ease-in">
                          Terms
                        </span>{" "}
                        and{" "}
                        <span className="cursor-pointer text-[#007AFF] hover:text-[#2a71bd] transition duration-300 ease-in">
                          Privacy policy
                        </span>
                      </p>
                    </div>
                    <div>
                      {errors.terms && (
                        <p className="text-red-500 text-xs">
                          {errors.terms.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-full flex justify-between items-center mt-4">
                  <Button label="Create account" buttonType="submit" />
                  <Button
                    label="Sign-in with google"
                    variant="google"
                    buttonType="button"
                  />
                </div>
                <div className="flex w-full justify-center items-center mt-2">
                  <p className="text-center font-normal text-[#2D3748] text-[0.875rem]">
                    Don’t have an account? {""}
                    <span className="cursor-pointer text-[#007AFF] hover:text-[#2a71bd] transition duration-300 ease-in">
                      Log In
                    </span>
                  </p>
                </div>
              </form>
              <div className="flex justify-start items-center mt-1 gap-x-4">
                <div className="bg-black text-white p-[1rem rounded-[5px] h-[3rem] w-[9rem] flex items-center justify-center">
                  <img src={playstore} alt="google-icon" className="w-5 mr-1" />
                  <div className="flex flex-col justify-start">
                    <span className="text-xs">GET IT ON </span>{" "}
                    <p className="text-xs font-bold">Google Play</p>
                  </div>
                </div>
                <div className="bg-black text-white p-[1rem rounded-[5px] h-[3rem] w-[9rem] flex items-center justify-center">
                  <img src={apple} alt="apple-icon" className="w-4 mr-1" />
                  <div className="flex flex-col justify-start">
                    <span className="text-xs">GET IT ON </span>{" "}
                    <p className="text-xs font-bold">Google Play</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
