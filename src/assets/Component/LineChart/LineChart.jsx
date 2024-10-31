import {
  Bar,
  BarChart,
  Cell,
  LineChart as LChart,
  Line,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";

const LineChart = () => {
  const subjectsMarksData = [
    { id: 1, name: "Alice", physics: 85, chemistry: 90, math: 78 },
    { id: 2, name: "Bob", physics: 78, chemistry: 85, math: 80 },
    { id: 3, name: "Charlie", physics: 92, chemistry: 88, math: 95 },
    { id: 4, name: "David", physics: 88, chemistry: 84, math: 90 },
    { id: 5, name: "Emma", physics: 70, chemistry: 75, math: 68 },
    { id: 6, name: "Frank", physics: 95, chemistry: 91, math: 97 },
    { id: 7, name: "Grace", physics: 82, chemistry: 78, math: 85 },
    { id: 8, name: "Hannah", physics: 79, chemistry: 83, math: 77 },
    { id: 9, name: "Ian", physics: 87, chemistry: 89, math: 84 },
    { id: 10, name: "Jack", physics: 90, chemistry: 88, math: 92 },
  ];
  const categories = [
    { name: "Electronics", sales: 1200 },
    { name: "Clothing", sales: 900 },
    { name: "Groceries", sales: 1500 },
    { name: "Books", sales: 600 },
    { name: "Furniture", sales: 700 },
  ];
  const data = [
    { name: "Group A", value: 400 },
    { name: "Group B", value: 300 },
    { name: "Group C", value: 300 },
    { name: "Group D", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  return (
    <div className="flex justify-around">
      <div>
        <LChart width={800} height={400} data={subjectsMarksData}>
          <YAxis></YAxis>
          <Line dataKey="math" stroke="red"></Line>
          <Line dataKey="physics" stroke="yellow"></Line>
          <XAxis dataKey={"name"}></XAxis>
        </LChart>
      </div>
      <div>
        <BarChart width={800} height={400} data={subjectsMarksData}>
          <XAxis dataKey={"name"}></XAxis>
          <YAxis></YAxis>
          <Bar dataKey={"math"} stroke="yellow" fill="lightblue"></Bar>
        </BarChart>
      </div>
      <div>
        <PieChart width={150} height={150}>
          <Pie
            data={categories}
            dataKey={"sales"}
            outerRadius={60}
            fill="#8884d8"
          ></Pie>
        </PieChart>
        <PieChart width={400} height={400}>
          <Pie data={data}
            outerRadius={80}
            dataKey={'value'}
             
             >
            {data.map((entry, index) => {
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />;
            })}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default LineChart;
