"use client"
import React, { useEffect, useState } from 'react';
import { NextPage } from 'next';
import Sidebar from '@/app/dashboard/components/sidebar';
import { Appointments } from '@/data/AppointmentData';
import AppointmentPageContainer from './components/AppointmentPageContainer';
import ToastMessage from '@/components/utils/ToastMessage';
import { gql, useLazyQuery } from '@apollo/client';
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'next/navigation';
import { useLoadingStore } from '@/stores/LoadingStore';
import Loader from '@/components/Loader';
import { useAuthorizedStore } from '@/stores/AuthorizedStore';
import { getCookie } from '@/components/utils/Cookie';
import { GET_USER_INFO } from '@/apollo_client/Queries';
import { useDashboardStore } from '@/stores/DashboardStore';

interface PageProps {
    params: {
        id: string;
    };
}

const GET_APPOINTMENT_DATA= gql`
query GetAppointmentByEmail {
    getAppointmentByEmail {
      appointments {
        appointmentDate
        appointmentTime
        id
        checkoutSessionId
        fullName
        email
        reasonForVisit
        allergies
        comment
      }
    }
  }
`

const Page: NextPage<PageProps> = ({ params }) => {
    const appointment = Appointments.find(appointment => appointment.appointment_id === params.id);
    const [getUserInfoByToken] = useLazyQuery(GET_USER_INFO, {
        fetchPolicy: "no-cache"
    });
    const setAppointmentSelected = useDashboardStore((state) => state.setAppointmentSelected)
    const setUserInfo = useUserStore((state) => state.setUserInfo);
    const setIsLoading = useLoadingStore((state) => state.setIsLoading)
    const isLoading = useLoadingStore((state) => state.isLoading)
    const router = useRouter();
    const isAuthorized = useAuthorizedStore((state) => state.isAuthorized);
    const setIsAuthorized = useAuthorizedStore((state) => state.setIsAuthorized);

    useEffect(() => {
        let isMounted = true;
        const token = getCookie("token");
        setAppointmentSelected(false);
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
        <main className='w-full h-screen flex justify-center items-center bg-[#f6f8fc] relative' style={{ height: "100dvh" }}>
            {isLoading ? <Loader /> :
                <>
                    <Sidebar />
                    <AppointmentPageContainer appointmentData={appointment} />
                </>}
        </main>
    );
}

export default Page;

