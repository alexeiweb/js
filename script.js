const app = document.querySelector('.app');

const ul = document.createElement('ul');

app.append(ul);

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

  function showCards(url, title) {
    const photoItem = document.createElement('li');
    photoItem.innerHTML = `
          <h2 class="photo__item_title">${title}</h2>
          <img src='${url}'>
        `;
    ul.append(photoItem);  
  };

  base.forEach( item => {
    showCards(item.url, item.title)
  });

  const style = document.createElement('style');
  
  style.textContent = `
  body {font-family: sans-serif;
    color: white;
    background-color: black;
    padding: 30px;
  }
  
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  img {
    height: 300px;
  }

  li {
    margin-bottom: 50px;
  }
  
  li:last-child {
    margin-bottom: 0;
  }
  
  h2 {
    text-transform: uppercase;
  }
  `;

    document.body.append(style);