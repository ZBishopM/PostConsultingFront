import Footer from "../components/Footer"
import LogInForm from "../components/LogInForm"
import Navbar from "../components/Navbar"

const LogIn = () => {
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