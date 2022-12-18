import { Notify } from 'notiflix';

export const Notification = addedName =>
  Notify.warning(`${addedName} is already in contacts`, {
    timeout: 4000,
    fontSize: '22px',
    position: 'center-center',
  });
