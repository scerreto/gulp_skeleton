
    console.log("main js");

    console.log(document);

    // Event listener: when the dom is loaded the function load is called
    document.addEventListener('DOMContentLoaded', load("home"), false);

    function fn () {
        window.location.href= 'pages/other.html';
    }

    /*
     * Example show/hide div
     * 1. Find the div
     * 2. Delete the class attribute in show__div
     */
    function exampleShow() {
        console.log("Example show div");
        let div = document.getElementById("test__div");
        console.log(div);
        div.className = "show__div";
        console.log(div);
    }
    function exampleHide() {
        console.log("Example hide div");
        let div = document.getElementById("test__div");
        div.className = "hide__div";
    }
    /*
     * Example 2 show/hide div with only one button
     * 1. Find the div
     * 2. Check the global variable valuer
     * 3. Delete/Add the class attribute in show__div
     * 4. Change the value of button
     */
    let showDivExample2 = false;
    function exampleShowHide() {
        console.log("Example show div");
        console.log(showDivExample2);
        let div = document.getElementById("test__div");
        if (showDivExample2) {
            div.className = "hide__div";
            document.getElementById("example2__show").innerHTML = "Show div";
            showDivExample2 = false;
        } else {
            div.className = "show__div";
            document.getElementById("example2__show").innerHTML = "Hide div";
            showDivExample2 = true;
        }
    }

    //TEST DOCUMENT
    console.log("Test Document");
    const paragraphs = document.getElementsByTagName("p");
    let numberOfparagrapfs = paragraphs.length;
    // print result
    console.log(paragraphs);
    console.log(numberOfparagrapfs);
