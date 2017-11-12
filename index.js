var express = require("express"), 
    app = express(),
    bodyParser = require("body-parser");

//use static files
app.use(express.static(__dirname + '/html'));
app.use('/imgs', express.static('imgs'));
app.use(express.static(__dirname + '/css'));
    
var posts = [
      {
    id: 1,
    author: 'Nick',
    title: 'Is Alabama Legit?',
    body: 'They have played a bunch of no-names, I dont think Alabama is the real deal.'
  },
  {
    id: 2,
    author: 'Chris',
    title: 'Pac-12 Misery',
    body: 'Wow I can not believe the Pac-12 knocked themselves totally out of playoff contention! Washington blew it'
  },
  {
    id: 3,
    author: 'Barry',
    title: 'Wisconsin Disrespect?',
    body: 'It is crazy how much Wisconsin is disrespected, they are undefeated. They can only play the teams that are in front of them'
  },
  {
    id: 4,
    author: 'Mike',
    title: 'Mike Riley Back to OSU?',
    body: 'After the failure of the Mike Riley experiment at Nebraska, I think it is time he comes back home to Corvallis.'
  },
  { id: 5,
    author: 'Bob',
    title: 'Who will be gone first?',
    body: 'Which coach will be fired first?'
  }
    ];
    
    app.set('view engine', 'ejs');

// blog home page
app.get('/blog', (req, res) => {
  //render blog page
  res.render('blog', { posts: posts });
});

// blog post
app.get('/post/:id', (req, res) => {
  // find the post in the `posts` array
  const post = posts.filter((post) => {
    return post.id == req.params.id;
  })[0];

  // render the `post.ejs` template with post content
  res.render('post', {
    author: post.author,
    title: post.title,
    body: post.body
  });
});

    //edit route
app.get("/blog/:id/edit", function(req, res){
     const post = posts.filter((post) => {
    return post.id == req.params.id;
  })[0]; 
  
  res.render('edit', {
      id: post.id, 
      author: post.author, 
      title: post.title, 
      body: post.body
  });
});


    app.listen(process.env.PORT, process.env.IP, function () {
        console.log('Application listening!');
});
