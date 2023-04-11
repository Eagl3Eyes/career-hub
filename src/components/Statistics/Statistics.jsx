import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const Statistics = () => {
    const data = [
        {
            name: "A1",
            marks: 57,
        },
        {
            name: "A2",
            marks: 60,
        },
        {
            name: "A3",
            marks: 60,
        },
        {
            name: "A4",
            marks: 55,
        },
        {
            name: "A5",
            marks: 54,
        },
        {
            name: "A6",
            marks: 60,
        },
        {
            name: "A7",
            marks: 60,
        },
        {
            name: "A8",
            marks: 60,
        },
    ];

    return (
        <div className='md:w-[80%] md:mx-auto px-5 mt-40'>
            <h3 className='text-center font-semibold text-2xl py-5'>Assignment Marks (A1-A8)</h3>
            <hr className='mb-5' />
            <ResponsiveContainer width='100%' height={200}>
                <AreaChart
                    width={500}
                    height={200}
                    data={data}
                    syncId="anyId"
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="marks" stroke="blue" fill="blue" />
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
}

export default Statistics;
