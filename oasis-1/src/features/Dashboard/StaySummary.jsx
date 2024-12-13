import styled from "styled-components"
import Label from "../../ui/Label"
import { createGetSummaryNights } from "../../services/apiBooking"
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
import { useEffect, useState } from "react"
const StyledStaySummary = styled.div`
    grid-area: staySummary;
    background-color: white;
    padding: var(--spacing);
`
const ChartBox = styled.div`
display: flex;
`

function getNumberNightsForEachCategory(data) {
    const nights = {
        "1night": 0,
        "2-3night": 0,
        "4-5night": 0,
        "6-7night": 0 
    }
    data.map(dat => {
        if (dat.numnights === 1) {
            nights["1night"]++
        } else if (dat.numnights >= 2 && dat.numnights <= 3) {
            nights["2-3night"]++
        } else if (dat.numnights >= 4 && dat.numnights <= 5) {
            nights["4-5night"]++
        } else if (dat.numnights >= 6 && dat.numnights <= 7) {
            nights["6-7night"]++
        }
    })
    return nights
}
function StaySummary() {
    const [numNightInfo, setNumNightInfo] = useState([
        {
            "id": "1night",
            "duration": "1 night",
            "color": "red"
        },
        {
            "id": "2-3night",
            "duration": "2-4 night",
            "value": 10,
            "color": "orange"
        },
        {
            "id": "4-5night",
            "duration": "4-5 night",
            "value": 23,
            "color": "yellow"
        },
        {
            "id": "6-7night",
            "duration": "6-7 night",
            "value": 3,
            "color": "green"
        }
    ])
    const [numNightsFromDatabase, setNumNightsFromDtabase] = useState([])
    useEffect(() => {
        const getNumnightInfo = async() => {
            const data = await createGetSummaryNights()
            setNumNightsFromDtabase(() => data)
        }
        getNumnightInfo()
    }, [])
    const nights = getNumberNightsForEachCategory(numNightsFromDatabase)
    const t = nights.values
    numNightInfo.map((info) => {
        info["value"] = nights[info.id]
    })
    return (
        <StyledStaySummary>
            <Label paddingtop="normal" color="black" fs="large" fw="bold">Stay duration summary</Label>
            <ResponsiveContainer height="80%" width="100%">
                <PieChart margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <Pie data={numNightInfo} cx="50%" cy="50%" innerRadius={85}
            outerRadius={110} paddingAngle={3} dataKey="value" nameKey="duration">
                        
                    {numNightInfo.map(dat => (
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