import { useContext, useEffect } from "react";
import { AuthContext } from "../components/AuthContext";
import LogInForm from "../components/LogInForm"
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom";

const LogIn = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext)
    useEffect(() => {
        if (user) {
            navigate('/posts');
        }
    }, [navigate, user]);
    return (
        <>
            <Navbar>
                <LogInForm />
            </Navbar>
        </>
    )
}

export default LogIn