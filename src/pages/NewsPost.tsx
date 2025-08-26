import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, User, ArrowLeft, Share2 } from 'lucide-react';
import { useData } from '../contexts/DataContext';

const NewsPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { news } = useData();

  const post = news.find(p => p.slug === slug && p.published);

  if (!post) {
    return <Navigate to="/news" replace />;
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.excerpt,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 fade-in">
      {/* Back Navigation */}
      <section className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/news"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            <ArrowLeft size={16} />
            <span>Back to News</span>
          </Link>
        </div>
      </section>

      {/* Article */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            {/* Featured Image */}
            <img
              src={post.featuredImage}
              alt={post.title}
              className="w-full h-64 md:h-80 object-cover"
            />

            {/* Article Content */}
            <div className="p-8">
              {/* Meta Information */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4 md:mb-0">
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>{formatDate(post.publishDate)}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                </div>

                <button
                  onClick={handleShare}
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                  <Share2 size={16} />
                  <span>Share Article</span>
                </button>
              </div>

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                {post.content.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 leading-relaxed mb-6">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags/Categories */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-sm font-medium text-gray-600">Tags:</span>
                  <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                    STEM Education
                  </span>
                  <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                    Community
                  </span>
                  <span className="bg-orange-100 text-orange-800 text-sm px-3 py-1 rounded-full">
                    Programs
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Articles */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {news
                .filter(p => p.id !== post.id && p.published)
                .slice(0, 2)
                .map(relatedPost => (
                  <Link
                    key={relatedPost.id}
                    to={`/news/${relatedPost.slug}`}
                    className="bg-white rounded-lg shadow-md overflow-hidden card-hover"
                  >
                    <img
                      src={relatedPost.featuredImage}
                      alt={relatedPost.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <div className="text-sm text-gray-600 mb-2">
                        {formatDate(relatedPost.publishDate)}
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {relatedPost.title}
                      </h4>
                      <p className="text-gray-600 text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};

export default NewsPost;