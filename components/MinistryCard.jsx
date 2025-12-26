import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"


export const MinistryCard = ({ title, description, link, icon: Icon, leader}) => {
  return (
    <Card className='max-w-sm border-none'>
      <CardContent>
        <div className="rounded-lg overflow-hidden relative">
          <div className="absolute left-5 top-5 text-gold-500">
            <Icon />
          </div>
          <img src="/hero.png" alt="" />
        </div>
        <CardTitle className='text-2xl mt-5 mb-2'>
          {title}
        </CardTitle>
        <CardDescription>
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className='flex justify-between'>
        <div className="flex space-x-2.5 items-center">
          <img className="w-9 h-9 rounded-full" src="/hero.png" alt="" />
          <p className="text-sm ">Leader: {leader}</p>
        </div>
        <Link href={link} className="bg-forest-900 p-2.5 rounded-lg text-gold-500 hover:scale-110 transition-all">
          Learn More
        </Link>
      </CardFooter>
    </Card>
  )
}
