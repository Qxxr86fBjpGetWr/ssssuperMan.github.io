var posts=["2025/05/25/博客重启啦～环境配置/","2024/05/24/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };