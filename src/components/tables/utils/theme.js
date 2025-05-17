export const THEME = {
  Table: `
    --theme-ui-colors-background: transparent;
    --theme-ui-colors-background-secondary: rgba(255, 255, 255, 0.15); /* Aumentado ligeramente para mejorar contraste */
    --theme-ui-colors-background-hover: rgba(255, 255, 255, 0.07); /* Nuevo color para hover */
    --theme-ui-colors-text: #ffffff;
    --theme-ui-colors-text-light: rgba(255, 255, 255, 0.7);
    --theme-ui-colors-text-highlight: rgba(255, 255, 255, 0.95); /* Texto destacado */
    --theme-ui-colors-border: rgba(255, 255, 255, 0.1);
    --theme-ui-colors-border-selected: rgba(255, 255, 255, 0.3); /* Borde para elementos seleccionados */
    --theme-ui-colors-selected-background: rgba(75, 75, 75, 0.5); /* Fondo para selección */
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;
    background-color: transparent;
  `,
  Header: `
    position: sticky;
    top: 0;
    backdrop-filter: blur(10px);
    z-index: 1;
    background-color: rgba(24, 24, 24, 0.8);
  `,
  Body: `
    background-color: transparent;
  `,
  BaseRow: `
    transition: background-color 0.25s ease;
    background-color: transparent;

    &.row-select-selected, &.row-select-single-selected {
      background-color: var(--theme-ui-colors-selected-background) !important;
      color: var(--theme-ui-colors-text-highlight);
    }
  `,
  HeaderRow: `
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--theme-ui-colors-text-light);

    .th {
      border-bottom: 1px solid var(--theme-ui-colors-border);
      padding: 12px 8px;
    }
  `,
  Row: `
    font-size: 14px;
    color: var(--theme-ui-colors-text);
    transition: all 0.25s ease;
    background-color: transparent;
    cursor: pointer; /* Indica que la fila es interactiva */

    &:not(:last-of-type) .td {
      border-bottom: 1px solid var(--theme-ui-colors-border);
    }

    &:hover {
      background-color: var(--theme-ui-colors-background-hover) !important;
      color: var(--theme-ui-colors-text-highlight);
    }
    
    &:active {
      transform: translateY(0); /* Vuelve a la posición normal al hacer clic */
    }
    
    &.row-select-selected, &.row-select-single-selected {
      background-color: var(--theme-ui-colors-selected-background) !important;
      color: var(--theme-ui-colors-text-highlight);
    }
    
    /* Mejora el estilo cuando está hover y seleccionado simultáneamente */
    &.row-select-selected:hover, &.row-select-single-selected:hover {
      background-color: var(--theme-ui-colors-selected-background) !important;
      filter: brightness(1.2);
    }
  `,
  BaseCell: `
    border-bottom: 1px solid transparent;
    border-right: 1px solid transparent;
    padding: 12px 8px;
    height: 56px;
    vertical-align: middle;
    background-color: transparent;
    transition: all 0.25s ease;

    svg {
      fill: var(--theme-ui-colors-text);
      transition: fill 0.25s ease;
    }
    
    .row-select-selected &, .row-select-single-selected & {
      svg {
        fill: var(--theme-ui-colors-text-highlight);
      }
    }
  `,
  HeaderCell: `
    font-weight: 600;
  `,
  Cell: `
    font-weight: 400;
    
    .row-select-selected &, .row-select-single-selected & {
      font-weight: 500; /* Ligeramente más bold cuando está seleccionado */
    }
  `,
};