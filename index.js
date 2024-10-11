const filterInput = document.getElementById("filterInput");

  filterInput.addEventListener("change" , function(){
    filterInput2.value = "";
    const filterValue = filterInput.value.toLowerCase();
    const cards = document.querySelectorAll(".card");
    cards.forEach(function(card){
      const color = card.getAttribute("data-color").toLocaleLowerCase();
      if(filterValue === ""|| color === filterValue){
        card.classList.remove("hidden");
      }else{
        card.classList.add("hidden");
      }
    })
  })

  

  const filterInput2 = document.getElementById("filterInput2")
  filterInput2.addEventListener("change" , function(){
    filterInput.value = "";
    const filterValue2 = filterInput2.value.toLowerCase();
    const cards = document.querySelectorAll(".card");
    cards.forEach(function(card){
      const brand = card.getAttribute("brand-name").toLocaleLowerCase();
      if(filterValue2 === "" || brand === filterValue2){
        card.classList.remove("hidden");
      }else{
        card.classList.add("hidden");
      }
    })
  })
  
