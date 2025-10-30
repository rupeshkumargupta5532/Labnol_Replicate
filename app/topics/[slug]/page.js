import { notFound } from "next/navigation";
import ArticleCard from "@/components/ArticleCard";
import contentData from "@/data/content.json";

export async function generateStaticParams() {
  return contentData.topics.map((topic) => ({
    slug: topic.slug,
  }));
}

export default async function TopicPage({ params }) {
  const { slug } = await params;
  const topic = contentData.topics.find((t) => t.slug === slug);
  
  if (!topic) {
    notFound();
  }

  const articles = contentData.articles.filter((article) =>
    article.tags.includes(topic.id)
  );

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4 capitalize">
          {topic.name}
        </h1>
        <p className="text-xl text-gray-700">
          {topic.description}
        </p>
      </div>

      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-8 border border-purple-200/50">
        {articles.length > 0 ? (
          <div className="space-y-6">
            {articles.map((article, index) => (
              <ArticleCard
                key={article.id}
                article={article}
                showNumber={true}
                number={index + 1}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-600">
            No articles found for this topic yet.
          </p>
        )}
      </div>
    </div>
  );
}
