import React from 'react';

interface TimezoneProps {
    timezone: string;
}

const Timezone: React.FC<TimezoneProps> = ({ timezone }) => {
    const convertToGMT00 = (timezone: string) => {
        // Assuming timezone is in the format 'GMT+X' or 'GMT-X'
        const [_, sign, hours] = timezone.match(/GMT([+-])(\d+)/) || [];
        const offset = parseInt(hours,  10) * (sign === '+' ? -1 :  1);
        return new Date().getTimezoneOffset() + offset *  60;
    };

    const gmt00Offset = convertToGMT00(timezone);

    return (
        <div>
            {/* You can use gmt00Offset here as needed */}
        </div>
    );
};

export default Timezone;
