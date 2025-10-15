# Rincón Parrillero - Sitio Web

Sitio web profesional para el restaurante Rincón Parrillero en Querétaro.

## 🚀 Stack Tecnológico

- **Framework:** Next.js 15 (App Router)
- **Lenguaje:** TypeScript
- **Estilos:** Tailwind CSS v3.4.1
- **Animaciones:** Framer Motion
- **Carruseles:** Embla Carousel React
- **Iconos:** Lucide React

## 📦 Instalación

1. **Clonar el repositorio:**
```bash
git clone [url-del-repositorio]
cd rincon-parrillero
```

2. **Instalar dependencias:**
```bash
npm install
# o
yarn install
# o
pnpm install
```

3. **Configurar variables de entorno (opcional):**
Crea un archivo `.env.local` en la raíz del proyecto si necesitas agregar variables de entorno.

4. **Ejecutar en desarrollo:**
```bash
npm run dev
# o
yarn dev
# o
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📁 Estructura del Proyecto

```
app/
├── page.tsx              # Página principal
├── layout.tsx            # Layout raíz
├── globals.css           # Estilos globales
└── components/
    ├── Navbar.tsx        # Navegación principal
    ├── Hero.tsx          # Sección hero
    ├── About.tsx         # Quiénes somos
    ├── Menu.tsx          # Menú de carnes
    ├── Chicken.tsx       # Menú de pollos
    ├── Gallery.tsx       # Galería de fotos
    ├── Reviews.tsx       # Reseñas de clientes
    ├── Location.tsx      # Ubicación y horarios
    ├── Contact.tsx       # Formulario de contacto
    └── Footer.tsx        # Pie de página
```

## 🖼️ Imágenes Requeridas

Coloca las siguientes imágenes en la carpeta `public/`:

- `logo.png` - Logo del restaurante
- `hero-bg.jpg` - Imagen de fondo para Hero
- `about-image.jpg` - Imagen para sección Nosotros
- `chicken-hero.jpg` - Imagen para sección Pollos
- `gallery-1.jpg` a `gallery-8.jpg` - Imágenes de galería

## 🎨 Personalización

### Colores de Marca

Los colores están definidos en `tailwind.config.ts`:

- **Primary:** Amarillo/Dorado (#F4B942)
- **Secondary:** Rojo/Vino (#8B2C2C)
- **Accent Blue:** #4A5B8C
- **Accent Teal:** #1E5E5E

### Fuentes

- **Serif (Títulos):** Playfair Display
- **Sans (Texto):** Inter

### Modificar Contenido

El contenido de cada sección se puede modificar directamente en los componentes correspondientes en `app/components/`.

## 📱 Características

✅ Diseño responsive (mobile-first)
✅ Animaciones suaves con Framer Motion
✅ Navegación fija con menú móvil
✅ Carruseles interactivos
✅ Galería con lightbox
✅ Formulario de contacto
✅ Integración con WhatsApp
✅ Mapa de Google Maps
✅ SEO optimizado
✅ Accesibilidad WCAG 2.1 AA

## 🔧 Scripts Disponibles

- `npm run dev` - Inicia servidor de desarrollo
- `npm run build` - Crea build de producción
- `npm start` - Inicia servidor de producción
- `npm run lint` - Ejecuta ESLint

## 🚀 Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. Vercel detectará automáticamente Next.js
3. Despliega con un clic

### Otros Servicios

El proyecto puede desplegarse en cualquier plataforma que soporte Next.js:
- Netlify
- Railway
- AWS Amplify
- Digital Ocean App Platform

## 📝 Notas Importantes

1. **Imágenes:** Asegúrate de optimizar todas las imágenes antes de subirlas (usa WebP cuando sea posible)
2. **Google Maps:** Actualiza el iframe en `Location.tsx` con la URL correcta del mapa
3. **Enlaces de Redes Sociales:** Actualiza los enlaces en `Footer.tsx`
4. **Números de Teléfono:** Verifica que todos los números estén correctos en los componentes
5. **PDF del Menú:** Coloca el PDF en `public/menu.pdf` o actualiza la ruta en `Menu.tsx`

## 🆘 Soporte

Para cualquier duda o problema, contacta a:
**Desarrollador:** [pacoguerraq.com](https://pacoguerraq.com)

## 📄 Licencia

© 2025 Rincón Parrillero. Todos los derechos reservados.