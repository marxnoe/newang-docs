export interface DocsNavItem {
  slug: string;
  label: string;
  selector?: string;
}

export interface DocsNavGroup {
  title: string;
  items: DocsNavItem[];
}

export const DOCS_GROUPS: DocsNavGroup[] = [
  {
    title: 'Start',
    items: [
      { slug: '', label: 'Overview' },
      { slug: 'docs/install', label: 'Install' },
      { slug: 'docs/migration', label: 'Migrate from NG-ZORRO' },
      { slug: 'docs/zero-css', label: 'Zero-CSS usage' },
      { slug: 'docs/theme', label: 'Theme' },
    ],
  },
  {
    title: 'Actions',
    items: [{ slug: 'components/button', label: 'Button', selector: 'na-button' }],
  },
  {
    title: 'Forms',
    items: [
      { slug: 'components/field', label: 'Field + Input', selector: 'na-field' },
      { slug: 'components/form', label: 'Form', selector: 'na-form' },
      { slug: 'components/switch', label: 'Switch', selector: 'na-switch' },
      { slug: 'components/checkbox', label: 'Checkbox', selector: 'na-checkbox' },
      { slug: 'components/radio-group', label: 'Radio group', selector: 'na-radio-group' },
      { slug: 'components/upload', label: 'Upload', selector: 'na-upload' },
    ],
  },
  {
    title: 'Layout',
    items: [
      { slug: 'components/app', label: 'App', selector: 'na-app' },
      { slug: 'components/page', label: 'Page', selector: 'na-page' },
      { slug: 'components/stack', label: 'Stack', selector: 'na-stack' },
      { slug: 'components/row', label: 'Row', selector: 'na-row' },
      { slug: 'components/grid', label: 'Grid', selector: 'na-grid' },
      { slug: 'components/split', label: 'Split', selector: 'na-split' },
      { slug: 'components/divider', label: 'Divider', selector: 'na-divider' },
      { slug: 'components/spacer', label: 'Spacer', selector: 'na-spacer' },
    ],
  },
  {
    title: 'Type',
    items: [
      { slug: 'components/heading', label: 'Heading', selector: 'na-heading' },
      { slug: 'components/text', label: 'Text', selector: 'na-text' },
      { slug: 'components/link', label: 'Link', selector: 'na-link' },
      { slug: 'components/icon', label: 'Icon', selector: 'na-icon' },
      { slug: 'components/code', label: 'Code', selector: 'na-code' },
      { slug: 'components/empty-state', label: 'Empty state', selector: 'na-empty-state' },
    ],
  },
  {
    title: 'Display',
    items: [
      { slug: 'components/card', label: 'Card', selector: 'na-card' },
      { slug: 'components/badge', label: 'Badge', selector: 'na-badge' },
      { slug: 'components/alert', label: 'Alert', selector: 'na-alert' },
      { slug: 'components/table', label: 'Table', selector: 'na-table' },
      { slug: 'components/list', label: 'List', selector: 'na-list' },
      { slug: 'components/breadcrumbs', label: 'Breadcrumbs', selector: 'na-breadcrumbs' },
      { slug: 'components/avatar', label: 'Avatar', selector: 'na-avatar' },
      { slug: 'components/spinner', label: 'Spinner', selector: 'na-spinner' },
      { slug: 'components/progress', label: 'Progress', selector: 'na-progress' },
    ],
  },
  {
    title: 'Overlay',
    items: [
      { slug: 'components/modal', label: 'Modal', selector: 'na-modal' },
      { slug: 'components/tabs', label: 'Tabs', selector: 'na-tabs' },
      { slug: 'components/tooltip', label: 'Tooltip', selector: 'naTooltip' },
    ],
  },
  {
    title: 'Shell',
    items: [
      { slug: 'components/header', label: 'Header', selector: 'na-header' },
      { slug: 'components/footer', label: 'Footer', selector: 'na-footer' },
      { slug: 'components/toolbar', label: 'Toolbar', selector: 'na-toolbar' },
    ],
  },
];

export const ALL_NAV_ITEMS: DocsNavItem[] = DOCS_GROUPS.flatMap((g) => g.items);
