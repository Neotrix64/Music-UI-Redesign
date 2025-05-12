export const THEME = {
  Table: `
    --theme-ui-colors-background: transparent;
    --theme-ui-colors-background-secondary: rgba(255, 255, 255, 0.1);
    --theme-ui-colors-text: #ffffff;
    --theme-ui-colors-text-light: rgba(255, 255, 255, 0.7);
    --theme-ui-colors-border: rgba(255, 255, 255, 0.1);
    -margin-top: 100px;
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
    transition: background-color 0.2s ease;
    background-color: transparent;

    &.row-select-selected, &.row-select-single-selected {
      background-color: var(--theme-ui-colors-background-secondary);
      color: var(--theme-ui-colors-text);
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
    transition: all 0.2s ease;
    background-color: transparent;

    &:not(:last-of-type) .td {
      border-bottom: 1px solid var(--theme-ui-colors-border);
    }

    &:hover {
      background-color: rgba(255, 255, 255, 0.05);
      color: var(--theme-ui-colors-text);
    }
  `,
  BaseCell: `
    border-bottom: 1px solid transparent;
    border-right: 1px solid transparent;
    padding: 12px 8px;
    height: 56px;
    vertical-align: middle;
    background-color: transparent;

    svg {
      fill: var(--theme-ui-colors-text);
    }
  `,
  HeaderCell: `
    font-weight: 600;
  `,
  Cell: `
    font-weight: 400;
  `,
};