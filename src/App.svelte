<script>
  import { RouterView } from '@bjornlu/svelte-router';
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


  a:hover{
    text-decoration: none;
  }
 .nav2{
    background-color: black;
    width: auto;
     height: 100px;
     display: flex;
     justify-content: center;
 }
.zz{
  color: beige;
  font-family: monospace;
  font-size: larger;
 
  margin-top: 38px;
}


</style>
<div class="main">
<div class='nav w3-top'>
<h1 class="aa"><a href="/">Home</a></h1>
<h1 class="aa"><a href="/products">Products</a></h1>
<h1 class="aa"><a href="/aboutUs">About Us</a></h1>
<h1 class="aa"><a href="/products/7">Product 7</a></h1>
<h1 class="aa"><a href="/">Home</a></h1>
<h1 class="aa"><a href="/">Home</a></h1>
</div> 
  <RouterView />
  
<div class='nav2'>
<h1 class="zz"><span class="w3-center">copyright symbol © 2021</span> </h1>
</div> 
  </div>