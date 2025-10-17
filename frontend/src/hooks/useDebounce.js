import { useState, useEffect } from 'react';

/**
 * Hook personalizado para debouncing de valores
 * Retrasa la actualización del valor hasta que pasen X ms sin cambios
 * 
 * @param {any} value - Valor a debounce
 * @param {number} delay - Tiempo de delay en milisegundos (por defecto 300ms)
 * @returns {any} Valor debounced
 * 
 * @example
 * const [searchTerm, setSearchTerm] = useState('');
 * const debouncedSearchTerm = useDebounce(searchTerm, 300);
 */
export function useDebounce(value, delay = 300) {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        // Configurar un timeout para actualizar el valor debounced
        const handler = setTimeout(() => {
        setDebouncedValue(value);
        }, delay);

        // Cancelar el timeout si el valor cambia antes del delay
        return () => {
        clearTimeout(handler);
        };
    }, [value, delay]);

    return debouncedValue;
}