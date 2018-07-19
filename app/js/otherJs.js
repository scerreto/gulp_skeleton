window.addEventListener('DOMContentLoaded', function() {
    // your page initialization code here
    // the DOM will be available here
    console.log("other js");

    console.log('window - DOMContentLoaded - capture'); // 1st

    let el = document.getElementById('myBtn2');
    console.log(el);
    // Define the Event Listener for a single element whit a specific id
    el.addEventListener('click', fnClick, false);
    el.addEventListener("mouseover", fnOver);
    el.addEventListener("mouseout", fnOut);
    // Function click on Try button
    function fnClick() {
        console.log(event);
        console.log("Click event")
    }
    // Function over on Try button
    function fnOver() {
        console.log(event);
        console.log("Over event")
    }
    // Function out on Try button
    function fnOut()
    {
        console.log(event);
        console.log("Out event")
    }

    // Define an Event Listener for a specific type of elements eg. button

    let buttons = document.getElementsByTagName("button");

    // Anonymous function
    let handler = function() {
        // This
        console.log(this.id);
        console.log("Clic su " + this.innerHTML);
        if (this.id === "btn_1" ) {
            console.log("BTN 1");
            document.getElementById("this__operator").className="show__div";
        } else {
            let value = "<p>Inner html sovrascrive il valore Precedente!</p>";
            document.getElementById("this__operator").innerHTML=value;
            // Class replacement
            console.log(document.getElementById("nextEx__btn").className);
            let classToReplace = document.getElementById("nextEx__btn").className;
            classToReplace = classToReplace.replace("hide__div","show__div");
            document.getElementById("nextEx__btn").className = classToReplace;
            nextFn();
        }
    };

    for(let i = 0; i < buttons.length; i++) {
        if (buttons[i].id !== "form__validate") {
            buttons[i].addEventListener("click", handler);
        }
    }

    function nextFn() {
        // Object event
        let nextBtn = document.getElementById("nextEx__btn");
        let handlerEventObject = function (e) {
            console.log("Clic su " + e.target.innerHTML);
            console.log(e)
        };
        nextBtn.addEventListener('click', handlerEventObject, false);

    }

    //Form Validate
    let formSubmit = document.getElementById("form__validate");
    let handlerFormValidate = function (e) {
        console.log("Clic su " + e.target.innerHTML);
        let valueInputBox, text;

        // Get the value of the input field with id="numb"
        valueInputBox = document.getElementById("numb").value;

        // If x is Not a Number or less than one or greater than 10
        if (isNaN(valueInputBox) || valueInputBox < 1 || valueInputBox > 10) {
            text = "Input not valid";
        } else {
            text = "Input OK";
        }
        document.getElementById("demo").innerHTML = text;
    };
    formSubmit.addEventListener('click', handlerFormValidate, false);
    // Alternative onchange
    document.addEventListener('DOMContentLoaded',function() {
        document.querySelector('select[name="ice-cream"]').onchange=changeEventHandler;
    },false);

    function changeEventHandler(event) {
        // You can use event or  this to refer to the selected element.
        if(!event.target.value) alert('Please Select One');
        else alert('You like ' + event.target.value + ' ice cream.');
    }



}, true);