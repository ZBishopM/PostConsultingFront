import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './output.css'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Posts from './pages/Posts'
import LogIn from './pages/LogIn'
import Register from './pages/Register'
import { AuthProvider } from './components/AuthContext'

function App() {

  return (
    <>
      <AuthProvider>
      <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </>
  )
}

export default App
