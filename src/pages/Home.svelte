<script>
    import Splide from '@splidejs/splide';
    import '../splide.min.css';
  
  import { onMount } from 'svelte';
  onMount(() => {
     var splide = new Splide( '.splide' , {
	type    : 'loop',
	perPage : 1,
	autoplay: true } );
    splide.mount();
  });
</script>

<style>
    .main{
        margin-top: 90px;
    }
    .aa{
        margin-bottom: 5%;
    }
    .bb{
        font-family: monospace;
        font-weight: bold;
        font-size: 2.3rem;
    }
    .cc{
        width: 400px;
        height: 350px ;
        margin-right: 5px;
        margin-top: 10px;
        margin-bottom: 40px;
    }
    .zz{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
</style>
<div class="main">
<div class="splide">
	<div class="splide__track">
		<ul class="splide__list">
			<li class="splide__slide"><img src="1.svg" alt=""><div class="w3-padding w3-display-bottommiddle aa"><button class="w3-button w3-black w3-card w3-round w3-hover-blue">Buy Now</button></div></li>
			<li class="splide__slide"><img src="2.svg" alt=""><div class="w3-padding w3-display-bottommiddle aa"><button class="w3-button w3-black w3-card w3-round w3-hover-blue">Buy Now</button></div></li>
			<li class="splide__slide"><img src="3.svg" alt=""><div class="w3-padding w3-display-bottommiddle aa"><button class="w3-button w3-black w3-card w3-round w3-hover-blue">Buy Now</button></div></li>
		</ul>
	</div>
</div>
<div>
<h1 class="w3-center bb">Featured Products</h1>
<div class="zz">
 <div class="w3-card-4 cc w3-hover-sepia">
  <img src="4.svg" alt="">
  <div class="w3-container w3-center w3-black">
    <p>Product 1</p>
  </div>
</div> 
 <div class="w3-card-4 cc w3-hover-sepia">
  <img src="4.svg" alt="">
  <div class="w3-container w3-center w3-black">
    <p>Product 2</p>
  </div>
</div>
 <div class="w3-card-4 cc w3-hover-sepia">
  <img src="4.svg" alt="">
  <div class="w3-container w3-center w3-black">
    <p>Product 3</p>
  </div>
</div>
<div class="w3-card-4 cc w3-hover-sepia">
  <img src="4.svg" alt="">
  <div class="w3-container w3-center w3-black">
    <p>Product 4</p>
  </div>
</div>
<div class="w3-card-4 cc w3-hover-sepia">
  <img src="4.svg" alt="">
  <div class="w3-container w3-center w3-black">
    <p>Product 5</p>
  </div>
</div>

</div>
</div>
</div>

