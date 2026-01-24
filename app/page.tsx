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
            <a
              href="https://wa.me/525848407249?text=Hola,%20quiero%20solicitar%20un%20diagnóstico%20para%20mi%20negocio."
              target="_blank"
              className="px-4 py-2 bg-gold-primary text-white rounded-full hover:bg-gold-secondary transition-colors"
            >
              Solicitar Diagnóstico
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="max-w-4xl mx-auto px-6 text-center mb-32">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-gold-primary/30 bg-gold-primary/5 text-gold-secondary text-sm font-medium">
            Agencia Tecnologica Premium
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
            No vendemos servicios. <br />
            <span className="text-gold-secondary">Construimos sistemas</span> que escalan negocios.
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto mb-12 leading-relaxed">
            Ayudamos a empresas a eliminar el caos operativo mediante ecosistemas digitales a medida y automatización inteligente de procesos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://wa.me/525848407249?text=Hola,%20quiero%20solicitar%20un%20diagnóstico%20para%20mi%20negocio."
              target="_blank"
              className="px-8 py-4 bg-gold-primary text-white rounded-xl font-semibold hover:bg-gold-secondary transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(122,99,60,0.3)] text-center"
            >
              Solicitar Diagnóstico Gratuito
            </a>
            <a
              href="#metodologia"
              className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-semibold hover:bg-white/10 transition-all text-center"
            >
              Ver nuestra metodología
            </a>
          </div>
        </section>

        {/* Symptoms Section */}
        <section className="max-w-7xl mx-auto px-6 mb-32">
          <div className="text-center mb-16">
            <span className="text-gold-secondary font-bold tracking-widest text-xs mb-4 block uppercase">El Problema</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Reconoces alguno de estos síntomas?</h2>
            <div className="w-16 h-[2px] bg-gold-secondary/50 mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-20 max-w-5xl mx-auto">
            {[
              {
                title: "Caos operativo",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                desc: "Procesos manuales, información dispersa y cero visibilidad de lo que realmente funciona en tu negocio."
              },
              {
                title: "Falta de automatización",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                desc: "Tu equipo pierde horas en tareas repetitivas que un sistema inteligente podría resolver en segundos."
              },
              {
                title: "Ventas sin sistema",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
                  </svg>
                ),
                desc: "Dependes de la suerte o del esfuerzo constante. Sin estructura, no hay escalabilidad."
              },
              {
                title: "Dependencia total del dueño",
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                ),
                desc: "Si tú no estás, el negocio se detiene. Eso no es un negocio, es un autoempleo disfrazado."
              }
            ].map((item, i) => (
              <div key={i} className="p-10 rounded-xl border border-white/[0.03] bg-[#050505] hover:border-white/10 transition-all group flex flex-col items-start text-left h-full">
                <div className="text-gold-secondary mb-8 transition-transform duration-500 group-hover:scale-110">
                  {item.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-4 text-zinc-100">{item.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center space-y-2">
            <p className="text-zinc-500 font-medium">Si esto te suena familiar, no es tu culpa.</p>
            <p className="text-gold-secondary font-bold">Es que nunca tuviste la tecnología correcta.</p>
          </div>
        </section>

        {/* What we build */}
        <section className="bg-background py-32 border-y border-white/5 relative overflow-hidden">
          {/* Background Image with transparency */}
          <div className="absolute inset-0 z-0 opacity-5 flex items-center justify-center grayscale pointer-events-none">
            <Image
              src="/system-architecture.png"
              alt="Background Architecture"
              width={1000}
              height={1000}
              className="object-contain"
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="text-gold-secondary font-bold tracking-widest text-xs mb-4 block uppercase">La Solución</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Lo que construimos</h2>
              <p className="text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
                Sistemas integrales donde la tecnología trabaja de forma automática, permitiéndote enfocarte en lo estratégico.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-20 max-w-6xl mx-auto">
              {[
                {
                  title: "Ecosistemas digitales completos",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  ),
                  desc: "No piezas sueltas. Sistemas donde cada elemento está conectado y trabaja en conjunto para multiplicar resultados."
                },
                {
                  title: "Automatización 24/7",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  desc: "Tu negocio captura leads, atiende clientes, procesa ventas y genera seguimientos mientras duermes."
                },
                {
                  title: "Control y escalabilidad",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  ),
                  desc: "Dashboards ejecutivos, métricas en tiempo real y la arquitectura necesaria para crecer sin caos."
                }
              ].map((item, i) => (
                <div key={i} className="p-10 rounded-xl border border-white/[0.03] bg-[#050505] hover:border-white/10 transition-all group flex flex-col items-start text-left h-full">
                  <div className="w-10 h-10 bg-white/[0.02] border border-white/5 flex items-center justify-center rounded mb-8 text-gold-secondary transition-transform duration-500 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-zinc-100 leading-snug">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Strategic Quote Box */}
            <div className="max-w-4xl mx-auto p-12 rounded-xl bg-[#050505] border border-white/[0.03] text-center">
              <p className="text-lg font-medium text-gold-secondary italic leading-relaxed">
                "La tecnología no es un gasto. Es una herramienta estratégica cuando se implementa correctamente."
              </p>
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section id="capacidades" className="max-w-7xl mx-auto px-6 py-32">
          <div className="text-center mb-16">
            <span className="text-gold-secondary font-bold tracking-widest text-xs mb-4 block uppercase transition-opacity hover:opacity-80">Servicios</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Capacidades técnicas</h2>
            <p className="text-zinc-500 text-sm max-w-2xl mx-auto">
              Cada servicio está diseñado para integrarse en un sistema completo, no como soluciones aisladas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Desarrollo Web & E-commerce",
                desc: "Sitios web, landing pages y tiendas online diseñadas para convertir visitantes en clientes.",
                tags: ["Arquitectura de conversión", "Escalabilidad", "Integración de pagos", "Optimización SEO"],
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                )
              },
              {
                title: "Apps a Medida",
                desc: "Aplicaciones iOS y Android desarrolladas bajo tu modelo de negocio específico.",
                tags: ["Marketplace", "Delivery/Servicios", "SaaS por suscripción"],
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                )
              },
              {
                title: "WhatsApp API Oficial",
                desc: "Automatización avanzada de atención y ventas con la API oficial de Meta.",
                tags: ["Atención 24/7", "Cotizaciones automáticas", "Flujo de leads"],
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                  </svg>
                )
              },
              {
                title: "Automatizaciones",
                desc: "Conexión inteligente de todos los componentes de tu ecosistema digital.",
                tags: ["Flujo automático", "Seguimientos", "Integraciones"],
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )
              },
              {
                title: "CRM & Dashboards",
                desc: "Sistemas de control y seguimiento para tomar decisiones basadas en datos.",
                tags: ["Gestión de leads", "KPIs en tiempo real", "Embudos de conversión"],
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              },
              {
                title: "Publicidad Estratégica",
                desc: "Campañas Meta Ads enfocadas en resultados medibles, no en métricas de vanidad.",
                tags: ["Segmentación precisa", "Optimización constante", "ROI medible"],
                icon: (
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                )
              }
            ].map((service, i) => (
              <div key={i} className="group p-8 rounded-xl bg-[#080808] border border-white/5 hover:border-gold-primary/30 transition-all flex flex-col items-start text-left">
                <div className="text-gold-secondary mb-6 group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                  {service.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {service.tags.map((tag, j) => (
                    <span key={j} className="px-2 py-1 text-[10px] uppercase tracking-wider font-semibold border border-gold-primary/20 text-gold-secondary rounded bg-gold-primary/5 hover:bg-gold-primary/10 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
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
          <div className="max-w-4xl mx-auto">
            {[
              { step: "01", title: "Diagnóstico", desc: "Inmersión total en tus procesos para entender el lodo operativo." },
              { step: "02", title: "Arquitectura", desc: "Diseño del ecosistema digital y flujo de datos óptimo." },
              { step: "03", title: "Sprint 0", desc: "Construcción rápida de la base del sistema (MVP)." },
              { step: "04", title: "Integración", desc: "Conectamos el sistema con tus herramientas actuales." },
              { step: "05", title: "Onboarding", desc: "Capacitación intensiva para que tu equipo domine el sistema." },
              { step: "06", title: "Evaluación", desc: "Medición de KPIs y refinamiento de procesos." },
              { step: "07", title: "Soporte", desc: "Evolución continua y mantenimiento proactivo." }
            ].map((m, i) => (
              <div key={i} className="group flex items-start gap-6 md:gap-12 py-8 border-b border-white/10 last:border-0 hover:bg-white/[0.02] transition-colors rounded-xl px-4">
                <div className="text-5xl md:text-6xl font-black text-white/10 group-hover:text-gold-primary/50 transition-colors">
                  {m.step}
                </div>
                <div className="pt-2 md:pt-4">
                  <h3 className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-gold-secondary transition-colors">{m.title}</h3>
                  <p className="text-muted leading-relaxed max-w-xl group-hover:text-zinc-300 transition-colors">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Transparency Section */}
        <section className="max-w-7xl mx-auto px-6 py-32">
          <div className="text-center mb-16">
            <span className="text-gold-secondary font-bold tracking-widest text-xs mb-4 block uppercase transition-opacity hover:opacity-80">Transparencia</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Con quién trabajamos</h2>
            <p className="text-zinc-500 text-sm max-w-2xl mx-auto leading-relaxed">
              No buscamos trabajar con todos. Buscamos clientes con los que podamos construir algo extraordinario.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Working with */}
            <div className="p-10 rounded-2xl border border-white/5 bg-[#080808]/50 backdrop-blur-sm transition-all hover:bg-[#0a0a0a]">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 bg-emerald-500/10 rounded flex items-center justify-center text-emerald-500 border border-emerald-500/20">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">Trabajamos con</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Empresas que buscan crecimiento estructurado",
                  "Emprendedores con visión a largo plazo",
                  "Negocios dispuestos a invertir en tecnología",
                  "Equipos que valoran procesos y comunicación clara",
                  "Proyectos con presupuesto definido y realista"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <span className="text-[#3a3a3a] group-hover:text-emerald-500 transition-colors mt-1">✓</span>
                    <p className="text-zinc-400 text-sm group-hover:text-zinc-200 transition-colors">{item}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Not working with */}
            <div className="p-10 rounded-2xl border border-white/5 bg-[#080808]/50 backdrop-blur-sm transition-all hover:bg-[#0a0a0a]">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-10 h-10 bg-rose-500/10 rounded flex items-center justify-center text-rose-500 border border-rose-500/20">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white">No trabajamos con</h3>
              </div>
              <ul className="space-y-6">
                {[
                  "Quienes buscan 'algo rápido y barato'",
                  "Negocios sin claridad en sus objetivos",
                  "Clientes que esperan resultados mágicos",
                  "Proyectos sin presupuesto para tecnología seria",
                  "Quienes no respetan procesos profesionales"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group">
                    <span className="text-[#3a3a3a] group-hover:text-rose-500 transition-colors mt-1">✕</span>
                    <p className="text-zinc-400 text-sm group-hover:text-zinc-200 transition-colors">{item}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center mb-32">
            <p className="text-zinc-600 text-[10px] md:text-xs">
              Esta claridad nos permite entregar resultados excepcionales a quienes realmente están listos para crecer.
            </p>
          </div>
        </section>

        {/* Final CTA Section */}
        <section id="contacto" className="max-w-4xl mx-auto px-6 py-40 border-t border-white/5">
          <div className="text-center">
            <span className="text-gold-secondary font-bold tracking-widest text-xs mb-6 block uppercase transition-opacity hover:opacity-80">Siguiente Paso</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white max-w-3xl mx-auto leading-tight">
              ¿Listo para construir un negocio que funcione sin ti?
            </h2>
            <p className="text-zinc-500 text-sm max-w-xl mx-auto mb-10 leading-relaxed">
              Solicita un diagnóstico gratuito. Analizaremos tu situación actual y te diremos con honestidad si podemos ayudarte.
            </p>

            <a
              href="https://wa.me/525848407249?text=Hola,%20vengo%20de%20la%20página%20web%20y%20quiero%20aplicar%20para%20una%20evaluación."
              target="_blank"
              className="px-10 py-4 bg-gold-primary hover:bg-gold-secondary text-white font-bold rounded-xl transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2 mx-auto mb-10 w-full md:w-auto"
            >
              Aplicar para evaluación
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <p className="text-zinc-700 text-[10px] uppercase tracking-wider">
              No vendemos a todos. Evaluamos cada proyecto para asegurar que podemos entregar resultados excepcionales.
            </p>
          </div>
        </section>
      </main>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/525848407249"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gold-primary rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(122,99,60,0.4)] hover:scale-110 transition-transform group"
      >
        <svg
          className="w-8 h-8 text-white group-hover:scale-110 transition-transform"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      </a>

      {/* Footer */}
      <footer className="border-t border-white/5 py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-20">
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.jpg"
                alt="Codrava Logo"
                width={36}
                height={36}
                className="rounded-lg shadow-[0_0_15px_rgba(122,99,60,0.2)]"
              />
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
              Agencia tecnológica especializada en ecosistemas digitales, automatización y software a medida.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Servicios</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-500 hover:text-gold-secondary text-sm transition-colors">Desarrollo Web & E-commerce</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-gold-secondary text-sm transition-colors">Apps a Medida</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-gold-secondary text-sm transition-colors">WhatsApp API Oficial</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-gold-secondary text-sm transition-colors">Automatizaciones</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-gold-secondary text-sm transition-colors">CRM & Dashboards</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-zinc-500 text-sm">
                <svg className="w-4 h-4 text-gold-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +52 58 4840 7249
              </li>
              <li className="flex items-center gap-3 text-zinc-500 text-sm">
                <svg className="w-4 h-4 text-gold-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                codravalp@gmail.com
              </li>
              <li className="flex items-center gap-3 text-zinc-500 text-sm">
                <svg className="w-4 h-4 text-gold-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Latinoamérica
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] text-zinc-600 uppercase tracking-widest">
          <div>© 2026 CODRAVA LP. Todos los derechos reservados.</div>
          <div className="flex gap-6">
            <span>Tecnología</span>
            <span>·</span>
            <span>Automatización</span>
            <span>·</span>
            <span>Resultados Reales</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
