const btnToggle = document.querySelector(".btn-toggle");

btnToggle.addEventListener("click", () =>{

    const body = document.body;

    if(body.classList.contains("dark")){

        body.classList.add("light")
        body.classList.remove("dark")

    }else if(body.classList.contains("light")){

        body.classList.add("dark")
        body.classList.remove("light")

    }

    //LCA LOGO IMG SWITCH

    if($('body').hasClass('light'))

    {
        $('.img-clair').attr('src','img/la-chouette-agence.png');

    }else

    {
        $('.img-clair').attr('src','img/la-chouette-agence_white.png');

    }

})

const darkModeWord = document.querySelector(".dark-mode");

btnToggle.addEventListener("click", () =>{

    const body = document.body;

    if(body.classList.contains("dark")){

        darkModeWord.innerHTML = "Mode clair"

    }else if(body.classList.contains("light")){

        darkModeWord.innerHTML = "Mode sombre"

    }
})
