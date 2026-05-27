import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout'; import Chatbot from './components/Chatbot';
import HomePage from './pages/HomePage'; import AboutPage from './pages/AboutPage'; import ServicesPage from './pages/ServicesPage'; import ProgramsPage from './pages/ProgramsPage'; import BlogPage from './pages/BlogPage'; import CareersPage from './pages/CareersPage'; import ContactPage from './pages/ContactPage'; import AdminPage from './pages/AdminPage';

export default function App(){return <Layout><Routes><Route path='/' element={<HomePage/>}/><Route path='/about' element={<AboutPage/>}/><Route path='/services' element={<ServicesPage/>}/><Route path='/programs' element={<ProgramsPage/>}/><Route path='/blog' element={<BlogPage/>}/><Route path='/careers' element={<CareersPage/>}/><Route path='/contact' element={<ContactPage/>}/><Route path='/admin' element={<AdminPage/>}/></Routes><Chatbot/></Layout>}
