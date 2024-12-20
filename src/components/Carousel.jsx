import React, { useState, useRef } from 'react';

const Carousel = () => {
  const [dragStart, setDragStart] = useState(0);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [dragDelta, setDragDelta] = useState(0);
  const listRef = useRef(null);
  const maxOffset = -600; // El valor máximo (cuánto puedes arrastrar hacia la izquierda)
  const minOffset = 0;    // El valor mínimo (cuánto puedes arrastrar hacia la derecha)

  const handlePointerDown = (e) => {
    e.preventDefault();
    setDragStart(e.clientX);
    listRef.current.style.transition = "none"; // Desactivar transición al iniciar arrastre
  };

  const handlePointerMove = (e) => {
    if (dragStart === 0) return;

    const deltaX = e.clientX - dragStart;
    setDragDelta(deltaX); // Guardamos el cambio del arrastre

    // Calculamos el nuevo desplazamiento, pero limitándolo entre minOffset y maxOffset
    const newOffset = Math.min(Math.max(currentOffset + deltaX, maxOffset), minOffset);
    listRef.current.style.transform = `translateX(${newOffset}px)`; // Mueve el contenedor
  };

  const handlePointerUp = (e) => {
    if (dragStart === 0) return;

    // Al soltar, fijamos el offset actual
    setCurrentOffset(currentOffset + dragDelta);

    listRef.current.style.transition = "transform 0.3s ease"; // Reaplicar transición suave al soltar
    setDragStart(0);
    setDragDelta(0);
  };

  return (
    <div className="content">
      <h1 className="pt-16 pl-3 text-2xl tracking-wide">Top artists this month</h1>
      <div
        className="list overflow-hidden relative"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        style={{ cursor: dragStart ? "grabbing" : "grab" }}
      >
        <ul
          ref={listRef}
          className="flex gap-4 transition-transform"
          style={{ transform: `translateX(${currentOffset + dragDelta}px)` }}
        >
          {["KDOT", "Artist 2", "Artist 3", "Artist 4"].map((artist, index) => (
            <li key={index} className="relative">
              <img
                src="https://media.gq.com/photos/5e6151090f0a6a0008f45908/16:9/w_2991,h_1682,c_limit/GQ_KendrickLamar_030520.jpg"
                alt={artist}
                className="w-[30vmin] h-[46vmin] object-cover transition-all duration-200"
                style={{
                  objectPosition: `${50 - dragDelta / 10}% center`, // Cambiar la posición de la imagen según el arrastre
                }}
              />
              <span className="absolute bottom-2 left-2 text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                {artist}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Carousel;
