export interface MenuItem {
  id: string;
  label: string;
  enabled: boolean;
  checked: boolean;
  submenu: any[];

  oninvoke?: () => void
}
