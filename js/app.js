const getNewsCategory = () => {
    const URL = 'https://openapi.programming-hero.com/api/news/categories'
    fetch(URL)
        .then(res => res.json())
        .then(data => showNewsCategory(data.data.news_category))
}

const showNewsCategory = category_name => {
    const getCategorySetion = document.getElementById('category-list')
    category_name.forEach(category_name => {
        // console.log(category_name);
        getCategorySetion.innerHTML += `<a onclick="getSingalNews('${category_name.category_id}')" class="nav-link" href="#">${category_name.category_name}</a>`
    });
}

const getSingalNews = (singalNews_id) => {
    const URL = `https://openapi.programming-hero.com/api/news/category/${singalNews_id}`
    fetch(URL).then(res => res.json()).then(data => displayNews(data.data))
}

// display singal news 
const displayNews = news_id => {
    news_id.forEach(singalNews => {
        // console.log(singalNews._id);
        const displayNews = document.getElementById('display-news')
        displayNews.innerHTML = ""
        const createDiv = document.createElement('div')
        fetch(`https://openapi.programming-hero.com/api/news/${singalNews._id}`)
            .then(res => res.json()).then(data => {
                // displayNewsCard(data.data)
                console.log(data.data[0])
                createDiv.classList.add("card", "mb-3")
                createDiv.innerHTML = `
                <div class="row g-0">
                      <div class="col-md-4">
                        <img src="${data.data[0].image_url}" class="img-fluid rounded-start" alt="...">
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title">${data.data[0].title}</h5>
                          <p class="card-text">${data.data[0].details.slice(0, 200)}...</p>
                          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                      </div>
                    </div>
                `
                displayNews.appendChild(createDiv)

            })
    })
}
