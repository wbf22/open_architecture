(function(){
  function ready(fn){document.readyState!='loading'?fn():document.addEventListener('DOMContentLoaded',fn)}
  ready(function(){
    var data = window.OPEN_ARCH_DATA || [];
    var input = document.getElementById('searchInput');
    var filter = document.getElementById('filterType');
    var btn = document.getElementById('doSearch');
    var results = document.getElementById('results');
    function render(items){
      results.innerHTML = items.map(function(it){
        return '<a class="result" href="design.html?i='+it.id+'">\n  <img src="'+it.image+'" alt="'+it.title+'">\n  <div>\n    <h3>'+it.title+'</h3>\n    <p>'+it.author+' \u2022 '+it.category+'</p>\n  </div>\n</a>';
      }).join('\n');
    }
    function doSearch(){
      var q = (input.value||'').toLowerCase();
      var t = (filter.value||'all');
      var out = data.filter(function(it){
        if(t==='design' && it.type!=='design') return false;
        if(t==='architect' && it.type!=='architect') return false;
        if(!q) return true;
        return (it.title+" "+it.author+" "+it.tags.join(' ')).toLowerCase().indexOf(q)!==-1;
      });
      render(out);
    }
    if(btn) btn.addEventListener('click', doSearch);
    if(input) input.addEventListener('keyup', function(e){ if(e.key==='Enter') doSearch(); });
    // initial
    render(data);
  });
})();