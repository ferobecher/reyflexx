import { createRouter, createWebHistory } from 'vue-router';
import { nextTick } from 'vue';
import DomovView from '../views/DomovView.vue';

function smoothScrollTo(hash, duration = 1000) {
  const target = document.querySelector(hash);
  if (!target) return;

  const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'domov',
      component: DomovView
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return nextTick().then(() => {
        smoothScrollTo(to.hash, 1000); // Adjust duration as needed
        return { left: 0, top: 0 };
      });
    }
    return { left: 0, top: 0 };
  }
});

export default router;