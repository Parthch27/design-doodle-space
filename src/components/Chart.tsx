
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import { cn } from "@/lib/utils";
import { useState } from 'react';
import { Button } from '@/components/ui/button';

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
  const [chartType, setChartType] = useState<'bar' | 'line'>('bar');

  return (
    <div className={cn("w-full", className)}>
      <div className="mb-4 flex justify-between items-center">
        <div>
          <h3 className="font-medium">Traffic and Revenue Overview</h3>
          <p className="text-sm text-muted-foreground">Monthly analysis for the first half of the year</p>
        </div>
        <div className="flex space-x-2">
          <Button 
            size="sm" 
            variant={chartType === 'bar' ? 'default' : 'outline'} 
            onClick={() => setChartType('bar')}
          >
            Bar Chart
          </Button>
          <Button 
            size="sm" 
            variant={chartType === 'line' ? 'default' : 'outline'} 
            onClick={() => setChartType('line')}
          >
            Line Chart
          </Button>
        </div>
      </div>
      
      <ResponsiveContainer width="100%" height="100%">
        {chartType === 'bar' ? (
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
        ) : (
          <LineChart
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
            <Line type="monotone" dataKey="visitors" stroke="#8884d8" name="Monthly Visitors" />
            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" name="Revenue ($)" />
          </LineChart>
        )}
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
