import { Clock, Users } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

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
import { HospitalDepartmentDataTypeProps } from "@/typescript/typescript"

const chartConfig = {
    patientsPerDay: {
        label: "patients/day",
        color: "hsl(var(--chart-3))",
    },
    averageWaitTimeNum: {
        label: "wait time(mn)",
        color: "hsl(var(--chart-1))",
    },
} satisfies ChartConfig

export const ChartHospitalDepartments = ({ data }: HospitalDepartmentDataTypeProps) => {
    const chartData = data
    chartData.map(data => data.averageWaitTimeNum = Number(data.averageWaitTime.substring(0, 2)))

    const totalPatients: number = chartData.reduce((acc, patients) => acc + patients.patientsPerDay, 0)

    const maxAverageWaitTime = chartData.reduce((acc, curr) => {
            return Number(acc.averageWaitTime.substring(0, 2)) > Number(curr.averageWaitTime.substring(0, 2)) ? acc : curr
    }, chartData[0])

    return (
        <Card className="flex flex-col shadow-none">
            <CardHeader>
                <CardTitle>Hospital departments</CardTitle>
                <CardDescription>Patients per day and average wait time results based on department</CardDescription>
            </CardHeader>
            <CardContent className="flex-1">
                <ChartContainer config={chartConfig} className="h-full w-full">
                    <BarChart accessibilityLayer data={chartData}>
                        <CartesianGrid vertical={false} />
                        <XAxis
                        dataKey="department"
                        tickLine={false}
                        tickMargin={10}
                        axisLine={false}
                        tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <ChartTooltip
                        cursor={false}
                        content={<ChartTooltipContent indicator="line" />}
                        />
                        <Bar dataKey="patientsPerDay" fill="var(--color-patientsPerDay)" radius={4} barSize={25} />
                        <Bar dataKey="averageWaitTimeNum" fill="var(--color-averageWaitTimeNum)" radius={4} barSize={25} />
                    </BarChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 px-5 sm:px-6 text-sm text-muted-foreground">
                <div className="w-full flex gap-2 items-center">
                    <Users className="h-4 w-4" />
                    <p><span className="font-semibold">{totalPatients}</span> patients per day</p>
                </div>
                <div className="w-full flex gap-2 items-center">
                    <Clock className="h-4 w-4" />
                    <p>Average wait time / <span className="font-semibold">{maxAverageWaitTime.averageWaitTime}</span></p>
                </div>
            </CardFooter>
        </Card>
    )
}
