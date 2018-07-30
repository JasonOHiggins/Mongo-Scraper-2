module.exports = function(router) {
    //render home
    router.get("/", function(req, res) {
        res.render("home");
    });
    //render saved page
    router.get("/saved", function(req, res) {
        res.render("saved");
    });
}