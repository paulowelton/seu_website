function redirect(url){
    window.location.href = url
}

let btn_precos = document.querySelector("#precos")

btn_precos.addEventListener("click",()=>{
    Swal.fire({
        html: "<label id='tit'>Deseja saber os preços de nossos serviços?</label>" + "<br><label id='desc'>Basta clicar neste botão e ser redirecionado ao whatsapp do nosso desenvolvedor e apresentar o projeto para discutir o orçamento</label>" +
        "<div id='cont-wpp'>" + "<button id='wpp'><img src='imagens/wpp.png'></img>Entrar em Contato</button>" + "</div>",
        didOpen: () => {
            let wpp = document.querySelector("#wpp").addEventListener("click", ()=>{
                redirect('https://wa.me/5585987806397')
            })    
        }
    });
})

let precos_menu = document.querySelector("#precos-menu").addEventListener("click",()=>{
    menu.style.display = "none"
    Swal.fire({
        html: "<label id='tit'>Deseja saber os preços de nossos serviços?</label>" + "<br><label id='desc'>Basta clicar neste botão e ser redirecionado ao whatsapp do nosso desenvolvedor e apresentar o projeto para discutir o orçamento</label>" +
        "<div id='cont-wpp'>" + "<button id='wpp'><img src='imagens/wpp.png'></img>Entrar em Contato</button>" + "</div>",
        didOpen: () => {
            let wpp = document.querySelector("#wpp").addEventListener("click", ()=>{
                redirect('https://wa.me/5585987806397')
            })    
        }
    });
})

let contato = document.querySelector("#contato")

contato.addEventListener("click",()=>{
    Swal.fire({
        html: "<label id='tit'>Deseja entrar em contato com nossa equipe?</label>" + "<br><label id='desc'>Basta clicar neste botão e ser redirecionado ao whatsapp do nosso desenvolvedor</label>" +
        "<div id='cont-wpp'>" + "<button id='wpp'><img src='imagens/wpp.png'></img>Entrar em Contato</button>" + "</div>",
        didOpen: () => {
            let wpp = document.querySelector("#wpp").addEventListener("click", ()=>{
                redirect('https://wa.me/5585987806397')
            })    
        }
    });
})

let btn_menu = document.querySelector("#menu")

let menu = document.querySelector(".menu")

btn_menu.addEventListener("click", ()=>{
    menu.style.display = "block"
})

let sair = document.querySelector(".sair")

sair.addEventListener("click",()=>{
    menu.style.display = "none"
})

