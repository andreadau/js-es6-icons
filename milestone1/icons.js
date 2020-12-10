$(document).ready(function () {
  // Creiamo array di oggetti per le icone con le seguenti proprieta: name, prefix, type, family 
  const icon = [
  {
    name: "cat",
    prefix: "fa-",
    type: "animale",
    family: "fas"
  },
  {
    name: "crow",
    prefix: "fa-",
    type: "animale",
    family: "fas"
  },
  {
    name: "dog",
    prefix: "fa-",
    type: "animale",
    family: "fas"
  },
  {
    name: "dove",
    prefix: "fa-",
    type: "animale",
    family: "fas"
  },
  {
    name: "dragon",
    prefix: "fa-",
    type: "animale",
    family: "fas"
  },
  {
    name: "horse",
    prefix: "fa-",
    type: "animale",
    family: "fas"
  },
  {
    name: "hippo",
    prefix: "fa-",
    type: "animale",
    family: "fas"
  },
  {
    name: "fish",
    prefix: "fa-",
    type: "animale",
    family: "fas"
  },
  {
    name: "carrot",
    prefix: "fa-",
    type: "veggy",
    family: "fas"
  },
  {
    name: "apple-alt",
    prefix: "fa-",
    type: "veggy",
    family: "fas"
  },
  {
    name: "lemon",
    prefix: "fa-",
    type: "veggy",
    family: "fas"
  },
  {
    name: "pepper-hot",
    prefix: "fa-",
    type: "veggy",
    family: "fas"
  },
  {
    name: "user-astronaut",
    prefix: "fa-",
    type: "user",
    family: "fas"
  },
  {
    name: "user-graduate",
    prefix: "fa-",
    type: "user",
    family: "fas"
  },
  {
    name: "user-ninja",
    prefix: "fa-",
    type: "user",
    family: "fas"
  },
  {
    name: "user-secret",
    prefix: "fa-",
    type: "user",
    family: "fas"
  },
];
  // Selezioniamo il container icons
  const icons = $(".icons");
  //inseriamo le icone nel container (possiamo creare una funzione tipo print() per inserire gli elementi e richiamarla qui)
  print(icon,icons);
});


/* ---- FUNCTIONS ----*/
// Creiamo una funzione per iterare nell'array e che appenda al container le icone.
// tip: possiamo usare un ciclo foreach qui e destrutturare gli le proprieta degli elementi di un array
// tip: il template literal ci puo aiutare con il markup
function print(array,icons){
  icons.html("");
  array.forEach((element) => {
    const {family,prefix,name,color}= element;
    icons.append( `
      <div>
      <i class="${family} ${prefix}${name}"></i>
      <div class="title">${name}</div>
      </div>
      `
  )
  });
}
    
    