import styled from "styled-components"
import {AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Area, ResponsiveContainer} from "recharts"
import Label from "../../ui/Label"
const StyledSalesSummary = styled.div`
    grid-area: salesSummary;
    background-color: white;
    padding: 0 calc(var(--spacing) * 2);
`

function SalesSummary() {
    const data = [
        {
          "name": "Page A",
          "sales": 2400,
          "extraSales": 100,
        },
        {
          "name": "Page B",
          "sales": 2210,
          "extraSales": 300,
        },
        {
          "name": "Page C",
          "sales": 2290,
          "extraSales": 500,
        },
        {
          "name": "Page D",
          "sales": 2000,
          "extraSales": 200,
        },
        {
          "name": "Page E",
          "sales": 2181,
          "extraSales": 300,
        },
        {
          "name": "Page F",
          "sales": 2500,
          "extraSales": 100,
        },
        {
          "name": "Page G",
          "sales": 2100,
          "extraSales": 100,
        }
      ]
    return (
        <StyledSalesSummary>
            <Label fontWeight="bold" fs="large" paddingtop="normal">Sales</Label>
            <ResponsiveContainer width="100%" height={300}>
                <AreaChart width={730} height={250} data={data}
                margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <XAxis dataKey="name" />
                    <YAxis name="Sales" unit="$">
                    </YAxis>
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="sales" fill="var(--bg-green-800)" stroke="var(--bg-green-300)" fillOpacity={1} />
                    <Area  dataKey="extraSales" fill="var(--bg-purple-800)" stroke="var(--bg-purple-300)" fillOpacity={1} />
                </AreaChart>
            </ResponsiveContainer>
        </StyledSalesSummary>
    )
}

export default SalesSummary