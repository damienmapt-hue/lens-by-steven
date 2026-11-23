import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JustifiedGallery from "@/components/portfolio/JustifiedGallery";
import { series, getSeries } from "@/data/series";

export function generateStaticParams() {
    return series.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
    const s = getSeries(params.slug);
    if (!s) return {};
    const title = `${s.seoTitle} | Lens By Steven`;
    return {
        title,
        description: s.seoDescription,
        alternates: { canonical: `https://www.lensbysteven.fr/portfolio/${s.slug}` },
        openGraph: { title, description: s.seoDescription, images: [s.photos[0].src] },
    };
}

export default function SeriesPage({ params }: { params: { slug: string } }) {
    const s = getSeries(params.slug);
    if (!s) notFound();
    const idx = series.findIndex((x) => x.slug === s.slug);
    const next = series[(idx + 1) % series.length];

    return (
        <main className="min-h-screen bg-navy text-white font-sans selection:bg-gold/30 selection:text-navy overflow-x-hidden">
            <Navbar />

            <header className="pt-36 md:pt-44 pb-12 md:pb-16 px-5 md:px-12" style={{ background: "linear-gradient(180deg, #0D1520 0%, #1B2A4A 100%)" }}>
                <div className="max-w-7xl mx-auto">
                    <Link href="/portfolio" className="inline-flex items-center gap-2 text-cream/60 hover:text-gold text-xs uppercase tracking-[0.25em] mb-10 transition-colors">
                        <ArrowLeft className="w-4 h-4" /> Toutes les séries
                    </Link>
                    <div className="grid md:grid-cols-12 gap-6 md:gap-12 items-end">
                        <div className="md:col-span-7">
                            <p className="text-gold/80 text-xs tracking-[0.35em] uppercase mb-4">{s.index} — {s.kicker}</p>
                            <h1 className="font-display text-5xl md:text-7xl leading-[1.05]">{s.title}</h1>
                        </div>
                        <div className="md:col-span-5">
                            <p className="text-cream/80 font-normal leading-relaxed">{s.description}</p>
                            <p className="text-gold/70 text-xs tracking-[0.25em] uppercase mt-5">{s.photos.length} photos</p>
                        </div>
                    </div>
                </div>
            </header>

            <section className="px-5 md:px-12 pb-20 md:pb-28">
                <div className="max-w-7xl mx-auto">
                    <JustifiedGallery photos={s.photos} rowHeight={340} priorityCount={4} />
                </div>
            </section>

            <section className="px-5 md:px-12 pb-24 md:pb-32">
                <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
                    <Link href={`/portfolio/${next.slug}`} className="group bg-navy p-8 md:p-12 flex flex-col gap-3 hover:bg-dark/40 transition-colors">
                        <span className="text-gold/70 text-xs tracking-[0.3em] uppercase">Série suivante · {next.index}</span>
                        <span className="font-display text-3xl md:text-4xl flex items-center gap-4">
                            {next.title}
                            <ArrowRight className="w-6 h-6 text-gold transition-transform group-hover:translate-x-1" />
                        </span>
                    </Link>
                    <Link href="/#contact" className="group bg-navy p-8 md:p-12 flex flex-col gap-3 hover:bg-dark/40 transition-colors">
                        <span className="text-gold/70 text-xs tracking-[0.3em] uppercase">Un projet ?</span>
                        <span className="font-display text-3xl md:text-4xl flex items-center gap-4">
                            Parlons-en
                            <ArrowRight className="w-6 h-6 text-gold transition-transform group-hover:translate-x-1" />
                        </span>
                    </Link>
                </div>
            </section>

            <Footer />
        </main>
    );
}
