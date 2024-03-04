// Load data
const loadRetro =async(input)=>{
         const res = await fetch(` https://openapi.programming-hero.com/api/retro-forum/posts?category=${input}`);
         const data = await res.json();
         const posts = data.posts;
         showPosts(posts);
}

// Show Post
const showPosts = (posts) =>{
          const PostsContainer = document.getElementById("posts-container");
          PostsContainer.innerText='';
          posts.forEach(post => {
                //  console.log(post);
                 const postDiv = document.createElement("div");
                 postDiv.classList = `flex mb-5 border-2 p-8 border-emerald-400 rounded-[32px]`;
                 postDiv.innerHTML=`
                 
                 <div id="onlineOffline" class="${post.isActive? 'online' : 'offline'}  avatar basis-1/6 inline">
                   <div class="w-36 rounded-full">
                     <img src="${post.image}" />
                   </div>
                 </div>
 
                 <div class="basis-5/6	p-6">
                   <p class="text-[16px] text-gray-600 font-mulish font-semibold"><span>#${post.category}</span> <span class="ml-4">Author : ${post.author.name}</span></p>
                   <p class="text-[22px] font-mulish font-bold mt-3">${post.title}</p>
                   <p class="text-[18px]  text-gray-500 font-mulish font-medium mt-1 mb-3">${post.description
                   }</p>
                   <hr>
                   <div class="flex justify-between mt-3">
                     <p class="flex text-[18px]  text-gray-500 font-mulish font-semibold">
                       <span ><img src="icon/Group 13.png" alt=""></span>
                       <span class="mr-4">${post.comment_count}</span>
                       <span><img src="icon/Group 16.png" alt=""></span>
                       <span class="mr-4">${post.view_count}</span>
                       <span><img src="icon/Group 18.png" alt=""></span>
                       <span class="">${post.posted_time}</span><span>min</span>
                     </p>
                     <p><img onClick="showTitle('${post.title}','${post.view_count}')" src="icon/Group 40106.png" alt=""></p>
                   </div>
                 </div>
 
                 `;

               PostsContainer.appendChild(postDiv);
               
          });
          // hide spinner
          // loadingSpinner(false);
}
// Search Input 
const searchInput = () =>{
          // show spinner
          // loadingSpinner(true);

          const input = document.getElementById("input-Field");
          const inputText = input.value;
          // console.log(inputText);
          loadRetro(inputText);
}
searchInput();

// Show Title
const showTitle = (title,viewCount) =>{
          const titleContainer = document.getElementById("title-container");
          const titleDiv =document.createElement("div");
          titleDiv.classList=`flex justify-between shadow-md rounded-[20px] p-4`;
          titleDiv.innerHTML=`
          <p class="flex text-[18px]  text-gray-500 font-mulish font-semibold">${title}</p>
        <p class="w-8"><img src="icon/Group 16.png" alt=""><span> ${viewCount} </span></p>
          `;
          titleContainer.appendChild(titleDiv);
}

// Loading Spinner
const loadingSpinner =(isLoading) =>{
  const loadingDiv = document.getElementById("loading");
  if (isLoading) {
         loadingDiv.classList.remove("hidden");    
  }
  else{
         loadingDiv.classList.add("hidden");    
  }
}


// load latest post
const latestPost = async() =>{
          const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/latest-posts`);
          const data = await res.json();
          showLatestPost(data);
}
latestPost();

const showLatestPost = (latestPosts) =>{
          const latestPostContainer = document.getElementById("latest-post-container");
          latestPosts.forEach(latestPost => {
                    // console.log(latestPost);
                    const latestPostDiv = document.createElement("div");
                    latestPostDiv.classList = `card card-compact bg-base-100 shadow-xl`;
                    latestPostDiv.innerHTML = `
                    
                    <figure><img src="${latestPost.cover_image}" alt="Shoes" /></figure>
                    <div class="card-body">
                      <p class="flex gap-2 item-center"><span><img src="icon/Frame.png" alt=""></span><span>${latestPost.author.posted_date ? latestPost.author.posted_date : "No publish date"}</span></p>
                      <h2 class="text-[18px] font-extrabold  font-mulish">${latestPost.title}</h2>
                      <p class="text-[16px] font-medium text-gray-500 font-mulish">${latestPost.description}</p>

                      <div class="card-actions justify-start">

                        <div class="avatar">
                          <div class="w-16 rounded-full">
                            <img src="${latestPost.profile_image}" />
                          </div>
                        </div>

                        <div class="py-2">
                          <p class="text-[18px] font-bold text-black font-mulish">${latestPost.author.name ? latestPost.author.name : "not" }</p>
                          <p class="text-[14px] mt-1 text-gray-500 font-mulish">${latestPost.author.designation ? latestPost.author.designation : "unknown"}</p>
                        </div>

                      </div>

                    </div>                    
                    `;

                    latestPostContainer.appendChild(latestPostDiv);
          });
}