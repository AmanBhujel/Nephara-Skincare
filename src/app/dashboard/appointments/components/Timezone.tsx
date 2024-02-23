
export const convertToUTC = (date: Date) => {
    const utcDate = new Date(date.getTime() + date.getTimezoneOffset() * 60000);
    return utcDate;
};

export const convertToTimezone = (date: Date, timezone: string) => {
    const [_, sign, hours] = timezone.match(/GMT([+-])(\d+)/) || [];
    const offset = parseInt(hours, 10) * (sign === '+' ? -1 : 1);
    const timezoneDate = new Date(date.getTime() + offset * 60 * 60000);
    return timezoneDate;
};