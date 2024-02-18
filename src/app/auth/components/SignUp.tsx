import { setCookie } from "@/components/utils/Cookie";
import ToastMessage from "@/components/utils/ToastMessage";
import { useUserStore } from "@/stores/userStore";
import { useMutation } from "@apollo/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { validateEmail, validatePassword } from "./ValidateFunction";
import { SIGNUP_USER } from "@/apollo_client/Mutation";

interface AuthProps {
    setIsSignUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const Signup: React.FC<AuthProps> = ({ setIsSignUpOpen }) => {
    const [signupUser] = useMutation(SIGNUP_USER);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [nameError, setNameError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const router = useRouter();
    const setUserInfo = useUserStore((state) => state.setUserInfo);

    const handleSignup = async () => {
        try {
            setNameError(null);
            setEmailError(null);
            setPasswordError(null);

            if (name.trim() === "") {
                setNameError("Name cannot be empty");
                return;
            }
            if (!validateEmail(email)) {
                setEmailError("Invalid email format");
                return;
            }
            if (!validatePassword(password)) {
                setPasswordError("Password must be at least 8 characters");
                return;
            }
            const signupResponse = await signupUser({
                variables: {
                    "email": email,
                    "name": name,
                    "password": password
                }
            });
            const { status, message, token, user } = signupResponse.data.signupUser;
            ToastMessage(status, message);
            if (token) {
                setCookie(604800, "token", `Bearer ${token}`)
                router.replace('/dashboard/appointments')
                window.location.reload();
            }
        } catch (error) {
            console.log(error)
            ToastMessage('error', 'Internal Server Error')
        }
    };

    return (
        <div className="w-full h-full grid place-items-center">
            <div className="w-full lg:w-[50%] xl:w-[45%] 2xl:w-[40%] min-h-fit flex flex-col items-center lg:border rounded-[10px] lg:shadow-xl justify-center">
                <div className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[80%] xl:w-[80%] 2xl:w-[70%] ">
                    <p className="text-4xl mt-8 text-center">
                        <span className="inline-block relative">
                            <span className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 opacity-75 rounded-lg blur-3xl"></span>
                            <span className="font-semibold text-4xl">Start</span>
                        </span>
                    </p>
                    <p className="font-semibold text-4xl mt-3 text-center">Your Journey to Clear Skin</p>
                    <button className="w-full h-12 mt-14 border rounded-[7px] flex items-center justify-center shadow-lg hover:bg-purple-300 transition duration-200">
                        <i className="text-xl mr-4">
                            <FcGoogle />
                        </i>
                        Sign up with Google
                    </button>
                    <p className="mt-6 mb-6 relative text-center">
                        <span className="absolute left-0 top-1/2 w-[40%] bg-gray-300 h-px transform -translate-y-1/2"></span>
                        <span className="inline-block mx-4">OR</span>
                        <span className="absolute right-0 top-1/2 w-[40%] bg-gray-300 h-px transform -translate-y-1/2"></span>
                    </p>
                    <label htmlFor="name" className="block text-gray-700 text-sm mt-4 mb-2">
                        Full Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className={`w-full h-12 border rounded-[7px]  pl-2 outline-none border-gray-400 ${nameError ? "border-red-500" : ""
                            }`}
                        placeholder="Enter your name"
                        required
                    />
                    {nameError && <p className="text-red-500 text-sm">{nameError}</p>}
                    <label htmlFor="email" className="block text-gray-700 text-sm mt-4 mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full h-12 border rounded-[7px]  pl-2 outline-none border-gray-400 ${emailError ? "border-red-500" : ""
                            }`}
                        placeholder="Enter your email"
                        required
                    />
                    {emailError && <p className="text-red-500 text-sm">{emailError}</p>}
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
                    <button
                        onClick={handleSignup}
                        className="h-10 bg-[#8045f7] hover:bg-[#9768f3] mt-6 w-full rounded-[7px] text-white"
                    >
                        Get Started
                    </button>
                    <p className="flex items-center justify-center w-full mt-4 mb-8">
                        Already have an account?{" "}
                        <span
                            className="text-blue-500 cursor-pointer ml-2 hover:underline"
                            onClick={() => setIsSignUpOpen(false)}
                        >
                            Sign in
                        </span>
                    </p>
                </div>
            </div>
        </div>

    );
};
