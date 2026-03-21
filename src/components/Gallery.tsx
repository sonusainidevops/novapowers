import { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const galleryImages = [
  {
    id: 1,
    category: 'Fleet',
    title: 'Our Premium Fleet',
    color: 'bg-blue-500',
  },
  {
    id: 2,
    category: 'Events',
    title: 'Corporate Events',
    color: 'bg-purple-500',
  },
  {
    id: 3,
    category: 'Franchise',
    title: 'Franchise Partners',
    color: 'bg-green-500',
  },
  {
    id: 4,
    category: 'Team',
    title: 'Our Team',
    color: 'bg-orange-500',
  },
  {
    id: 5,
    category: 'Services',
    title: 'Delivery Services',
    color: 'bg-red-500',
  },
  {
    id: 6,
    category: 'Fleet',
    title: 'Luxury Cars',
    color: 'bg-indigo-500',
  },
  {
    id: 7,
    category: 'Events',
    title: 'Community Events',
    color: 'bg-pink-500',
  },
  {
    id: 8,
    category: 'Franchise',
    title: 'Office Spaces',
    color: 'bg-teal-500',
  },
];

const categories = ['All', 'Fleet', 'Events', 'Franchise', 'Team', 'Services'];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (id: number) => setSelectedImage(id);
  const closeLightbox = () => setSelectedImage(null);

  const currentIndex = selectedImage
    ? filteredImages.findIndex((img) => img.id === selectedImage)
    : -1;

  const goToPrevious = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1].id);
    }
  };

  const goToNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1].id);
    }
  };

  return (
    <section id="gallery" className="py-20 lg:py-28 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mt-3 mb-4">
            Gallery
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            A glimpse into our operations, events, and the Nova Cabs family
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-primary text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => openLightbox(image.id)}
              className={`group relative cursor-pointer overflow-hidden rounded-2xl ${
                index === 0 || index === 5
                  ? 'sm:col-span-2 sm:row-span-2'
                  : ''
              }`}
              style={{ height: index === 0 || index === 5 ? '400px' : '200px' }}
            >
              <div
                className={`${image.color} w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}
              >
                <div className="text-center text-white p-4">
                  <div className="w-16 h-16 bg-white/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold">{image.id}</span>
                  </div>
                  <h3 className="text-xl font-bold">{image.title}</h3>
                  <p className="text-white/80 text-sm mt-2">{image.category}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Dialog open={selectedImage !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
            <DialogTitle className="sr-only">Gallery Image</DialogTitle>
            {selectedImage !== null && (
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={closeLightbox}
                  className="absolute -top-12 right-0 text-white hover:bg-white/20"
                >
                  <X className="w-6 h-6" />
                </Button>
                <div className="bg-white rounded-2xl overflow-hidden">
                  <div
                    className={`${
                      galleryImages.find((i) => i.id === selectedImage)?.color
                    } w-full h-[60vh] flex items-center justify-center`}
                  >
                    <div className="text-center text-white p-8">
                      <div className="w-24 h-24 bg-white/20 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                        <span className="text-4xl font-bold">{selectedImage}</span>
                      </div>
                      <h3 className="text-3xl font-bold">
                        {galleryImages.find((i) => i.id === selectedImage)?.title}
                      </h3>
                      <p className="text-white/80 text-lg mt-2">
                        {galleryImages.find((i) => i.id === selectedImage)?.category}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Navigation */}
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={goToPrevious}
                    disabled={currentIndex <= 0}
                    className="bg-white/20 hover:bg-white/40 text-white rounded-full disabled:opacity-30"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={goToNext}
                    disabled={currentIndex >= filteredImages.length - 1}
                    className="bg-white/20 hover:bg-white/40 text-white rounded-full disabled:opacity-30"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </Button>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
