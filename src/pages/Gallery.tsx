import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, Tag } from 'lucide-react';
import { useData } from '../contexts/DataContext';

const Gallery: React.FC = () => {
  const { gallery } = useData();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedProgram, setSelectedProgram] = useState('all');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const programs = ['all', ...new Set(gallery.map(image => image.program))];

  const filteredImages = gallery.filter(image => 
    selectedProgram === 'all' || image.program === selectedProgram
  );

  const openModal = (imageUrl: string) => {
    const index = filteredImages.findIndex(img => img.url === imageUrl);
    setCurrentImageIndex(index);
    setSelectedImage(imageUrl);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    let newIndex;
    if (direction === 'prev') {
      newIndex = currentImageIndex > 0 ? currentImageIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentImageIndex < filteredImages.length - 1 ? currentImageIndex + 1 : 0;
    }
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex].url);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal();
    } else if (e.key === 'ArrowLeft') {
      navigateImage('prev');
    } else if (e.key === 'ArrowRight') {
      navigateImage('next');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 fade-in">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Program Gallery</h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Explore moments from our STEM programs and witness the excitement 
              and learning that takes place in our workshops and events.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredImages.length} Photo{filteredImages.length !== 1 ? 's' : ''}
            </h2>
            <div className="flex items-center space-x-2">
              <Tag size={20} className="text-gray-400" />
              <select
                value={selectedProgram}
                onChange={(e) => setSelectedProgram(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {programs.map(program => (
                  <option key={program} value={program}>
                    {program === 'all' ? 'All Programs' : program}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredImages.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl text-gray-400 mb-4">📷</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No photos found</h3>
              <p className="text-gray-600">
                Try selecting a different program filter to see more photos.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <div
                  key={image.id}
                  className="group relative bg-white rounded-lg shadow-md overflow-hidden cursor-pointer card-hover"
                  onClick={() => openModal(image.url)}
                >
                  <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                    <div className="w-full p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
                      <div className="flex items-center justify-between text-xs">
                        <span>{image.program}</span>
                        <span>{new Date(image.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div className="relative max-w-4xl max-h-full p-4">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors"
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev');
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next');
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-colors"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Image */}
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-full object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            {/* Image Info */}
            <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-20 backdrop-blur-sm text-white p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">
                {filteredImages[currentImageIndex]?.title}
              </h3>
              <div className="flex items-center justify-between text-sm">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Tag size={16} />
                    <span>{filteredImages[currentImageIndex]?.program}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Calendar size={16} />
                    <span>
                      {new Date(filteredImages[currentImageIndex]?.date).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="text-sm">
                  {currentImageIndex + 1} of {filteredImages.length}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;