const articlesData = [
    {
        title: 'Йога',
        time: '60 мин',
        maxcount: 16,
        count: 0
    },
    {
        title: 'Йога',
        time: '60 мин',
        maxcount: 16,
        count: 0
    },
    
]



articlesData.forEach(element => {
    const articleItem = createArticle(element.title, element.time, element.maxcount, element.count); 
    articleList.append(articleItem);  
});

function createArticle(title,time,maxcount,count) {
    
    const articleItem = document.createElement('li');
    articleItem.classList.add('list-group-item');
    
    const articleTitle = document.createElement('h2');
    articleTitle.classList.add('mb-3');
    articleTitle.textContent = title;

    const articleTime = document.createElement('p');
    articleTime.textContent = `Время тренировки: ${time}`;

    const articleMax = document.createElement('p');
    articleMax.textContent = `Максимальное количество человек: ${maxcount}`;

    const articleCount = document.createElement('p');
    articleCount.classList.add('count-person')
    articleCount.textContent = `Кол-во записанных человек: ${count}`
    


    const addButton = document.createElement('button');
    addButton.textContent = 'Записаться'
    addButton.classList.add('btn', 'btn-primary');


    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Отменить запись'
    deleteButton.classList.add('btn', 'btn-danger');



    articleItem.append(articleTitle);
    articleItem.append(articleTime);
    articleItem.append(articleMax);
    articleItem.append(articleCount);
    articleItem.append(addButton);
    articleItem.append(deleteButton);

    return articleItem;
}  

    const countPerson = document.querySelectorAll('count-person');
    const addButton = document.querySelectorAll('btn');
    
   
    addButton.addEventListener('click',() => {
        for (let i = 0; i < articlesData.length; i++) {
            if (articlesData[i].count < articlesData[i].maxcount) {
                articlesData[i].count++;
                countPerson.textContent = `Кол-во записанных человек: ${articlesData[i].count}`;
                
                if (articlesData[i].count === articlesData[i].maxcount) {
                    addButton.setAttribute('disabled', '');
                    
                }
                return deleteButton.removeAttribute('disabled');
            }
            
        }
    });
    

    const deleteButton = document.querySelectorAll('btn-danger');
    deleteButton.addEventListener('click',() => {
        for (let i = 0; i < articlesData.length; i++) {
            if (articlesData[i].count > 0) {
            articlesData[i].count--;
            countPerson.textContent = `Кол-во записанных человек: ${articlesData[i].count}`;
            alert(`Запись на тренировку ${articlesData[i].title} отменена`);
            }   if (articlesData[i].count === 0) {
                deleteButton.setAttribute('disabled', '');
                
            }
            return addButton.removeAttribute('disabled');
        }
    });









