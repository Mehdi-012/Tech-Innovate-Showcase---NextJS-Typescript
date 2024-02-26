import React from 'react';
// Assurez-vous d'importer correctement le type de données pour les projets
import Image from 'next/image';

interface PortfolioProps {
  projects: [{
    images : any,
    title: any,
    description : any,
  }]; // Assurez-vous que le type Project est correctement défini
}

const projects = [{ title: "Desktop", images: "/portfolio.jpg", description : "Laptop" }, { title: "laptop", images: "/portfolio2.jpg",description : "Laptop" }, { title: "Mobile", images: "/portfolio3.jpg",description : "test description" }, ];

const PortfolioPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl text-center font-bold mb-8">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={project.images} alt={project.title} width={450} height={450} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;
