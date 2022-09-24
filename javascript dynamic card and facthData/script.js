
// const posts = [
    
//     {
//         title : "this is title1",
//         body : "this is body1"
//     },
//     {
//         title : "this is title2",
//         body : "this is body2"
//     },
//     {
//         title : "this is title3",
//         body : "this is body3"
//     },
//     {
//         title : "this is title4",
//         body : "this is body4"
//     },

// ];


//fatch data

const facthData = async (config) => {
    try{
        const rest = await axios(config);
        return rest.data
    
    }catch (error){
        throw Error("Data is not face")
    }
};



// selection
const postsElement = document.querySelector(".posts");

const loadAllData = async () => {
  
    const posts = await facthData("https://jsonplaceholder.typicode.com/posts");

  posts.map((post) => {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
         <h4 class="post-title">${post.title}</h4>
        <p class="post-body">${post.body}</p>
    `;
    postsElement.appendChild(postElement);
  });
};

loadAllData();
