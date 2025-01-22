import { useContext} from "react";
import type {AuthContextType} from "@/contexts/jwt-context";
import {AuthContext} from "@/contexts/jwt-context";

export const useAuth = <T = AuthContextType>() => useContext(AuthContext) as T;
