import { ProjectsCard } from '@/lib/interface';
import { client } from '@/lib/sanity';
import { Code, Link } from 'lucide-react';
import Image from 'next/image';

async function getProjectsData() {
  const query = `*[_type == 'project'] {
  title, 
  _id, 
  link, 
  codeLink,
  description, 
  tags, 
  order,
  "imageUrl": image.asset->url
} | order(order desc)`;

  const projects = await client.fetch(query, {}, {next: {revalidate: 3600}});
  return projects;
}

export default async function ProjectsRoute() {
  const projects: ProjectsCard[] = await getProjectsData();

  return (
    <section className="max-w-7xl w-full px-4 md:px-8 mx-auto">
      <h1 className="text-4xl font-semibold lg:text-5xl pt-5">My Projects</h1>
      <p className="leading-7 mt-2 text-muted-foreground">
        Check out what projects I have created
      </p>
      <div className="py-12 grid md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1">
        {projects.map((item) => (
          <div key={item._id}>
            <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-2xl relative border border-muted">
              <a href={item.link} className="group block" target="_blank">
                <Image
                  src={item.imageUrl}
                  alt={`image of ${item.title}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl"
                />
              </a>
            </div>
            <div className="mt-4">
              <h2 className="font-medium text-lg">
                {`${item.title} | `}
                <span className="inline-block mr-1 text-primary align-middle">
                  <a href={item.link} target="_blank">
                    <Link className="size-5 mx-1" />
                  </a>
                </span>
                <span className="inline-block mr-1 text-primary align-middle">
                  <a href={item.codeLink} target="_blank">
                    <Code className="size-5" />
                  </a>
                </span>
              </h2>

              <p className="mt-1 text-muted-foreground line-clamp-3">
                {item.description}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-2 ring-inset ring-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
