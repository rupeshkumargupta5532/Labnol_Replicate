import Link from "next/link";
import { Award, Trophy, Shield, Star } from "lucide-react";
import Newsletter from "@/components/Newsletter";
import ArticleCard from "@/components/ArticleCard";
import contentData from "@/data/content.json";

export default function Home() {
  const latestArticles = contentData.articles.slice(0, 4);
  const gmailArticles = contentData.articles.filter(article => 
    article.tags.includes("gmail")
  );
  const sheetsArticles = contentData.articles.filter(article => 
    article.tags.includes("google-sheets")
  );

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Tech à la carte
        </h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Digital Inspiration
        </h2>
        <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Writing on tech, building software tools, since 2004.
        </p>
        <blockquote className="text-gray-600 italic max-w-3xl mx-auto mb-12 border-l-4 border-purple-400 pl-6 py-2">
          "We strive to be independent and unbiased. We do not accept anything of value from brands or from their
          public relations agencies. We do not make paid endorsements of any kind nor do we produce paid content,
          ever."
        </blockquote>

        <div className="bg-white/60 backdrop-blur-sm rounded-lg p-8 mb-8 border border-purple-200/50">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white text-4xl font-bold">
              AA
            </div>
            <div className="text-left flex-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Amit Agarwal</h3>
              <p className="text-gray-700 mb-2">Founder, Digital Inspiration</p>
              <p className="text-gray-600">
                Digital Inspiration is a tech how-to website written by Google Developer Expert Amit Agarwal. 
                Since its launch in 2004, this site has become a go-to resource for everything related to Google apps.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-purple-200/50">
            <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h4 className="font-bold text-gray-900 mb-2">Google Developer Expert</h4>
            <p className="text-sm text-gray-600">
              Recognizing work in Workspace
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-purple-200/50">
            <Trophy className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h4 className="font-bold text-gray-900 mb-2">ProductHunt Golden Kitty</h4>
            <p className="text-sm text-gray-600">
              Lifehack of the Year award
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-purple-200/50">
            <Shield className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h4 className="font-bold text-gray-900 mb-2">Microsoft MVP Alumni</h4>
            <p className="text-sm text-gray-600">
              MVP title for 5 years in a row
            </p>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-purple-200/50">
            <Star className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h4 className="font-bold text-gray-900 mb-2">Google Cloud Champion</h4>
            <p className="text-sm text-gray-600">
              Champion Innovator award
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900">What's New</h2>
          <Link href="/topics" className="text-purple-700 hover:text-purple-900 font-medium">
            →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestArticles.map((article) => (
            <div key={article.id} className="bg-white/60 backdrop-blur-sm rounded-lg p-6 border border-purple-200/50">
              <Link href={`/articles/${article.slug}`}>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-purple-700 transition">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-2">{article.description}</p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {gmailArticles.length > 0 && (
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Gmail</h2>
            <Link href="/topics/gmail" className="text-purple-700 hover:text-purple-900 font-medium">
              →
            </Link>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-8 border border-purple-200/50">
            <div className="space-y-6">
              {gmailArticles.map((article) => (
                <div key={article.id}>
                  <Link href={`/articles/${article.slug}`}>
                    <h3 className="text-lg font-medium text-gray-800 hover:text-purple-700 transition mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{article.description}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {sheetsArticles.length > 0 && (
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Google Sheets</h2>
            <Link href="/topics/google-sheets" className="text-purple-700 hover:text-purple-900 font-medium">
              →
            </Link>
          </div>
          <div className="bg-white/60 backdrop-blur-sm rounded-lg p-8 border border-purple-200/50">
            <div className="space-y-6">
              {sheetsArticles.map((article) => (
                <div key={article.id}>
                  <Link href={`/articles/${article.slug}`}>
                    <h3 className="text-lg font-medium text-gray-800 hover:text-purple-700 transition mb-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{article.description}</p>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mb-16">
        <Link
          href="/topics"
          className="block text-center bg-gray-800 text-white py-4 px-8 rounded-lg hover:bg-gray-700 transition font-medium text-lg"
        >
          Explore Topics
        </Link>
      </section>

      <section>
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Want to stay up to date? Sign up for our email newsletter.
        </h2>
        <Newsletter />
      </section>
    </div>
  );
}
