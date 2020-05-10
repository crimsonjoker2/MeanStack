$document.ready(function () {
    $.get('https://opentdb.com/api.php?amount=3', function(data){
        var questions = data.results
    })
    for (question in questions ){
        $(".questions").append(questions.question)
    }
})