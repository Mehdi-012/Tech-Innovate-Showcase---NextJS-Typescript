import React from 'react';
// Assurez-vous d'importer correctement le type de données pour les projets
import Image from 'next/image';


const services = [{ title: "Service 1", images: "/portfolio.jpg", description : "test description" }, { title: "Service 2", images: "/portfolio.jpg",description : "test description" }, { title: "services 3", images: "/portfolio.jpg",description : "test description" }, ];

const ServicePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl text-center font-bold mb-8">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image src={service.images} alt={service.title} width={450} height={450} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicePage;
