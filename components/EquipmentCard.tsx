import { Device } from '@/pages/equipment'

export default function EquipmentCard({ device }: { device: Device }) {
  return (
    <div className="border rounded-xl p-4 hover:shadow-md transition">
      {device.cover && (
        <img src={device.cover} alt={device.name} className="w-full h-48 object-cover rounded-lg mb-3" />
      )}
      <h3 className="font-bold text-lg">{device.name}</h3>
      <p className="text-sm text-gray-600 mb-2">{device.description}</p>
      {device.link && (
        <a href={device.link} target="_blank" className="text-blue-500 text-sm underline">
          查看链接
        </a>
      )}
    </div>
  )
}
