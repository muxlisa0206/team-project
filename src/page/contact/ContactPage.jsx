import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const ContactPage = () => {
const data = [
  { name: "Yan", uv: 10200, pv: 2800 },
  { name: "Fev", uv: 9000, pv: 3000 },
  { name: "Mar", uv: 5000, pv: 3200 },
  { name: "Apr", uv: 7300, pv: 3400 },
  { name: "May", uv: 11800, pv: 3600 },
  { name: "Iyun", uv: 9200, pv: 3800 },
  { name: "Iyul", uv: 8500, pv: 4000 },
  { name: "Avg", uv: 12000, pv: 4200 },
  { name: "Sen", uv: 11400, pv: 4500 },
  { name: "Okt", uv: 9800, pv: 4700 },
  { name: "Noy", uv: 8200, pv: 5000 },
  { name: "Dek", uv: 9000, pv: 5500 },
];


  return (
    <div className="pt-[120px]">
      <AreaChart
        style={{
          width: "100%",
          maxHeight: "70vh",
          aspectRatio: 1.618,
        }}
        responsive
        data={data}
        margin={{
          top: 20,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis width="auto" />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </div>
  );
};

export default ContactPage;
