const getNewsCategory = () => {
    const URL = 'https://openapi.programming-hero.com/api/news/categories'
    console.log(URL);
    fetch(URL)
        .then(res => res.json())
        .then(data => showNewsCategory(data.data.news_category))

}
const showNewsCategory = category_name => {
    category_name.forEach(category_name => {
        console.log(category_name);
    });

}
getNewsCategory()