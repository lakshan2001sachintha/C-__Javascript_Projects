        //document.getElementById("count-el").innerText = 10

        // initialize the count as 0
        // listen for clicks on the increment button
        //increment the count variable when the button is called
        //change the count-el in the HTML to reflect the new count

        /*function methord(){
            console.log(5)
            console.log(4)
        }

        methord()
        methord()


        let num1 = 12;
        let num2 = 23;
        let num3 = 34;

        function sum_num(){
            let sum_let = num1 + num2 + num3;
            console.log(sum_let)
        }

        sum_num()


        let lapsComplete = 0;

        function lap_com(){
            lapsComplete=lapsComplete+1;
            console.log(lapsComplete)
        }

        lap_com()
        lap_com()
        lap_com()*/

        /*console.log("-------------------")

        let count = 0;

        function increment(){
            count = count + 1
            console.log(count)
        }

console.log("--------------------")*/


let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment(){
    count = count + 1
    countEl.innerText = count
}

// A Problem that I had

    /* In your current code, you have console.log(countEl) outside the increment 
    function, which logs the countEl element once when the script runs. If you move 
    console.log(countEl) inside the increment function, it will log the countEl 
    element every time the increment function is called.

    Here’s a breakdown of the differences:

    1.Current Code (Logging Outside Function):

    Behavior: console.log(countEl) is executed once when the script is first 
            loaded, so you see the countEl element in the console right away.

    Usage: Useful for checking if countEl is being correctly selected and to 
            confirm its initial state.

    2.Logging Inside Function:

    Behavior: console.log(countEl) is executed each time the increment function is called. 
    This will repeatedly log the countEl element to the console whenever the count is incremented.

    Usage: Can be useful for debugging if you want to see the element’s state or changes every time 
    the function is executed, but it might clutter the console with repetitive logs.

    { When to Use Each }

    Logging Outside Function: Best for checking initialization or setup issues. 
    Use this when you only need to verify the element once.

    Logging Inside Function: Useful for debugging dynamic behavior or if the element’s 
    state changes and you need to see those changes in real-time during function execution.*/



//DOM__(Document Object Model)

function save(){
    console.log(count)
}
save()


console.log("------------------------")

  /*console.log(4+5)
    console.log("2"+"4")
    console.log("5"+1)
    console.log(100+"100")*/

    