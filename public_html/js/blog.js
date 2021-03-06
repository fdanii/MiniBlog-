$(function (){
    var APPLICATION_ID = "0A62B1D0-15B8-F2F1-FF35-45FA80A78900",
        SECRET_KEY = "196BD88C-948D-1640-FFD5-1B9DFBED0000",
        VERSION = "v1";
        
    Backendless.initApp(APPLICATION_ID, SECRET_KEY, VERSION);
  
    var postsCollection = Backendless.Persistence.of(Posts).find();
    
    console.log(postsCollection);
    
    var wrapper = {
        posts: postsCollection.data
    };
    
    Handlebars.registerHelper("format", function (time) {
        return moment(time).format("dddd, MMMM Do YYYY");
    });
    
    var blogScript = $("#blogs-template").html();
    var blogTemplate = Handlebars.compile(blogScript);
    var blogHTML = blogTemplate(wrapper);
    
    $('.main-container').html(blogHTML);
    
    
});

    function Posts(args) {
        args = args || {};
        this.title = args.title || "";
        this.content = args.content || "";
        this.authorEmail = args.authorEmail || "";
        
    }