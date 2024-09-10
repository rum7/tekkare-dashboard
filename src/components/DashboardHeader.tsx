import { DashboardHeaderProps } from "@/typescript/typescript";
import { MapPin } from "lucide-react";

export const DashboardHeader = ({ name, location }: DashboardHeaderProps) => {
    return (
        <header>
            <h1 className="text-4xl font-extrabold tracking-tight">{name}</h1>
            <p className="flex items-center gap-1 text-xl text-muted-foreground"><MapPin className="h-4 w-4 mt-0.5" /> {location}</p>
        </header>
    )
}
