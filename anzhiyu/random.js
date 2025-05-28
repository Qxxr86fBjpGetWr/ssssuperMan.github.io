var posts=["2024/05/24/hello-world/","2025/05/28/OpenAI的Prompt Engineering 课程/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };