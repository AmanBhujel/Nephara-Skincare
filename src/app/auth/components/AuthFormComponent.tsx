import ToastMessage from "@/components/utils/ToastMessage";
import { setCookie } from "@/components/utils/Cookie";
import { gql, useMutation } from "@apollo/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

interface AuthProps {
    setIsSignUpOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

const validatePassword = (password: string): boolean => {
    return password.length >= 8;
};
const SIGNUP_USER = gql`
mutation SignupUser($email: String!, $password: String!) {
    signupUser(email: $email, password: $password) {
      message,token,status
    }

  }
`
const LOGIN_USER = gql`
 mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
      token,message,status
    }
  }
`

export const Signup: React.FC<AuthProps> = ({ setIsSignUpOpen }) => {
    const [signupUser, { data: signupUserData, loading: signupUserLoading, error: signupUserError }] = useMutation(SIGNUP_USER);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [nameError, setNameError] = useState<string | null>(null);
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const router = useRouter()

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
                    "password": password
                }
            });
            const { status, message, token } = signupResponse.data.signupUser;
            ToastMessage(status, message);
            if (token) {
                setCookie(3600, "token", `Bearer ${token}`)
                router.push('/')
            }
        } catch (error) {
            console.log(error)
            ToastMessage('error', 'Internal Server Error')
        }
    };

    return (
        <div className="w-full lg:w-[50%] h-full  flex flex-col items-center">
            <div className="w-[80%] sm:w-[70%] md:w-[60%] lg:w-[75%] xl:w-[65%] 2xl:w-[50%] mt-[15%]">
                <p className="text-4xl">Start your</p>
                <p className="font-semibold text-4xl mt-3">Journey to Clear Skin</p>
                <button className="w-full h-12 mt-14 border rounded-[7px] flex items-center justify-center shadow-lg">
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
                    Name
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
                    className="h-10 bg-[#8045f7] hover:bg-[#9768f3] mt-10 w-full rounded-[7px] text-white"
                >
                    Get Started
                </button>
                <p className="flex items-center justify-center w-full mt-8 mb-5">
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
    );
};

export const Signin: React.FC<AuthProps> = ({ setIsSignUpOpen }) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [emailError, setEmailError] = useState<string | null>(null);
    const [passwordError, setPasswordError] = useState<string | null>(null);
    const [loginUser, { data: loginUserData, loading: loginUserLoading, error: loginUserError }] = useMutation(LOGIN_USER);
    const router = useRouter();

    const handleSignin = async () => {
        try {
            setEmailError(null);
            setPasswordError(null);

            if (!validateEmail(email)) {
                setEmailError("Invalid email format");
                return;
            }
            if (!validatePassword(password)) {
                setPasswordError("Password must be at least 8 characters");
                return;
            }
            const loginResponse = await loginUser({
                variables: {
                    "email": email,
                    "password": password
                }
            });
            const { status, message, token } = loginResponse.data.loginUser;
            ToastMessage(status, message);
            if (token) {
                setCookie(3600, "token", `Bearer ${token}`)
                router.push('/')
            }
        } catch (error) {
            ToastMessage('error', 'Internal Server Error')
        }
    };

    return (
        <div className='w-full lg:w-[50%] h-full  flex flex-col items-center'>
            <div className='w-[80%] sm:w-[70%] md:w-[60%] lg:w-[75%] xl:w-[65%] 2xl:w-[50%] mt-[15%]'>
                <p className='text-4xl'>Sign in</p>
                <p className='font-semibold text-4xl mt-3'> 30-day free trial</p>
                <button className='w-full h-12 mt-14 border rounded-[7px] flex items-center justify-center shadow-lg'><i className='text-xl mr-4'><FcGoogle /></i>Sign in with Google</button>
                <p className='mt-6 mb-6 relative text-center'>
                    <span className="absolute left-0 top-1/2 w-[40%] bg-gray-300 h-px transform -translate-y-1/2"></span>
                    <span className="inline-block mx-4">OR</span>
                    <span className="absolute right-0 top-1/2 w-[40%] bg-gray-300 h-px transform -translate-y-1/2"></span>
                </p>
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
                <Link href={'/auth/forgot-password'}>
                    <p className='text-sm font-medium  text-blue-500 flex w-full mt-1 cursor-pointer hover:underline justify-end'>Forgot Password?</p>
                </Link>
                <button className='h-10 bg-[#8045f7] hover:bg-[#9768f3] mt-10 w-full rounded-[7px] text-white' onClick={handleSignin}>Sign in</button>
                <p className='flex items-center justify-center w-full mt-8 mb-5'>Don't have an account? <span className='text-blue-500 cursor-pointer ml-2 hover:underline' onClick={() => setIsSignUpOpen(true)}>Sign up </span></p>
            </div>
        </div>
    )
}
