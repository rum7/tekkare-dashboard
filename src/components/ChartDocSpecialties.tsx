import { ChevronRight, TrendingUp } from "lucide-react"
import { Label, Pie, PieChart } from "recharts"
import {
    Heart,
    Stethoscope,
} from "lucide-react"

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { useMemo } from "react"

export const description = "A donut chart with text"

type DoctorSpecialtyType = {
    specialty: string;
    numberOfDoctors: number;
    satisfactionRate: string;
    fill: string;
}

const chartData: DoctorSpecialtyType[] = [
    { specialty: "Cardiologie", numberOfDoctors: 120, satisfactionRate: "89%", fill: "var(--color-cardiologie)"},
    { specialty: "Neurologie", numberOfDoctors: 80, satisfactionRate: "80%", fill: "var(--color-neurologie)"},
    { specialty: "Oncologie", numberOfDoctors: 60, satisfactionRate: "70%", fill: "var(--color-oncologie)"},
    { specialty: "Pédiatrie", numberOfDoctors: 90, satisfactionRate: "60%", fill: "var(--color-pediatrie)"},
    { specialty: "Médecine Générale", numberOfDoctors: 150, satisfactionRate: "90%", fill: "var(--color-medecineGenerale)"},
]

const chartConfig = {
    cardiologie: {
        label: "Cardiologie",
        color: "hsl(var(--chart-1))",
    },
    neurologie: {
        label: "Neurologie",
        color: "hsl(var(--chart-2))",
    },
    oncologie: {
        label: "Oncologie",
        color: "hsl(var(--chart-3))",
    },
    pediatrie: {
        label: "Pédiatrie",
        color: "hsl(var(--chart-4))",
    },
    medecineGenerale: {
        label: "Médecine Générale",
        color: "hsl(var(--chart-5))",
    },
    numberOfDoctors: {
        label: "Doctors",
        color: "hsl(var(--chart-1))",
    },
    satisfactionRate: {
        label: "satisfaction rate",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig

const CustomTooltip: React.FC<{ active?: boolean; payload?: any[] }> = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const data = payload[0].payload as DoctorSpecialtyType

        return (
            <div className="grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl">
                <div className="grid gap-1.5">
                    <div className="flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground">
                        <div className="shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg] w-1" style={{"--color-bg": data.fill, "--color-border": data.fill} as React.CSSProperties}></div>
                        <div className="flex flex-1 justify-between leading-none items-end">
                            <div className="grid gap-1.5 w-full">
                                <div className="font-medium">{data.specialty}</div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Doctors</span>
                                    <span className="font-mono font-medium tabular-nums text-foreground">{data.numberOfDoctors}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Satisfaction</span>
                                    <span className="font-mono font-medium tabular-nums text-foreground">{data.satisfactionRate}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return null
}

export const ChartDocSpecialties = () => {
    const totalDoctors = useMemo(() => {
        return chartData.reduce((acc, curr) => acc + curr.numberOfDoctors, 0)
    }, [])

    const maxNumDoctors = useMemo(() => {
        return chartData.reduce((acc: DoctorSpecialtyType, curr: DoctorSpecialtyType) => {
            return acc.numberOfDoctors > curr.numberOfDoctors ? acc : curr
        }, chartData[0])
    }, [])

    const bestSatisfactionRate = useMemo(() => {
        return chartData.reduce((acc: DoctorSpecialtyType, curr: DoctorSpecialtyType) => {
            return acc.satisfactionRate > curr.satisfactionRate ? acc : curr
        }, chartData[0])
    }, [])

    return (
        <Card className="flex flex-col">
            <CardHeader className="items-center pb-0">
                <CardTitle>Doctor specialities</CardTitle>
                <CardDescription className="text-center">Showing number of doctor and satisfaction rate according to specialties</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 items-center pb-0 content-center">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip content={<CustomTooltip />} />
                        <Pie
                            data={chartData}
                            dataKey="numberOfDoctors"
                            nameKey="specialty"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {totalDoctors.toLocaleString()}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    Doctors
                                                </tspan>
                                            </text>
                                        )
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 px-5 sm:px-6 text-sm text-muted-foreground">
                <div className="w-full flex gap-2 items-center">
                    <Stethoscope className="h-4 w-4" />
                    <p>Largest number of doctors / <span className="font-semibold">{maxNumDoctors.specialty}</span></p>
                </div>
                <div className="w-full flex gap-2 items-center">
                    <Heart className="h-4 w-4" />
                    <p>Best satisfaction rate / <span className="font-semibold">{bestSatisfactionRate.specialty}</span></p>
                </div>
            </CardFooter>
        </Card>
    )
}