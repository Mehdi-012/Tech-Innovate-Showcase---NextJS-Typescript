import Link from "next/link";
import Footer from "./comps/Footer/page";


export default function Home() {
  return (
    <>
      <div className="bg-gray-900 text-white min-h-screen">
        
        <div className="container mx-auto py-20 text-center">
          <h1 className="text-5xl font-bold mb-8">Bienvenue chez Tech Innovate</h1>
          <p className="text-lg mb-12">
            Tech Innovate est une entreprise de technologie innovante qui se consacre à fournir des solutions de pointe dans divers domaines.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-800 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Nos Valeurs</h2>
              <p>Nous croyons en l'innovation, la qualité et la satisfaction du client.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Domaines d'Expertise</h2>
              <ul>
                <li>Développement Web</li>
                <li>Intelligence Artificielle</li>
                <li>Applications Mobiles</li>
              </ul>
            </div>
            <div className="p-6 bg-gray-800 rounded-lg">
              <h2 className="text-2xl font-bold mb-4">Pourquoi Nous Choisir</h2>
              <p>Nous offrons des solutions personnalisées adaptées aux besoins uniques de chaque client.</p>
            </div>
          </div>
         
        </div>
        <Footer />
      </div>
    </>
  );
}
