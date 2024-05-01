let list=document.getElementById("list")
axios("https://api.tvmaze.com/shows")
.then(res=>{
for (let index = 0; index < res.data.length; index++)
{
  list.innerHTML+=`<div class="card me-5 mt-5" style="width: 18rem;">
  <img src="${res.data[index].image.medium}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${res.data[index].name}</h5>
    <p class="card-text">${res.data[index].genres}</p>
    <a href="${res.data[index].url}" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`
}
})
