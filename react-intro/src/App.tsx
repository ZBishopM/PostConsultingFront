import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { AuthProvider } from './components/AuthContext'
import './output.css'
import Home from './pages/Home'
import LogIn from './pages/LogIn'
import NewPost from './pages/NewPost'
import NotFound from './pages/NotFound'
import Post from './pages/Post'
import Posts from './pages/Posts'
import Register from './pages/Register'

function App() {

  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="/posts/new" element={<NewPost />} />
            <Route path="/posts/:slug" element={<Post />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer/>
      </AuthProvider>
    </>
  )
}

export default App
