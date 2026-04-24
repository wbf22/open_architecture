// sample app JS - populates featured grid
(function(){
  const grid = document.getElementById('featured-grid')
  if(!grid) return
  const samples = [
    {title:'Riverside Pavilion', author:'Lina M', img:'/images/nice_buildings/pexels-abdullahoguk-32801364.jpg'},
    {title:'Glass Atrium', author:'R. Singh', img:'/images/nice_buildings/pexels-artur-stec-26039050-26734441.jpg'},
    {title:'Coastal House', author:'A. Patel', img:'/images/nice_buildings/pexels-bailey-mahon-852645631-19659020.jpg'},
    {title:'Courtyard Blocks', author:'M. Rivera', img:'/images/nice_buildings/pexels-diego-arriaza-471610492-17415913.jpg'}
  ]
  samples.forEach(s=>{
    const card = document.createElement('div')
    card.className = 'design-card'
    card.innerHTML = `
      <div class="preview"><img src="${s.img}" alt="${s.title}"/></div>
      <div class="info"><div class="title">${s.title}</div><div class="muted">by ${s.author}</div></div>
    `
    grid.appendChild(card)
  })
})()
