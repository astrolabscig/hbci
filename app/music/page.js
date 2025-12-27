
const page = () => {
  return (
    <div className="min-h-screen">
      <header className="relative h-[90vh] overflow-hidden flex">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://images.unsplash.com/photo-1438232992991-995b7058bbb3?q=80&w=2073&auto=format&fit=crop" 
                alt="Music"
                className="w-full h-full object-cover brightness-[0.4]"
              />
            </div>
            <div className="relative z-10 text-center p-6 mt-35 md:mt-30 md:p-12 px-4 mx-auto">
              <h1 className="text-5xl md:text-7xl text-white mb-4 max-w-xl">Welcome to the <span className='text-gold-500'>Music Ministry</span></h1>
              <p className="text-gray-200 text-lg md:text-xl max-w-md mx-auto font-light tracking-wide">
                Capturing the beauty of faith, community, and service at HBCI.
              </p>
            </div>
      </header>
      {/* Music Leaders */}
      <div>
        <div className="max-w-7xl mx-auto px-6 pt-15">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-center">Meet Our <span className="text-gold-500">Music Leaders</span></h2>
          <p className="text-slate-400 text-lg mb-8 leading-relaxed text-center max-w-3xl mx-auto">
              Our Music leaders are dedicated to guiding and inspiring the next generation. Get to know the passionate individuals who are making a difference in the lives of our Music.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 pb-20">
          {/* Leader 1 */}
          <div className="items-center rounded-2xl text-center text-slate flex flex-col">
            <div className='relative w-50 h-50 rounded-full overflow-hidden mx-auto mb-3'>
              <img src="/hero.png" alt="Leader 1" className="w-full h-full " />
            </div>
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-slate-400">Music Pastor</p>
          </div>
          <div className="items-center rounded-2xl text-center text-slate flex flex-col">
            <div className='relative w-50 h-50 rounded-full overflow-hidden mx-auto mb-3'>
              <img src="/hero.png" alt="Leader 1" className="w-full h-full " />
            </div>
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-slate-400">Music Pastor</p>
          </div>
          <div className="items-center rounded-2xl text-center text-slate flex flex-col">
            <div className='relative w-50 h-50 rounded-full overflow-hidden mx-auto mb-3'>
              <img src="/hero.png" alt="Leader 1" className="w-full h-full " />
            </div>
            <h3 className="text-xl font-semibold">John Doe</h3>
            <p className="text-slate-400">Music Pastor</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default page