// demo account interactions
const grid = document.getElementById('myDesigns')
if(grid){
  const items = [
    {title:'Riverside Pavilion',img:'/images/hero-sample.jpg'},
    {title:'Backyard Studio',img:'/images/thumb1.jpg'}
  ]
  items.forEach(i=>{
    const el = document.createElement('div')
    el.className = 'card'
    el.innerHTML = `<img src="${i.img}" style="width:100%;height:140px;object-fit:cover;border-radius:8px"/><div style="padding:10px"><strong>${i.title}</strong></div>`
    grid.appendChild(el)
  })
}
