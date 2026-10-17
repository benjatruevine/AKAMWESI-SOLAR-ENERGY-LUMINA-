import {
  BatteryCharging,
  Cpu,
  Layers,
  Lightbulb,
  SolarPanel,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import type { CategoryIcon } from "@/data/categories";

const iconMap: Record<CategoryIcon, LucideIcon> = {
  panel: SolarPanel,
  battery: BatteryCharging,
  inverter: Cpu,
  streetlight: Lightbulb,
  system: Layers,
  accessories: Wrench,
};

export function categoryIconComponent(icon: CategoryIcon): LucideIcon {
  return iconMap[icon] ?? Layers;
}

export function CategoryIconGlyph({
  icon,
  className,
  strokeWidth = 1.6,
}: {
  icon: CategoryIcon;
  className?: string;
  strokeWidth?: number;
}) {
  const Icon = categoryIconComponent(icon);
  return <Icon className={className} strokeWidth={strokeWidth} aria-hidden />;
}
