//const conectarPokemon = async () =>{
   // try{
    //    const ApiPokemo = await fetch('https://pokeapi.co/api/v2/pokemon/ditto&language=es-MX'); //conexion a Api
    //    alert(ApiPokemo);
    //}catch(error){
      //  alert(error);
    //}
//}
//conectarPokemon();

const iconoMenu = document.querySelector("#icono"),
    menu = document.querySelector('#meunu');

    iconoMenu.addEventListener('click', (e) => {
        menu.classList.toggle('active');
        menu.classList.toggle('invisibe');
        document.body.classList.toggle('opacity');

    });

