import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/programs', label: 'Programs' },
  { to: '/blog', label: 'Blog' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact' }
];

export default function Layout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
      setShowTop(window.scrollY > 260);
    };
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className='scroll-smooth'>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/75 backdrop-blur-xl border-b border-teal-100 shadow-sm' : 'bg-transparent'}`}>
        <nav className='section h-16 flex items-center justify-between'>
          <Link to='/' className='font-extrabold text-lg gradient-text'>Prakarati</Link>
          <div className='hidden md:flex items-center gap-5 text-sm font-medium'>
            {links.map((l) => <NavLink key={l.to} className='hover:text-emerald-600 transition-colors' to={l.to}>{l.label}</NavLink>)}
          </div>
          <div className='hidden md:flex items-center gap-2'>
            <NavLink to='/programs' className='btn-ghost text-sm py-2 px-4'>Join Community</NavLink>
            <NavLink to='/contact' className='btn-primary text-sm py-2 px-4'>Contact Us</NavLink>
          </div>
          <button aria-label='Open menu' className='md:hidden p-2 rounded-lg border border-slate-200 bg-white/70' onClick={() => setMobileOpen((v) => !v)}>☰</button>
        </nav>
        {mobileOpen && (
          <div className='md:hidden border-t border-slate-200 bg-white/95 backdrop-blur px-4 py-3'>
            <div className='flex flex-col gap-3'>
              {links.map((l) => <NavLink key={l.to} to={l.to} className='py-1.5' onClick={() => setMobileOpen(false)}>{l.label}</NavLink>)}
              <div className='flex gap-2 pt-2'>
                <NavLink to='/programs' onClick={() => setMobileOpen(false)} className='btn-ghost text-sm py-2 px-4 flex-1 text-center'>Join Community</NavLink>
                <NavLink to='/contact' onClick={() => setMobileOpen(false)} className='btn-primary text-sm py-2 px-4 flex-1 text-center'>Contact Us</NavLink>
              </div>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className='mt-16 bg-slate-900 text-slate-200 py-12'>
        <div className='section grid md:grid-cols-4 gap-8'>
          <div>
            <h4 className='font-bold text-white'>Prakarati Healthcare & Education</h4>
            <p className='text-sm mt-3 text-slate-300'>We support communities with practical wellness education, preventive healthcare awareness, and inclusive learning initiatives.</p>
          </div>
          <div>
            <h4 className='font-bold text-white'>Quick Links</h4>
            <ul className='text-sm mt-3 space-y-2'>
              {links.slice(0, 6).map((l) => <li key={l.to}><NavLink to={l.to} className='hover:text-white'>{l.label}</NavLink></li>)}
            </ul>
          </div>
          <div>
            <h4 className='font-bold text-white'>Contact</h4>
            <p className='text-sm mt-3 text-slate-300'>hello@prakrati.com<br />+91 98765 43210<br />Jaipur, Rajasthan</p>
          </div>
          <div>
            <h4 className='font-bold text-white'>Working Hours</h4>
            <p className='text-sm mt-3 text-slate-300'>Mon - Sat: 9:00 AM - 6:00 PM<br />Sun: Community Events</p>
          </div>
        </div>
        <div className='section mt-8 text-xs text-slate-400 border-t border-slate-800 pt-5'>© {new Date().getFullYear()} Prakarati Healthcare & Education</div>
      </footer>

      <a href='https://wa.me/919876543210' target='_blank' rel='noreferrer' aria-label='Chat on WhatsApp' className='fixed right-4 bottom-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:scale-105 transition'>WhatsApp</a>
      {showTop && <button aria-label='Scroll to top' className='fixed right-4 bottom-20 bg-slate-900 text-white p-3 rounded-full shadow-lg hover:bg-slate-700 transition' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>}
    </div>
  );
}
