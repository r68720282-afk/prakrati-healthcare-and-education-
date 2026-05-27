import { Link, NavLink } from 'react-router-dom';

const links = ['about','services','programs','blog','careers','contact'];

export default function Layout({ children }) {
  return (
    <div>
      <header className='sticky top-0 z-50 bg-white/80 backdrop-blur border-b'>
        <nav className='section h-16 flex items-center justify-between'>
          <Link to='/' className='font-extrabold text-lg gradient-text'>Prakarati</Link>
          <div className='hidden md:flex gap-5 text-sm font-medium capitalize'>
            {links.map((l)=><NavLink key={l} className='hover:text-emerald-600' to={`/${l}`}>{l}</NavLink>)}
          </div>
          <NavLink to='/admin' className='btn-primary text-sm py-2 px-4'>Admin Panel</NavLink>
        </nav>
      </header>
      <main>{children}</main>
      <footer className='mt-16 bg-slate-900 text-slate-200 py-10'>
        <div className='section grid md:grid-cols-3 gap-6'>
          <div><h4 className='font-bold'>Prakarati Healthcare & Education</h4><p className='text-sm mt-2'>Building healthier communities through care, education, and wellness.</p></div>
          <div><h4 className='font-bold'>Contact</h4><p className='text-sm mt-2'>support@prakarati.org<br/>+91 00000 00000</p></div>
          <div><h4 className='font-bold'>Follow</h4><p className='text-sm mt-2'>Facebook · Instagram · LinkedIn</p></div>
        </div>
      </footer>
      <a href='https://wa.me/910000000000' className='fixed right-4 bottom-4 bg-green-500 text-white p-3 rounded-full shadow-lg'>WhatsApp</a>
    </div>
  );
}
