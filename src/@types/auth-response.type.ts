export interface AuthResponse {
  statusCode?: number;
  message: string;
  data: {
    _id: string;
    full_name: string;
    email: string;
    access_token: string;
    refresh_token: string;
  };
}
