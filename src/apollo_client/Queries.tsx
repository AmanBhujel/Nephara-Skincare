import { gql } from "@apollo/client";

export const GET_USER_INFO = gql`
query GetUserInfoByToken {
  getUserInfoByToken {
  user {
    email
    phoneNumber
    photo
    country
    city
    name
    age
    gender
  }
}
  }`;

export const GET_REPORT = gql`
  query Query($appointmentId: String!) {
      getReport(appointmentId: $appointmentId)
    }
  `;

export const GET_DOCTOR_INFO_BY_TOKEN = gql`
  query GetDoctorInfoByToken($token: String!) {
      getDoctorInfoByToken(token: $token) {
        name
        email
        status
        message
      }
    }`;

export const GET_APPOINTMENT_DATA = gql`
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
            timezone
            allergies
            comment
            _id
            completed
          }
        }
      }
    `;