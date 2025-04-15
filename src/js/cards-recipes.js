// https://tasty-treats-backend.p.goit.global/api-docs/#/Recipes/get_recipes_popular

const dishesList = document.querySelector(".diahes-list");

const markup = cardsData
  .map((card) => {
    card.name.toUpperCase;
    return `<li class="diahes-item">
                <div class="diahes-item-container">
                  <svg class="diahes-fav-icon" width="" height="">
                    <use href=""></use>
                  </svg>
                  <p class="diahes-item-title">${card.name}</p>
                  <p class="diahes-item-des">
                    ${card.description}
                  </p>
                  <div class="diahes-rating-container">
                    <p>${card.rating}</p>
                    <svg class="diahes-rating-star" width="14" height="14">
                      <use href="/images/icons.svg#icon-Star"></use>
                    </svg>
                    <svg class="diahes-rating-star" width="14" height="14">
                      <use href="/images/icons.svg#icon-Star"></use>
                    </svg>
                    <svg class="diahes-rating-star" width="14" height="14">
                      <use href="/images/icons.svg#icon-Star"></use>
                    </svg>
                    <svg class="diahes-rating-star" width="14" height="14">
                      <use href="/images/icons.svg#icon-Star"></use>
                    </svg>
                    <svg class="diahes-rating-star" width="14" height="14">
                      <use href="/images/icons.svg#icon-Star"></use>
                    </svg>
                  </div>
                  <button class="see-recipe-button" type="button">See recipe</button>
                </div>
              </li>`;
  })
  .join("");

dishesList.innerHTML = markup;
