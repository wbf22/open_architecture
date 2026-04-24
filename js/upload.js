document.getElementById('uploadForm')?.addEventListener('submit', e=>{
  e.preventDefault()
  alert('Upload submitted (demo). In a real app this would send files to the server.')
})
