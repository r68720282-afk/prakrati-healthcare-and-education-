import { useEffect, useMemo, useState } from 'react';
import { api } from '../utils/api';

export default function BlogPage(){
  const [posts,setPosts]=useState([]); const [q,setQ]=useState(''); const [loading,setLoading]=useState(true);
  useEffect(()=>{api.get('/blog-posts').then(r=>setPosts(r.data||[])).finally(()=>setLoading(false));},[]);
  const filtered = useMemo(()=>posts.filter(p=>`${p.title||''} ${p.category||''}`.toLowerCase().includes(q.toLowerCase())),[posts,q]);
  return <div className='section py-10'><div className='flex justify-between items-center gap-3'><h1 className='text-4xl font-extrabold'>Blog</h1><input className='border rounded-xl px-3 py-2' value={q} onChange={e=>setQ(e.target.value)} placeholder='Search articles'/></div>{loading?<p className='mt-6'>Loading...</p>:<div className='grid md:grid-cols-3 gap-5 mt-6'>{filtered.map((p,i)=><article key={p._id||i} className='card p-5'><img className='h-36 w-full object-cover rounded-xl' src={p.image||'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=600&auto=format&fit=crop'} /><span className='text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded inline-block mt-3'>{p.category||'General'}</span><h3 className='font-bold mt-3'>{p.title}</h3><p className='text-sm text-slate-600 mt-2 line-clamp-3'>{p.content}</p></article>)}</div>}</div>
}
