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