const getNewsCategory = () => {
    const URL = 'https://openapi.programming-hero.com/api/news/categories'
    console.log(URL);
    fetch(URL)
        .then(res => res.json())
        .then(data => showNewsCategory(data.data.news_category))

}
const showNewsCategory = category_name => {
    const getCategorySetion = document.getElementById('category-list')
    category_name.forEach(category_name => {
        console.log(category_name.category_name);
        const createList = document.createElement('li')
        createList.classList.add("list-unstyled")
        createList.innerText = `${category_name.category_name}`
        getCategorySetion.appendChild(createList)
    });

}
getNewsCategory()