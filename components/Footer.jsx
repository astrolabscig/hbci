import { RiFacebookCircleFill, RiTiktokFill, RiYoutubeFill } from 'react-icons/ri'

 
const Footer = () => {
  return (
    <footer className="flex bg-forest-900 mt-auto pt-16 pb-8">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 border-b border-forest-500 pb-8">
                {/* logo */}
                <div>
                    <h3 className="text-3xl text-gold-500 font-extrabold mb-3">
                        Logo
                    </h3>
                    <p className="text-forest-500 text-sm leading-relaxed mb-4">
                        Serving our community with grace, love, and compassion since 1995. Find hope and belonging here.
                    </p>

                    {/* Socials */}
                    <div className='flex space-x-2'>
                        <a href="/"><RiFacebookCircleFill className='text-4xl text-gold-500' /></a>
                        <a href="/"><RiYoutubeFill className='text-4xl text-gold-500' /></a>
                        <a href="/"><RiTiktokFill className='text-4xl text-gold-500' /></a>
                    </div>
                </div>
                
                {/* Quick links */}
                <div>
                    <h4 className="text-2xl text-gold-500 font-bold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-forest-500">
                        <li><a href="/">Our Story</a></li>
                        <li><a href="/">Contact</a></li>
                        <li><a href="/">Events</a></li>
                        <li><a href="/">Contact</a></li>
                    </ul>
                </div>
            </div>

            <div className='text-gold-500 text-center mt-2.5'>&copy; {new Date().getFullYear()}. All rights reserved HBCI</div>

        </div>
    </footer>
  )
}

export default Footer