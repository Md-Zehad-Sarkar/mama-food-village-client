import { JwtPayload, jwtDecode } from "jwt-decode";

type DecodedUser = {
  name: string;
  email: string;
  phone: string;
  role: string;
  iat: number;
  exp: number;
  iss?: string;
  sub?: string;
  aud?: string | string[];
  nbf?: number;
  jti?: string;
};

export const decodedUser = (token: string): DecodedUser => {
  const decoded = jwtDecode<JwtPayload & DecodedUser>(token);
  return decoded;
};
