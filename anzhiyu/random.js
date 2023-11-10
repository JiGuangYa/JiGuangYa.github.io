var posts=["2023/11/09/hello-world/","2023/11/10/开站大吉/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };