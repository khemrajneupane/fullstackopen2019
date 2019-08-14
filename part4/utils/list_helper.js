
// Load the full build.
var _ = require('lodash');

/**dummy returning 1 */
const dummy = (blogs) => {
  return 1;
}
/**totalLikes */
const totalLikes = (blogs) => blogs.reduce((a, blog) => a + blog.likes, 0)
/** favoriteBlog*/
const favoriteBlog = (blogs) => {
  let thisFavBlog = {
    likes: 0
  }
  blogs.filter(item => {
    if (item.likes > thisFavBlog.likes) {
      thisFavBlog = item
    }
  })
  return thisFavBlog
}
/** mostBlogs*/
const mostBlogs = (blogs) => {
  var authors = []
  blogs.forEach(obj => {
    authors.push(obj.author)
  })
  var counts = {};
  authors.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
  let person = _.max(Object.keys(counts), o => object[o]);
  let blogsNums = _.max(Object.values(counts))

  return thisFavBlog = {
    author: person,
    blogs: blogsNums
  }
}
/**mostLikes */
const mostLikes = (blogs) => {
  var authors = []
  blogs.forEach(obj => {
    authors.push(obj.author)
  })

  let tempObj = []
  let resultObj = {}
  blogs.filter(values => {
    tempObj.push({
      author: values.author,
      likes: values.likes
    })
  })
//console.log(tempObj)
  var output =
    _(tempObj)
      .groupBy('author')
      .map((objs, key) => ({
        'author': key,
        'likes': _.sumBy(objs, 'likes')
      }))
      .value();
      //console.log(output)
  var maxLikAut = _.maxBy(output, 'likes');
  resultObj = maxLikAut
  //console.log(resultObj)
  return resultObj
}




module.exports = { dummy, totalLikes, favoriteBlog, mostBlogs, mostLikes }