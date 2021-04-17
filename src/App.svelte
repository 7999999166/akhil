<script>
  import { RouterView, Link } from '@bjornlu/svelte-router';
  import './nedb.min.js';
  var db = new Nedb({
    filename: 'AppData.db',
    autoload: true
  });
</script>

  <nav>
    <Link to="/">Home</Link>
    <Link to="/products">Products</Link>
  </nav>
  <RouterView />