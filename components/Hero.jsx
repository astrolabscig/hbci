import Image from 'next/image'

const Hero = () => {
  return (
    <header className='relative h-screen flex overflow-hidden rounded-b-4xl'>
        {/* hero image */}
        <div className='absolute inset-0 -z-10 overflow-hidden'>
            <Image
                src="/hero.png"
                alt="A stunning image for the hero section"
                // Key prop: makes the image fill the container
                fill 
                // Style property: crops the image while ensuring it covers the container
                style={{ objectFit: 'cover' }} 
                // Priority: Critical for Hero images (LCP)
                priority 
                // Optional: Pre-loads the image for a smoother transition
                sizes="(max-width: 768px) 100vw, 50vw" 
            />
            <div className="absolute inset-0 bg-forest-900 opacity-50"></div>
        </div>

        {/* Welcome section */}
        <div className='relative z-10 text-white text-center p-6 mt-30 md:p-12 max-w-4xl mx-auto'>
            <h1 className="font-church text-5xl md:text-7xl font-semibold leading-tight tracking-tight mb-4 drop-shadow-lg">
                <span className='font-stretch-50%'>Welcome To Harvest</span> Time Bible Church Int.
            </h1>
            <p className='font-church text-xl md:text-2xl mb-8 tracking-wider text-gold-500 font-light drop-shadow-md'>
                Holiness Without
            </p>

            {/* call to action */}
            <div className='justify-center'>
                <a href="#about" className='btn-secondary'>
                    Learn More
                </a>
            </div>
        </div>
    </header>
  )
}

export default Hero