import ReactDOM from "react-dom/client";
import { MenuItem } from "../../presentation/MenuItem";
import { Panel } from "../../presentation/Panel";
import { ReactComponent } from "./ReactComponent";

export class ReactPanel implements Panel {
  menuItems: MenuItem[] = [];

  #attachment?: HTMLElement = undefined;
  #reactComponent: ReactComponent;
  #reactRoot?: ReactDOM.Root = undefined;
  #root?: HTMLElement = undefined;

  constructor(reactComponent: ReactComponent, menuItems: MenuItem[] = []) {
    this.#reactComponent = reactComponent;
    this.menuItems = menuItems;
  }

  create = () => {
    if (!this.#root) {
      this.#root = document.createElement("div");
      this.#root.style.height = "100vh";
      this.#root.style.overflow = "auto";
      this.#root.style.padding = "8px";
    }
    if (!this.#reactRoot) {
      this.#reactRoot = ReactDOM.createRoot(this.#root);
    }
    this.#reactRoot.render(this.#reactComponent({ panel: this }));
    return this.#root;
  }

  show = (event: HTMLElement) => {
    if (!this.#root) {
      this.#root = this.create();
    }
    this.#attachment = event;
    this.#attachment.appendChild(this.#root);
  }

  hide = () => {
    if (this.#attachment && this.#root) {
      this.#attachment.removeChild(this.#root);
      this.#attachment = undefined;
    }
  }

  destroy = () => {
    this.hide();
    if (this.#reactRoot) {
      this.#reactRoot.unmount();
      this.#reactRoot = undefined;
    }
    if (this.#root && this.#root.parentElement) {
      this.#root.parentElement.removeChild(this.#root);
      this.#root = undefined;
    }
  }

  invokeMenu = (id: string) => {
    const menuItem = this.menuItems.find(c => c.id === id);
    if (menuItem) {
      const handler = menuItem.oninvoke;
      if (handler) {
        handler();
      }
    }
  }
}
