export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="bg-white/60 backdrop-blur-sm rounded-lg p-8 border border-purple-200/50">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact</h1>
        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="mb-4">
            Have questions or feedback? We'd love to hear from you!
          </p>
          <p className="mb-4">
            For business inquiries, please email us at: <strong>contact@digitalinspiration.com</strong>
          </p>
          <p>
            Follow us on social media for the latest updates and tech tips.
          </p>
        </div>
      </div>
    </div>
  );
}
