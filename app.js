
let url = "https://dummyjson.com/products/"
let counter=1;
async function getData(searchText) {
   url = `${url}search?q=${searchText.value}`
   const data = await fetch(url);
    const json = await data.json();
     console.log(json.products);
}


const debounce = (getData, delay) => {
    let timer;
    return (e) => {
        clearTimeout(timer);
        timer = setTimeout(()=> {
            getData.call(this, e)
        }, delay)
    }
  
}


const betterFunction = debounce(getData, 1000);