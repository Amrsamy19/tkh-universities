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
    <a
      onMouseEnter={onMouseEnter}
      className={`px-m flex cursor-pointer items-center transition-colors gap-xs pt-3.25 pb-4.25 duration-300 ${
        isActive
          ? "bg-neutral-50/60 rounded-3xl"
          : "bg-transparent hover:bg-neutral-50/60 rounded-[10px]"
      }`}
    >
      <div className="flex w-full px-xl py-m gap-m items-center justify-between">
        <div className="gap-xs flex min-w-0 flex-1 flex-col items-start">
          <p className="text-neutral-900 min-w-0 font-futura font-medium text-xl">
            {title}
          </p>
          <p className="text-text-secondary text-[16px]">{description}</p>
        </div>
        <ChevronRight className="w-5 h-5 text-text-primary shrink-0 transition-opacity duration-300" />
      </div>
    </a>
  );
};
