import fs from "fs";
import path from "path";

const RAIZ = path.join(process.cwd(), "public", "images", "departamentos");
const EXTENSIONES = [".webp", ".avif", ".jpg", ".png"];

// Devuelve las URLs públicas de las fotos de una carpeta, ej. "luna/sala".
export function fotosDeCarpeta(carpeta) {
    const ruta = path.join(RAIZ, carpeta);
    if (!fs.existsSync(ruta)) {
        return [];
    }
    return fs
        .readdirSync(ruta)
        .filter((archivo) => EXTENSIONES.includes(path.extname(archivo).toLowerCase()))
        .sort()
        .map((archivo) => `/images/departamentos/${carpeta}/${archivo}`);
}

// Devuelve solo las áreas del departamento que tienen al menos una foto.
export function areasConFotos(depto) {
    const resultado = [];
    for (const area of depto.areas) {
        const carpetas = [].concat(area.carpeta);
        const fotos = carpetas.flatMap((c) => fotosDeCarpeta(`${depto.carpeta}/${c}`));
        if (fotos.length > 0) {
            resultado.push({ titulo: area.titulo, descripcion: area.descripcion, fotos });
        }
    }
    return resultado;
}
