import Link from "next/link";
import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-white/40 backdrop-blur-sm border-b border-purple-200/50 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold italic text-gray-800">
            digital inspiration
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/about" className="text-gray-700 hover:text-gray-900 transition">
              About
            </Link>
            <Link href="/topics" className="text-gray-700 hover:text-gray-900 transition">
              Topics
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-gray-900 transition">
              Contact
            </Link>
          </nav>

          <div className="relative">
            <input
              type="text"
              placeholder="Type to search"
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-white/80"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
        </div>
      </div>
    </header>
  );
}
