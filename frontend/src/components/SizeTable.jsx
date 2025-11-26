// ======================================================
// SizeTable.jsx
// Tabla de tallas reutilizable para cualquier categoría.
// Recibe una estructura { headers: [], rows: [] }.
// ======================================================

import React from "react";

function SizeTable({ table }) {
  return (
    <div className="mt-6 w-full flex justify-center px-2">
      <div
        className="
          bg-white rounded-xl shadow-sm border border-gray-200
          w-full max-w-[420px]
          overflow-hidden
        "
      >
        {/* ================================
            TABLA DE TALLAS
            table-auto para ajustar columnas
        ================================= */}
        <table
          className="
            table-auto               /* columnas más compactas */
            w-full text-gray-700 text-xs sm:text-sm
          "
        >
          {/* Encabezados */}
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              {table.headers.map((col, i) => (
                <th
                  key={i}
                  className="py-2 px-2 text-center font-semibold border-b border-gray-200 whitespace-normal leading-tight"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>

          {/* Filas */}
          <tbody>
            {table.rows.map((row, i) => (
              <tr key={i} className="odd:bg-white even:bg-gray-50">
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className="
                      py-2 px-2 text-center border-b border-gray-200
                      whitespace-nowrap
                    "
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SizeTable;