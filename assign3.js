function hideBox() {
    document.getElementById("result-box").classList.add("hidden");
}

hideBox();

document.getElementById("btn_calculate").addEventListener("click", () => {

    let n = document.getElementById("n").value * 1;
    
    // Calculate the Factorial
    let factorial_total = 1;
    let i = 2;
    while (i <= n) {
        factorial_total *= i;
        i += 1;
    }

    // Calculate the sum of first n
    let firstn_total = 0;
    i = 1;
    do {
        firstn_total += i;
        i += 1;
    } while (i <= n);

    // Calculate the average of first n
    let firstn_average = 0;
    for (i = 1; i <= n; i++) {
        firstn_average += i;
    }
    firstn_average = firstn_average / n;

    // Push the result to the document
    document.getElementById("res_factorial").value = factorial_total;
    document.getElementById("res_sum").value = firstn_total;
    document.getElementById("res_avg").value = firstn_average;
    document.getElementById("msg_factorial").innerHTML = "The factorial of " + n + " is:";
    document.getElementById("msg_sum").innerHTML = "The sum of first " + n + " numbers is:";
    document.getElementById("msg_avg").innerHTML = "The average of first " + n + " numbers is:";
    document.getElementById("result-box").classList.remove("hidden");
});

document.getElementById("btn_hide").addEventListener("click", () => {hideBox()});
