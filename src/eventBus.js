import { ref } from 'vue';

export const eventBus = {
  emit(event, ...args) {
    const listeners = this.listeners[event];
    if (listeners) {
      listeners.forEach((listener) => listener(...args));
    }
  },
  on(event, callback) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(callback);
  },
  listeners: {},
};

export const useLightbox = () => {
  const isShown = ref(false);
  const index = ref(0);
  const sluzbaIndex = ref(0);

  const openLightBox = (n) => {
    sluzbaIndex.value = n;
    index.value = 0;
    isShown.value = true;
  };

  const closeLightBox = () => {
    isShown.value = false;
  };

  return {
    isShown,
    index,
    sluzbaIndex,
    openLightBox,
    closeLightBox,
  };
};