export const NOTIFICATIONS = {
  ERROR: {
    SYSTEM: "An unexpected error occurred!",
    SERVER: "Request failed with status ",
    UNDEFINED: "Something went wrong!",
  },
  AUTH: {
    TOKEN_MISSED: "Invalid response from server. Tokens are missed.",
    LOGIN: {
      TOAST: {
        title: "Login successfully!",
        description: "Welcome you to our shop.",
      },
    },
    REGISTER: {
      TOAST: {
        title: "Successfully!",
        description: "You have successfully created an account",
      }
    },
  },
};

export const ERROR_TOAST = (message: string) => ({
  title: "Error!",
  variant: "destructive" as const,
  description: message,
});
