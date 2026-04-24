const featured = [
  {title: 'Riverside Pavilion', author: 'Lina M.', img: '/images/hero-sample.jpg'},
  {title: 'Solar Studio', author: 'A. Chen', img: '/images/thumb1.jpg'},
  {title: 'Park Shelter', author: 'M. Ortiz', img: '/images/thumb2.jpg'}
]

const grid = document.getElementById('featured-grid')
if(grid){
  featured.forEach(d=>{
    const el = document.createElement('div')
    el.className = 'design-card'
    el.innerHTML = `
      <img src="${d.img}" alt="${d.title}" />
      <div class="info">
        <strong>${d.title}</strong>
        <div class="muted">by ${d.author}</div>
      </div>
    `
    grid.appendChild(el)
  })
}
