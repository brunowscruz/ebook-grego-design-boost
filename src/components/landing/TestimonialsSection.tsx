import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "Sempre quis aprender Grego Bíblico, mas achava que era só para seminário. Esse material é claro, prático e direto. Que bênção!",
    name: "Ana M.",
    role: "Professora de EBD",
  },
  {
    quote: "Já estou usando nos meus estudos e nas ministrações. É um diferencial enorme entender o texto original.",
    name: "Pr. Felipe L.",
    role: "Pastor e Teólogo",
  },
];

const TestimonialsSection = () => (
  <section className="py-16 md:py-20">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-primary mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        O que estão dizendo
      </motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="section-card !p-8 flex flex-col justify-between"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
          >
            <div className="text-4xl text-accent mb-4">"</div>
            <p className="text-foreground leading-relaxed mb-6 italic">{t.quote}</p>
            <div>
              <p className="font-bold text-primary">{t.name}</p>
              <p className="text-sm text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
