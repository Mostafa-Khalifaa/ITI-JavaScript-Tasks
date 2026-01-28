function openWin() {
    let wind = window.open("", "", "width=300,height=300");

    wind.document.write("<p>will close in 5 seconds</p>");

    setTimeout(function() {
        wind.close();
    }, 5000);
}