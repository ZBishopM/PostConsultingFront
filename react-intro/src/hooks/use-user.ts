import { AuthContext } from "../components/AuthContext";
import { useContext } from "react";

const useUser = ()=>useContext(AuthContext);
export default useUser;