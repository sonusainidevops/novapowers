import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const galleryImages = [
  { id: 1, category: 'Fleet', title: 'Our Premium Fleet', color: 'bg-yellow-400' },
  { id: 2, category: 'Events', title: 'Corporate Events', color: 'bg-gray-200' },
  { id: 3, category: 'Franchise', title: 'Franchise Partners', color: 'bg-yellow-400' },
  { id: 4, category: 'Team', title: 'Our Team', color: 'bg-gray-200' },
  { id: 5, category: 'Services', title: 'Delivery Services', color: 'bg-yellow-400' },
  { id: 6, category: 'Fleet', title: 'Luxury Cars', color: 'bg-gray-200' },
  { id: 7, category: 'Events', title: 'Community Events', color: 'bg-yellow-400' },
  { id: 8, category: 'Franchise', title: 'Office Spaces', color: 'bg-gray-200' },
];

const categories = ['All', 'Fleet', 'Events', 'Franchise', 'Team', 'Services'];

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages =
    selectedCategory === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const currentIndex = selectedImage
    ? filteredImages.findIndex((img) => img.id === selectedImage)
    : -1;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Page Header */}
        <section className="pt-32 pb-16 bg-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">Gallery</h1>
            <p className="text-lg text-gray-400 max-w-xl mx-auto">
              A glimpse into our operations, events, and the Nova Cabs family
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 lg:py-28 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all border-2 ${
                    selectedCategory === category
                      ? 'bg-yellow-400 text-black border-yellow-400'
                      : 'bg-white text-black border-gray-200 hover:border-yellow-400'
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
                  onClick={() => setSelectedImage(image.id)}
                  className={`group relative cursor-pointer overflow-hidden rounded-2xl ${
                    index === 0 || index === 5 ? 'sm:col-span-2 sm:row-span-2' : ''
                  }`}
                  style={{ height: index === 0 || index === 5 ? '400px' : '200px' }}
                >
                  <div className={`${image.color} w-full h-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110`}>
                    <div className="text-center text-black p-4">
                      <div className="w-16 h-16 bg-white/50 rounded-xl mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl font-bold">{image.id}</span>
                      </div>
                      <h3 className="text-xl font-bold">{image.title}</h3>
                      <p className="text-black/70 text-sm mt-2">{image.category}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl p-0 bg-transparent border-0">
            <DialogTitle className="sr-only">Gallery Image</DialogTitle>
            {selectedImage !== null && (
              <div className="relative">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setSelectedImage(null)}
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
                    <div className="text-center text-black p-8">
                      <div className="w-24 h-24 bg-white/50 rounded-2xl mx-auto mb-6 flex items-center justify-center">
                        <span className="text-4xl font-bold">{selectedImage}</span>
                      </div>
                      <h3 className="text-3xl font-bold">
                        {galleryImages.find((i) => i.id === selectedImage)?.title}
                      </h3>
                      <p className="text-black/70 text-lg mt-2">
                        {galleryImages.find((i) => i.id === selectedImage)?.category}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => currentIndex > 0 && setSelectedImage(filteredImages[currentIndex - 1].id)}
                    disabled={currentIndex <= 0}
                    className="bg-white/20 hover:bg-white/40 text-white rounded-full disabled:opacity-30"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => currentIndex < filteredImages.length - 1 && setSelectedImage(filteredImages[currentIndex + 1].id)}
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
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
