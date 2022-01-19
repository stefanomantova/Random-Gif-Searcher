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

 async URLSelector(text){
    const img = document.getElementById('img');
    const errorMessage = document.getElementById('paragraph');
     try{
    const fetchString = 'https://api.giphy.com/v1/gifs/translate?api_key=NKqWDTMhWdQFpLgujRQkzyP7LGVcxBP6&s='+text;
    const response = await fetch(fetchString, {mode: 'cors'});
    const imgData = await response.json();
    img.src=imgData.data.images.original.url;
    errorMessage.innerHTML = ``
     }catch(error){
        errorMessage.innerHTML = `No GIF Found!`
          img.src = '#'
      }
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