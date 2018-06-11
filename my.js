/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 4 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она использовала не createElement, а возвращала 
    строку с тегами, которую потом можно будет поставить в документ 
    используя innerHTML или insertAdjacentHTML. Грубо говоря - шаблон поста.
  
  2. Модифицируйте createPostCard(post) так, чтобы она принимала 
    объект post с данными для заполнения полей в карточке. Используя 
    createPostCard создать карточки для 3-х разных постов по данному 
    массиву объектов и повесить их в документ.
  
  3. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    строку с разметкой всех постов.
  
  4. Повесьте все посты в какой-то уже существующий DOM-узел.
*/
const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 6,
      dislikes: 2,
      fav: 3
    }
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 124,
      dislikes: 8,
      fav: 36
    }
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    stats: {
      likes: 800,
      dislikes: 36,
      fav: 147
    }
  }
];

const post = document.querySelector("body");
const elements = [];
posts.forEach(note => {
  const el = createPostCard(note);
  elements.push(el);
});

console.log(elements);

// const note = createPostCard();

post.append(...elements);

// const note = createPostCard({
//   title : 'khkhkh',
//   text : '546546464564645'
// });
// post.appendChild(note);

// console.log(...elements);

function createPostCard({ title, text}) {
  const note = document.createElement("div");
  note.classList.add("post");

  const postImage = document.createElement("img");
  postImage.classList.add("post__image");
  postImage.setAttribute("src", "https://placeimg.com/400/150/arch");
  // postImage.classList.add('post__image');

  const postTitle = document.createElement("h2");
  postTitle.classList.add("post__title");
  postTitle.textContent = title;

  const noteText = document.createElement("p");
  noteText.classList.add("note__text");
  noteText.textContent = text;

  //////

  const noteActions = document.createElement("ul");
  noteActions.classList.add("actions");
  noteActions.classList.add("post__actions");

  ///// первая кнопка
  const actionsItem = document.createElement("li");
  actionsItem.classList.add("actions__item");

  const actionsBtn = document.createElement("button");
  actionsBtn.classList.add("actions__btn");
  // editBtn.textContent = 'Editnax';

  const actionsIcon = document.createElement("span");
  actionsIcon.classList.add("actions__icon");
  actionsIcon.classList.add("actions__icon--like");

  const actionsCount = document.createElement("span");
  actionsCount.classList.add("actions__count");
  actionsCount.textContent = "10";

  /// вторая кнопка
  const actionsItem2 = document.createElement("li");
  actionsItem2.classList.add("actions__item2");

  const actionsBtn2 = document.createElement("button");
  actionsBtn2.classList.add("actions__btn2");
  // editBtn.textContent = 'Editnax';

  const actionsIcon2 = document.createElement("span");
  actionsIcon2.classList.add("actions__icon2");
  actionsIcon2.classList.add("actions__icon--dislike");

  const actionsCount2 = document.createElement("span");
  actionsCount2.classList.add("actions__count2");
  actionsCount2.textContent = "5";

  ///  третья кнопка
  const actionsItem3 = document.createElement("li");
  actionsItem3.classList.add("actions__item3");

  const actionsBtn3 = document.createElement("button");
  actionsBtn3.classList.add("actions__btn3");
  // editBtn.textContent = 'Editnax';

  const actionsIcon3 = document.createElement("span");
  actionsIcon3.classList.add("actions__icon3");
  actionsIcon3.classList.add("actions__icon--fav");

  const actionsCount3 = document.createElement("span");
  actionsCount3.classList.add("actions__count3");
  actionsCount3.textContent = "100";

  actionsBtn.append(actionsIcon, actionsCount);
  actionsItem.append(actionsBtn);

  actionsBtn2.append(actionsIcon2, actionsCount2);
  actionsItem2.append(actionsBtn2);

  actionsBtn3.append(actionsIcon3, actionsCount3);
  actionsItem3.append(actionsBtn3);

  noteActions.append(actionsItem, actionsItem2, actionsItem3);

  note.append(postImage, postTitle, noteText, noteActions);
  return note;
}
