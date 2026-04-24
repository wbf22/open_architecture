// Lightweight client-side interactions and mock auth
(function(){
  function ready(fn){document.readyState!='loading'?fn():document.addEventListener('DOMContentLoaded',fn)}
  ready(function(){
    // simple navigation auth toggles
    var logged = false;
    var loginLink = document.getElementById('loginLink');
    var accountLink = document.getElementById('accountLink');
    if(!loginLink || !accountLink) return;
    if(logged){ loginLink.textContent='Sign Out'; loginLink.href='index.html'; accountLink.style.display='inline-block'; }
    else { loginLink.textContent='Sign In'; accountLink.style.display='none'; }

    // basic form handlers
    var loginForm = document.getElementById('loginForm');
    if(loginForm) loginForm.addEventListener('submit',function(e){e.preventDefault(); alert('Signed in (mock)')});
    var signupForm = document.getElementById('signupForm');
    if(signupForm) signupForm.addEventListener('submit',function(e){e.preventDefault(); alert('Account created (mock)')});
    var uploadForm = document.getElementById('uploadForm');
    if(uploadForm) uploadForm.addEventListener('submit',function(e){e.preventDefault(); alert('Design published (mock)')});

    var downloadBtn = document.getElementById('downloadBtn');
    if(downloadBtn) downloadBtn.addEventListener('click',function(){ alert('Downloading plans (mock)')});
  })
})();