export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-8 border border-purple-200/50">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">About</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4">
            Amit Agarwal is a web geek, solo entrepreneur and loves making things on the Internet. 
            Google recently awarded him the Google Developer Expert and Google Cloud Champion title 
            for his work on Google Workspace and Google Apps Script.
          </p>
          <p className="mb-4">
            Digital Inspiration has been helping people solve technology problems since 2004. 
            Our mission is to make technology easy to understand for everyone.
          </p>
          <p>
            We publish in-depth tutorials, how-to guides, and tips to help you get the most out of 
            your favorite tools and services.
          </p>
        </div>
      </div>
    </div>
  );
}
