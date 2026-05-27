import { useEffect, useMemo, useState } from 'react';
import { api } from '../utils/api';

export default function AdminPage() {
  const [token, setToken] = useState(localStorage.getItem('adminToken') || '');
  const [email, setEmail] = useState('admin@prakrati.com');
  const [password, setPassword] = useState('Admin123@');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState({ blogs: [], careers: [], contacts: [], events: [], newsletters: [] });
  const [contentKey, setContentKey] = useState('homepage');
  const [contentValue, setContentValue] = useState('{\n  "heroTitle": "Building Healthier Communities for a Better Tomorrow"\n}');
  const [form, setForm] = useState({ title: '', category: 'Wellness', content: '', image: '' });

  const headers = useMemo(() => ({ headers: { Authorization: `Bearer ${token}` } }), [token]);

  const load = async (t = token) => {
    if (!t) return;
    setLoading(true);
    setError('');
    try {
      const h = { headers: { Authorization: `Bearer ${t}` } };
      const [b, c, cr, e, n] = await Promise.all([
        api.get('/blog-posts', h),
        api.get('/careers', h),
        api.get('/contact-requests', h),
        api.get('/events', h),
        api.get('/newsletters', h)
      ]);
      setData({ blogs: b.data || [], careers: c.data || [], contacts: cr.data || [], events: e.data || [], newsletters: n.data || [] });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to load admin data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, [token]);

  const login = async () => {
    setError('');
    try {
      const r = await api.post('/auth/login', { email, password });
      localStorage.setItem('adminToken', r.data.token);
      setToken(r.data.token);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  const addBlog = async () => {
    setError('');
    try {
      await api.post('/blog-posts', form, headers);
      setForm({ title: '', category: 'Wellness', content: '', image: '' });
      load();
    } catch (err) {
      setError(err.response?.data?.message || 'Could not create blog');
    }
  };

  const saveContent = async () => {
    setError('');
    try {
      await api.put('/content', { key: contentKey, value: JSON.parse(contentValue), published: true }, headers);
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid JSON/content save failed');
    }
  };

  if (!token) {
    return <div className='section py-10 max-w-md'>
      <h1 className='text-3xl font-bold mb-4'>Admin Login</h1>
      <input className='border p-2 rounded w-full mb-2' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type='password' className='border p-2 rounded w-full mb-3' value={password} onChange={(e) => setPassword(e.target.value)} />
      {error && <p className='text-red-600 mb-2'>{error}</p>}
      <button className='btn-primary w-full' onClick={login}>Login</button>
    </div>;
  }

  return <div className='min-h-screen bg-slate-950 text-slate-100 p-6'>
    <h1 className='text-3xl font-bold'>Admin Dashboard</h1>
    {error && <p className='text-rose-400 mt-2'>{error}</p>}
    {loading && <p className='text-slate-300 mt-2'>Loading...</p>}
    <div className='grid lg:grid-cols-3 gap-5 mt-5'>
      <div className='bg-slate-800 rounded-xl p-4'>
        <h3 className='font-bold mb-3'>Publish Blog</h3>
        <input className='w-full bg-slate-900 p-2 rounded mb-2' placeholder='Title' value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
        <input className='w-full bg-slate-900 p-2 rounded mb-2' placeholder='Category' value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} />
        <input className='w-full bg-slate-900 p-2 rounded mb-2' placeholder='Image URL' value={form.image} onChange={(e) => setForm({ ...form, image: e.target.value })} />
        <textarea className='w-full bg-slate-900 p-2 rounded mb-2' rows={5} placeholder='Content' value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} />
        <button className='btn-primary w-full' onClick={addBlog}>Save / Publish</button>
      </div>

      <div className='bg-slate-800 rounded-xl p-4'>
        <h3 className='font-bold mb-2'>Website Content Management</h3>
        <input className='w-full bg-slate-900 p-2 rounded mb-2' placeholder='Content Key (e.g. homepage)' value={contentKey} onChange={(e) => setContentKey(e.target.value)} />
        <textarea className='w-full bg-slate-900 p-2 rounded mb-2 font-mono text-sm' rows={9} value={contentValue} onChange={(e) => setContentValue(e.target.value)} />
        <button className='btn-primary w-full' onClick={saveContent}>Save Content</button>
      </div>

      <div className='bg-slate-800 rounded-xl p-4 text-sm space-y-2'>
        <h3 className='font-bold'>Overview</h3>
        <p>Blogs: {data.blogs.length}</p><p>Careers: {data.careers.length}</p><p>Contacts: {data.contacts.length}</p><p>Events: {data.events.length}</p><p>Newsletters: {data.newsletters.length}</p>
        <button className='btn-ghost mt-4 text-white border-slate-600' onClick={() => { localStorage.removeItem('adminToken'); setToken(''); }}>Logout</button>
      </div>
    </div>
  </div>;
}
