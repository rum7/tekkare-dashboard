import { useState } from "react"
import { CalendarDays, Users } from "lucide-react"
import { Area, AreaChart, XAxis, YAxis } from "recharts"

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
import { ChartHospitalizationProps, MonthlyDataType } from "@/typescript/typescript"

const chartConfig = {
    value: {
        label: "Patients",
        color: "hsl(var(--chart-5))",
    },
} satisfies ChartConfig

const getMonthFromAbbreviation = (abbreviation: string) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const monthAbbreviation = abbreviation.toLowerCase()
    const fullMonth = months.find(month => month.toLowerCase().startsWith(monthAbbreviation))

    return fullMonth || "Invalid abbreviation"
}

export const ChartHospitalization = ({data}: ChartHospitalizationProps) => {
    const chartData = data
    const [selectedYear, setSelectedYear] = useState(String(new Date().getFullYear()))
    const filteredData: MonthlyDataType[] = chartData.filter((item) => item.year === Number(selectedYear))
    const totalPatients: number = filteredData.reduce((acc, patients) => acc + patients.value, 0)

    return (
        <Card className="flex flex-col shadow-none relative">
            <CardHeader>
                <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-1">
                        <CardTitle>Monthly hospitalization</CardTitle>
                        <CardDescription>Patients per month in {selectedYear}</CardDescription>
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
            <CardContent className="flex-1 p-0">
                <ChartContainer config={chartConfig} className="h-full w-full">
                    <AreaChart
                        accessibilityLayer
                        data={filteredData}
                        margin={{
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                        }}                    
                    >
                        <XAxis dataKey="month" hide />
                        <YAxis domain={["dataMin - 100", "dataMax + 100"]} hide />
                        <defs>
                            <linearGradient id="fillValue" x1="0" y1="0" x2="0" y2="1">
                                <stop
                                    offset="5%"
                                    stopColor="var(--color-value)"
                                    stopOpacity={0.8}
                                />
                                <stop
                                    offset="95%"
                                    stopColor="var(--color-value)"
                                    stopOpacity={0.1}
                                />
                            </linearGradient>
                        </defs>

                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" className="z-10" />}
                        />
                        <Area
                            dataKey="value"
                            type="natural"
                            fill="url(#fillValue)"
                            fillOpacity={0.4}
                            stroke="var(--color-value)"
                        />
                    </AreaChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 px-5 sm:px-6 text-sm text-muted-foreground absolute bottom-0 right-0">
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
