const app = document.querySelector('.app');

const ul = document.createElement('ul');

const photoList = document.querySelector('ul');

const photoItem = document.createElement('li');

const photoItemTitle = document.createElement('h2');

const photoItemImage = document.createElement('img');

photoItem.classList.add('photo__item');
photoItemTitle.classList.add('photo__item_title');
photoItemImage.classList.add('photo__item_image');

app.append(ul);
//ul.append(photoItem);
photoItem.append(photoItemTitle);
photoItem.append(photoItemImage);

const base = [
    {
      url: "img/pic01.avif",
      title: "Ёлка",
    },
    {
      url: "img/pic02.avif",
      title: "Камни",
    },
    {
      url: "img/pic03.avif",
      title: "Сибирь",
    },
    {
      url: "img/pic04.avif",
      title: "Алтай",
    },
    {
      url: "img/pic05.avif",
      title: "Горы",
    },
    {
      url: "img/pic06.avif",
      title: "Домик",
    },
    {
      url: "img/pic07.avif",
      title: "Архары",
    },
    {
      url: "img/pic08.avif",
      title: "Водопад",
    }    
  ]; 


// function showCards(url, title) {
//   const tags = `
//   <li class="photo__item">
//     <h2 class="photo__item_title">${title}</h2>
//     <img src='${url}'>
//   </li>
//   `;
//   ul.innerHTML = tags;  
// };

// base.forEach(item => {
//   showCards(item.url, item.title);
//   console.log(item);
// });



// for (let i = 0; i < base.length; i++) {
//   let li = document.createElement('li');
// 	li.innerHTML = i;
// 	ul.append(li);

// };


for (let i = 0; i < base.length; i++) {
  function showCards(url, title) {
    const titleX = title;
  }

  // const tags = `
  // <li class="photo__item">
  //   <h2 class="photo__item_title">${titleX}</h2>
  //   <img src='${url}'>
  // </li>
  // `;
  let li = document.createElement('li');
	li.innerHTML = i;
	ul.append(li);
};





