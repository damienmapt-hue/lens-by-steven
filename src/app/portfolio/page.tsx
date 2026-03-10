import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Portfolio | Lens By Steven — Photographe Professionnel",
    description: "Découvrez le portfolio de Steven Dufour : photographie sportive, portraits authentiques, entreprises et événementiel. Basé à Auch, Occitanie.",
    openGraph: {
        title: "Portfolio | Lens By Steven",
        description: "Photographie professionnelle — sport, portrait, entreprise, événementiel.",
        images: ["/portfolio/basketball-profile.jpg"],
    },
};

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-navy text-white font-sans selection:bg-gold/30 selection:text-navy">
            <Navbar />
            <div className="pt-20">
                <Portfolio />
            </div>
            <Footer />
        </main>
    );
}
