import React from 'react';

const Tarifas = () => {
  const cordon1 = [
    'Avellaneda', 'Lanús', 'Lomas de Zamora', 'Morón', 'Tres de Febrero', 'San Martín',
    'Vicente López', 'San Isidro', 'San Fernando', 'Ituzaingó', 'La Matanza Norte', 'Hurlingham',
  ];

  const cordon2 = [
    'Almirante Brown', 'Berazategui', 'Esteban Echeverría', 'Florencio Varela', 'La Matanza Sur',
    'Quilmes', 'Tigre', 'José C. Paz', 'Malvinas Argentinas', 'Merlo', 'San Miguel', 'Moreno',
  ];

  const cordon3 = [
    'Nordelta', 'La Plata', 'Pilar', 'Escobar', 'General Rodríguez', 'Ingeniero Matswisch', 'San Vicente'
  ];

  return (
    <section className="min-h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] py-20">
      <h2 className="text-3xl text-white text-center font-bold">Plan de Tarifa Plana</h2>
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pt-14 p-4">
        
        {/* Capital Federal */}
        <div className="bg-zinc-900 rounded-lg shadow-md p-6 md:col-span-1">
          <h3 className="text-lg font-semibold text-slate-200 text-center py-4">Capital Federal</h3>
          <p className="text-slate-200 text-center mb-4">Ciudad Autónoma de Buenos Aires</p>
          <div className="text-center">
            <span className="inline-block py-2 px-4 bg-blue-500 text-white font-semibold rounded">
              Precio: $3100
            </span>
          </div>
        </div>

        {/* Cordon 1 */}
        <div className="bg-zinc-900 rounded-lg shadow-md p-6 md:col-span-2">
          <h3 className="text-lg font-semibold text-slate-200 text-center py-4">Cordon 1</h3>
          <ul className="text-gray-600 text-center">
            {cordon1.map((localidad, index) => (
              <li key={index} className="inline-block px-2 py-1 bg-gray-100 text-sm rounded-md mx-1 my-1">
                {localidad}
              </li>
            ))}
          </ul>
          <div className="text-center mt-4">
            <span className="inline-block py-2 px-4 bg-blue-500 text-white font-semibold rounded">
              Precio: $5000
            </span>
          </div>
        </div>

        {/* Cordon 2 */}
        <div className=" bg-zinc-900 rounded-lg shadow-md p-6 md:col-span-2">
          <h3 className="text-lg font-semibold text-slate-200 text-center py-4">Cordon 2</h3>
          <ul className="text-gray-600 text-center">
            {cordon2.map((localidad, index) => (
              <li key={index} className="inline-block px-2 py-1 bg-gray-100 text-sm rounded-md mx-1 my-1">
                {localidad}
              </li>
            ))}
          </ul>
          <div className="text-center mt-4">
            <span className="inline-block py-2 px-4 bg-blue-500 text-white font-semibold rounded">
              Precio: $6500
            </span>
          </div>
        </div>

        {/* Cordon 3 */}
        <div className=" bg-zinc-900 rounded-lg shadow-md p-6 md:col-span-1 md:col-start-3  ">
          <h3 className="text-lg font-semibold text-slate-200 text-center py-4">Cordon 3</h3>
          <ul className="text-gray-600 text-center">
            {cordon3.map((localidad, index) => (
              <li key={index} className="inline-block px-2 py-1 bg-gray-100 text-sm rounded-md mx-1 my-1">
                {localidad}
              </li>
            ))}
          </ul>
          <div className="text-center mt-4">
            <span className="inline-block py-2 px-4 bg-blue-500 text-white font-semibold rounded">
              Precio: $7500
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tarifas;

