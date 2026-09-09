import Image from "next/image";

export interface ResourceItem {
  title: string;
  href: string;
  image: string;
}

export function ResourceCard({ item }: { item: ResourceItem }) {
  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${item.title} (${item.href})`}
      className="group flex flex-col gap-4 rounded-lg border border-border bg-card p-6 transition-shadow hover:shadow-md"
    >
      <div className="flex items-center justify-between">
        <div className="relative h-16 w-16 overflow-hidden rounded-lg bg-secondary">
          <Image
            src={item.image}
            alt=""
            fill
            sizes="64px"
            className="object-cover"
          />
        </div>
        <svg
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-muted-foreground transition-transform group-hover:-translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-primary"
        >
          <path d="M7 17 17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </div>
      <h3 className="text-lg font-semibold text-card-foreground">
        {item.title}
      </h3>
    </a>
  );
}