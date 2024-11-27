
document.addEventListener("DOMContentLoaded", function () {

  
    const form = document.querySelector('nav form');
    const searchInput = document.querySelector('input[type="search"]');
    const submitButton = document.querySelector('input[type="submit"]');
    
  
    form.addEventListener('submit', function (event) {
     
      event.preventDefault();
      
     
      const searchTerm = searchInput.value.trim();
  
     
      if (searchTerm) {
       
        console.log("Término de búsqueda:", searchTerm);
  
        
      } else {
        
        console.log("Por favor, ingresa un término de búsqueda.");
      }
    });
  
  });
  