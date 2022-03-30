import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts"


export default function SubjectGraph({data}) {
  return (
    <div className="flex w-full items-center pt-8">
      <ResponsiveContainer width="100%" height={250}>
      <BarChart
          data={data}
          margin={{
            top: 6,
            right: 0,
            left: 0,
            bottom: 0,
          }}
          barGap={10}
          barSize={25}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis label={"Asignaturas"} dataKey="name" tickLine={false} unit={0} tick={false} />
          <YAxis domain={[0,10]} tickCount={10} interval={0} label={"Nota"}/>
          <Tooltip />
          <Bar dataKey="nota" fill="#1f77b4" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
