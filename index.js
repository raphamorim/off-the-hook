import eventListenerHook from './use-event-listener';
import offlineHook from './use-offline';
import willUnmountHook from './use-will-unmount';
import didUpdateHook from './use-did-update';

export const useEventListener = eventListenerHook;
export const useOffline = offlineHook;
export const useWillUnmount = willUnmountHook;
export const useDidUpdate = didUpdateHook;
