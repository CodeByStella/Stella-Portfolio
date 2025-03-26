import Image from "next/image";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <div className="group perspective">
      <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] transform transition-transform duration-500 group-hover:rotate-x-6 group-hover:rotate-y-6 group-hover:scale-105">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />

        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white">{title}</h1>
          <p className="mt-2 text-gray-300">{description}</p>
        </div>
      </div>
    </div>
  );
};
