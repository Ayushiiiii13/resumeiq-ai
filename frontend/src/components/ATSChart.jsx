import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
} from "recharts";

function ATSChart({ score }) {

  const numericScore = Number(score) || 0;

  const data = [
    {
      name: "ATS Score",
      value: numericScore,
      fill: "#7c3aed",
    },
  ];

  return (
    <div className="bg-white rounded-3xl border border-gray-200 p-8 shadow-sm h-[320px] flex flex-col justify-center items-center">

      <h2 className="text-2xl font-semibold text-gray-700 mb-4">
        ATS Score
      </h2>

      <div className="relative flex items-center justify-center">

        <RadialBarChart
          width={220}
          height={220}
          innerRadius="75%"
          outerRadius="100%"
          data={data}
          startAngle={90}
          endAngle={-270}
        >

          <PolarAngleAxis
            type="number"
            domain={[0, 100]}
            tick={false}
          />

          <RadialBar
            dataKey="value"
            background
            clockWise
            cornerRadius={30}
          />

        </RadialBarChart>

        <div className="absolute text-5xl font-bold text-purple-700">
          {numericScore}%
        </div>

      </div>

    </div>
  );
}

export default ATSChart;