<script>
  import { RouterView, Link } from '@bjornlu/svelte-router';
  import './nedb.min.js';
  var db = new Nedb({
    filename: 'AppData.db',
    autoload: true
  });
  import halfmoon from 'halfmoon';
  import './halfmoon.min.css';
  import './w3.css';
import { create_component } from 'svelte/internal';
  halfmoon.onDOMContentLoaded();

  var cc = {'color' : 'blue' }

  function mouseover(event){

  }
</script>
<style>
  .main{
    display: flex;
    flex-direction: column;
    flex: 1;
    height: 100%;

  }
  .nav{
    height: 12vh;
    background-color: black;
    display: flex;
    justify-content: space-evenly;
    color: cornsilk;
    align-items: center;
  }
  .aa{
    font-size: larger;
  }

  /* .bb:hover{
  color: rgb(0, 255, 136);
   text-decoration: none !important;
  
  } */

  a:hover{
    text-decoration: none;
  }




</style>
<div class="main">
<div class='nav w3-top'>
<h1 class="aa"><a href="/">Home</a></h1>
<h1 class="aa"><a href="/products">Products</a></h1>
<h1 class="aa"><a href="/">Home</a></h1>
<h1 class="aa"><a href="/">Home</a></h1>
<h1 class="aa"><a href="/">Home</a></h1>
<h1 class="aa"><a href="/">Home</a></h1>
</div> 
  <RouterView />
  </div>