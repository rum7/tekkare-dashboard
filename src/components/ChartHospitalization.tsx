import { useState } from "react"
import { CalendarDays, Users } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts"

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

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


type MonthlyDataType = {
    month: string;
    year: string;
    value: number;
}

const chartData: MonthlyDataType[] = [
    { month: "Jan", year: "2023", value: 1500 },
    { month: "Feb", year: "2023", value: 1800 },
    { month: "Mar", year: "2023", value: 2200 },
    { month: "Apr", year: "2023", value: 2100 },
    { month: "May", year: "2023", value: 1900 },
    { month: "Jun", year: "2023", value: 2300 },
    { month: "Jul", year: "2023", value: 2500 },
    { month: "Aug", year: "2023", value: 2400 },
    { month: "Sep", year: "2023", value: 2000 },
    { month: "Oct", year: "2023", value: 1700 },
    { month: "Nov", year: "2023", value: 1600 },
    { month: "Dec", year: "2023", value: 1800 },
    { month: "Jan", year: "2024", value: 2100 },
    { month: "Feb", year: "2024", value: 2300 },
    { month: "Mar", year: "2024", value: 2600 },
    { month: "Apr", year: "2024", value: 2800 },
    { month: "May", year: "2024", value: 2700 },
    { month: "Jun", year: "2024", value: 2500 },
    { month: "Jul", year: "2024", value: 2200 },
    { month: "Aug", year: "2024", value: 2000 },
]

const chartConfig = {
    value: {
        label: "Patients",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

const getMonthFromAbbreviation = (abbreviation: string) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const monthAbbreviation = abbreviation.toLowerCase()
    const fullMonth = months.find(month => month.toLowerCase().startsWith(monthAbbreviation))

    return fullMonth || "Invalid abbreviation"
}

export const ChartHospitalization = () => {
    const [selectedYear, setSelectedYear] = useState(String(new Date().getFullYear()))
    const filteredData: MonthlyDataType[] = chartData.filter((item) => item.year === selectedYear)
    const totalPatients: number = filteredData.reduce((acc, patients) => acc + patients.value, 0)

    return (
        <Card className="flex flex-col">
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1">
                        <CardTitle>Monthly hospitalization</CardTitle>
                        <CardDescription>
                            Showing total patients hospitalized per month in {selectedYear}
                        </CardDescription>
                    </div>
                    <Select
                        value={selectedYear}
                        onValueChange={(value) => setSelectedYear(value)}
                    >
                        <SelectTrigger id="year-select" className="w-[100px]">
                        <SelectValue placeholder="Year" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="2023">2023</SelectItem>
                            <SelectItem value="2024">2024</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </CardHeader>
            <CardContent className="flex-1">
                <ChartContainer config={chartConfig} className="h-full w-full">
                        <BarChart                            
                            accessibilityLayer
                            data={filteredData}
                            margin={{
                                top: 20,
                            }}                        
                        >
                            <CartesianGrid vertical={false} />
                            <XAxis
                                dataKey="month"
                                tickLine={false}
                                tickMargin={10}
                                axisLine={false}
                                tickFormatter={(value) => value.slice(0, 3)}
                            />
                            <YAxis domain={[1000, 3250]} hide />
                            <ChartTooltip content={<ChartTooltipContent nameKey="value" indicator="line" />} />
                            <Bar dataKey="value" fill="var(--color-value)" radius={6} />
                        </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 px-5 sm:px-6 text-sm text-muted-foreground">
                <div className="w-full flex gap-2 items-center">
                    <Users className="h-4 w-4" />
                    <p><span className="font-semibold">{totalPatients}</span> patients hospitalized</p>
                </div>
                <div className="w-full flex gap-2 items-center">
                    <CalendarDays className="h-4 w-4" />
                    <p>{getMonthFromAbbreviation(filteredData[0].month)} - {getMonthFromAbbreviation(filteredData[filteredData.length-1].month)} {selectedYear}</p>
                </div>
            </CardFooter>
        </Card>
    )
}
