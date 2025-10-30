import Link from "next/link";

export default function ArticleCard({ article, showNumber = false, number = 0 }) {
  return (
    <div className="group">
      <Link href={`/articles/${article.slug}`}>
        <div className="flex items-start gap-4">
          {showNumber && (
            <span className="text-pink-600 font-semibold text-lg mt-1 flex-shrink-0">
              {number}.
            </span>
          )}
          <div>
            <h3 className="text-lg font-medium text-gray-800 group-hover:text-purple-700 transition mb-1">
              {article.title}
            </h3>
            {article.date && (
              <p className="text-sm text-gray-500">{article.date}</p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
}
