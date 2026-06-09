import { ChevronRight } from "lucide-react";

interface UniversityMenuPillProps {
  imageSrc: string;
  imageAlt: string;
  description: string;
  isActive: boolean;
  onMouseEnter: () => void;
}

export const UniversityMenuPill = ({
  imageSrc,
  imageAlt,
  description,
  isActive,
  onMouseEnter,
}: UniversityMenuPillProps) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className={`rounded-3xl gap-l flex items-center justify-between cursor-pointer transition-all duration-300 ${
        isActive ? "bg-neutral-50/60" : "bg-transparent hover:bg-neutral-50/60"
      }`}
    >
      <div className="flex w-full px-xl py-l gap-m items-center">
        <img src={imageSrc} className="w-auto h-14 shrink-0" alt={imageAlt} />
        <p className="text-neutral-700 min-w-0 font-futura flex-1 text-[16px]">
          {description}
        </p>
        <ChevronRight
          className={`w-6 h-6 text-text-primary shrink-0 transition-opacity duration-300 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
};
