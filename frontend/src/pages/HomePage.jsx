import { motion } from 'framer-motion';

const stats = [{k:'12K+',v:'Families Supported'},{k:'120+',v:'Health Camps'},{k:'96%',v:'Community Satisfaction'},{k:'40+',v:'Partner Experts'}];

export default function HomePage(){
  return <div>
    <section className='section pt-10 md:pt-16'>
      <div className='grid lg:grid-cols-2 gap-8 items-center'>
        <div>
          <p className='text-emerald-600 font-semibold'>Premium Community Healthcare Platform</p>
          <h1 className='text-4xl md:text-6xl font-extrabold leading-tight mt-3'>Building a Healthier Tomorrow, Together</h1>
          <p className='mt-4 text-slate-600'>Integrated healthcare awareness, wellness programs, education support and community-first outcomes.</p>
          <div className='mt-6 flex gap-3'><button className='btn-primary'>Join Programs</button><button className='btn-ghost'>Explore Services</button></div>
        </div>
        <div className='relative'>
          <img className='rounded-3xl w-full h-[360px] object-cover shadow-2xl' src='https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1400&auto=format&fit=crop' />
          <div className='glass rounded-2xl p-4 absolute -bottom-5 left-5'>24/7 Community Guidance</div>
        </div>
      </div>
    </section>

    <section className='section mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
      {stats.map((s)=><motion.div whileHover={{y:-5}} key={s.k} className='card p-5'><p className='text-2xl font-extrabold text-emerald-600'>{s.k}</p><p className='text-sm text-slate-600'>{s.v}</p></motion.div>)}
    </section>

    <section className='section mt-16 grid md:grid-cols-3 gap-5'>
      {['Health Awareness','Wellness Highlights','Community Programs'].map((x)=><div key={x} className='card p-6'><h3 className='font-bold'>{x}</h3><p className='text-sm mt-2 text-slate-600'>Modern preventive care and learning initiatives designed for healthier lives.</p></div>)}
    </section>
  </div>
}
