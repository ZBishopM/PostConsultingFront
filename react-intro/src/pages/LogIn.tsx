import { useContext, useEffect } from "react";
import { AuthContext, AuthContextType } from "../components/AuthContext";
import Footer from "../components/Footer"
import LogInForm from "../components/LogInForm"
import Navbar from "../components/Navbar"
import { useNavigate } from "react-router-dom";

const LogIn = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext) as AuthContextType;
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
            <Footer />
        </>
    )
}

export default LogIn