

// Cost of Time Calculator

const payTypeRadios = document.querySelectorAll('input[name="payType"]');
const salaryRateDiv = document.getElementById("salaryRateDiv");
const hourlyRateDiv = document.getElementById("hourlyRateDiv");
payTypeRadios.forEach(radioButton => {
    radioButton.addEventListener('change', () => {
        if (radioButton.value === "salary") {
            toggleVisibilityOn(salaryRateDiv)
            toggleVisibilityOff(hourlyRateDiv)
            resetInputById("hoursWorked")


        } else if (radioButton.value === "hourly") {
            toggleVisibilityOn(hourlyRateDiv)
            toggleVisibilityOff(salaryRateDiv)
            resetInputById("hoursWorked")
        }
    });
});

const maritalStatusSelect = document.querySelectorAll('select[name=maritalStatus]');
const kidsYNSelect = document.querySelectorAll('select[name=kidsYN]');

const datingCountDiv = document.getElementById('datingCountDiv');
const relationshipCountDiv = document.getElementById('relationshipCountDiv');
const kidsYNDiv = document.getElementById('kidsYNDiv');
const kidCountDiv = document.getElementById('kidCountDiv');
const kidTimeCountDiv = document.getElementById('kidTimeCountDiv');

maritalStatusSelect.forEach(option => {
    option.addEventListener('change', () => {
        if (option.value === "single") {
            toggleVisibilityOn(datingCountDiv)
            toggleVisibilityOff(relationshipCountDiv)
            toggleVisibilityOff(kidsYNDiv)
            toggleVisibilityOff(kidCountDiv)
            toggleVisibilityOff(kidTimeCountDiv)


        }
        else if (option.value === "relationship" || option.value === "married") {
            resetSelectById("kidsYN");
            resetInputById("relationshipCount")
            resetInputById("datingCount")
            resetInputById("kidCount")
            resetInputById("kidTimeCount")
            toggleVisibilityOn(relationshipCountDiv);
            toggleVisibilityOn(kidsYNDiv);
            toggleVisibilityOff(datingCountDiv)
        }
        else if (option.value === "divorced") {
            resetSelectById("kidsYN");
            resetInputById("relationshipCount")
            resetInputById("datingCount")
            resetInputById("kidCount")
            resetInputById("kidTimeCount")
            toggleVisibilityOn(kidsYNDiv);
            toggleVisibilityOn(datingCountDiv);
            toggleVisibilityOff(relationshipCountDiv);
        }
    })
})


kidsYNSelect.forEach(option => {
    option.addEventListener('change', () => {
        if (option.value === "yes") {
            toggleVisibilityOn(kidCountDiv);
            toggleVisibilityOn(kidTimeCountDiv);

        }
        else if (option.value === "no") {
            toggleVisibilityOff(kidCountDiv);
            toggleVisibilityOff(kidTimeCountDiv);
        }
    })
})





// Function to toggle visibility 
function toggleVisibilityOn(element) {
    element.classList.remove("hidden");
}

function resetSelectById(id) {
    const select = document.getElementById(id)
    if (select) {
        select.value = "";
    }
}

function resetInputById(id) {
    const input = document.getElementById(id)
    if (input) {
        input.value = "";
    }
}

function toggleVisibilityOff(element) {
    element.classList.add("hidden");
}



