/*************************
 *
 *  Hybrid 6 - Fetch
 *
 *  Benjamin Bradley brad0447@algonquinlive.com
 *
 *  Nov 7, 2019
 *
 ***********************/
document.addEventListener('DOMContentLoaded', init);

function init (){
    fetchdata()

}
let url = "https://picsum.photos/v2/list?limit=10";
function fetchdata(){

fetch(url)
    .then(response => {
        console.log(response);
        return response.json(); 
})
    .then(data => {
    
        for (let i=0; i<10; i++){
            let img = document.createElement('img');
            let link = data[i].download_url;
            let width = data[i].width;
            let height = data[i].height;
            link = link.replace(width, "400");
            link = link.replace(height, "300");
            img.src=link;
            img.alt=data[i].author;
            document.body.appendChild(img);
    }
})
.catch( (err) => {
    console.log ('Oops, the following ERROR occured: "', err.message,'"');
})
}
