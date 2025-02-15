import "uxp";

declare module "uxp" {
  interface EntryPoints {
    setup(entrypoints: {
      plugin: {
        create: (...params: any[]) => any;
        destroy: (...params: any[]) => any;
      };
      panels: {
        [id: string]: {
          create?: (...params: any[]) => any;
          show?: (...params: any[]) => any;
          hide?: (...params: any[]) => any;
          destroy?: (...params: any[]) => any;
          invokeMenu?: (...params: any[]) => any;
          customEntrypoint?: (...params: any[]) => any;
          menuItems?: Array<{
            id: string;
            label?: string;
            enabled?: boolean;
            checked?: boolean;
            submenu?: any[];
          }>;
        }
      };
      commands: {
        [id: string]: {
          run: (...params: any[]) => any;
          cancel?: (...params: any[]) => any;
        }
      };
    }): void;
  }
}
