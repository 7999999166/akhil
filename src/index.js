import { initPathRouter } from '@bjornlu/svelte-router';
import App from './App.svelte';
import Home from './pages/Home.svelte';
import Products from './pages/Products.svelte';


  initPathRouter([
  { path: '/', component: Home },
  { path: '/products', component: Products }
  ])

let app = new App({
  target: document.body,
});

export default app;

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/concepts/hot-module-replacement
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.$destroy();
  });
}
