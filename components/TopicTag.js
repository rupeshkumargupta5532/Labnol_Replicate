import Link from "next/link";

export default function TopicTag({ topic, className = "" }) {
  return (
    <Link
      href={`/topics/${topic.slug}`}
      className={`block px-6 py-3 text-center border-2 border-gray-800 rounded-lg hover:bg-gray-800 hover:text-white transition ${className}`}
    >
      #{topic.name.toLowerCase().replace(/\s+/g, '-')}
    </Link>
  );
}
