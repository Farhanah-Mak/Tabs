const tabs= document.querySelector('.tabs')
const btns= document.querySelectorAll('.button')
const content= document.querySelectorAll('.content')
//targetting the tabs class
tabs.addEventListener('click', (event)=>{
    const id= event.target.dataset.id
    if(id){
        btns.forEach((btn)=>{
            btn.classList.remove('live')
        })
        //adding the live class to the button which was clicked by the user
       event.target.classList.add('live')
       content.forEach((article)=>{
            article.classList.remove('live')
       })

       //connecting the ids of button and ids of content element
       const element= document.getElementById(id)
       element.classList.add('live')
        
    }

})