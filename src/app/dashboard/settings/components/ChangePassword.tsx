import ToastMessage from "@/components/utils/ToastMessage";
import { useState } from "react";
import { IoArrowBack } from "react-icons/io5";

interface ChangePasswordProps {
    activeSettingButton:string;
    setActiveSettingButton:React.Dispatch<React.SetStateAction<string>>;
}

const ChangePassword: React.FC<ChangePasswordProps>  = ({activeSettingButton,setActiveSettingButton}) => {
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [confirmPasswordError, setConfirmPasswordError] = useState<string | null>(null);

    const handleChangePassword = async () => {
        try {
            setPasswordError(null);
            setConfirmPasswordError(null);

            if (password.length < 8) {
                setPasswordError("Password must be at least 8 characters");
                return;
            }

            if (password !== confirmPassword) {
                setConfirmPasswordError("Passwords do not match");
                return;
            }

        } catch (error) {
            ToastMessage('error', 'Internal Server Error')
        }
    };

    return (
        <div className={`${activeSettingButton === "change-password" ? "flex" : "hidden"} w-full h-auto   lg:w-[70%] xl:w-[50%] justify-center border lg:ml-[5%] bg-[#f6f8fc] overflow-auto max-h-screen `}>
            <div className='w-[95%] md:w-[75%] xl:w-[70%] 2xl:w-[50%] relative'>
                <p className='text-2xl sm:text-4xl absolute top-2 left-2 lg:hidden cursor-pointer' onClick={() => setActiveSettingButton("")}><IoArrowBack /></p>
                <div className='flex w-full justify-center items-center'>
                    <p className='mt-7 lg:mt-8 text-3xl sm:text-4xl font-semibold text-[#743bfb]  tracking-wide'>Change Password</p>
                </div>

                <div className='flex flex-col mt-6'>
                    <label htmlFor="password" className="block text-gray-700 text-sm mt-4 mb-2">
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`w-full h-12  border rounded-[7px]  pl-2 outline-none border-gray-400 ${passwordError ? "border-red-500" : ""
                            }`}
                        placeholder="Your password"
                        required
                    />
                    {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
                </div>
                <div className='flex flex-col mt-6'>
                    <label htmlFor="confirmPassword" className="block text-gray-700 text-sm mt-4 mb-2">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        id="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={`w-full h-12  border rounded-[7px]  pl-2 outline-none border-gray-400 ${confirmPasswordError ? "border-red-500" : ""
                            }`}
                        placeholder="Confirm your password"
                        required
                    />
                    {confirmPasswordError && <p className="text-red-500 text-sm">{confirmPasswordError}</p>}
                </div>
                {/* Change Password Button */}
                <button className='h-10 bg-[#8045f7] hover:bg-[#9768f3] mt-10 w-full rounded-[7px] text-white' onClick={handleChangePassword}>
                    Change Password
                </button>
            </div>
        </div>
    )
};

export default ChangePassword;