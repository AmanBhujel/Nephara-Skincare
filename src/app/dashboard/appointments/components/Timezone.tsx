import { zonedTimeToUtc, utcToZonedTime, format } from 'date-fns-tz';

interface timezone {
    timezone: string,
    appointmentDate: string,
    appointmentTime: string,
    utcDate: string,
}

export function extractTimezoneOffset(timezone: string): string {
  const match = timezone.match(/\(GMT ([+-]\d+:\d+)\)/);
  return match ? match[1] : '';
}

export function subtractTimezoneOffset(time: string, timezone: string): string {
  const offset = extractTimezoneOffset(timezone);
  const [hours, minutes] = offset.split(':').map(Number);
  const date = new Date(time);
  date.setHours(date.getHours() - hours);
  date.setMinutes(date.getMinutes() - minutes);
  return date.toISOString();
}

export function addTimezoneOffset(time: string, timezone: string): string {
  const offset = extractTimezoneOffset(timezone);
  const [hours, minutes] = offset.split(':').map(Number);
  const date = new Date(time);
  date.setHours(date.getHours() + hours);
  date.setMinutes(date.getMinutes() + minutes);
  return date.toISOString();
}
