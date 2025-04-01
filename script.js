const pessoas = [
    { nome: "Calipson", comentario: "Amei kkkkk", imagem: "unsplash_mEZ3PoFGs_k.png" },
    { nome: "Marcos", comentario: "Muito bom!", imagem: "unsplash_mEZ3PoFGs_k.png" },
    { nome: "Albert", comentario: "Excelente experiência!", imagem: "unsplash_mEZ3PoFGs_k.png" },
    { nome: "Steve Jobs", comentario: "Top demais!", imagem: "unsplash_mEZ3PoFGs_k.png" },
    { nome: "Bill Gaytes", comentario: "Adorei!", imagem: "unsplash_mEZ3PoFGs_k.png" },
    { nome: "Jenny Wilson", comentario: "Sensacional!", imagem: "unsplash_mEZ3PoFGs_k.png" },
    { nome: "Dianne Russell", comentario: "Vou recomendar!", imagem: "unsplash_mEZ3PoFGs_k.png" },
    { nome: "Floyd Miles", comentario: "Muito interessante.", imagem: "unsplash_mEZ3PoFGs_k.png" },
    { nome: "Eleanor Pena", comentario: "Incrível!", imagem: "unsplash_mEZ3PoFGs_k.png" },
    { nome: "Cleison bananinha", comentario: "Ótimo!", imagem: "unsplash_mEZ3PoFGs_k.png" },
    { nome: "Picasso", comentario: "Recomendo!", imagem: "unsplash_mEZ3PoFGs_k.png" },
    { nome: "Josephina", comentario: "Perfeito!", imagem: "unsplash_mEZ3PoFGs_k.png" },
    { nome: "Mariana", comentario: "10/10", imagem: "unsplash_mEZ3PoFGs_k.png" },
    { nome: "Camilotaplinplin", comentario: "Aprendi muito, recomendo!", imagem: "unsplash_mEZ3PoFGs_k.png" },
    { nome: "Andre", comentario: "Volto sempre!", imagem: "unsplash_mEZ3PoFGs_k.png" },
    { nome: "Arthur", comentario: "Maravilhoso!", imagem: "unsplash_mEZ3PoFGs_k.png" },
    { nome: "Amanda", comentario: "Espetacular!", imagem: "unsplash_mEZ3PoFGs_k.png" },
    { nome: "Jonas", comentario: "Excelente!", imagem: "unsplash_mEZ3PoFGs_k.png" }
];

let index = 0;
const container = document.getElementById("feedback-container");

function atualizarGrid() {
    container.style.opacity = "0"; // Fade out
    setTimeout(() => {
        container.innerHTML = ""; // Limpa os cards
        const grupo = pessoas.slice(index, index + 9); // Pega 9 pessoas
        
        grupo.forEach(pessoa => {
            const card = document.createElement("div");
            card.classList.add("feedback-card");
            card.innerHTML = `
                <div class="profile-pic" style="background-image: url('${pessoa.imagem}');"></div>
                <div class="feedback-content">
                    <h3 class="name">${pessoa.nome}</h3>
                    <p class="comment">${pessoa.comentario}</p>
                </div>
            `;
            container.appendChild(card);
        });

        container.style.opacity = "1"; // Fade in
        index = (index + 9) % pessoas.length; // Vai para os próximos 9, reinicia se passar do fim
    }, 1000); // Espera a animação do fade-out antes de mudar
}

atualizarGrid();
setInterval(atualizarGrid, 5000); // Troca os grids a cada 5 segundos
    

