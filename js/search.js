document.getElementById('searchForm')?.addEventListener('submit', e=>{
  e.preventDefault()
  const q = document.getElementById('q').value
  const type = document.getElementById('type').value
  const results = document.getElementById('resultsGrid')
  results.innerHTML = ''
  // demo static results
  const items = [
    {title:'Riverside Pavilion',author:'Lina M.',img:'/images/hero-sample.jpg',type:'design'},
    {title:'Lina Morales',author:'Architect',img:'/images/avatar.jpg',type:'architect'},
    {title:'Park Shelter',author:'M. Ortiz',img:'/images/thumb2.jpg',type:'design'}
  ]
  const filtered = items.filter(i=> (type==='all' || i.type===type) && (q.trim()==='' || i.title.toLowerCase().includes(q.toLowerCase())))
  filtered.forEach(i=>{
    const card = document.createElement('div')
    card.className = 'card'
    card.innerHTML = `<img src="${i.img}" style="width:100%;height:140px;object-fit:cover;border-radius:8px"/><div style="padding:10px"><strong>${i.title}</strong><div class="muted">${i.author}</div></div>`
    results.appendChild(card)
  })
})
