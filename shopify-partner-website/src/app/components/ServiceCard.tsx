import Image from "next/image";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  className?: string;
}

export default function ServiceCard({
  icon,
  title,
  description,
  className = "",
}: ServiceCardProps) {
  return (
    <div
      className={`bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center border border-gray-100 ${className}`}
    >
      <Image
        src={icon}
        alt={title}
        width={56}
        height={56}
        className="mb-4"
      />
      <h3 className="text-xl font-semibold mb-2 text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
}