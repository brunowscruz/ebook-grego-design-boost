import { motion } from "framer-motion";
import { Shield, Zap, CreditCard, Smartphone } from "lucide-react";

const badges = [
  { icon: Shield, label: "Compra 100% Segura" },
  { icon: Zap, label: "Acesso Imediato" },
  { icon: CreditCard, label: "Pagamento via Kiwify" },
  { icon: Smartphone, label: "Todos os Dispositivos" },
];

const FinalCtaSection = ({ ctaUrl }: { ctaUrl: string }) => (
  <section className="py-20 md:py-28">
    <div className="container mx-auto px-4 max-w-3xl text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-primary mb-4">
          Não Perca Esta Oportunidade!
        </h2>
        <p className="text-lg text-muted-foreground mb-8">
          Comece hoje mesmo sua jornada no Grego Bíblico e entenda a Palavra de Deus como nunca antes.
        </p>

        <div className="price-tag justify-center mb-8">
          <span className="text-6xl md:text-7xl font-bold">R$19,90</span>
        </div>

        <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="cta-button cta-pulse text-lg md:text-xl mb-4">
          🚀 GARANTIR MEU ACESSO AGORA
        </a>
        <p className="text-sm text-muted-foreground mt-4 mb-12">
          ✅ Acesso imediato após o pagamento
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {badges.map(({ icon: Icon, label }, i) => (
            <div key={i} className="trust-badge">
              <Icon className="w-6 h-6" />
              <span className="text-xs">{label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCtaSection;
