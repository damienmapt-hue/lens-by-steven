import Link from "next/link";
import { Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-navy py-12 border-t border-gold/10">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <Link href="#" className="font-display text-2xl font-bold tracking-wide text-gold inline-block mb-2">
                            Lens By Steven
                        </Link>
                        <p className="text-cream/50 font-light text-sm italic">
                            Steven Dufour Photography
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
                        <Link href="#travail" className="text-cream/70 hover:text-gold transition-colors text-xs md:text-sm uppercase tracking-widest font-medium">Travail</Link>
                        <Link href="#prestations" className="text-cream/70 hover:text-gold transition-colors text-xs md:text-sm uppercase tracking-widest font-medium">Prestations</Link>
                        <Link href="#contact" className="text-cream/70 hover:text-gold transition-colors text-xs md:text-sm uppercase tracking-widest font-medium">Contact</Link>
                        <a href="https://www.instagram.com/lens.bysteve/" target="_blank" rel="noopener noreferrer" className="text-cream/70 hover:text-gold transition-colors ml-2">
                            <Instagram className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-navy flex flex-col items-center justify-center gap-2 text-xs text-cream/50 uppercase tracking-widest text-center">
                    <p>© {new Date().getFullYear()} Steven Dufour Photography</p>
                    <p>Auch, Occitanie</p>
                </div>
            </div>
        </footer>
    );
}
