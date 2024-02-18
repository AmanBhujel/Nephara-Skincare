import { gql } from "@apollo/client";

export const CREATE_APPOINTMENT_AND_STRIPE_SESSION = gql`
mutation CreateAppointmentAndCheckoutSession($fullName: String!, $email: String!, $appointmentDate: String!, $appointmentTime: String!, $timezone: String!, $comment: String!, $reasonForVisit: String!, $allergies: String!, $checkoutSessionId: String, $productName: String!, $productPrice: Int!, $productImage: String!) {
    createAppointmentAndCheckoutSession(fullName: $fullName, email: $email, appointmentDate: $appointmentDate, appointmentTime: $appointmentTime, timezone: $timezone, comment: $comment, reasonForVisit: $reasonForVisit, allergies: $allergies, checkoutSessionId: $checkoutSessionId, productName: $productName, productPrice: $productPrice, productImage: $productImage)
  }
`;

export const LOGIN_USER = gql`
 mutation LoginUser($email: String!, $password: String!) {
    loginUser(email: $email, password: $password) {
        status
        token
        message
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
  }
`

export const SIGNUP_USER = gql`
mutation SignupUser($email: String!, $password: String!, $name: String!) {
    signupUser(email: $email, password: $password ,name: $name) {
      message,token,status
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
  }
`

export const NODEMAILER_EMAIL = gql`
mutation Nodemaileremail($email: String!) {
    nodemaileremail(email: $email) {
    message,status
}
}`;

export const UPDATE_USER = gql`
mutation UpdateUserDetails($photo: String!, $name: String!, $age: Int!, $gender: String!, $phoneNumber: String!, $city: String!, $country: String!) {
    updateUserDetails(photo: $photo, name: $name, age: $age, gender: $gender, phoneNumber: $phoneNumber, city: $city, country: $country) {
      city,country,gender,phoneNumber,photo,name
    }
  }`;

export const GET_AWS_UPDATE_LINK = gql`
mutation UpdateUserPhoto($contentType: String!) {
  updateUserPhoto(contentType: $contentType) {
    status
    message
    url
  }
}
`;

export const UPDATE_USER_PHOTO_PATH = gql`
mutation UpdateUserPhotoKeyAfterUpload {
  updateUserPhotoKeyAfterUpload {
    message,
    status
  }
}`;

export const LOGIN_DOCTOR = gql`
mutation LoginDoctor($email: String!, $password: String!) {
    loginDoctor(email: $email, password: $password) {
      status message name token
    }
  }`

export const CREATE_REPORT = gql`
  mutation GeneratePdf($appointmentId: String!, $prescriptions: PrescriptionArrayInput!, $followUp: FollowUpInput!, $doctorFeedback: String!) {
      generateReportPdf(appointmentId: $appointmentId, prescriptions: $prescriptions, followUp: $followUp, doctorFeedback: $doctorFeedback)
    }
  `;

export const RESET_PASSWORD = gql`
mutation ResetPassword($newPassword: String!, $sentToken: String!) {
    resetPassword(newPassword: $newPassword, sentToken: $sentToken) {
    message,status
}
}
`;