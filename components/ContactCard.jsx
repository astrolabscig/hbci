import { Check } from 'lucide-react'
import React from 'react'

const ContactCard = () => {
  return (
        <section id="contact" className="pt-20 m-8">
            <div className="bg-stone-900 rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative text-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
                    <div>
                        <div className="inline-block bg-stone-800 border border-gold-500 rounded-full px-4 py-1.5 mb-6">
                            <span className="text-xs font-medium uppercase tracking-wider text-stone-300">Join us</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">Plan your first <span className="text-gold-500">Visit</span> </h2>
                        <p className="text-stone-400 text-lg mb-8 leading-relaxed">
                            We know visiting a new church can be intimidating. Let us know you're coming, and we'll save a seat, help with kids check-in, and show you around.
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-gold-500">
                                    <Check />
                                </div>
                                <span className="text-stone-300">One on one session</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-gold-500">
                                    <Check />
                                </div>
                                <span className="text-stone-300">Guidance and Counselling</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-stone-800 flex items-center justify-center text-gold-500">
                                    <Check />
                                </div>
                                <span className="text-stone-300">Prayer session</span>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Booking Widget Form --> */}
                    <div className="bg-white text-stone-900 rounded-2xl p-6 md:p-8 shadow-2xl">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="text-lg font-semibold">Visit Details</h3>
                        </div>

                        <form className="space-y-4">

                            {/* <!-- Inputs --> */}
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5">First Name</label>
                                    <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all" placeholder="Victoria" />
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5">Last Name</label>
                                    <input type="text" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all" placeholder="Mensah"/>
                                </div>
                            </div>
                                <div>
                                    <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5">Email</label>
                                    <input type="email" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all" placeholder="example@gmail.com"/>
                                </div>
                                <div>
                                    <label className="block text-xs font-semibold text-stone-500 uppercase tracking-wide mb-1.5">Phone No.</label>
                                    <input type="tel" className="w-full bg-stone-50 border border-stone-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-stone-900/10 focus:border-stone-900 transition-all" placeholder="0234500000"/>
                                </div>

                            <button type="button" className="w-full bg-stone-900 text-gold-500 border-2 border-gold-500 rounded-xl py-3.5 text-sm font-semibold hover:bg-stone-800 transition-all shadow-lg shadow-stone-900/20 mt-2">
                                Confirm Visit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default ContactCard