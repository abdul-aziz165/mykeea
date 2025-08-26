import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ExternalLink } from 'lucide-react';
import { useData } from '../contexts/DataContext';

const Events: React.FC = () => {
  const { events } = useData();
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming');

  const filteredEvents = events.filter(event => event.type === activeTab);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const isEventSoon = (dateString: string) => {
    const eventDate = new Date(dateString);
    const today = new Date();
    const diffTime = eventDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= 7 && diffDays >= 0;
  };

  return (
    <div className="min-h-screen bg-gray-50 fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Events & Workshops</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Join us for exciting STEM events, workshops, and competitions that bring 
              our community together to learn, innovate, and celebrate achievements.
            </p>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="bg-gray-100 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  activeTab === 'upcoming'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-6 py-3 rounded-md font-semibold transition-colors ${
                  activeTab === 'past'
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Past Events
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Events List */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {activeTab === 'upcoming' ? 'Upcoming Events' : 'Past Events'}
            </h2>
            <p className="text-gray-600">
              {activeTab === 'upcoming'
                ? 'Don\'t miss out on these exciting opportunities to learn and connect'
                : 'Take a look at our previous successful events and workshops'
              }
            </p>
          </div>

          {filteredEvents.length === 0 ? (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No {activeTab} events
              </h3>
              <p className="text-gray-600">
                {activeTab === 'upcoming'
                  ? 'Check back soon for new upcoming events and workshops.'
                  : 'Our past events will be listed here once we have some history.'
                }
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredEvents.map((event) => (
                <div
                  key={event.id}
                  className={`bg-white rounded-lg shadow-md overflow-hidden card-hover ${
                    isEventSoon(event.date) ? 'ring-2 ring-green-500' : ''
                  }`}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3 p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          {isEventSoon(event.date) && (
                            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-semibold">
                              Soon
                            </span>
                          )}
                          <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                            activeTab === 'upcoming'
                              ? 'bg-blue-100 text-blue-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}>
                            {activeTab === 'upcoming' ? 'Upcoming' : 'Completed'}
                          </span>
                        </div>
                      </div>

                      <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                        {event.title}
                      </h3>

                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {event.description}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                        <div className="flex items-center text-sm text-gray-600">
                          <Calendar size={16} className="mr-2 text-blue-500" />
                          <span>{formatDate(event.date)}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Clock size={16} className="mr-2 text-blue-500" />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <MapPin size={16} className="mr-2 text-blue-500" />
                          <span>{event.location}</span>
                        </div>
                      </div>

                      {activeTab === 'upcoming' && (
                        <div className="flex flex-col sm:flex-row gap-3">
                          <a
                            href={event.registrationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                          >
                            <Users size={16} />
                            <span>Register Now</span>
                            <ExternalLink size={16} />
                          </a>
                          <button
                            onClick={() => {
                              // Add to calendar functionality would go here
                              alert('Add to calendar functionality would be implemented here.');
                            }}
                            className="inline-flex items-center justify-center space-x-2 border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-semibold transition-colors"
                          >
                            <Calendar size={16} />
                            <span>Add to Calendar</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Never Miss an Event
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Subscribe to our newsletter to get notified about upcoming events, 
            workshops, and special announcements.
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;