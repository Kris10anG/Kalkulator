function addToDisplay(value) {

    display += value;

    if(value === "="){
        display = display.substring(0, display.length-1)
        let result = eval(display.toString());
        display = result;
        console.log(result);
    } if (value === "C") {
        display = "";
        
    }
    // if (userInput == "C") {
    //     display = "";
    //     return;
    // }
    // if (userInput == "=") {
    //     let result = eval(display);
    //     display = "";
    //     return;
    // }
    // display += userInput;

    show();
}