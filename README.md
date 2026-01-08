# 🎬 Personajes de Los Simpson - React App

Una aplicación web interactiva que te permite explorar el fascinante mundo de Springfield a través de sus personajes más icónicos. Desarrollada con React y Vite, consume datos en tiempo real de la API oficial de Los Simpson.

![Los Simpson](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

## ✨ Características Principales

- 🎭 **Galería de Personajes**: Visualiza una colección completa de los habitantes de Springfield con sus imágenes oficiales
- 📊 **Información Detallada**: Accede a datos específicos como género, ocupación, edad y estado vital de cada personaje
- 💫 **Interfaz Moderna**: Diseño responsivo con Bootstrap que se adapta perfectamente a cualquier dispositivo
- 🔍 **Modales Interactivos**: Explora información adicional sin salir de la página principal
- ⚡ **Rendimiento Optimizado**: Construido con Vite para una experiencia de desarrollo y carga ultrarrápida
- 🧮 **Cálculos Inteligentes**: Lógica automática para determinar años de nacimiento basándose en la edad actual

## 🖼️ Capturas de Pantalla

> _Próximamente: Agrega capturas de tu aplicación aquí_

## 🚀 Inicio Rápido

### Prerrequisitos

Asegúrate de tener instalado:
- Node.js (versión 16 o superior)
- npm o yarn

### Instalación

1. **Clona el repositorio**
   ```bash
   git clone https://github.com/tu-usuario/LOS-SIMPSON-API.git
   cd LOS-SIMPSON-API
   ```

2. **Instala las dependencias**
   ```bash
   npm install
   ```

3. **Inicia el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abre tu navegador**
   
   Visita `http://localhost:5173` para ver la aplicación en acción

### Scripts Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo con hot-reload |
| `npm run build` | Genera la versión optimizada para producción |
| `npm run preview` | Previsualiza la build de producción localmente |
| `npm run lint` | Ejecuta ESLint para verificar la calidad del código |

## 🏗️ Estructura del Proyecto

```
LOS-SIMPSON-API/
├── public/
│   └── favicon.ico          # Icono de la aplicación
├── src/
│   ├── assets/              # Recursos estáticos (imágenes, logos)
│   ├── App.jsx              # Componente principal con lógica de la API
│   ├── main.jsx             # Punto de entrada de React
│   └── index.css            # Estilos globales
├── index.html               # Template HTML
├── vite.config.js           # Configuración de Vite
├── eslint.config.js         # Configuración de ESLint
└── package.json             # Dependencias y scripts
```

## 🛠️ Tecnologías y Herramientas

### Core
- **React 19.0.0** - Biblioteca para construir interfaces de usuario
- **Vite 5.4.11** - Build tool de nueva generación
- **React-DOM 19.0.0** - Renderizado de React para navegadores

### UI/Estilos
- **Bootstrap 5.3.3** - Framework CSS para diseño responsivo
- **React-Bootstrap 2.10.6** - Componentes de Bootstrap adaptados para React

### Calidad de Código
- **ESLint 9.17.0** - Linter para mantener código limpio y consistente
- **eslint-plugin-react** - Reglas específicas para React
- **eslint-plugin-react-hooks** - Validación de hooks de React
- **eslint-plugin-react-refresh** - Soporte para Fast Refresh

## 🔌 Integración con la API

### Endpoint Principal
```javascript
https://thesimpsonsapi.com/api/characters
```

### CDN de Imágenes
```javascript
https://cdn.thesimpsonsapi.com/500/
```

### Ejemplo de Respuesta
```json
{
  "id": 1,
  "name": "Homer Simpson",
  "gender": "Male",
  "occupation": "Nuclear Safety Inspector",
  "age": 39,
  "status": "Alive",
  "image": "homer.jpg"
}
```

## 💡 Funcionalidades Técnicas Destacadas

### Cálculo Dinámico de Edad
El componente `App.jsx` incluye una función personalizada `calAñoNac` que:
- Calcula el año de nacimiento a partir de la edad actual del personaje
- Maneja casos donde la API no proporciona fecha exacta
- Utiliza el año actual (2025) como referencia

```javascript
const calAñoNac = (edad) => {
  const añoActual = new Date().getFullYear();
  return añoActual - edad;
};
```

### Gestión de Estado
- Uso de `useState` para manejar datos de personajes y modales
- `useEffect` para cargar datos al montar el componente
- Manejo asíncrono con `async/await` para llamadas a la API

## 🎨 Personalización

Para personalizar la aplicación:

1. **Cambiar estilos**: Edita `src/index.css` o utiliza variables de Bootstrap
2. **Modificar componentes**: Ajusta `src/App.jsx` según tus necesidades
3. **Agregar nuevas características**: Extiende la lógica en los componentes React

## 📈 Roadmap

- [ ] Implementar búsqueda y filtrado de personajes
- [ ] Agregar paginación para mejor rendimiento
- [ ] Crear página de detalles individual para cada personaje
- [ ] Implementar modo oscuro
- [ ] Agregar animaciones con Framer Motion
- [ ] Sistema de favoritos con localStorage
- [ ] Tests unitarios con Vitest

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para cambios importantes:

1. Fork el proyecto
2. Crea una rama para tu característica (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [The Simpsons API](https://thesimpsonsapi.com/) por proporcionar los datos
- [React](https://react.dev/) y [Vite](https://vitejs.dev/) por las excelentes herramientas
- [Bootstrap](https://getbootstrap.com/) por el framework de diseño

## 📧 Contacto

Tu Nombre - [@tu_twitter](https://twitter.com/tu_twitter) - email@ejemplo.com

Link del Proyecto: [https://github.com/tu-usuario/LOS-SIMPSON-API](https://github.com/tu-usuario/LOS-SIMPSON-API)

---

⭐ Si este proyecto te resultó útil, considera darle una estrella en GitHub
