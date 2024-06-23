var fruits = [
    {
      name: "Mango",
      title: "Phalon ka badshah",
      types: ["Ataulfo", "Alphonso mango","Anwaratol."],
      desc: "Its form is oval, round, heart-shaped, kidney-shaped, or long and slender. ",
      image:
        "https://images.unsplash.com/photo-1635716279493-d1e30afc25a0?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3",
    },
    {
      name: "Watermelon",
      title: "Juicy and refreshing",
      types: ["Citron melon", "Citrullus lanatus var."],
       desc: "Berry with a hard rind and no internal divisions, and is botanically called a pepo. ",
      image:
        "https://images.unsplash.com/photo-1582281298055-e25b84a30b0b?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdhdGVybWVsb258ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Peach",
      title: "Juicy Peach",
      types: ["Nectarine", "Flat peach."],
      desc: "A peach is a very sweet, juicy fruit with an edible peel and a hard pit in the middle. ",
      image:
        "https://plus.unsplash.com/premium_photo-1672977183685-8f0fb2d71117?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlYWNofGVufDB8fDB8fHwwhttps://images.unsplash.com/photo-1629828874514-c1e5103f2150?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGVhY2h8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Cherry",
      title: "Help manage blood sugar",
      types: ["Bing cherries", "Rainier cherries." ],
      desc: "Cherries are small, round fruits that can be sweet or sour. ",
      image:
        "https://plus.unsplash.com/premium_photo-1688671921089-628b61dae149?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y2hlcnJ5fGVufDB8fDB8fHww",
    },
    {
      name: "strawberries",
      title: "Fragaria",
      types: ["Pineberry", "Strasberry." ],
      desc: "A low-growing, flowering plant and also the name of the fruit that it produces. ",
      image:"https://images.unsplash.com/photo-1610725664338-2be2cb450798?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3RyYXdiZXJyaWVzfGVufDB8fDB8fHww"
    },
    {
      name: "Grapes.",
      title: "Vitis vinifera",
      types: ["Pinot noir ", "Rainier cherries." ],
      desc: "Cherries are small, round fruits that can be sweet or sour. ",
      image:"https://plus.unsplash.com/premium_photo-1692809723059-a70874355d1a?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fEdyYXBlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Orange",
      title: "Lower Cancer Risk",
      types: ["Navel Orange ", "Blood orange","Jaffa orange." ],
      desc: "Oranges are citrus fruits with fragrant, leathery skin and juicy flesh. ",
      image:"https://images.unsplash.com/photo-1552089123-2d26226fc2b7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG9yYW5nZXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      name: "Kiwi",
      title: "Chinese gooseberry",
      types: ["Gold kiwis", "Kiwi berries"," Arctic kiwis" ],
      desc: "kiwi, (Actinidia deliciosa), woody vine and edible fruit of the family Actinidiaceae. ",
      image:"https://images.unsplash.com/photo-1602349886392-74570931744e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fEtpd2l8ZW58MHx8MHx8fDA%3D",
    },
    {
      name: "Pineapple",
      title: "Bromeliaceae",
      types: ["Abacaxi Pineapples ", "Queen Pineapples"],
      desc: "A pineapple is a sweet tropical fruit with a tough leathery skin and spiky leaves on top. ",
      image:"https://images.unsplash.com/photo-1559204012-a413980d44a7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzF8fFBpbmVhcHBsZXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  var list = document.getElementById("list")

  fruits.forEach(function (data , ind) {
    
    var ele = `<div class ="  lg:w-1/3  sm:w-1/2 p-4">
    <div class=" box flex relative h-[330px] ">
      <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
        data.image
      }">
      <div id = ${ind} class="  px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
        <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
          data.name
        }</h2>
        <h1 class=" font-bold title-font text-2xl font-medium text-gray-900 mb-3">${
          data.title
        }</h1>
        <p class="leading-relaxed"><h3><b>Type</b></h3>${data.types.join(" , ")}</p>
        <p class="leading-relaxed"><h3><b>Descripton</b></h3>${data.desc} </p>
        <button  class="btn" onclick="updateDesc(this)"><i class="fa-solid fa-pen-to-square"></i></button>
       <button class="btn-2"onclick="Delete(this)"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
  </div>`;
    list.innerHTML += ele;
  });
  
  
  function updateDesc(ele) {
    console.log("ele=>", ele.previousElementSibling);
    console.log("ele parentr=>", ele.parentElement);
  
    var index = ele.parentElement.id;
    fruits[index].desc = prompt("Edit Description");
    console.log("fruits-->", fruits);
    list.innerHTML = "";
    fruits.forEach(function (data, ind) {
      var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4">
      <div class="flex relative h-[330px]">
        <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
          data.image
        }">
        <div id = ${ind} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
          <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
            data.name
          }</h2>
          <h1 class="title-font text-2xl font-medium text-gray-900 mb-3">${
            data.title
          }</h1>
          <p class="leading-relaxed"><h3><b>Type</b></h3>${data.types.join(" , ")}</p>
        <p class="leading-relaxed"><h3><b>Descripton</b></h3>${data.desc} </p>
        <button  class="btn" onclick="updateDesc(this)"><i class="fa-solid fa-pen-to-square"></i></button>
       <button class="btn-2"onclick="Delete(this)"><i class="fa-solid fa-trash"></i></button>
      </div>
    </div>
  </div>`;
      list.innerHTML += ele;
    });
  }
  function Delete(ele) {
        var index = ele.parentElement.parentElement.id;
        fruits.splice(location,1,)
        list.innerHTML = "";
        fruits.forEach(function (data, ind) {
            var ele = `<div class="lg:w-1/3  sm:w-1/2 p-4">
            <div class="flex relative h-[330px] ">
            <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="${
                data.image
            }">
            <div id = ${ind} class="px-8 py-10  relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 class="tracking-widest text-xl title-font font-medium text-indigo-500 mb-1">${
                data.name
              }</h2>
              <h1 class="title-font text-2xl font-medium text-black-900 mb-3">${
                data.title
            }</h1>
            <p class="leading-relaxed"><h3><b>Type</b></h3>${data.types.join(" , ")}</p>
            <p class="leading-relaxed"><h3><b>Descripton</b></h3>${data.desc} </p>
            <button  class="btn" onclick="updateDesc(this)"><i class="fa-solid fa-pen-to-square"></i></button>
           <button class="btn-2"onclick="Delete(this)"><i class="fa-solid fa-trash"></i></button>
          </div>
        </div>
      </div>`;
          list.innerHTML += ele;
        });
      }