var gitTag = require('git-tag')({localOnly:true,dir:'/path/to/git/.git'})

gitTag.latest(function(err, res){
    console.log(err, res);
});