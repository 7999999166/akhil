import { initPathRouter } from '@bjornlu/svelte-router';
import App from './App.svelte';
import Home from './pages/Home.svelte';
import Products from './pages/Products.svelte';
import ProductID from './pages/ProductID.svelte';
import AboutUs from './pages/AboutUs.svelte';


  initPathRouter([
  { path: '/', component: Home },
  { path: '/products', component: Products },
  { path: '/products/:name', component: ProductID },
  { path: '/aboutUs', component: AboutUs },
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
