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

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <div className="flex-grow flex flex-col pt-24 pb-20 bg-background text-on-background">
      <div className="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop w-full text-center">
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
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
              >
                <img 
                  src={item.src} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
                  <h3 className="text-white font-bold text-center text-sm md:text-base mb-4 drop-shadow-md">
                    {item.title}
                  </h3>
                  <div className="flex gap-4">
                    <button className="w-10 h-10 rounded-full bg-[#0b1145] text-white flex items-center justify-center hover:bg-tertiary-fixed-dim transition-colors">
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>search</span>
                    </button>
                    <button className="w-10 h-10 rounded-full bg-[#0b1145] text-white flex items-center justify-center hover:bg-tertiary-fixed-dim transition-colors">
                      <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>link</span>
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </div>
  );
}
