// var e = function(sel) {
//     return document.querySelector(sel)
// } 简写为 箭头函数 如下
// var e = (sel) => document.querySelector(sel)
var bindAddData = function() {
    var md = new Remarkable()
    var input = e('#id-source')
    bindEvent(input, 'keyup', (event) => {
        // log('keyup')
        var src = event.target.value
        e('#id-content').innerHTML = md.render(src)
    })
}

var __main = function() {
    bindAddData()
}

__main()
