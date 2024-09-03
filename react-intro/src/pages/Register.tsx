import { useNavigate } from "react-router-dom";
import Form from "../components/Form"
import Navbar from "../components/Navbar"
import { useContext, useEffect } from "react";
import { AuthContext } from "../components/AuthContext";

const Register = () => {
    const navigate = useNavigate();
    const { user } = useContext(AuthContext);
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
        </>
    )
}

export default Register