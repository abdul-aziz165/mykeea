import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Calendar, Target, ChevronRight } from 'lucide-react';
import { useData } from '../contexts/DataContext';

const Home: React.FC = () => {
  const { news } = useData();
  const latestNews = news.filter(post => post.published).slice(0, 3);

  const stats = [
    { label: 'Students Impacted', value: '2,500+', icon: Users },
    { label: 'Workshops Held', value: '150+', icon: Calendar },
    { label: 'Programs Completed', value: '75+', icon: Award },
    { label: 'Success Rate', value: '95%', icon: Target }
  ];

  const testimonials = [
    {
      name: 'Akosua Mensah',
      role: 'Student',
      quote: 'The robotics bootcamp changed my perspective on technology. Now I want to become a software engineer!',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
    },
    {
      name: 'Kofi Asante',
      role: 'Parent',
      quote: 'My daughter has gained so much confidence in STEM subjects. The programs here are truly exceptional.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    },
    {
      name: 'Ms. Adjoa Osei',
      role: 'Teacher',
      quote: 'As an educator, I appreciate how these programs complement our curriculum and inspire students.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    }
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="hero-gradient text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Empowering the Future with{' '}
                <span className="text-green-400">STEM</span>
              </h1>
              <p className="text-xl mb-8 text-gray-100 max-w-lg">
                Transforming lives in the KEEA district through innovative science, 
                technology, engineering, and mathematics education programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/programs"
                  className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-colors"
                >
                  <span>Explore Programs</span>
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/contact"
                  className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
                >
                  Get Involved
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8197455/pexels-photo-8197455.jpeg"
                alt="Students in STEM workshop"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">2,500+</div>
                    <div className="text-gray-600 text-sm">Students Impacted</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 stats-counter mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="STEM education"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Building Tomorrow's Leaders Today
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to provide accessible, high-quality STEM education 
                to students in the KEEA district. Through hands-on learning experiences, 
                mentorship programs, and community partnerships, we're nurturing the next 
                generation of scientists, engineers, and innovators.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <ChevronRight className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Hands-on learning experiences</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ChevronRight className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Expert mentorship programs</span>
                </li>
                <li className="flex items-center space-x-3">
                  <ChevronRight className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700">Community partnerships</span>
                </li>
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-800"
              >
                <span>Learn More About Us</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              What Our Community Says
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Hear from students, parents, and educators who have experienced 
              the impact of our STEM programs firsthand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Latest News & Updates
              </h2>
              <p className="text-lg text-gray-600">
                Stay updated with our latest programs and achievements
              </p>
            </div>
            <Link
              to="/news"
              className="hidden md:inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-800"
            >
              <span>View All News</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {latestNews.map((post) => (
              <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <img
                  src={post.featuredImage}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-gray-600 mb-2">
                    {new Date(post.publishDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/news/${post.slug}`}
                    className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-800"
                  >
                    <span>Read More</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          <div className="text-center mt-8 md:hidden">
            <Link
              to="/news"
              className="inline-flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-800"
            >
              <span>View All News</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join us in empowering the next generation of STEM leaders. 
            Whether you're a student, parent, educator, or community member, 
            there's a place for you in our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programs"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Join Our Programs
            </Link>
            <Link
              to="/contact"
              className="border border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;