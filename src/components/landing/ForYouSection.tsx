import { motion } from "framer-motion";

const items = [
  "Sempre quis compreender a Bíblia como foi escrita originalmente",
  "Deseja aprender Grego Bíblico sem complicações acadêmicas",
  "Quer se aprofundar nas Escrituras com conhecimento real",
  "É líder, professor, pregador ou estudante da Palavra",
  "Busca um material prático, direto e transformador",
];

const ForYouSection = () => (
  <section className="py-16 md:py-20 bg-secondary">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-primary mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Este material é para você que:
      </motion.h2>
      <div className="space-y-4">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="check-item section-card !p-5"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <span className="check-icon">✓</span>
            <p className="text-base md:text-lg">{item}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ForYouSection;
