import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSEO } from '../components/SEOHelmet';

const galleryItems = [
  // ACET
  { id: 1, src: '/assets/ACET Collage/Image 1.webp', category: 'acet college', title: 'Akshaya College of Engineering and Technology' },
  { id: 2, src: '/assets/ACET Collage/Image 2.webp', category: 'acet college', title: 'Akshaya College of Engineering and Technology' },
  { id: 3, src: '/assets/ACET Collage/image 3.webp', category: 'acet college', title: 'Akshaya College of Engineering and Technology' },
  { id: 4, src: '/assets/ACET Collage/image 4.webp', category: 'acet college', title: 'Akshaya College of Engineering and Technology' },
  { id: 5, src: '/assets/ACET Collage/image 5.webp', category: 'acet college', title: 'Akshaya College of Engineering and Technology' },

  // AIMS
  { id: 6, src: '/assets/AIMS Collage/IMAGE 6.webp', category: 'aims college', title: 'Akshaya Institute of Management Studies' },
  { id: 7, src: '/assets/AIMS Collage/image 10.webp', category: 'aims college', title: 'Akshaya Institute of Management Studies' },
  { id: 8, src: '/assets/AIMS Collage/image 7.webp', category: 'aims college', title: 'Akshaya Institute of Management Studies' },
  { id: 9, src: '/assets/AIMS Collage/image 8.webp', category: 'aims college', title: 'Akshaya Institute of Management Studies' },
  { id: 10, src: '/assets/AIMS Collage/images 9.webp', category: 'aims college', title: 'Akshaya Institute of Management Studies' },

  // SRIET
  { id: 11, src: '/assets/SRIET Collage/Image 15.webp', category: 'sriet college', title: 'Sri Ranganathar Institute of Engineering and Technology' },
  { id: 12, src: '/assets/SRIET Collage/Image 16.webp', category: 'sriet college', title: 'Sri Ranganathar Institute of Engineering and Technology' },
  { id: 13, src: '/assets/SRIET Collage/Image 17.webp', category: 'sriet college', title: 'Sri Ranganathar Institute of Engineering and Technology' },
  { id: 14, src: '/assets/SRIET Collage/image 11.webp', category: 'sriet college', title: 'Sri Ranganathar Institute of Engineering and Technology' },
  { id: 15, src: '/assets/SRIET Collage/image 12.webp', category: 'sriet college', title: 'Sri Ranganathar Institute of Engineering and Technology' },
  { id: 16, src: '/assets/SRIET Collage/image 13.webp', category: 'sriet college', title: 'Sri Ranganathar Institute of Engineering and Technology' },
  { id: 17, src: '/assets/SRIET Collage/image 14.webp', category: 'sriet college', title: 'Sri Ranganathar Institute of Engineering and Technology' },

  // GCT
  { id: 18, src: '/assets/GCT Collage/Image 18.webp', category: 'gct college', title: 'Government College of Technology' },
  { id: 19, src: '/assets/GCT Collage/Image 19.webp', category: 'gct college', title: 'Government College of Technology' },
  { id: 20, src: '/assets/GCT Collage/Image 20.webp', category: 'gct college', title: 'Government College of Technology' },
  { id: 21, src: '/assets/GCT Collage/Image 21.webp', category: 'gct college', title: 'Government College of Technology' },
  { id: 22, src: '/assets/GCT Collage/Image 22.webp', category: 'gct college', title: 'Government College of Technology' },
  { id: 23, src: '/assets/GCT Collage/Image 23.webp', category: 'gct college', title: 'Government College of Technology' },
  { id: 24, src: '/assets/GCT Collage/Image 24.webp', category: 'gct college', title: 'Government College of Technology' },
  { id: 25, src: '/assets/GCT Collage/Image 25.webp', category: 'gct college', title: 'Government College of Technology' },
  { id: 26, src: '/assets/GCT Collage/Image 26.webp', category: 'gct college', title: 'Government College of Technology' },

  // Award
  { id: 27, src: '/assets/Award/Image 28.webp', category: 'award', title: 'Award' },
  { id: 28, src: '/assets/Award/image 27.webp', category: 'award', title: 'Award' },
];

const categories = ['all', 'acet college', 'aims college', 'sriet college', 'gct college', 'award'];

export default function Gallery() {
  useSEO('gallery', 'Gallery - Aroganam Technologies');
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  // Lightbox Navigation Logic
  const currentIndex = selectedImage ? filteredItems.findIndex(item => item.id === selectedImage.id) : -1;
  const hasNext = currentIndex !== -1 && currentIndex < filteredItems.length - 1;
  const hasPrev = currentIndex > 0;

  const handleNext = (e) => {
    e.stopPropagation();
    if (hasNext) setSelectedImage(filteredItems[currentIndex + 1]);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    if (hasPrev) setSelectedImage(filteredItems[currentIndex - 1]);
  };

  return (
    <div className="flex-grow flex flex-col pt-24 pb-20 bg-background text-on-background relative">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop w-full text-center">
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setFilter(cat);
                setSelectedImage(null);
              }}
              className={`px-6 py-2 rounded capitalize font-semibold tracking-wide transition-colors duration-300 ${
                filter === cat 
                  ? 'bg-[#0b1145] text-white' 
                  : 'bg-[#0b1145] text-white hover:bg-[#1a237e]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="relative group aspect-square overflow-hidden cursor-pointer bg-surface-variant"
                onClick={() => setSelectedImage(item)}
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <h3 className="text-white font-bold text-center text-sm md:text-base mb-6 drop-shadow-md px-2 max-w-[90%] leading-relaxed">
                    {item.title}
                  </h3>
                  <div className="flex gap-4">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setSelectedImage(item); }}
                      className="w-12 h-12 rounded-md border border-white bg-[#0b1145] text-white flex items-center justify-center hover:bg-[#1a237e] transition-colors shadow-sm"
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>zoom_in</span>
                    </button>
                    <button 
                      onClick={(e) => { e.stopPropagation(); window.open(item.src, '_blank'); }}
                      className="w-12 h-12 rounded-md border border-white bg-[#0b1145] text-white flex items-center justify-center hover:bg-[#1a237e] transition-colors shadow-sm"
                    >
                      <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>link</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col bg-[#111111]"
            onClick={() => setSelectedImage(null)}
          >
            {/* Header / Close button */}
            <div className="absolute top-0 right-0 p-4 z-10">
              <button 
                onClick={() => setSelectedImage(null)}
                className="text-white/70 hover:text-white transition-colors flex items-center justify-center w-12 h-12 bg-black/30 rounded-full"
              >
                <span className="material-symbols-outlined" style={{ fontSize: '28px' }}>close</span>
              </button>
            </div>

            {/* Navigation Left */}
            {hasPrev && (
              <button 
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16"
                onClick={handlePrev}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '36px', fontWeight: '200' }}>arrow_back_ios</span>
              </button>
            )}

            {/* Navigation Right */}
            {hasNext && (
              <button 
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors z-10 flex items-center justify-center w-12 h-12 md:w-16 md:h-16"
                onClick={handleNext}
              >
                <span className="material-symbols-outlined" style={{ fontSize: '36px', fontWeight: '200' }}>arrow_forward_ios</span>
              </button>
            )}

            {/* Main Content */}
            <div className="flex-grow flex items-center justify-center p-4 md:p-12 overflow-hidden relative" onClick={e => e.stopPropagation()}>
              <motion.img 
                key={selectedImage.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.2 }}
                src={selectedImage.src} 
                alt={selectedImage.title} 
                className="max-w-full max-h-full object-contain drop-shadow-2xl"
              />
            </div>

            {/* Footer / Caption */}
            <div className="bg-[#111111] py-4 px-6 text-center z-10" onClick={e => e.stopPropagation()}>
              <p className="text-white/90 text-sm md:text-base tracking-wide font-medium">
                {selectedImage.title}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
