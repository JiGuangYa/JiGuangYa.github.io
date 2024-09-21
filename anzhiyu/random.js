var posts=["2024/09/20/hello-world.html","2024/09/21/公告/本站隐私协议.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };