import styled from "styled-components"
import Label from "../../ui/Label"
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    Legend,
    BarChart,
    CartesianGrid,
    XAxis,
    YAxis,
    Bar,
    ResponsiveContainer
} from "recharts"
const StyledStaySummary = styled.div`
    grid-area: staySummary;
    background-color: white;
    padding: var(--spacing);
`
const ChartBox = styled.div`
display: flex;
`

function StaySummary() {
    const data = [
        {
            "id": 1,
            "duration": "1 night",
            "value": 20,
            "color": "red"
        },
        {
            "id": 2,
            "duration": "2-3 night",
            "value": 10,
            "color": "orange"
        },
        {
            "id": 3,
            "duration": "4-5 night",
            "value": 23,
            "color": "yellow"
        },
        {
            "id": 4,
            "duration": "6-7 night",
            "value": 3,
            "color": "green"
        },
    ]
    return (
        <StyledStaySummary>
            <Label paddingtop="normal" color="black" fs="large" fw="bold">Stay duration summary</Label>
            <ResponsiveContainer height="80%" width="100%">
                <PieChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <Pie data={data} cx="50%" cy="50%" innerRadius={85}
            outerRadius={110} paddingAngle={3} dataKey="value" nameKey="duration">
                        
                    {data.map(dat => (
                        <Cell
                        key={dat.id}
                        value={dat.value}
                        stroke={dat.color}
                        fill={dat.color}/>
                    ))}
                    </Pie>
                    <Tooltip />
                    <Legend
            verticalAlign="middle"
            align="right"
            width="30%"
            layout="vertical"
            iconSize={15}
            iconType="circle"
          />
                </PieChart>
            </ResponsiveContainer>
        </StyledStaySummary>
    )
}

export default StaySummary