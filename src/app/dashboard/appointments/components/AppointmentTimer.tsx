import React, { useEffect, useState } from 'react';

interface AppointmentTimerProps {
    appointmentDate: string;
    appointmentTime: string;
}

const AppointmentTimer: React.FC<AppointmentTimerProps> = ({ appointmentDate, appointmentTime }) => {
  const [timeLeft, setTimeLeft] = useState<string>('');

  useEffect(() => {
      const timer = setInterval(() => {
          const formattedDate = new Date(appointmentDate).toISOString().split('T')[0];
          const formattedTime = new Date(appointmentTime).toISOString().split('T')[1]. slice(0,5);
          const appointmentDateTime = new Date(`${formattedDate}T${formattedTime}`).getTime();
          const now = new Date().getTime();
          const distance = appointmentDateTime - now;

          const days = Math.floor(distance / (1000 * 60 * 60 * 24));
          const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
          const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((distance % (1000 * 60)) / 1000);

          setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);

          if (distance < 0) {
              clearInterval(timer);
              setTimeLeft('No Upcoming Appointment');
          }
      }, 1000);

      return () => {
          clearInterval(timer);
      };
  }, [appointmentDate, appointmentTime]);

  return (
    <div>
        {timeLeft !== 'No Upcoming Appointment' ? `Time left until appointment: ${timeLeft}` : timeLeft}
    </div>
);
};

export default AppointmentTimer;