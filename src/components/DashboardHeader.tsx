
type DashboardHeaderProps = {
    name: string;
    location: string;
}

export const DashboardHeader = ({ name, location }: DashboardHeaderProps) => {
    return (
        <header>
            <h1 className="text-4xl font-extrabold tracking-tight lg:text-4xl">{name}</h1>
            <p className="text-xl text-muted-foreground">{location}</p>
        </header>
    )
}
