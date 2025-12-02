'use client';

import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Jan', score: 65 },
  { name: 'Feb', score: 72 },
  { name: 'Mar', score: 68 },
  { name: 'Apr', score: 85 },
  { name: 'May', score: 82 },
  { name: 'Jun', score: 90 },
  { name: 'Jul', score: 88 },
];

export function PerformanceChart() {
  return (
    <div className="w-full h-[400px] bg-card/50 border border-border rounded-xl p-6">
      <h3 className="text-lg font-semibold text-foreground mb-6">
        Learning Progress
      </h3>
      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="name"
              stroke="var(--muted-foreground)"
              tick={{ fill: 'var(--muted-foreground)' }}
              tickLine={{ stroke: 'var(--muted-foreground)' }}
            />
            <YAxis
              stroke="var(--muted-foreground)"
              tick={{ fill: 'var(--muted-foreground)' }}
              tickLine={{ stroke: 'var(--muted-foreground)' }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: 'var(--popover)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                color: 'var(--popover-foreground)',
              }}
              itemStyle={{ color: 'var(--popover-foreground)' }}
            />
            <Line
              type="monotone"
              dataKey="score"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 4, fill: '#3b82f6', strokeWidth: 2, stroke: '#fff' }}
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
