import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import canvaImg from '@/public/tech-icons/canva.svg';
import cssImg from '@/public/tech-icons/css3.svg';
import figmaImg from '@/public/tech-icons/figma.svg';
import githubImg from '@/public/tech-icons/github.svg';
import htmlImg from '@/public/tech-icons/html5.svg';
import jsImg from '@/public/tech-icons/javascript.svg';
import nextImg from '@/public/tech-icons/nextjs.svg';
import nodeImg from '@/public/tech-icons/nodejs.svg';
import prismaImg from '@/public/tech-icons/prisma.svg';
import reactImg from '@/public/tech-icons/react.svg';
import reduxImg from '@/public/tech-icons/redux.svg';
import tailwindImg from '@/public/tech-icons/tailwindcss.svg';
import tsImg from '@/public/tech-icons/typescript.svg';
import Image from 'next/image';

const icons = [
  htmlImg,
  cssImg,
  jsImg,
  tsImg,
  tailwindImg,
  reactImg,
  nextImg,
  nodeImg,
  reduxImg,
  prismaImg,
  githubImg,
  figmaImg,
  canvaImg,
];

export default function Skills() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-14">
      <div className="flex flex-col w-full col-span-1 lg:col-span-3 gap-4">
        <Card className='bg-primary/5 border-none rounded-md'>
          <CardHeader>
            <CardTitle>Explore my tech stack</CardTitle>
            <CardDescription>Check out the tools I use daily</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-5">
            {icons.map((item, index) => (
              <div key={index} className="size-16 flex items-center justify-center rounded-md ">
                <Image src={item} alt="icon" className="size-16" />
              </div>
            ))}
          </CardContent>
        </Card>

        <div className='grid grid-cols-1 sm:grid-cols-3 w-full gap-4'></div>
      </div>
    </div>
  );
}
