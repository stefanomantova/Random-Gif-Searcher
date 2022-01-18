class searchGif{
    constructor(text){
        this.text = text; 
    }
clicktoSearch() {
   
    if(!(this.checkValidText(this.text.value))){
        alert("Invalid search!");
    }else{
        this.URLSelector(this.text.value);
    }
}

URLSelector(text){
    const img = document.getElementById('img');
    const fetchString = 'https://api.giphy.com/v1/gifs/translate?api_key=NKqWDTMhWdQFpLgujRQkzyP7LGVcxBP6&s='+text;
    fetch(fetchString, {mode: 'cors'})
      .then(function(response) {
        return response.json();
      })
      .then(function(response) {
        img.src=response.data.images.original.url;
      })
      .catch(function(error){
          const errorMessage = document.getElementById('paragraph')
          errorMessage.innerHTML = `No GIF Found!`
      })
}

checkValidText(text){
    if(text == ''){
        return false;
    }else{
        return true;
    }
}


}

var search = new searchGif(document.getElementById('searchText'));