import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { useData } from '../contexts/DataContext';

const News: React.FC = () => {
  const { news } = useData();
  const publishedNews = news.filter(post => post.published);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">News & Updates</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Stay informed about our latest programs, achievements, and community 
              impact in STEM education across the KEEA district.
            </p>
          </div>
        </div>
      </section>

      {/* News Articles */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {publishedNews.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl text-gray-400 mb-4">📰</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No news articles yet</h3>
              <p className="text-gray-600">
                Check back soon for the latest updates and announcements.
              </p>
            </div>
          ) : (
            <div className="space-y-8">
              {publishedNews.map((post, index) => (
                <article
                  key={post.id}
                  className={`bg-white rounded-lg shadow-md overflow-hidden card-hover ${
                    index === 0 ? 'ring-2 ring-blue-500' : ''
                  }`}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={post.featuredImage}
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      {index === 0 && (
                        <div className="mb-4">
                          <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full font-semibold">
                            Latest
                          </span>
                        </div>
                      )}

                      <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>{formatDate(post.publishDate)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <User size={16} />
                          <span>{post.author}</span>
                        </div>
                      </div>

                      <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
                        <Link to={`/news/${post.slug}`}>{post.title}</Link>
                      </h2>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <Link
                        to={`/news/${post.slug}`}
                        className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                      >
                        <span>Read Full Article</span>
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter to receive the latest news, program announcements, 
            and success stories directly in your inbox.
          </p>
          <div className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-l-lg border-0 focus:ring-2 focus:ring-green-500 text-gray-900"
              />
              <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-r-lg font-semibold transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-sm text-blue-200 mt-4">
              We respect your privacy and will never spam you.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;