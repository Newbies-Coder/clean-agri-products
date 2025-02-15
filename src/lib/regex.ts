export const regexPassword: RegExp =
  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

export const regexPhoneNumber: RegExp = /^\d{10}$/