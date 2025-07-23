const payTypeRadios = document.querySelectorAll('input[name="payType"]');

const salaryRateDiv = document.getElementById("salaryRateDiv");
const hourlyRateDiv = document.getElementById("hourlyRateDiv");

payTypeRadios.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
        console.log("Radio clicked!", radioButton.value);
        if (radioButton.value === "salary") {
            salaryRateDiv.classList.add("show");
            hourlyRateDiv.classList.remove("show");
        } else if (radioButton.value === "hourly") {
            hourlyRateDiv.classList.add("show");
            salaryRateDiv.classList.remove("show");
        }
    });
});





const hiddenElements = document.querySelectorAll(".show");
hiddenElements.forEach(element => {
    element.style.display = 'none'
});

