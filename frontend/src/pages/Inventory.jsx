import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

const data = [
  { name: "Collar", stock: 12 },
  { name: "Pulsera", stock: 8 },
  { name: "Anillo", stock: 15 },
  { name: "Bolso", stock: 10 },
  { name: "Bikini", stock: 9 },
]

function Inventory() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Inventario</h1>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="stock" fill="#1a89c9ff" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default Inventory
