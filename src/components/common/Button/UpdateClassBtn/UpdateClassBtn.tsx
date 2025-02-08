interface AddClassBtnProps {
  type: "add" | "remove" | "toggle";
  classTargets: string;
  classUpdate?: string;
  className?: string;
  children?: React.ReactNode;
}
import { cn } from "@/lib/utils";

// Button add or remove class for target
export default function UpdateClassBtn({
  type,
  classTargets,
  classUpdate = "hide",
  className,
  children,
}: AddClassBtnProps) {
  // Handle classTargets
  const listClassTargets = classTargets
    .trim() // Remove whitespace at the beginning and end of the string
    .replace(/\s+/g, " ") // Xóa khoảng trắng thừa
    .split(" "); // Split string into array

  const handleUpdateClass = () => {
    if (type === "add") {
      listClassTargets.forEach((classTarget) => {
        const elementTarget = document.querySelector(`.${classTarget}`);
        if (elementTarget?.classList.contains(classUpdate)) {
          elementTarget.classList.add(classUpdate);
        }
      });
    } else if (type === "remove") {
      listClassTargets.forEach((classTarget) => {
        const elementTarget = document.querySelector(`.${classTarget}`);
        if (elementTarget?.classList.contains(classUpdate)) {
          elementTarget.classList.remove(classUpdate);
        }
      });
    } else if (type === "toggle") {
      listClassTargets.forEach((classTarget) => {
        document
          .querySelector(`.${classTarget}`)
          ?.classList.toggle(classUpdate);
      });
    }
  };
  return (
    <button onClick={handleUpdateClass} className={cn("relative", className)}>
      {children}
    </button>
  );
}
