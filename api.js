document.addEventListener("DOMContentLoaded", function (){
 let boton= document.getElementById("boton");

 boton.addEventListener("click", function (){
  let input= document.getElementById("input");
  const url= `https://api.jikan.moe/v4/anime?q=${input.value}&sfw`;
  fetch (url)
  .then (resp => resp.json())
  .then (info=> anime(info.data))  
  input.value=""
 });
  
  function anime (items) {
    let htmlContentToAppend = "";
    for (let i = 0; i < items.length; i++) {
        htmlContentToAppend += `
        <div class="card" style="width: 18rem;">
            <div id="api">
                <div class="card-body">
                <a class="card-title" href="${items[i].url}">${items[i].title}</a>
                <p class="card-text">${items[i].title_japanese}</p> 
                    <img src="${items[i].images.jpg.image_url}"></img> 
                </div>
            </div> 
        </div>    

       
    `
    }

    document.getElementById("contenedor").innerHTML = htmlContentToAppend;
}

let bs= document.getElementById("bs");
bs.addEventListener("click", function(){
let contendor= document.getElementById("contenedor");
contendor.innerHTML=  `<div class="container text-center">
<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
<div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
<ol class="carousel-indicators">
  <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
  <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
</ol>
<div class="carousel-inner">
  <div class="carousel-item active">
    <img id=imagen1 src="Attack_on_Titan_franchise.webp" class="d-block w-100" alt="Imagen Anime 1">
    <div class="carousel-caption d-none d-md-block">
      <h5>Attack on Titan</h5>
      <p>Attack on Titan, también conocido como Shingeki no Kyojin, es una serie de anime y manga que se desarrolla en un mundo donde la humanidad se encuentra al borde de la extinción debido a la aparición de gigantes humanoides devoradores de personas. La historia sigue a Eren Yeager y sus amigos mientras luchan por sobrevivir y descubren los oscuros secretos detrás de la existencia de los titanes.</p>
    </div>
  </div>
  <div class="carousel-item">
    <img id=imagen2 src="heroacademia.jpg" class="d-block w-100" alt="Imagen Anime 2">
    <div class="carousel-caption d-none d-md-block">
      <h5>My Hero Academia</h5>
      <p>My Hero Academia, o Boku no Hero Academia, es un anime y manga que se desarrolla en un mundo donde la mayoría de la población posee superpoderes llamados "Quirks". La trama sigue a Izuku Midoriya, un joven sin Quirk que sueña con convertirse en un héroe profesional. Con determinación y esfuerzo, se inscribe en la Academia U.A. High para perseguir su sueño y enfrentar a villanos poderosos.</p>
    </div>
  </div>
  <div class="carousel-item">
    <img id=imagen3 src="onepiece.avif" class="d-block w-100" alt="Imagen Anime 3">
    <div class="carousel-caption d-none d-md-block">
      <h5>One Piece</h5>
      <p>One Piece es un anime y manga de aventuras que sigue las hazañas de Monkey D. Luffy y su tripulación de piratas mientras buscan el legendario tesoro conocido como "One Piece". La serie se desarrolla en un vasto mundo lleno de islas exóticas, misterios y poderosos adversarios. A medida que avanzan, Luffy y su tripulación se enfrentan a desafíos épicos y forjan lazos inquebrantables.</p>
    </div>
  </div>
</div>
<a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
  <span id="flecha1">
    <img src="icons8-chevron-izquierda-en-círculo-40.png" alt="Flecha Izquierda Gris">
  </span>
  <span class="sr-only">Anterior</span>
</a>
<a  class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
  <span id="flecha2" >
    <img src="icons8-chevron-derecha-en-círculo-40.png" alt="Flecha Derecha Gris">
  </span>
  <span class="sr-only">Siguiente</span>
</a>
</div>

</div>
</div>`

});

});

