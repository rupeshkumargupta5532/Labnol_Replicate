import TopicTag from "@/components/TopicTag";
import contentData from "@/data/content.json";

export default function TopicsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Explore Topics
        </h1>
        <p className="text-xl text-gray-700">
          View tips, tutorials and how-to guides by topic
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {contentData.topics.map((topic) => (
          <TopicTag key={topic.id} topic={topic} />
        ))}
      </div>
    </div>
  );
}
