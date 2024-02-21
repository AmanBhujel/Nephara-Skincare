import { useLogoutStore } from "@/stores/LogoutStore";
import { MdNavigateNext } from "react-icons/md";
import { SlLock, SlLogout } from "react-icons/sl";
import { LiaEditSolid } from "react-icons/lia";

interface SettingsSidebarProps {
    activeSettingButton: string;
    setActiveSettingButton: React.Dispatch<React.SetStateAction<string>>;
    windowWidth: number;
}

const SettingsSidebar: React.FC<SettingsSidebarProps> = ({ activeSettingButton, setActiveSettingButton, windowWidth }) => {
    const setIsLogoutModalOpen = useLogoutStore((state) => state.setIsLogoutModalOpen)

    const handleLogout = () => {
        setIsLogoutModalOpen(true);
    }

    return (
        <div className={`${windowWidth > 1024 || activeSettingButton === "" ? "block" : "hidden"} ${activeSettingButton === 'Edit' ? "block" : ""} ${windowWidth > 1024 ? "" : "flex w-[92%] sm:w-[85%] h-full pb-20 items-center flex-col overflow-auto"} lg:w-[20%]  lg:min-w-[20rem] lg:max-w-[25rem] lg:h-full px-2 lg:ml-8`}>
            <p className={`text-3xl sm:text-4xl lg:text-3xl font-semibold lg:mt-20  tracking-wide xl:mt-10 ${windowWidth > 1024 ? "" : "text-[#743bfb]"}`}>Account Settings</p>
            <ul className='w-full mt-6 sm:mt-8'>
                <li className='border-b-2 font-medium h-14 sm:h-16 flex justify-between items-center cursor-pointer' onClick={() => setActiveSettingButton("Edit")}>
                    <p className='flex items-center sm:text-lg ml-2'><span className='text-3xl sm:text-4xl mr-3'><LiaEditSolid /></span>Edit Profile</p>
                    <i className='text-3xl mr-2'><MdNavigateNext /></i>
                </li>
                <li className='border-b-2 font-medium h-14 sm:h-16 flex justify-between items-center cursor-pointer' onClick={() => setActiveSettingButton("change-password")}>
                    <p className='flex items-center sm:text-lg ml-2'><span className='text-2xl sm:text-3xl mr-3'><SlLock /></span>Change Password</p>
                    <i className='text-3xl mr-2'><MdNavigateNext /></i>
                </li>
                <li className='font-medium h-14 sm:h-16 flex justify-between items-center cursor-pointer text-red-700' onClick={handleLogout}>
                    <p className='flex items-center sm:text-lg ml-2 '><span className='text-2xl sm:text-3xl mr-3 '><SlLogout /></span>Log Out</p>
                    <i className='text-3xl mr-2'><MdNavigateNext /></i>
                </li>
            </ul>
        </div>
    )
};

export default SettingsSidebar;

// shadow-[3px_0px_7px_-7px_rgba(0,0,0,0.5)] 