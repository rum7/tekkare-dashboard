import { CaretSortIcon } from "@radix-ui/react-icons"
import { Button } from "../ui/button"
import { ColumnDef } from "@tanstack/react-table"

type ClinicalTrialsType = {
    name: string
    status: string
    startDate: string
    endDate: string
    totalPatients: number
}

export const columns: ColumnDef<ClinicalTrialsType>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "status",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Status
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "startDate",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Start date
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        sortingFn: 'datetime',
    },
    {
        accessorKey: "endDate",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    End date
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        sortingFn: 'datetime',
    },
    {
        accessorKey: "totalPatients",
        header: ({ column }) => {
            return (
                <Button
                    variant="ghost"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Total patients
                    <CaretSortIcon className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },   
]