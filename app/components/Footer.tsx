'use client';

import linkedin from '@/public/social-linkedin.svg';
import github from '@/public/social-github.svg';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="my-12 lg:mt-16 flex justify-between items-center max-w-7xl w-full px-4 md:px-8 mx-auto">
      <div className="flex flex-col gap-2">
        <a href="https://www.linkedin.com/in/wentingsu-ds/" target='_blank' className='border border-gray rounded-full p-2 bg-gray/10 hover:bg-gray-50'>
          <Image src={linkedin} alt="linkedin" className='size-6' />
        </a>
        <a href="https://github.com/ssssstella?tab=repositories" target='_blank' className='border border-gray rounded-full p-2 bg-gray/10 hover:bg-gray-50'>
          <Image src={github} alt="github" className='size-6' />
        </a>
      </div>
      <div className="flex flex-col">
        <p className="mt-2 text-center text-muted-foreground">
          &copy; {new Date().getFullYear()} Stella
        </p>
        <p className="mt-2 text-center text-muted-foreground">
          All Rights reserved
        </p>
      </div>
    </footer>
  );
}
