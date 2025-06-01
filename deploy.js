const ghpages = require('gh-pages');

ghpages.publish('dist', {
    branch:'gh-pages',
    repo:'https://github.com/MohamadMilly/todo-list.git'

},
(err) => {
    if(err) console.error(err); 
    else  console.log("Deployed to github pages !");
});