$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function (data) {
        var fname = data.results[0].name.first;
        console.log(fname);
        $("h1").text(fname);
        var lname = data.results[0].name.last;
        console.log(lname);
        $("h3").text(fname);
    }
});
