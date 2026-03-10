import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "É indicado para iniciantes?", a: "Sim! O curso é ideal para quem nunca teve contato com Grego Bíblico." },
  { q: "O que está incluso?", a: "Um eBook completo com teoria, vocabulário, exercícios e textos bíblicos." },
  { q: "Como recebo o material?", a: "Imediatamente após o pagamento via Kiwify. Você receberá o acesso por e-mail." },
  { q: "É compatível com celular?", a: "Sim! Você pode estudar pelo celular, tablet ou computador." },
];

const FaqSection = () => (
  <section className="py-16 md:py-20 bg-secondary">
    <div className="container mx-auto px-4 max-w-2xl">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-primary mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Perguntas Frequentes
      </motion.h2>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="section-card !p-0 overflow-hidden border-none">
            <AccordionTrigger className="px-6 py-4 text-left font-semibold text-primary hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4 text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FaqSection;
