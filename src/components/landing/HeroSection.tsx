import { motion } from "framer-motion";
import ebookMockup from "@/assets/ebook-mockup.png";
import pastorImg from "@/assets/pastor.png";

const HeroSection = ({ ctaUrl }: { ctaUrl: string }) => {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      <div className="container relative mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text */}
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block mb-4 px-4 py-1.5 rounded-full text-sm font-semibold tracking-wide bg-secondary text-muted-foreground uppercase">
              eBook Completo
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary mb-6">
              Aprenda Grego Bíblico e{" "}
              <span className="text-accent">Aprofunde-se</span> na Palavra de Deus
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-xl mx-auto lg:mx-0">
              Entenda o Novo Testamento no idioma original com clareza e fidelidade.
              Material completo, direto ao ponto e com linguagem acessível.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <img src={pastorImg} alt="Pr. Everson" className="w-10 h-10 rounded-full object-cover border-2 border-accent" />
                <span className="text-sm text-muted-foreground">Por <strong className="text-foreground">Pr. Everson Pereira</strong></span>
              </div>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">25 anos de ministério pastoral</span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="cta-button cta-pulse text-base md:text-lg">
                📘 QUERO APRENDER GREGO BÍBLICO
              </a>
              <div className="price-tag">
                <span className="text-sm text-muted-foreground">por apenas</span>
                <span className="text-3xl font-bold">R$19,90</span>
              </div>
            </div>

            <p className="text-xs text-muted-foreground mt-3">
              ⚡ Acesso imediato • 🔒 Compra segura • 📱 Todos os dispositivos
            </p>
          </motion.div>

          {/* Ebook image */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img
              src={ebookMockup}
              alt="eBook Grego Bíblico para Iniciantes"
              className="w-64 md:w-80 lg:w-96 animate-float drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
