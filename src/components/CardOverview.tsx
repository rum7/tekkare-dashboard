import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
} from "@/components/ui/card"

import {
    ClipboardPlus,
    Heart,
    Pill,
    Stethoscope,
    Users,
} from "lucide-react"

type CardOverviewProps = {
    label: string;
    value: string;
    iconType: string;
}

const handleIconCard = (iconType: string) => {
    switch (iconType) {
        case 'clipboard':
            return <ClipboardPlus className="h-4 w-4 text-muted-foreground" />
        case 'heart':
            return <Heart className="h-4 w-4 text-muted-foreground" />
        case 'stethoscope':
            return <Stethoscope className="h-4 w-4 text-muted-foreground" />
        case 'pill':
            return <Pill className="h-4 w-4 text-muted-foreground" />
        case 'users':
            return <Users className="h-4 w-4 text-muted-foreground" />
        default:
            return null
    }
}
    
const CardOverview = ({label, value, iconType}: CardOverviewProps) => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{label}</CardTitle>
                {handleIconCard(iconType)}
            </CardHeader>
            <CardContent>
                <div className="text-4xl font-bold">{value}</div>
                <p className="text-xs text-muted-foreground">+11.2% from last month</p>
            </CardContent>
        </Card>
    )
}
  
export default CardOverview