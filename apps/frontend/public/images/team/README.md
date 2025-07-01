# Team Images

## Instrucciones para agregar imágenes de los propietarios:

1. **Formato recomendado**: JPG o PNG
2. **Tamaño recomendado**: 400x400 px (cuadrado)
3. **Resolución**: 300 DPI para mejor calidad

## Nombres de archivo sugeridos:

- `owner1.jpg` - Para María González (Fundadora & Directora Ejecutiva)
- `owner2.jpg` - Para Carlos Rodríguez (Co-fundador & Director de Operaciones)  
- `owner3.jpg` - Para Ana Martínez (Directora de Experiencias)
- `default-avatar.png` - Imagen por defecto cuando no hay foto

## Cómo actualizar las imágenes:

1. Coloca las imágenes en esta carpeta: `/public/images/team/`
2. Asegúrate de que los nombres coincidan con los especificados en el componente
3. Las imágenes se mostrarán automáticamente en la página About Us

## Personalización:

Para cambiar la información de los propietarios, edita el archivo:
`/apps/frontend/app/about-us/page.jsx`

Busca la sección `{/* Owners Section */}` y modifica:
- `name`: Nombre del propietario
- `profession`: Cargo o profesión
- `image`: Ruta de la imagen
- `description`: Descripción breve del propietario
