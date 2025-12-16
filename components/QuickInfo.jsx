import { LuClock, LuMail, LuMapPin, LuRedo } from 'react-icons/lu';
// Removed RiClockwiseFill and RiMailFill imports
import InfoCard from './InfoCard';
// Removed RiClockwiseFill and RiMailFill imports

const quickInfoList = [
    {
        // Changed from RiMailFill (mail) to LuMapPin (location) for accuracy
        'icon': LuMapPin,
        'title': 'Location',
        'info': 'Accra, Gbawe-Zero',
    },
    {
        // Changed from RiClockwiseFill to LuClock or LuRedo (clockwise)
        'icon': LuClock, // LuClock is often a better fit for 'Service Times'
        'title': 'Service Times',
        'info': 'Sundays at 8:30 AM',
    },
    {
        // Kept LuMail, which was already imported
        'icon': LuMail,
        'title': 'Contact Us',
        'info': 'info@harvestimebiblechurchint.com',
    },
];

const QuickInfo = () => {
    // ... (rest of the component is unchanged)
    return (
        <section className='border-y border-slate-100 bg-slate-50/50'>
            <div className='mx-auto max-w-7xl px-6 py-12'>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {quickInfoList.map((item, index) => {
                        // Added 'index' as a key, or use a unique ID from the data if available
                        return (
                            <InfoCard
                                key={index}
                                icon={item.icon}
                                title={item.title}
                                info={item.info}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default QuickInfo;