import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
  active?: boolean
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex items-center space-x-2 mb-8">
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          {item.href && !item.active ? (
            <Link
              href={item.href}
              className="px-3 py-1 rounded-full border border-gray-600 text-gray-300 hover:text-white hover:border-gray-500 transition-colors text-sm"
            >
              {item.label}
            </Link>
          ) : (
            <span
              className={`px-3 py-1 rounded-full text-sm ${
                item.active ? "bg-white text-black" : "border border-gray-600 text-gray-300"
              }`}
            >
              {item.label}
            </span>
          )}
          {index < items.length - 1 && <ChevronRight size={16} className="text-gray-500" />}
        </div>
      ))}
    </nav>
  )
}
