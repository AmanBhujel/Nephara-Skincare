'use client'
import React, { useEffect, useState } from 'react';
import Sidebar from '../components/sidebar';
import { useLazyQuery } from '@apollo/client';
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'next/navigation';
import ToastMessage from '@/components/utils/ToastMessage';
import { useLoadingStore } from '@/stores/LoadingStore';
import Loader from '@/components/Loader';
import { useAuthorizedStore } from '@/stores/AuthorizedStore';
import { getCookie } from '@/components/utils/Cookie';
import UploadImage from './components/UploadImage';
import ChangePassword from './components/ChangePassword';
import EditProfile from './components/EditProfile';
import SettingsSidebar from './components/SettingsSidebar';
import { GET_USER_INFO } from '@/apollo_client/Queries';

const Page = () => {
    const [activeSettingButton, setActiveSettingButton] = useState<string>('');
    const [windowWidth, setWindowWidth] = useState<number>(0);
    const isLoading = useLoadingStore((state) => state.isLoading)
    const setIsLoading = useLoadingStore((state) => state.setIsLoading)
    const [getUserInfoByToken] = useLazyQuery(GET_USER_INFO);
    const router = useRouter();
    const setUserInfo = useUserStore((state) => state.setUserInfo);
    const isAuthorized = useAuthorizedStore((state) => state.isAuthorized);
    const setIsAuthorized = useAuthorizedStore((state) => state.setIsAuthorized);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        const updateWindowWidth = () => {
            setWindowWidth(window.innerWidth);

        };
        window.addEventListener('resize', updateWindowWidth);

        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        let isMounted = true;
        const token = getCookie("token");

        const getUserInfo = async () => {
            try {
                if (token) {
                    if (!isAuthorized) {

                        const response = await getUserInfoByToken();

                        if (!isMounted) return;

                        const { status, message, user } = response.data.getUserInfoByToken;
                        if (user) {
                            setIsAuthorized(true)
                            setUserInfo({ email: user.email || '', name: user.name || '', photo: user.photo || '', gender: user.gender || '', age: user.age || 0, city: user.city || '', country: user.country || '', phoneNumber: user.phoneNumber || '' })
                        }
                        if (status === 'error' && message === 'Unauthorized Token!') {
                            router.replace('/auth')
                            ToastMessage("error", "Authorization Denied")
                            return;
                        } else if (status === 'error' && message === 'Internal server error') {
                            ToastMessage(status, message)
                        }
                    }
                }
                else {
                    router.replace('/auth')
                    ToastMessage("error", "Authorization Denied")
                    return;
                }
                setIsLoading(false);
            } catch (error) {
                console.error("Error fetching user info:", error);
                // Handle any error or perform cleanup actions
            }
        };

        if (isMounted) {
            getUserInfo();
        }

        return () => {
            isMounted = false;

        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <main className='w-full h-screen flex justify-center lg:justify-start bg-[#f6f8fc] relative' style={{ height: "100dvh" }}>
            {
                isLoading ? <Loader /> :
                    <>
                        {windowWidth > 1024 || activeSettingButton === "" ? <Sidebar /> : ""}
                        <UploadImage />
                        <SettingsSidebar activeSettingButton={activeSettingButton} setActiveSettingButton={setActiveSettingButton} windowWidth={windowWidth} />
                        <EditProfile activeSettingButton={activeSettingButton} setActiveSettingButton={setActiveSettingButton} windowWidth={windowWidth} />
                        <ChangePassword activeSettingButton={activeSettingButton} setActiveSettingButton={setActiveSettingButton} />
                    </>
            }
        </main>
    )
};

export default Page;
