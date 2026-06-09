


const toggle = document.getElementById("menu-toggle");
const menu   = document.getElementById("nav-menu");
toggle.addEventListener("click", () => menu.classList.toggle("active"));



const btnTema = document.getElementById("btn-tema");
const htmlEl  = document.documentElement;


const temaSalvo = localStorage.getItem("tema") || "dark";
aplicarTema(temaSalvo);

btnTema.addEventListener("click", () => {
  const atual = htmlEl.getAttribute("data-tema");
  aplicarTema(atual === "dark" ? "light" : "dark");
});

function aplicarTema(tema) {
  htmlEl.setAttribute("data-tema", tema);
  localStorage.setItem("tema", tema);
  btnTema.textContent = tema === "dark" ? "☀️ Modo Claro" : "🌙 Modo Escuro";
}



const curiosidades = [
  "O Dallas Mavericks foi fundado em 1980 como um time de expansão da NBA.",
  "Dirk Nowitzki é o único jogador de campo europeu a ganhar o MVP da NBA (2007).",
  "Na final de 2011, os Mavs viraram 2-1 para bater o Miami Heat por 4-2.",
  "O nome 'Mavericks' foi escolhido por votação popular antes da primeira temporada.",
  "Luka Dončić é o jogador mais jovem a registrar triple-double nos playoffs da NBA.",
  "Mark Cuban comprou o time em 2000 por ~285 milhões de dólares. Hoje vale mais de 4 bilhões.",
  "Dirk jogou 21 temporadas com a mesma franquia — recorde de lealdade na NBA.",
  "Cooper Flag foi o 1º pick do Draft 2025, escolhido pelo Dallas.",
  "O American Airlines Center comporta cerca de 19.200 espectadores.",
  "Em 2011, os Mavs eliminaram o bicampeão Lakers na segunda rodada dos playoffs.",
  "Kyrie Irving é um dos poucos jogadores a marcar 50+ pontos em um jogo de playoffs.",
  "O Dallas foi o primeiro time a eliminar um adversário com 67 vitórias na temporada."
];

let ultimaIdx = -1;

document.getElementById("btn-curiosidade").addEventListener("click", () => {
  const textoEl = document.getElementById("curiosidade-texto");
  textoEl.classList.add("fade-out");

  setTimeout(() => {
    let idx;
    do { idx = Math.floor(Math.random() * curiosidades.length); }
    while (idx === ultimaIdx);
    ultimaIdx = idx;
    textoEl.textContent = curiosidades[idx];
    textoEl.classList.remove("fade-out");
  }, 300);
});



const infosJogadores = {
  "Cooper Flag":    { pos: "Armador",   bio: "Grande promessa do Draft 2025, Cooper Flag chega ao Dallas como o 1º pick. Jovem explosivo com visão de jogo e liderança fora do comum para sua idade, é considerado o futuro da franquia." },
  "Kyrie Irving":   { pos: "Armador",   bio: "Um dos armadores mais habilidosos da história da NBA. Drible impecável, finalizador em momentos decisivos. Trouxe experiência de campeão ao Dallas." },
  "Klay Thompson":  { pos: "Ala",       bio: "Tetracampeão pelo Golden State Warriors e um dos maiores arremessadores de três pontos da história. Referência de consistência e mentalidade vencedora." },
  "P.J. Washington":{ pos: "Ala-pivô",  bio: "Ala-pivô versátil, combina arremesso com força interior. Capaz de jogar múltiplas posições, é peça essencial tanto no ataque quanto na defesa." },
  "Dereck Lively II":{ pos: "Pivô",     bio: "Pivô de altíssimo potencial com envergadura impressionante. Protetor do garrafão e candidato a um dos melhores da posição nos próximos anos." },
  "Daniel Gafford": { pos: "Pivô",      bio: "Pivô atlético e explosivo, um dos melhores finalizadores próximos à cesta da NBA. Alta eficiência no jogo interior e presença defensiva constante." }
};

const modal        = document.getElementById("modal-jogador");
const modalFoto    = document.getElementById("modal-foto");
const modalNome    = document.getElementById("modal-nome");
const modalPosEl   = document.getElementById("modal-pos");
const modalBioEl   = document.getElementById("modal-bio-texto");
const modalFechar  = document.getElementById("modal-fechar");

document.querySelectorAll(".card").forEach(card => {
  card.style.cursor = "pointer";
  card.addEventListener("click", () => {
    const nome = card.querySelector("h3").textContent;
    const foto = card.querySelector("img").src;
    const info = infosJogadores[nome];

    modalFoto.src        = foto;
    modalFoto.alt        = nome;
    modalNome.textContent = nome;
    modalPosEl.textContent = info ? info.pos : "";
    modalBioEl.textContent = info ? info.bio : "";

    modal.classList.add("aberto");
    document.body.style.overflow = "hidden";
  });
});

function fecharModal() {
  modal.classList.remove("aberto");
  document.body.style.overflow = "";
}

modalFechar.addEventListener("click", fecharModal);
modal.addEventListener("click", e => { if (e.target === modal) fecharModal(); });
document.addEventListener("keydown", e => { if (e.key === "Escape") fecharModal(); });


const revealEls = document.querySelectorAll(".reveal");
const observer  = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visivel");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

revealEls.forEach(el => observer.observe(el));
