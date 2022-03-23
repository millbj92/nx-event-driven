import { Identifiableentity } from "..";

export type NotificationType = 'success' | 'info' | 'warning' | 'error';
interface INotification extends Identifiableentity {
  read: boolean;
  createdAt: Date;
  type: NotificationType;
}

export interface SnackbarNotification extends INotification {
  isOpen: boolean;
  message: string;
  action?: string;
  actionHandler?: () => void;
  closeHandler?: () => void;
  duration?: number;
}

export type SnackbarProps = SnackbarNotification;


