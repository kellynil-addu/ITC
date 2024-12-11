let in_celsius = document.getElementById("in_celsius");
let out_fahrenheit = document.getElementById("out_fahrenheit");
let in_fahrenheit = document.getElementById("in_fahrenheit");
let out_celsius = document.getElementById("out_celsius");
let in_meters = document.getElementById("in_meters");
let out_feet = document.getElementById("out_feet");
let in_feet = document.getElementById("in_feet");
let out_meters = document.getElementById("out_meters");

const ft_ratio = 3.280839895;

in_celsius.addEventListener("keyup", () => {
    let result = (in_celsius.value * 9 / 5) + 32;
    out_fahrenheit.value = result;
});

in_fahrenheit.addEventListener("keyup", () => {
    let result = ((in_fahrenheit.value * 1) - 32) * 5 / 9;
    out_celsius.value = result;
});

in_meters.addEventListener("keyup", () => {
    let result = in_meters.value * ft_ratio;
    out_feet.value = result;
});

in_feet.addEventListener("keyup", () => {
    let result = in_feet.value / ft_ratio;
    out_meters.value = result;
});
