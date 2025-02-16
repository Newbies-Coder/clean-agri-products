export type TokenDecoded = {
  _id: string;
  email: string;
  role: string;
  token_type: string;
  iat: number;
  exp: number;
}
