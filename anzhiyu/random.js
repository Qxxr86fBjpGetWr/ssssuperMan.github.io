var posts=["2025/05/28/OpenAI的Prompt Engineering 课程 1/","2024/05/24/hello-world/","2025/05/30/OpenAI的Prompt Engineering 课程2/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };