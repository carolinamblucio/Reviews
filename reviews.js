const reviews = [
    {
        id: 1,
        nome:"Morticia Addams",
        trabalho:"the boss",
        img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnSQ6ppHt0CW08C6Da7LzdmoksGenI8nJahw&usqp=CAU",
        informacao:
        "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
        id: 2,
        nome:"Gomez Addams",
        trabalho:"web developer",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG7WfbHF4U5MGnMvuTSzzpt0Wlf8eViXnyFfzZM3amodD4KjpelH9xzJ6o3IUv0olwwYk&usqp=CAU"
        ,
        informacao:"Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
    },
    {
        id: 3,
        nome:"Cousin Itt",
        trabalho:"intern",
        img: "https://cdn.bandmix.com/bandmix_us/media/182/182196/996252-p.jpg"
        ,
        informacao:"D'ya d'yeh dih dium d'oh.",
    },
    {
        id: 4,
        nome:"Thing",
        trabalho:"web designer",
        img:"https://i.pinimg.com/originals/8f/c6/7a/8fc67abaee635bd3f80ad11d96c3b47a.jpg"
        ,
        informacao:"Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
    },
        
    
];

// selelecionar itens

const img=document.getElementById('pessoa-img');
const autor=document.getElementById('autor');
const trabalho=document.getElementById('trabalho');
const informacao=document.getElementById('informacao');

const prevBtn=document.querySelector('.prev-btn');
const proxBtn=document.querySelector('.prox-btn');
const aleatorioBtn=document.querySelector('.aleatorio-btn');

let currentItem=2;

// "abrir" item inicial
window.addEventListener('DomContentLoaded', function(){
    mostrarPessoa();

});

//mostrar pessoas pelo item

function mostrarPessoa(){
    const item=reviews[currentItem];
   // img.src=reviews[currentItem].img
    img.src=item.img;
    autor.textContent=item.nome;
    trabalho.textContent=item.trabalho;
    informacao.textContent=item.informacao;
}

//prox pessoa 

proxBtn.addEventListener('click', function(){
    currentItem++
    if(currentItem>reviews.length-1){
        currentItem=0;
    }
    mostrarPessoa();
});
//prev pessoa 

prevBtn.addEventListener('click', function(){
    currentItem--
    if(currentItem<0){
        currentItem=reviews.length-1;
    }
    mostrarPessoa();
});

// pessoa aleatoria
aleatorioBtn.addEventListener('click', function(){
    currentItem=Math.floor(Math.random()*reviews.length);
    mostrarPessoa();
});