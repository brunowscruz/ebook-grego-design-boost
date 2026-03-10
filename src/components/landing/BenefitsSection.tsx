import { motion } from "framer-motion";
import { BookOpen, Search, BookMarked, Clock, Target } from "lucide-react";

const benefits = [
  { icon: BookOpen, title: "Aprender o Alfabeto", desc: "Domine o alfabeto e fonética do Grego Bíblico de forma prática" },
  { icon: Search, title: "Traduzir Passagens", desc: "Traduza e interprete passagens do Novo Testamento com precisão" },
  { icon: BookMarked, title: "Vocabulário Essencial", desc: "Acesse mais de 100 palavras-chave fundamentais" },
  { icon: Clock, title: "Estude no Seu Ritmo", desc: "Exercícios práticos para aprender quando e onde quiser" },
  { icon: Target, title: "Se Destaque", desc: "Destaque-se em estudos bíblicos, ministrações e ensino" },
];

const BenefitsSection = () => (
  <section className="py-16 md:py-20">
    <div className="container mx-auto px-4">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-primary mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Com este eBook você vai:
      </motion.h2>
      <p className="text-center text-muted-foreground mb-12 max-w-lg mx-auto">
        Tudo o que você precisa para começar sua jornada no Grego Bíblico
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {benefits.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={i}
            className="section-card flex flex-col items-start gap-4 transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="benefit-icon-wrapper">
              <Icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-primary">{title}</h3>
            <p className="text-muted-foreground">{desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default BenefitsSection;
