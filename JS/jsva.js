const loadCatagori = async () => {


    const res = await fetch(" https://openapi.programming-hero.com/api/videos/categories");
    const data = await res.json();

    const tabContainer = document.getElementById("tab-contant");
    const trimData = data.data.slice(0, 4);
    trimData.forEach(category => {
        //console.log(data.data);
        const div = document.createElement("div");
        div.innerHTML = `
        <a onclick="handelLoadTube(${category.category_id})" class="tab">${category.category}</a>
        `;

        tabContainer.appendChild(div);
    });
};

const handelLoadTube = async (categoryid) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/videos/category/${categoryid}`);
    const data = await res.json();

    const cardSection = document.getElementById('card-section');
    cardSection.innerHTML = "";

    data.data.forEach((catagoris) => {
        console.log(catagoris);
        const div = document.createElement("div");
        div.innerHTML = `
   
     <div class="card card-compact h-56 w-96 bg-base-100 shadow-xl">
          <figure><img src=${catagoris?.thumbnail} /></figure>
         <div class="card-body">
         <div class="flex">
         <div class="avatar">
             <div class="w-14 rounded-full">
                 <img src=${catagoris?.authors[0]?.profile_picture} />
             </div>
         </div>
         <div class="mx-4">
             <h2 class="text-lg"> ${catagoris?.title}</h2>
             <h6> ${catagoris?.authors[0]?.profile_name}</h6>
             <small>${catagoris?.others?.views}</small>
         </div>
     </div>
         </div>
     </div>
 </div>
     
     `;
        cardSection.appendChild(div);

    })
};



loadCatagori();