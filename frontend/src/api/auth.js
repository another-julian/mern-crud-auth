import axios from "./axios";
import { REGISTER, LOGIN, VERIFY_TOKEN } from "../config/api";

export const registerRequest = (user) => axios.post(REGISTER, user);

export const loginRequest = (user) => axios.post(LOGIN, user);

export const verifyTokenRequest = () => axios.get(VERIFY_TOKEN);
