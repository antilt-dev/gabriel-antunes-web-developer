import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import { EffectCoverflow, Navigation } from 'swiper/modules';

export default function Portfolio() {
  const { t } = useLanguage();
  const [lightbox, setLightbox] = useState<string | null>(null);
  const selectedItem = t.portfolio.items.find((i) => i.id === lightbox);

  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="font-heading font-bold text-foreground text-center"
        >
          {t.portfolio.title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="mt-2 text-muted-foreground text-center"
        >
          {t.portfolio.subtitle}
        </motion.p>

        <Swiper
          modules={[EffectCoverflow, Navigation]}
          effect="coverflow"
          grabCursor
          centeredSlides
          navigation
          loop
          slidesPerView={'auto'}
          breakpoints={{
            0: { spaceBetween: 15 },
            640: { spaceBetween: 25 },
            1024: { spaceBetween: 35 },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 150, 
            modifier: 1,
            slideShadows: false,
          }}
          className="mt-8"
        >
          {t.portfolio.items.map((item) => (
            <SwiperSlide
              key={item.id}
              className="w-[383px] sm:w-[510px] lg:w-[638px] transition-transform duration-300"
            >
              <motion.article
                className="group rounded-lg overflow-hidden shadow-lift border border-border cursor-pointer bg-card"
                onClick={() => setLightbox(item.id)}
              >
                <div className="relative h-[60vw] sm:h-[45vw] max-h-[500px] overflow-hidden">
                  <iframe
                    src={item.href}
                    className="absolute inset-0 w-[120%] h-[120%] scale-[1] origin-top-left pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-black/10" />
                  <div className="relative z-10 flex items-end p-4 sm:p-5">
                    <div>
                    </div>
                  </div>
                </div>
              </motion.article>
            </SwiperSlide>
          ))}
        </Swiper>

        <AnimatePresence>
          {lightbox && selectedItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-secondary/70 backdrop-blur-sm p-2 sm:p-4"
              onClick={() => setLightbox(null)}
              role="dialog"
              aria-modal="true"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-card rounded-xl p-4 sm:p-6 w-full max-w-[95vw] sm:max-w-[80%] shadow-lift-lg"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-foreground text-base sm:text-lg">
                  </h3>
                  <button
                    onClick={() => setLightbox(null)}
                    className="p-1 rounded-md hover:bg-muted transition-colors"
                    aria-label="Close"
                  >
                    <X size={18} />
                  </button>
                </div>

                <iframe
                  src={selectedItem.href}
                  className="w-full h-[55vh] sm:h-[70vh] rounded-lg border border-border"
                />
                <p className="mt-4 text-sm text-muted-foreground">
                  {t.portfolio.projectDesc}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}