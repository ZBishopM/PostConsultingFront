import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer"
import Form from "../components/Form"
import Navbar from "../components/Navbar"
import { useContext, useEffect } from "react";
import { AuthContext, AuthContextType } from "../components/AuthContext";

const Register = () => {
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
                <Form />
            </Navbar>
            <Footer />
        </>
    )
}

export default Register