export enum AlertType {
  Success,
  Error,
  Info,
  Warning,
}

export class Alert {
  id: string | undefined;
  type: AlertType | undefined;
  message: string | undefined;

  constructor(init?: Partial<Alert>) {
    Object.assign(this, init);
  }
}
