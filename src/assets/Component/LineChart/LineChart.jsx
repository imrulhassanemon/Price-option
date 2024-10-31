import { LineChart as LChart, Line } from 'recharts';

const LineChart = () => {
    const mathMarksData =  [
    { "name": "Alice", "scores": [78, 85, 82, 90, 88] },
    { "name": "Bob", "scores": [92, 88, 84, 91, 95] },
    { "name": "Charlie", "scores": [65, 70, 75, 78, 80] },
    { "name": "David", "scores": [85, 88, 90, 92, 89] },
    { "name": "Eva", "scores": [79, 82, 85, 87, 90] },
    { "name": "Frank", "scores": [91, 94, 89, 92, 95] },
    { "name": "Grace", "scores": [72, 75, 78, 81, 83] },
    { "name": "Hank", "scores": [88, 85, 87, 90, 92] },
    { "name": "Ivy", "scores": [74, 76, 79, 82, 85] },
    { "name": "Jack", "scores": [68, 72, 70, 74, 77] }
  ]
    return (
        <div>
            <LChart width={500} height={400} data={mathMarksData}>
                <Line></Line>
            </LChart>
        </div>
    );
};

export default LineChart;