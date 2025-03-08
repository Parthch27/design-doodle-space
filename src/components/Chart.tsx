
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { cn } from "@/lib/utils";

const data = [
  { month: 'Jan', visitors: 4000, revenue: 2400 },
  { month: 'Feb', visitors: 3000, revenue: 1398 },
  { month: 'Mar', visitors: 2000, revenue: 9800 },
  { month: 'Apr', visitors: 2780, revenue: 3908 },
  { month: 'May', visitors: 1890, revenue: 4800 },
  { month: 'Jun', visitors: 2390, revenue: 3800 },
  { month: 'Jul', visitors: 3490, revenue: 4300 },
];

interface ChartProps {
  className?: string;
}

const Chart = ({ className }: ChartProps) => {
  return (
    <div className={cn("w-full h-[300px]", className)}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="visitors" fill="#8884d8" name="Monthly Visitors" />
          <Bar dataKey="revenue" fill="#82ca9d" name="Revenue ($)" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
