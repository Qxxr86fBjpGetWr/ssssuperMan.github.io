var posts=["2025/05/28/OpenAI的Prompt Engineering 课程 1/","2024/05/24/hello-world/","2025/05/30/OpenAI的Prompt Engineering 课程 2/","2025/06/01/OpenAI的Prompt Engineering 课程 4/","2025/05/31/OpenAI的Prompt Engineering 课程 3/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };