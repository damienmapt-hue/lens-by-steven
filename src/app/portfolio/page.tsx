import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { series } from "@/data/series";

export const metadata: Metadata = {
    title: "Portfolio | Lens By Steven — Photographe à Auch",
    description: "Quatre séries pour découvrir le travail de Steven Dufour, photographe à Auch : mariages, concerts et événements, sport, portraits et entreprise.",
    alternates: { canonical: "https://www.lensbysteven.fr/portfolio" },
    openGraph: {
        title: "Portfolio | Lens By Steven",
        description: "Mariages, concerts, sport, portraits : les séries de Steven Dufour, photographe à Auch.",
        images: [series[0].photos[0].src],
    },
};

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-dark text-white font-sans selection:bg-gold/30 selection:text-navy overflow-x-hidden">
            <Navbar />

            <header className="pt-36 md:pt-44 pb-16 md:pb-24 px-5 md:px-12" style={{ background: "linear-gradient(180deg, #0D1520 0%, #1B2A4A 100%)" }}>
                <div className="max-w-7xl mx-auto">
                    <p className="text-gold tracking-[0.35em] text-xs uppercase font-light mb-4">Portfolio</p>
                    <h1 className="font-display text-5xl md:text-7xl leading-[1.05] max-w-3xl">Quatre séries, un même regard.</h1>
                    <p className="text-cream/80 font-light mt-6 max-w-xl leading-relaxed">
                        Choisissez l&apos;univers qui vous parle. Chaque série présente les photos en entier, dans l&apos;ordre où je les raconterais.
                    </p>
                </div>
            </header>

            <section className="px-5 md:px-12 pb-24 md:pb-32 bg-navy">
                <div className="max-w-7xl mx-auto space-y-20 md:space-y-32">
                    {series.map((s, i) => (
                        <Link
                            key={s.slug}
                            href={`/portfolio/${s.slug}`}
                            className="group grid md:grid-cols-12 gap-8 md:gap-14 items-center"
                        >
                            <div className={`relative md:col-span-6 aspect-[4/5] overflow-hidden bg-dark ${i % 2 === 1 ? "md:order-2" : ""}`}>
                                <Image
                                    src={s.photos[0].src}
                                    alt={s.photos[0].alt}
                                    fill
                                    quality={85}
                                    sizes="(max-width: 768px) 100vw, 600px"
                                    className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.03]"
                                    style={{ objectPosition: s.coverPosition }}
                                />
                            </div>
                            <div className="md:col-span-6">
                                <p className="text-gold/80 text-xs tracking-[0.35em] uppercase mb-4">{s.index} — {s.kicker}</p>
                                <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mb-6">{s.title}</h2>
                                <p className="text-cream/80 font-light leading-relaxed max-w-md mb-8">{s.description}</p>
                                <span className="inline-flex items-center gap-3 text-gold uppercase tracking-[0.25em] text-xs border-b border-gold/40 pb-2 group-hover:border-gold transition-colors">
                                    Voir la série · {s.photos.length} photos
                                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            <Footer />
        </main>
    );
}
