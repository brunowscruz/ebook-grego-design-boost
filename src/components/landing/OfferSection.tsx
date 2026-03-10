import { motion } from "framer-motion";
import ebookMockup from "@/assets/ebook-mockup.png";

const features = [
  "Estudo completo em PDF",
  "Acesso imediato após pagamento",
  "Estilo fácil, direto e aplicável",
  "Material usado por pastores e líderes",
  "+100 palavras-chave do Grego Bíblico",
  "Exercícios práticos inclusos",
];

const OfferSection = ({ ctaUrl }: { ctaUrl: string }) => (
  <section className="py-16 md:py-20 bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 max-w-5xl">
      <motion.div
        className="flex flex-col lg:flex-row items-center gap-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img src={ebookMockup} alt="eBook" className="w-52 lg:w-64 animate-float drop-shadow-2xl flex-shrink-0" />
        <div className="text-center lg:text-left">
          <span className="inline-block mb-3 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-accent text-accent-foreground">
            Oferta por tempo limitado
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Grego Bíblico para Iniciantes
          </h2>
          <div className="grid sm:grid-cols-2 gap-3 mb-8">
            {features.map((f, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className="text-accent font-bold">✓</span>
                <span className="text-sm opacity-90">{f}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6 mb-4">
            <div>
              <p className="text-sm opacity-70 mb-1">Tudo isso por apenas</p>
              <p className="text-5xl font-bold">
                R$<span className="text-accent">19,90</span>
              </p>
              <p className="text-xs opacity-60 mt-1">Acesso vitalício</p>
            </div>
            <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="cta-button cta-pulse text-base md:text-lg">
              📘 SIM, EU QUERO AGORA!
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default OfferSection;
