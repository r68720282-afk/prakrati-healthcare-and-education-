import { useState } from 'react';

const faq = {
  careers: 'Visit Careers to view openings and apply instantly.',
  contact: 'Use Contact page form or WhatsApp for support.',
  health: 'Join our camps and wellness sessions from Programs page.',
  volunteer: 'You can register as a volunteer on Careers/Contact pages.'
};

export default function Chatbot() {
  const [q, setQ] = useState('');
  const [a, setA] = useState('Hello! Ask about careers, contact, health, volunteer.');
  return (
    <div className='fixed left-4 bottom-4 z-50'>
      <div className='glass rounded-2xl p-3 w-72'>
        <p className='text-xs font-semibold mb-2 text-emerald-700'>AI Support Assistant</p>
        <input className='w-full border rounded-lg p-2 text-sm' value={q} onChange={(e)=>setQ(e.target.value)} placeholder='Ask something...' />
        <button className='btn-primary w-full mt-2 text-sm py-2' onClick={()=>setA(faq[q.toLowerCase()] || 'For detailed help, contact us on WhatsApp.')}>Get Answer</button>
        <p className='text-xs mt-2 text-slate-600'>{a}</p>
      </div>
    </div>
  );
}
