var posts=["2024/05/24/hello-world/","2025/05/25/博客重启啦～环境配置/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };