import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen Selection:bg-gold-primary/30">
      {/* Background Glows */}
      <div className="glow-bg">
        <div className="glow-circle gold-glow w-[500px] h-[500px] -top-20 -left-20" />
        <div className="glow-circle gold-glow w-[400px] h-[400px] top-1/2 -right-20" />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.jpg"
              alt="Codrava Logo"
              width={40}
              height={40}
              className="rounded-lg ring-1 ring-gold-primary/50"
            />
            <span className="text-xl font-bold tracking-tighter text-white">CODRAVA</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-muted hover:text-white transition-colors">
            <a href="#metodologia" className="hover:text-gold-secondary transition-colors">Metodología</a>
            <a href="#capacidades" className="hover:text-gold-secondary transition-colors">Capacidades</a>
            <a href="#contacto" className="px-4 py-2 bg-gold-primary text-white rounded-full hover:bg-gold-secondary transition-colors">Solicitar Diagnóstico</a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 text-center mb-32">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gold-primary/30 bg-gold-primary/5 text-gold-secondary text-sm font-medium">
            Agencia de Automatización & Software
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            No vendemos servicios. <br />
            <span className="text-gold-secondary">Construimos sistemas</span> que escalan negocios.
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            Ayudamos a empresas a eliminar el caos operativo mediante ecosistemas digitales a medida y automatización inteligente de procesos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-gold-primary text-white rounded-xl font-semibold hover:bg-gold-secondary transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(122,99,60,0.3)]">
              Solicitar Diagnóstico Gratuito
            </button>
            <button className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all">
              Ver nuestra metodología
            </button>
          </div>
        </section>

        {/* Symptoms Section */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <h2 className="text-3xl font-bold mb-12 text-center">¿Reconoces alguno de estos síntomas?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Caos Operativo",
                desc: "Los procesos dependen de personas o excels volátiles, lo que genera errores y cuellos de botella."
              },
              {
                title: "Falta de Visibilidad",
                desc: "No sabes qué está pasando en tiempo real. Los datos están dispersos y las decisiones se toman a ciegas."
              },
              {
                title: "Techo de Crecimiento",
                desc: "No puedes escalar porque tu infraestructura actual requiere más personal para procesar más volumen."
              }
            ].map((item, i) => (
              <div key={i} className="p-8 rounded-2xl bg-card border border-white/5 hover:border-gold-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-lg bg-gold-primary/10 flex items-center justify-center mb-6 text-gold-secondary font-bold">
                  {i + 1}
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What we build */}
        <section className="bg-card/50 py-32 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-8">Lo que construimos</h2>
                <div className="space-y-8">
                  {[
                    {
                      label: "Ecosistemas Digitales",
                      desc: "Centralizamos toda tu operación en una sola plataforma personalizada que se adapta a como tú trabajas."
                    },
                    {
                      label: "Automatización 24/7",
                      desc: "Sustituimos tareas repetitivas por flujos lógicos que trabajan sin descanso ni errores."
                    },
                    {
                      label: "Dashboards en Tiempo Real",
                      desc: "Toda tu información de negocio visible en un solo lugar para tomar decisiones basadas en datos."
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="mt-1 text-gold-secondary">
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold mb-1">{item.label}</h4>
                        <p className="text-muted">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-gold-primary/10 to-transparent flex items-center justify-center">
                <Image
                  src="/system-architecture.png"
                  alt="System Architecture"
                  width={300}
                  height={300}
                  className="rounded-2xl shadow-2xl opacity-50 grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section id="capacidades" className="max-w-7xl mx-auto px-6 py-32">
          <h2 className="text-4xl font-bold mb-16 text-center">Capacidades técnicas</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              "Desarrollo Web Pro",
              "Apps a Medida",
              "Integración WhatsApp API",
              "CRM & ERP Custom",
              "Sistemas de Auditoría",
              "Dashboard BI",
              "Automatización AI",
              "Sistemas de Inventario"
            ].map((cap, i) => (
              <div key={i} className="px-6 py-4 rounded-xl bg-white/5 border border-white/5 text-center font-medium hover:bg-gold-primary/5 hover:border-gold-primary/20 transition-all">
                {cap}
              </div>
            ))}
          </div>
        </section>

        {/* Methodology */}
        <section id="metodologia" className="max-w-7xl mx-auto px-6 py-32 border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Metodología de trabajo</h2>
            <p className="text-muted">7 pasos diseñados para la excelencia operativa.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Diagnóstico", desc: "Inmersión total en tus procesos para entender el lodo operativo." },
              { step: "02", title: "Arquitectura", desc: "Diseño del ecosistema digital y flujo de datos óptimo." },
              { step: "03", title: "Sprint 0", desc: "Construcción rápida de la base del sistema (MVP)." },
              { step: "04", title: "Integración", desc: "Conectamos el sistema con tus herramientas actuales." },
              { step: "05", title: "Onboarding", desc: "Capacitación intensiva para que tu equipo domine el sistema." },
              { step: "06", title: "Evaluación", desc: "Medición de KPIs y refinamiento de procesos." },
              { step: "07", title: "Soporte", desc: "Evolución continua y mantenimiento proactivo." }
            ].map((m, i) => (
              <div key={i} className="group p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-gold-primary/10 hover:border-gold-primary/30 transition-all duration-300">
                <div className="text-4xl font-black text-white/10 group-hover:text-gold-primary/30 transition-colors mb-4">
                  {m.step}
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">{m.title}</h3>
                <p className="text-sm text-muted group-hover:text-zinc-300 transition-colors">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Qualification Section */}
        <section className="max-w-7xl mx-auto px-6 py-32 bg-card rounded-[3rem] border border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Con quién trabajamos</h2>
            <p className="text-muted">No somos para todos. Operamos mejor con perfiles específicos.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Ideal Client */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-emerald-500 mb-8 flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                Perfil Ideal
              </h3>
              {[
                "Dueños de negocio con visión de largo plazo.",
                "Empresas que facturan +$50k USD anuales.",
                "Personas pragmáticas que valoran la eficiencia.",
                "Equipos listos para digitalizar su operación."
              ].map((text, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/10">
                  <span className="text-emerald-500 font-bold">✓</span>
                  <p className="text-zinc-300">{text}</p>
                </div>
              ))}
            </div>

            {/* Not for us */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-rose-500 mb-8 flex items-center gap-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                No es para ti si...
              </h3>
              {[
                "Buscas una solución mágica de la noche a la mañana.",
                "No tienes presupuesto asignado para infraestructura.",
                "No valoras el impacto de la tecnología en tu margen.",
                "Prefieres seguir haciendo las cosas de forma manual."
              ].map((text, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-rose-500/5 border border-rose-500/10">
                  <span className="text-rose-500 font-bold">✕</span>
                  <p className="text-zinc-300">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contacto" className="max-w-5xl mx-auto px-6 py-32">
          <div className="relative p-12 md:p-20 rounded-[3rem] bg-gradient-to-br from-gold-primary/20 via-card to-background border border-gold-primary/30 text-center overflow-hidden">
            <div className="absolute inset-0 bg-[url('/patterns/carbon-fibre.png')] opacity-5" />
            <h2 className="relative text-4xl md:text-5xl font-bold mb-8 italic">¿Listo para dejar de vender servicios y empezar a construir sistemas?</h2>
            <p className="relative text-xl text-muted mb-12 max-w-2xl mx-auto">
              Solo aceptamos 2 proyectos nuevos por mes para garantizar la máxima calidad y atención.
            </p>
            <button className="relative px-12 py-5 bg-gold-primary text-white text-lg rounded-2xl font-bold hover:bg-gold-secondary transition-all transform hover:scale-105 shadow-[0_0_30px_rgba(122,99,60,0.4)]">
              Aplicar para Evaluación
            </button>
          </div>
        </section>
      </main>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/521234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
      >
        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-4.752 8.995c-1.991 0-3.942-.534-5.646-1.543l-.404-.24-4.19 1.098 1.118-4.085-.263-.418c-1.103-1.755-1.685-3.805-1.685-5.918 0-6.177 5.024-11.2 11.201-11.2 2.992 0 5.805 1.166 7.92 3.282 2.115 2.116 3.282 4.929 3.282 7.918 0 6.179-5.025 11.201-11.202 11.201m11.202-22.402c-2.992-2.99-6.969-4.639-11.201-4.639-8.729 0-15.833 7.104-15.833 15.833 0 2.789.729 5.512 2.114 7.925l-2.246 8.216 8.406-2.205c2.329 1.272 4.948 1.943 7.565 1.943l.007 0c8.728 0 15.833-7.104 15.833-15.833 0-4.226-1.649-8.203-4.646-11.201z" />
        </svg>
      </a>

      {/* Footer */}
      <footer className="border-t border-white/5 py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/logo.jpg"
                alt="Codrava Logo"
                width={32}
                height={32}
                className="rounded ring-1 ring-gold-primary/50"
              />
              <span className="text-lg font-bold tracking-tighter text-white">CODRAVA</span>
            </div>
            <p className="text-muted max-w-sm mb-6">
              Transformamos la complejidad operativa en simplicidad técnica. Sistemas que trabajan para ti, no al revés.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6">Servicios</h4>
            <ul className="space-y-4 text-muted">
              <li><a href="#" className="hover:text-gold-secondary transition-colors">Automatización</a></li>
              <li><a href="#" className="hover:text-gold-secondary transition-colors">Software a Medida</a></li>
              <li><a href="#" className="hover:text-gold-secondary transition-colors">Consultoría</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6">Contacto</h4>
            <ul className="space-y-4 text-muted">
              <li>info@codrava.com</li>
              <li>+52 (123) 456 7890</li>
              <li className="flex gap-4 mt-6">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold-primary/20 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 text-center text-sm text-muted">
          © {new Date().getFullYear()} Codrava Ecosystems. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
