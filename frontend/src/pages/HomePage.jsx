import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { api } from '../utils/api';

const services = [
  { title: 'Healthcare Awareness', desc: 'Evidence-based sessions on prevention, early screening, and family health habits.' },
  { title: 'Wellness & Yoga', desc: 'Guided yoga, breathwork, and posture routines for sustainable daily wellbeing.' },
  { title: 'Community Wellness', desc: 'Neighborhood wellness circles that improve participation and shared accountability.' },
  { title: 'Education Support', desc: 'Health literacy and foundational learning support for children and caregivers.' },
  { title: 'Consultation Guidance', desc: 'Practical guidance on accessing local health services and follow-up care.' },
  { title: 'Lifestyle & Nutrition', desc: 'Realistic nutrition planning and movement strategies for everyday routines.' }
];

const wellnessTips = [
  'Start each day with water before tea or coffee to reduce early dehydration.',
  'Use a 20-minute evening walk to improve sleep quality and stress control.',
  'Pair breathing practices with short mindfulness breaks during work hours.',
  'Plan seasonal immunity meals using local produce and balanced portions.',
  'Set family screen-free movement time to encourage active daily habits.'
];

const testimonials = [
  { name: 'Asha Meena', role: 'Community Volunteer', msg: 'Our weekend wellness circles made it easier for families to discuss preventive care openly.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&auto=format&fit=crop' },
  { name: 'Ravi Sharma', role: 'Parent Participant', msg: 'The nutrition and hydration guidance was practical and easy to follow at home.', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop' },
  { name: 'Farah Khan', role: 'School Coordinator', msg: 'Education support sessions helped us align wellness practices with classroom routines.', img: 'https://images.unsplash.com/photo-1542204625-de293a254a5b?w=200&auto=format&fit=crop' }
];

export default function HomePage() {
  const [events, setEvents] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [newsletter, setNewsletter] = useState('');
  const [msg, setMsg] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    Promise.all([api.get('/events'), api.get('/blog-posts')])
      .then(([er, br]) => {
        setEvents(er.data || []);
        setBlogs((br.data || []).slice(0, 4));
      })
      .catch(() => {
        setError('Some sections are temporarily unavailable. Please try again shortly.');
      });
  }, []);

  const sub = async () => {
    setMsg('');
    setError('');
    if (!newsletter || !/\S+@\S+\.\S+/.test(newsletter)) {
      setError('Please enter a valid email address.');
      return;
    }
    try {
      await api.post('/newsletters', { email: newsletter });
      setMsg('Thanks for subscribing. You are now on our wellness updates list.');
      setNewsletter('');
    } catch {
      setError('Unable to subscribe right now. Please try again in a few minutes.');
    }
  };

  return <div>
    <section className='section pt-10 md:pt-16'>
      <div className='relative overflow-hidden rounded-3xl p-6 md:p-10 bg-gradient-to-br from-emerald-50 via-white to-blue-50 border border-emerald-100'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.15),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.15),transparent_45%)]' />
        <div className='relative grid lg:grid-cols-2 gap-8 items-center'>
          <div>
            <h1 className='text-4xl md:text-6xl font-extrabold leading-tight'>Building Healthier Communities for a Better Tomorrow</h1>
            <p className='mt-4 text-slate-600 text-lg'>Supporting wellness, healthcare awareness, education, and community development through meaningful initiatives and modern solutions.</p>
            <div className='mt-6 flex flex-wrap gap-3'>
              <Link to='/services' className='btn-primary'>Explore Services</Link>
              <Link to='/programs' className='btn-ghost'>Join Community</Link>
            </div>
          </div>
          <div className='relative'>
            <img alt='Healthcare volunteers supporting community wellness activities' className='rounded-3xl w-full h-[360px] object-cover shadow-2xl' src='https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1400&auto=format&fit=crop' />
            <div className='absolute -left-3 -bottom-3 glass rounded-xl px-4 py-3 text-sm font-semibold'>Wellness Programs</div>
            <div className='absolute right-3 top-3 glass rounded-xl px-4 py-3 text-sm font-semibold'>Healthcare Awareness</div>
            <div className='absolute right-3 bottom-3 glass rounded-xl px-4 py-3 text-sm font-semibold'>Education Initiatives</div>
          </div>
        </div>
      </div>
    </section>

    <section className='section mt-14'>
      <h2 className='text-3xl font-bold'>Services Preview</h2>
      <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-6'>
        {services.map((s) => <motion.article key={s.title} whileHover={{ y: -6 }} className='glass rounded-2xl p-5'>
          <div className='h-10 w-10 rounded-xl bg-gradient-to-r from-emerald-500 to-blue-600 mb-4' />
          <h3 className='font-bold text-lg'>{s.title}</h3>
          <p className='text-sm text-slate-600 mt-2'>{s.desc}</p>
          <Link to='/services' className='inline-block mt-4 text-emerald-700 font-semibold'>Learn More →</Link>
        </motion.article>)}
      </div>
    </section>

    <section className='section mt-14'>
      <h2 className='text-3xl font-bold'>Health & Wellness Guidance</h2>
      <div className='mt-6 flex gap-4 overflow-x-auto pb-2'>
        {wellnessTips.map((tip) => <div key={tip} className='min-w-[280px] md:min-w-[320px] card p-5'>{tip}</div>)}
      </div>
    </section>

    <section className='section mt-14'>
      <h2 className='text-3xl font-bold'>Programs & Community</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6'>
        {events.slice(0, 4).map((e) => <motion.div key={e._id} whileHover={{ scale: 1.02 }} className='card overflow-hidden'>
          <img alt={e.title} src='https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1200&auto=format&fit=crop' className='h-36 w-full object-cover' />
          <div className='p-4'><h3 className='font-bold'>{e.title}</h3><p className='text-sm text-slate-600 mt-1'>{e.content || e.location}</p><Link to='/programs' className='text-emerald-700 font-semibold inline-block mt-3'>Explore →</Link></div>
        </motion.div>)}
      </div>
    </section>

    <section className='section mt-14'>
      <h2 className='text-3xl font-bold'>Community Voices</h2>
      <div className='grid md:grid-cols-3 gap-5 mt-6'>
        {testimonials.map((t) => <div key={t.name} className='card p-5'>
          <div className='flex items-center gap-3'><img alt={t.name} src={t.img} className='h-12 w-12 rounded-full object-cover' /><div><p className='font-semibold'>{t.name}</p><p className='text-xs text-slate-500'>{t.role}</p></div></div>
          <p className='text-sm text-slate-600 mt-3'>{t.msg}</p>
        </div>)}
      </div>
    </section>

    <section className='section mt-14'>
      <h2 className='text-3xl font-bold'>From Our Blog</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-5 mt-6'>
        {blogs.map((b) => <article key={b._id} className='card overflow-hidden'>
          <img alt={b.title} src={b.image || 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1200&auto=format&fit=crop'} className='h-36 w-full object-cover' />
          <div className='p-4'><span className='text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full'>{b.category || 'Wellness'}</span><h3 className='font-bold mt-3 text-sm'>{b.title}</h3><Link to='/blog' className='text-emerald-700 font-semibold inline-block mt-3'>Read More →</Link></div>
        </article>)}
      </div>
    </section>

    <section className='section mt-14 mb-6'>
      <div className='glass rounded-3xl p-6 md:p-8'>
        <h3 className='font-bold text-2xl'>Stay Connected with Wellness & Community Updates</h3>
        <div className='flex flex-col sm:flex-row gap-3 mt-4'>
          <input className='border rounded-lg p-3 flex-1' value={newsletter} onChange={(e) => setNewsletter(e.target.value)} placeholder='Enter your email address' />
          <button onClick={sub} className='btn-primary'>Subscribe</button>
        </div>
        {msg && <p className='text-emerald-700 mt-3 text-sm'>{msg}</p>}
        {error && <p className='text-rose-700 mt-3 text-sm'>{error}</p>}
      </div>
    </section>

    <section className='section mb-14'>
      <div className='rounded-3xl p-8 bg-gradient-to-r from-emerald-600 to-blue-600 text-white'>
        <h3 className='text-3xl font-bold'>Together We Can Build Healthier Communities</h3>
        <div className='mt-5 flex flex-wrap gap-3'>
          <Link to='/contact' className='px-5 py-3 rounded-xl bg-white text-slate-900 font-semibold'>Contact Us</Link>
          <Link to='/programs' className='px-5 py-3 rounded-xl border border-white/60'>Explore Programs</Link>
        </div>
      </div>
    </section>
  </div>;
}
