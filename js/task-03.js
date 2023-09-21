const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


/*const list = document.querySelector(".gallery");
function createMarkup(arr) {
  const markup = arr.map(({ url, alt }) => {
    const liEl = document.createElement("li");
    const imgEl = document.createElement("img");

    imgEl.src = url;
    imgEl.alt = alt;
    liEl.append(imgEl);

    return liEl;
  }); 
  list.append(...markup)
  console.log(markup);
};
  
createMarkup(images);*/
const list = document.querySelector(".gallery");
function createMarkup(arr) {
  const markup = arr.map(   ({ url, alt }) =>
      <img src ="${url}" alt ="${alt}"></img>)
 
 
  
    .join("");
  gallery.insertAdjacentHTML("beforeend", markup);
        console.log(markup);
    };
    createMarkup(images);