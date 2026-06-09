import { ChevronRight } from "lucide-react";

interface StudyMenuPillProps {
  title: string;
  description: string;
  isActive: boolean;
  onMouseEnter: () => void;
}

export const StudyMenuPill = ({
  title,
  description,
  isActive,
  onMouseEnter,
}: StudyMenuPillProps) => {
  return (
    <div
      onMouseEnter={onMouseEnter}
      className={`rounded-3xl gap-l flex items-center justify-between cursor-pointer transition-all duration-300 ${
        isActive ? "bg-neutral-50/60" : "bg-transparent hover:bg-neutral-50/60"
      }`}
    >
      <div className="flex w-full px-xl py-m gap-m items-center justify-between">
        <div className="flex flex-col gap-xs">
          <p className="text-neutral-900 min-w-0 font-futura font-medium text-[20px]">
            {title}
          </p>
          <p className="text-text-secondary text-[16px]">
            {description}
          </p>
        </div>
        <ChevronRight
          className={`w-5 h-5 text-text-primary shrink-0 transition-opacity duration-300 ${
            isActive ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
    </div>
  );
};
