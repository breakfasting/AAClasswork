
const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

function dogLinkCreator(dogObject) {
  let dogLinks = [];
  Object.keys(dogObject).forEach(dog => {
    let a = document.createElement('a');
    a.innerHTML = dog;
    a.href = dogObject[dog];
    let li = document.createElement('li');
    li.classList.add('dog-link');
    li.appendChild(a);
    dogLinks.push(li);
  });
  return dogLinks;
}

function attachDogLinks(){
  let dogLinks = dogLinkCreator(dogs);
  let list = document.querySelector(".drop-down-dog-list");
  dogLinks.forEach(doglink=>{
    list.appendChild(doglink);
  });
}
attachDogLinks();

let dogList = document.querySelectorAll(".dog-link");
Array.from(dogList).forEach(dogLi => {
  dogLi.style.display = 'none';
});

function handleEnter() {
  Array.from(dogList).forEach(dogLi => {
    dogLi.style.display = 'block';
  });
}

function handleLeave() {
  Array.from(dogList).forEach(dogLi => {
    dogLi.style.display = 'none';
  });
}

let listener = document.querySelector('.drop-down-dog-nav');
listener.addEventListener('mouseenter', handleEnter);
listener.addEventListener('mouseleave', handleLeave);