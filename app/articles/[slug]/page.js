import { notFound } from "next/navigation";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import contentData from "@/data/content.json";

export async function generateStaticParams() {
  return contentData.articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = contentData.articles.find((a) => a.slug === slug);
  
  if (!article) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <p className="text-gray-600 mb-4">{article.date}</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          {article.title}
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          {article.description}
        </p>
        <div className="flex items-center justify-center gap-2 mb-8">
          {article.tags.map((tag) => {
            const topic = contentData.topics.find(t => t.id === tag);
            return topic ? (
              <Link
                key={tag}
                href={`/topics/${topic.slug}`}
                className="px-4 py-1 bg-pink-500 text-white rounded-full text-sm hover:bg-pink-600 transition"
              >
                #{topic.name.toLowerCase().replace(/\s+/g, '-')}
              </Link>
            ) : null;
          })}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-8 border border-purple-200/50 mb-8">
            <div className="prose prose-lg max-w-none">
              {article.content.introduction && (
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {article.content.introduction}
                </p>
              )}
              
              {article.content.sections && article.content.sections.map((section, index) => (
                <div key={index} id={section.id} className="mb-8 scroll-mt-24">
                  {section.heading && (
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {section.heading}
                    </h2>
                  )}
                  {section.content && (
                    <p className="text-gray-700 mb-4 leading-relaxed">
                      {section.content}
                    </p>
                  )}
                  {section.points && (
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      {section.points.map((point, idx) => (
                        <li key={idx}>{point}</li>
                      ))}
                    </ol>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="md:col-span-1">
          {article.tableOfContents && article.tableOfContents.length > 0 && (
            <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-purple-200/50 sticky top-24">
              <h3 className="text-pink-600 font-bold mb-4">Table of Contents</h3>
              <ol className="space-y-2">
                {article.tableOfContents.map((item, index) => (
                  <li key={item.id} className="text-gray-700">
                    <a
                      href={`#${item.id}`}
                      className="hover:text-purple-700 transition text-sm"
                    >
                      {index + 1}. {item.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>

      <div className="mb-12">
        <Newsletter />
      </div>
    </div>
  );
}
