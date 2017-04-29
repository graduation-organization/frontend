/**
 * Created by ccc on 2017/4/19.
 */
var R = new Router();
R.init();
var res = document.getElementById('content');

R.route('/student', function() {
    window.location.href = "../student.html";
});
R.route('/product', function() {

});
R.route('/server', function() {

});