import Image from "next/image";


export const Servicios = () => {
  const servicios = [
    {
      titulo: 'Servicio de Mensajería Flex',
      descripcion: 'Entregas rápidas y seguras para vendedores de MercadoLibre. Optimiza tus envíos con tecnología avanzada, seguimiento en tiempo real y rutas eficientes. Confía en nosotros para que tus productos lleguen a tus clientes en perfectas condiciones y en el menor tiempo posible.',
      imagen: '/imagenes/mensajeria-flex.jpg'
    },
    {
      titulo: 'Envíos eCommerce',
      descripcion: 'Soluciones de entrega especializadas para tiendas en línea. Asegura la satisfacción de tus clientes con entregas rápidas y seguras. Desde el almacén hasta la puerta de tu cliente, gestionamos todo el proceso logístico para que te enfoques en crecer tu negocio.',
      imagen: '/imagenes/envios-ecommerce.jpg'
    },
    {
      titulo: 'Mensajería Empresarial',
      descripcion: 'Servicios integrales de mensajería para empresas, incluyendo la realización de trámites, cobranzas, y la entrega y retiro de encomiendas. Garantizamos eficiencia, seguridad y puntualidad, permitiéndote concentrarte en las operaciones esenciales de tu empresa.',
      imagen: '/imagenes/mensajeria-empresarial.jpg'
    },
  ];

  return (
    <section id="servicios" className="min-h-screen bg-gray-200 dark:bg-dark pt-20 pb-10 lg:pt-[120px] lg:pb-20">
      <h2 className="text-3xl font-bold text-center mb-10">Soluciones Logísticas para eCommerce</h2>
      <div className="container mx-auto px-4 md:px-0 md:pt-20">
        <div className="flex flex-wrap">
          {servicios.map((servicio, index) => (
            <div key={index} className="w-full px-4 sm:w-1/2 lg:w-1/3 mb-8">
              <div className="overflow-hidden duration-300 bg-white rounded-lg dark:bg-dark-2 shadow-1 hover:shadow-3 dark:shadow-card dark:hover:shadow-3 flex flex-col h-full">
                <Image
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  className="w-full h-48 object-cover"
                  width={500}
                  height={300}
                />
                <div className="p-8 text-center sm:p-9 md:p-7 xl:p-9 flex-1 flex flex-col">
                  <h3 className="text-dark dark:text-white hover:text-primary mb-4 block text-xl font-semibold sm:text-[22px] md:text-xl lg:text-[22px] xl:text-xl 2xl:text-[22px]">
                    {servicio.titulo}
                  </h3>
                  <p className="text-base leading-relaxed text-body-color dark:text-dark-6 mb-7 flex-1">
                    {servicio.descripcion}
                  </p>
                  <a
                    href="#"
                    className="inline-block py-2 text-base font-medium transition border rounded-full text-body-color hover:border-primary hover:bg-primary border-gray-300 px-7 hover:text-white dark:border-dark-300 dark:text-dark-600"
                  >
                    Ver más
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

