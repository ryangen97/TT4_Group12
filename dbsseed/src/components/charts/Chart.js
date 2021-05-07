import { LineChart, CartesianGrid, YAxis, Legend, Tooltip, XAxis, Line, ResponsiveContainer } from 'recharts'
const Chart = () => {
  const data = [
    { x: 0, y: 8 },
    { x: 1, y: 5 },
    { x: 2, y: 4 },
    { x: 3, y: 9 },
    { x: 4, y: 1 },
    { x: 5, y: 7 },
    { x: 6, y: 6 },
    { x: 7, y: 3 },
    { x: 8, y: 2 },
    { x: 9, y: 0 },
  ];
  return (

    <ResponsiveContainer width="100%" height={300}>
      <LineChart width={730} height={550} data={data}
        className="darkblue-bg"
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip />
        <Legend
          layout="vertical"
          align="right"
          verticalAlign="middle"
          iconType="square"
          wrapperStyle={{ right: 10, backgroundColor: '#f5f5f5' }}

        />
        <Line type="monotone" dataKey="y" stroke="#046fd5" />

      </LineChart>
    </ResponsiveContainer>
  );
};

export default Chart;
