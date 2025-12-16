
const InfoCard = ({ icon: Icon , title, info }) => {
  return (
    <div className='flex items-start gap-4'>
        <div className='p-2.5 bg-white border border-slate-200 rounded-md'>
            <Icon className='w-5 h-5' />
        </div>
        <div>
            <h3 className='text-2.5 font-semibold text-forest-900 mb-1'>{title}</h3>
            <p className='text-sm text-forest-700 leading-relaxed whitespace-pre-line'>{info}</p>
        </div>
    </div>
  )
}

export default InfoCard