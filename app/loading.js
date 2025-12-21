

export default function loading() {
    return (
      <div className="fixed top-0 bg-white z-50 h-screen w-full flex items-center justify-center">
        <div className="space-y-2 items-center">
            <img src="/logo.png" className="w-60 " alt="logo" />
            <p className='mx-auto text-4xl text-gold-500 font-semibold'>Loading...</p>
        </div>
    </div>
  )

}
