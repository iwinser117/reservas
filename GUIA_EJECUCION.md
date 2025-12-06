# Guía de Ejecución del Proyecto

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# O si usas yarn
yarn install

# O si usas pnpm
pnpm install
```

## 🚀 Ejecutar en Desarrollo

```bash
# Inicia el servidor de desarrollo
npm run dev

# Luego abre tu navegador en:
# http://localhost:3000
```

## 🏗️ Compilar para Producción

```bash
# Crea una build optimizada
npm run build

# Inicia el servidor en modo producción
npm run start
```

## 📋 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Compila el proyecto
- `npm run start` - Ejecuta la versión compilada
- `npm run lint` - Ejecuta el linter

## 🎯 Cómo Funciona el Sistema de Filtros

### 1. **Seleccionar Ciudad** 
   - Usa el dropdown "Destino seleccionado"
   - Filtra alojamientos por ubicación

### 2. **Seleccionar Huéspedes**
   - Click en el botón de huéspedes
   - Ajusta adultos, niños, habitaciones
   - Opción para filtrar por mascotas

### 3. **Rango de Fechas** (Opcional)
   - Selecciona fecha inicial
   - Selecciona fecha final
   - (Nota: El filtrado de fechas está listo para implementar en el backend)

### 4. **Ajustar Precios**
   - Slider interactivo
   - Rango dinámico en COP

### 5. **Seleccionar Tipo de Alojamiento**
   - Checkboxes para filtrar por tipo
   - Hotel, Hostel, Resort, etc.

### 6. **Seleccionar Servicios**
   - Filtra por amenities disponibles
   - Wifi, Piscina, Desayuno, etc.

### 7. **Ordenar Resultados**
   - "Precio de Menor a Mayor"
   - "Precio de Mayor a Menor"
   - "Mejor Calificación"
   - "Nombre"

### 8. **Ver Resultados**
   - La lista se actualiza automáticamente
   - Muestra contador de alojamientos
   - Cada alojamiento muestra:
     - Nombre y ubicación
     - Rating con estrellas
     - Precio por noche
     - Descripción corta
     - Botón para agregar a favoritos
     - Botón "Ver disponibilidad"

## 🔧 Estructura de Carpetas Clave

```
src/
├── app/
│   ├── components/
│   │   ├── filter/        # Componentes de filtros
│   │   └── ListItem/      # Listado de resultados
│   └── containers/
│       └── FiltroResults.js # Contenedor principal
├── context/
│   └── FilterContext.js   # Contexto global de filtros
├── lib/
│   └── filterUtils.js     # Lógica de filtrado/ordenamiento
└── data/
    └── data.js            # Datos de prueba
```

## 💡 Próximos Pasos Sugeridos

1. **Integración con Backend**
   - Reemplazar datos estáticos con API calls
   - Implementar paginación
   - Agregar búsqueda full-text

2. **Persistencia**
   - Guardar filtros en localStorage
   - Sincronizar URL con filtros actuales
   - Permitir compartir búsquedas

3. **Mejoras de UX**
   - Animaciones de transición
   - Indicador de carga
   - Filtros guardados/favoritos

4. **Funcionalidades Adicionales**
   - Sistema de comentarios/reviews
   - Carrito de reservas
   - Calendarios de disponibilidad
   - Comparar alojamientos

## 🐛 Troubleshooting

### "Module not found"
```bash
# Borra node_modules y reinstala
rm -rf node_modules
npm install
```

### Puertos en uso
Si el puerto 3000 está en uso, usa:
```bash
npm run dev -- -p 3001
```

### Cambios no reflejados
- Limpia el cache: `Ctrl + Shift + Del` (en navegador)
- Recarga la página con `Ctrl + Shift + R`

## 📞 Contacto / Soporte

Para preguntas sobre la implementación, revisa:
- `CAMBIOS_IMPLEMENTADOS.md` - Documentación detallada
- `src/context/FilterContext.js` - Lógica del contexto
- `src/lib/filterUtils.js` - Funciones de filtrado
