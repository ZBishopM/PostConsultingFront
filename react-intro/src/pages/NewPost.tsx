import { useContext } from 'react';
import { AuthContext, AuthContextType } from '../components/AuthContext';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import PostForm from '../components/PostForm';

function NewPost() {

    const { user } = useContext(AuthContext) as AuthContextType;
    return (
        <>
            <Navbar>
                {
                    user&&
                    <PostForm user={user}/>
                }
            </Navbar>
            <Footer />
        </>
    )
}

export default NewPost