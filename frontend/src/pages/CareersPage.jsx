import { useEffect, useState } from 'react';
import { api } from '../utils/api';

export default function CareersPage(){
  const [jobs,setJobs]=useState([]); const [loading,setLoading]=useState(true); const [msg,setMsg]=useState('');
  useEffect(()=>{api.get('/careers').then(r=>setJobs(r.data||[])).finally(()=>setLoading(false));},[]);
  const applyVolunteer = async ()=>{await api.post('/volunteers',{name:'Website Visitor',email:'visitor@example.com',message:'Interested in volunteering'});setMsg('Volunteer request submitted!');};
  return <div className='section py-10'><h1 className='text-4xl font-extrabold'>Careers</h1><p className='text-slate-600 mt-2'>Build impact with our healthcare and education mission.</p>{loading?<p className='mt-6'>Loading...</p>:<div className='grid md:grid-cols-2 gap-5 mt-6'>{jobs.map((j,i)=><div className='card p-6' key={j._id||i}><h3 className='font-bold'>{j.title}</h3><p className='text-sm text-slate-600 mt-2'>{j.location||'Hybrid'} · {j.category||'Community'}</p><button className='btn-primary mt-4 text-sm py-2 px-4'>Apply Now</button></div>)}</div>}<div className='card p-6 mt-6'><h3 className='font-bold'>Volunteer Opportunities</h3><button onClick={applyVolunteer} className='btn-ghost mt-3'>Register as Volunteer</button>{msg&&<p className='text-emerald-700 mt-2'>{msg}</p>}</div></div>}
