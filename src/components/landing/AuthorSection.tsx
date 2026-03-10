import { motion } from "framer-motion";
import pastorImg from "@/assets/pastor.png";

const AuthorSection = () => (
  <section className="py-16 md:py-20 bg-secondary">
    <div className="container mx-auto px-4 max-w-4xl">
      <motion.div
        className="section-card flex flex-col md:flex-row items-center gap-8 !p-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <img
          src={pastorImg}
          alt="Pr. Everson Souza Pereira"
          className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover shadow-lg flex-shrink-0"
        />
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
            Pr. Everson Souza Pereira
          </h2>
          <p className="text-muted-foreground mb-3 leading-relaxed">
            Há <strong className="text-foreground">25 anos</strong> no exercício do ministério pastoral, atual presidente da Igreja Cristã Evangélica de Praia Grande-SP, dedica sua vida ao aprendizado e ensino bíblico.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Entusiasta das línguas bíblicas originais, grego e hebraico, desenvolve pensamento prático e ministração aprofundada das Escrituras Sagradas.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AuthorSection;
