// load category
const loadCategory = async () => {
  const url = "https://openapi.programming-hero.com/api/videos/categories";
  const res = await fetch(url);
  const data = await res.json();
  const categories = data.data;
  displayCategories(categories);
};

// display categories
const displayCategories = (categories) => {
  //   console.log(categories);
  const categoriesContainer = document.getElementById("categories-container");
  categories.forEach((category) => {
    const newCategory = document.createElement("a");
    newCategory.innerHTML = `
    <button onclick=loadContent("${category.category_id}") href="" class="bg-red-600 text-white p-3">${category.category}</button>
    `;
    categoriesContainer.appendChild(newCategory);
    // console.log(category);
  });
};

// display content
const loadContent = async (categoryId) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/videos/category/${categoryId}`
  );
  const data = await res.json();
  const contents = data.data;
  displayContent(contents);
};

//display content
const displayContent = (contents) => {
  const cardContainer = document.getElementById("card-container");
  //
  cardContainer.textContent = "";
  contents.forEach((content) => {
    console.log(content.others.posted_date);

    const card = document.createElement("div");
    card.innerHTML = `
    <div class=" card  h-96 bg-base-100   shadow-xl py-5 rounded-xl ">
    <figure class="">
      <div class="relative">
        <img class="w-full h-48" src="${content.thumbnail}" alt="" />
      </div>
      <p
        class="absolute right-5  -top-26 bg-slate-400 py-1 px-2 rounded-lg"
      >
        AGO
      </p>
    </figure>
    <div class="flex justify-start items-start gap-3 mt-4 p-4">
       <img class="rounded-full w-12" src="${content.authors[0].profile_picture}" alt="" />
      <div>
        <h3 class="font-medium">${content.title}</h3>
        <p>${content.authors[0].profile_name} <span>${content.authors[0].verified}</span></p>
        <p>${content.others.views} Views</p>
      </div>
    </div>
  </div>


    `;
    cardContainer.appendChild(card);
    console.log(content);
  });
};

loadCategory();
