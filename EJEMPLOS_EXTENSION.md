# Ejemplos de Extensión del Sistema

## 1. Agregar un Nuevo Filtro

### Paso 1: Actualizar el contexto
```javascript
// src/context/FilterContext.js
const [filters, setFilters] = useState({
  // ... filtros existentes ...
  selectedStars: [],  // NUEVO: Filtrar por rating
});
```

### Paso 2: Crear un componente de filtro
```javascript
// src/app/components/filter/StarFilter.js
import { useFilters } from "@/context/FilterContext";

export default function StarFilter() {
  const { filters, updateFilter } = useFilters();

  return (
    <div>
      {[1, 2, 3, 4, 5].map(star => (
        <label key={star}>
          <input 
            type="checkbox"
            checked={filters.selectedStars.includes(star)}
            onChange={(e) => {
              const newStars = e.target.checked 
                ? [...filters.selectedStars, star]
                : filters.selectedStars.filter(s => s !== star);
              updateFilter('selectedStars', newStars);
            }}
          />
          {star} ⭐
        </label>
      ))}
    </div>
  );
}
```

### Paso 3: Agregar lógica de filtrado
```javascript
// src/lib/filterUtils.js
export const applyFilters = (hotels, filters) => {
  let filtered = [...hotels];
  
  // ... filtros existentes ...
  
  // Nuevo filtro
  if (filters.selectedStars && filters.selectedStars.length > 0) {
    filtered = filtered.filter(hotel =>
      filters.selectedStars.some(star => 
        Math.floor(hotel.rating) >= star
      )
    );
  }
  
  return filtered;
};
```

---

## 2. Conectar con una API Backend

### Ejemplo con fetch
```javascript
// src/app/containers/FiltroResults.js
const [hotels, setHotels] = useState([]);
const [loading, setLoading] = useState(false);

useEffect(() => {
  const fetchHotels = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams({
        city: filters.city,
        minPrice: filters.priceRange[0],
        maxPrice: filters.priceRange[1],
        types: filters.types.join(','),
        // ... otros parámetros ...
      });
      
      const response = await fetch(
        `/api/hotels?${params}`
      );
      const data = await response.json();
      setHotels(data);
    } catch (error) {
      console.error('Error fetching hotels:', error);
    } finally {
      setLoading(false);
    }
  };

  fetchHotels();
}, [filters]);

if (loading) return <div>Cargando...</div>;

return <ListItem items={hotels} />;
```

### Ejemplo con SWR
```javascript
import useSWR from 'swr';

export default function FiltroResults() {
  const { filters } = useFilters();
  
  const { data: hotels = [], isLoading } = useSWR(
    `/api/hotels?${new URLSearchParams({
      city: filters.city,
      minPrice: filters.priceRange[0],
      maxPrice: filters.priceRange[1],
    })}`
  );

  return isLoading ? <Spinner /> : <ListItem items={hotels} />;
}
```

---

## 3. Agregar Persistencia (localStorage)

```javascript
// src/context/FilterContext.js
import { useEffect } from 'react';

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState(() => {
    // Cargar desde localStorage al iniciar
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('filters');
      return saved ? JSON.parse(saved) : defaultFilters;
    }
    return defaultFilters;
  });

  // Guardar en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem('filters', JSON.stringify(filters));
  }, [filters]);

  // ... resto del código ...
};
```

---

## 4. Sincronizar con URL

```javascript
// src/context/FilterContext.js
import { useSearchParams, useRouter } from 'next/navigation';

export const FilterProvider = ({ children }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const updateFilter = useCallback((key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));

    // Actualizar URL
    const params = new URLSearchParams(searchParams);
    params.set(key, JSON.stringify(value));
    router.push(`?${params.toString()}`);
  }, []);

  // ... resto del código ...
};
```

---

## 5. Agregar Búsqueda por Nombre

```javascript
// Actualizar el contexto
const [filters, setFilters] = useState({
  // ... otros filtros ...
  searchQuery: '', // NUEVO
});

// Componente de búsqueda
export default function SearchBar() {
  const { filters, updateFilter } = useFilters();
  
  return (
    <input
      type="text"
      placeholder="Buscar alojamiento por nombre..."
      value={filters.searchQuery}
      onChange={(e) => updateFilter('searchQuery', e.target.value)}
    />
  );
}

// Agregar lógica de filtrado
export const applyFilters = (hotels, filters) => {
  let filtered = [...hotels];
  
  if (filters.searchQuery) {
    filtered = filtered.filter(hotel =>
      hotel.name.toLowerCase().includes(
        filters.searchQuery.toLowerCase()
      )
    );
  }
  
  return filtered;
};
```

---

## 6. Agregar Paginación

```javascript
// src/app/containers/FiltroResults.js
const ITEMS_PER_PAGE = 10;
const [currentPage, setCurrentPage] = useState(1);

const paginatedHotels = useMemo(() => {
  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  return filteredHotels.slice(startIdx, startIdx + ITEMS_PER_PAGE);
}, [filteredHotels, currentPage]);

const totalPages = Math.ceil(filteredHotels.length / ITEMS_PER_PAGE);

return (
  <>
    <ListItem items={paginatedHotels} />
    
    <div className="flex gap-2 mt-4 justify-center">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => setCurrentPage(i + 1)}
          className={currentPage === i + 1 ? 'active' : ''}
        >
          {i + 1}
        </button>
      ))}
    </div>
  </>
);
```

---

## 7. Agregar Filtro por Amenities Dinámicos

```javascript
// Primero, asegurar que los hoteles tengan amenities
const hotels = [
  {
    name: "Hotel Casa Blanca",
    // ... otros datos ...
    amenities: ["Wifi", "Piscina", "Gimnasio", "Desayuno"]
  },
  // ...
];

// Componente de amenities
export default function AmenitiesFilter() {
  const { filters, updateFilter } = useFilters();
  const allAmenities = [...new Set(
    hotels.flatMap(h => h.amenities || [])
  )];

  return (
    <div>
      {allAmenities.map(amenity => (
        <label key={amenity}>
          <input 
            type="checkbox"
            checked={filters.amenities?.includes(amenity)}
            onChange={(e) => {
              const newAmenities = e.target.checked
                ? [...(filters.amenities || []), amenity]
                : (filters.amenities || []).filter(a => a !== amenity);
              updateFilter('amenities', newAmenities);
            }}
          />
          {amenity}
        </label>
      ))}
    </div>
  );
}

// Lógica de filtrado
export const applyFilters = (hotels, filters) => {
  if (filters.amenities?.length > 0) {
    filtered = filtered.filter(hotel =>
      filters.amenities.every(amenity =>
        (hotel.amenities || []).includes(amenity)
      )
    );
  }
  return filtered;
};
```

---

## 8. Testing de Componentes

```javascript
// __tests__/FiltroResults.test.js
import { render, screen } from '@testing-library/react';
import FiltroResults from '@/app/containers/FiltroResults';
import { FilterProvider } from '@/context/FilterContext';

describe('FiltroResults', () => {
  it('muestra los hoteles correctamente', () => {
    render(
      <FilterProvider>
        <FiltroResults />
      </FilterProvider>
    );
    
    expect(screen.getByText('Hotel Casa Blanca')).toBeInTheDocument();
  });

  it('filtra por ciudad', async () => {
    // Test implementation
  });
});
```

---

## 9. Optimización con Debounce

```javascript
// Evitar filtrados excesivos mientras se escribe
import { useCallback } from 'react';

function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

// En SearchBar
const debouncedQuery = useDebounce(searchQuery, 300);

useEffect(() => {
  updateFilter('searchQuery', debouncedQuery);
}, [debouncedQuery]);
```

---

## 10. Exportar Filtros a Excel/PDF

```javascript
export const exportToCSV = (hotels, filename = 'hoteles.csv') => {
  const csv = [
    ['Nombre', 'Tipo', 'Ubicación', 'Precio', 'Rating'].join(','),
    ...hotels.map(h => 
      [h.name, h.type, h.location, h.price, h.rating].join(',')
    )
  ].join('\n');

  const blob = new Blob([csv], { type: 'text/csv' });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
};
```

---

## Conclusión

El sistema es flexible y fácil de extender. Todos los ejemplos anteriores pueden implementarse sin afectar la arquitectura existente.

Para preguntas específicas sobre implementación, revisa:
- `src/context/FilterContext.js`
- `src/lib/filterUtils.js`
- Componentes individuales en `src/app/components/filter/`
