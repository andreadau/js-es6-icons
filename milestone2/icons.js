$(document).ready(function () {
  // Qui le icone che abbiamo definito nella milestone 1
  const icons = [
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

  const container = $(".icons");
  // Array con colori
  const colors = ["blue","orange","purple"];
  // Funzione per stampa e decisione colori
  const coloredIcon = plusColor(icons, colors);
  // Stampa
  print(coloredIcon,container);
  console.log(coloredIcon);

});


/* ---- FUNCTIONS ----*/
//1. Funzione milestone 1
function print(array,container){

  container.html("");

  array.forEach((element) => {

    const {family,prefix,name,color}= element;

    container.append( `
      <div>
      <i class="${family} ${prefix}${name}"style="color: ${color}"></i>
      <div class="title">${name}</div>
      </div>
      `
  )
  });
}

//2. funzione per assegnare un colore ad un icona
function plusColor(array, colors) {
    
  const types = selectType(array);

  const coloredIcons = array.map((element) => {
      const indexType = types.indexOf(element.type);

      return {
          ...element,
          color: colors[indexType]
        }
        
  });

  return coloredIcons;
  
}
//2. Funzione per ottenere tipo di un'icona

function selectType(array) {
  const types = [];

  array.forEach( (element)  => {
      if (!types.includes(element.type)) {
          types.push(element.type);
      }

  });

  return types;
}