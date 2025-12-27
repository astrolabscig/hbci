

const Founder = () => {
  return (
    <section className="py-24 bg-forest-900 text-white relative overflow-hidden" id="about">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                    <span className="inline-block px-3 py-1 bg-slate-800 text-xs font-medium text-slate-300 mb-6">Latest Message</span>
                    <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Meet Our Leaders <br/><span className="text-gold-500">Gods Warriors</span></h2>
                    <p className="text-slate-200 mb-8 leading-relaxed max-w-lg">
                        Join us as we explore what it means to trust God in every season of life. In this week's message, Pastor John dives into Hebrews 11.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full text-sm font-medium hover:bg-slate-100 transition-colors">
                            <span className="iconify" data-icon="lucide:play-circle" data-width="18"></span>
                            Learn More
                        </button>
                    </div>
                </div>
                    
                <div className="relative">
                    <div className=" bg-forest-900 rounded-2xl border border-forest-700 shadow-2xl overflow-hidden group cursor-pointer relative">
                        <img src='/hero.png' />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Founder