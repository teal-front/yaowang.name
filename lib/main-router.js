// index page
exports.index = async (ctx, next) => {
    //await next()

    let xmasTree = require('xmas-tree')
    let tree = xmasTree({
       size: 45
    })
    
    ctx.body = `
	<h1>ackme, Merry Christmas!</h1>
	<pre>
		${tree}
	</pre>
	`
}
