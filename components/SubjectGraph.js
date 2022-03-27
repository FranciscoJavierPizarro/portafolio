import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts"


export default function SubjectGraph({data}) {
  return (
    <div className="flex w-full items-center pt-8">
      <BarChart
          width={950}
          height={250}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barGap={10}
          barSize={35}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis label={"Asignaturas"} dataKey="name" tickLine={false} unit={0} tick={false} />
          <YAxis domain={[0,10]} tickCount={10} interval={0} label={"Nota"}/>
          <Tooltip />
          <Bar dataKey="nota" fill="#1f77b4" />
        </BarChart>
    </div>
  )
}
