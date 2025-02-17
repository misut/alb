export interface Panel {
  create(): HTMLElement;
  show(event: HTMLElement): void;
  hide(): void;
  destroy(): void;
  invokeMenu(menuId: string): void;
}
