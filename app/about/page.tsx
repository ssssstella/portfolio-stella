import { Card } from '@/components/ui/card';
import profile from '@/public/profile.jpeg';
import Image from 'next/image';
import ButtonCustom from '../components/ButtonCustom';
import Skills from '../components/Skills';

export default function AboutRoute() {
  return (
    <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-10">
        <div className="col-span-1">
          <Image
            src={profile}
            alt="profile picture"
            className="h-[500px] object-cover rounded-md w-full"
          />
        </div>

        <Card className="col-span-1 lg:col-span-2 border-none bg-gray-50 px-8 py-12 rounded-md flex flex-col items-start justify-between">
          <h1 className="text-2xl lg:text-4xl">
            Passionate frontend/fullstack engineer who loves to create and build
          </h1>
          <p className="self-start text-muted-foreground lg:text-lg">
            I am a software engineer with rich customer-facing and problem-solving skills. I have experience in developing scalable and maintainable web applications using modern technologies and frameworks. I am passionate about creating innovative and
            user-friendly solutions that solve real-world problems.
          </p>
          <ButtonCustom buttonText="Get in Touch!" />
        </Card>
      </div>
      <Skills />
    </section>
  );
}
