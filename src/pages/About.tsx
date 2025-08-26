import React from 'react';
import { Mail, Target, Eye, Heart, ChevronRight } from 'lucide-react';
import { useData } from '../contexts/DataContext';

const About: React.FC = () => {
  const { team } = useData();

  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest quality in all our educational programs and initiatives.'
    },
    {
      icon: Heart,
      title: 'Accessibility',
      description: 'We believe every child, regardless of background, deserves access to quality STEM education.'
    },
    {
      icon: Eye,
      title: 'Innovation',
      description: 'We embrace new technologies and teaching methods to enhance learning experiences.'
    },
    {
      icon: ChevronRight,
      title: 'Community',
      description: 'We work together with local communities to create sustainable educational solutions.'
    }
  ];

  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">About STEM KEEA</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Dedicated to transforming STEM education in the KEEA district through 
              innovative programs, community partnerships, and unwavering commitment 
              to student success.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide accessible, high-quality STEM education and resources to students 
                in the KEEA district, fostering critical thinking, creativity, and innovation 
                while preparing them for future careers in science, technology, engineering, 
                and mathematics.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                A future where every student in the KEEA district has the knowledge, 
                skills, and confidence to pursue STEM careers and contribute meaningfully 
                to Ghana's technological advancement and economic development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Our story"
                className="rounded-lg shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2020, STEM KEEA began as a grassroots initiative by local 
                  educators who recognized the urgent need for quality STEM education 
                  in our community. What started as weekend coding sessions for a handful 
                  of students has grown into a comprehensive program serving over 2,500 
                  students across the district.
                </p>
                <p>
                  Our journey has been marked by incredible support from the community, 
                  partnerships with local schools, and the dedication of our volunteers 
                  and staff. We've seen students who once struggled with basic math 
                  concepts go on to excel in robotics competitions and pursue STEM 
                  careers in higher education.
                </p>
                <p>
                  Today, we continue to expand our reach and impact, always staying 
                  true to our core belief that every child has the potential to 
                  succeed in STEM fields given the right opportunities and support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do and help us create 
              meaningful impact in our community.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Passionate educators, technologists, and community leaders dedicated 
              to empowering students through STEM education.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member) => (
              <div key={member.id} className="bg-white rounded-lg shadow-md overflow-hidden card-hover">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 font-medium mb-4">
                    {member.position}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {member.bio}
                  </p>
                  <a
                    href={`mailto:${member.email}`}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800"
                  >
                    <Mail size={16} />
                    <span>Contact</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Our Impact by the Numbers
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Measurable results that demonstrate our commitment to STEM education excellence.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">2,500+</div>
              <div className="text-blue-200">Students Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">150+</div>
              <div className="text-blue-200">Workshops Conducted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">75+</div>
              <div className="text-blue-200">Programs Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold mb-2">95%</div>
              <div className="text-blue-200">Student Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;