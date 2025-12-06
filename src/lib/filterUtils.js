// Funciones auxiliares para filtrado y ordenamiento

export const applyFilters = (hotels, filters) => {
  let filtered = [...hotels];

  // Filtrar por ciudad
  if (filters.city) {
    filtered = filtered.filter(hotel =>
      hotel.location.toLowerCase().includes(filters.city.toLowerCase())
    );
  }

  // Filtrar por rango de precio
  if (filters.priceRange && filters.priceRange.length === 2) {
    filtered = filtered.filter(hotel =>
      hotel.price >= filters.priceRange[0] && hotel.price <= filters.priceRange[1]
    );
  }

  // Filtrar por tipos de alojamiento
  if (filters.types && filters.types.length > 0) {
    filtered = filtered.filter(hotel =>
      filters.types.includes(hotel.type)
    );
  }

  // Filtrar por servicios (al menos uno de los servicios seleccionados)
  if (filters.services && filters.services.length > 0) {
    filtered = filtered.filter(hotel => {
      // Verificar si el hotel tiene amenities y si al menos uno coincide
      if (!hotel.amenities || hotel.amenities.length === 0) {
        return false;
      }
      return filters.services.some(service =>
        hotel.amenities.includes(service)
      );
    });
  }

  return filtered;
};

export const sortHotels = (hotels, sortBy) => {
  const sorted = [...hotels];

  switch (sortBy) {
    case 'Precio de Menor a Mayor':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'Precio de Mayor a Menor':
      sorted.sort((a, b) => b.price - a.price);
      break;
    case 'Distancia':
      // Por ahora, no tenemos datos de distancia, así que mantenemos el orden original
      break;
    case 'Mejor Calificación':
      sorted.sort((a, b) => b.rating - a.rating);
      break;
    case 'Nombre':
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    default:
      break;
  }

  return sorted;
};
