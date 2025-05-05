// Coração favorito
document.querySelectorAll('.favorito').forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('ativo')
  })
})

// Filtro por categoria
function filtrar(categoria) {
  const cards = document.querySelectorAll('.card')
  cards.forEach((card) => {
    if (categoria === 'todos' || card.classList.contains(categoria)) {
      card.style.display = 'block'
    } else {
      card.style.display = 'none'
    }
  })
}
