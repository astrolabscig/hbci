import { MinistryCard } from "./MinistryCard";
import { Camera, Globe, Heart, Mic2, Sparkles, Users } from 'lucide-react'

const ministriesData = [
  {
    id: 'm1',
    title: 'Music Ministry',
    description: 'Leading the congregation in heartfelt and engaging worship through music and arts, preparing hearts to receive the Word of God.',
    focus: ['Music', 'Choir', 'Sound & Tech'],
    imageUrl: 'https://i.ibb.co/L5hY5m9/worship-ministry.jpg', // Placeholder image URL
    icon: Mic2, // Placeholder for an icon name (e.g., from react-icons)
    leader: 'Jane Williams',
    contactEmail: 'worship@church.org',
  },
  {
    id: 'm2',
    title: 'Children\'s Ministry (KidZone)',
    description: 'Dedicated to teaching children from nursery through 5th grade about Jesus Christ in a safe, fun, and age-appropriate environment.',
    focus: ['Sunday School', 'VBS', 'Nursery'],
    imageUrl: 'https://i.ibb.co/xJ2s7dC/children-ministry.jpg',
    icon: Heart,
    leader: 'Sarah Rodriguez',
    contactEmail: 'kids@church.org',
  },
  {
    id: 'm3',
    title: 'Youth Ministry (Ignite)',
    description: 'Empowering middle and high school students to own their faith, build strong relationships, and impact their schools and communities for Christ.',
    focus: ['Small Groups', 'Mission Trips', 'Fellowship Events'],
    imageUrl: 'https://i.ibb.co/q1zR0Pz/youth-ministry.jpg',
    icon: Sparkles,
    leader: 'Michael Chen',
    contactEmail: 'youth@church.org',
  },
  {
    id: 'm4',
    title: 'Outreach & Missions',
    description: 'Reaching out locally and globally to serve those in need, sharing the gospel through acts of service and tangible assistance.',
    focus: ['Local Homeless Shelter', 'Global Missions', 'Community Service'],
    imageUrl: 'https://i.ibb.co/5G7m8ZJ/outreach-ministry.jpg',
    icon: Globe,
    leader: 'David Lee',
    contactEmail: 'outreach@church.org',
  },
  {
    id: 'm6',
    title: 'Tech & Media Ministry',
    description: 'Managing all audiovisual elements for services, including livestreaming, website maintenance, graphic design, and social media presence.',
    focus: ['Livestreaming', 'Website', 'Social Media'],
    imageUrl: 'https://i.ibb.co/b3wP7F0/tech-ministry.jpg',
    icon: Camera,
    leader: 'Thomas Baker',
    contactEmail: 'media@church.org',
  },
];

const Ministries = () => {
  return (
    <div className="pt-20">
        <div className="items-center text-center">
            <h2 className="text-4xl font-semibold">Our Ministries</h2>
        </div>
        <div className="flex mx-auto w-full p-10">   
            <div className="grid grid-cols-1 md:grid-cols-3 mx-auto  gap-6">
                {ministriesData.map((ministry, index) => {
                    return(
                    <MinistryCard 
                        key={index}
                        title={ministry.title} 
                        description={ministry.description} 
                        imageUrl={ministry.imageUrl} 
                        icon={ministry.icon}
                        leader={ministry.leader}
                    />
                )
                })}
            </div>
        </div>
    </div>
  )
}

export default Ministries