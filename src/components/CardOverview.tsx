import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card"
import { CardOverviewProps } from "@/typescript/typescript"

import {
    ClipboardPlus,
    Heart,
    Pill,
    Stethoscope,
    Users,
} from "lucide-react"

const handleIconCard = (iconType: string) => {
    switch (iconType) {
        case 'numberOfNurses':
            return <ClipboardPlus className="h-4 w-4 text-muted-foreground" />
        case 'satisfactionRate':
            return <Heart className="h-4 w-4 text-muted-foreground" />
        case 'numberOfDoctors':
            return <Stethoscope className="h-4 w-4 text-muted-foreground" />
        case 'totalTreatments':
            return <Pill className="h-4 w-4 text-muted-foreground" />
        case 'totalPatients':
            return <Users className="h-4 w-4 text-muted-foreground" />
        default:
            return null
    }
}
    
export const CardOverview = ({label, value, iconType}: CardOverviewProps) => {
    return (
        <Card className="shadow-none">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{label}</CardTitle>
                {iconType && handleIconCard(iconType)}
            </CardHeader>
            <CardContent>
                <div className="text-4xl font-bold">{value}</div>
                {/* <p className="text-xs text-muted-foreground">+11.2% from last month</p> */}
            </CardContent>
        </Card>
    )
}