

// Cost of Time Calculator
// Salary section
const payTypeRadios = document.querySelectorAll('input[name="payType"]');
const salaryRateDiv = document.getElementById('salaryRateDiv');
const hourlyRateDiv = document.getElementById('hourlyRateDiv');




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


// Relationship Section
const maritalStatusSelect = document.querySelectorAll('select[name=maritalStatus]');
const hasKidsSelect = document.querySelectorAll('select[name=hasKids]');

const datingTimeDiv = document.getElementById('datingTimeDiv');
const relationshipTimeDiv = document.getElementById('relationshipTimeDiv');
const hasKidsDiv = document.getElementById('hasKidsDiv');
const kidCountDiv = document.getElementById('kidCountDiv');
const kidTimeDiv = document.getElementById('kidTimeDiv');

maritalStatusSelect.forEach(option => {
    option.addEventListener('change', () => {
        if (option.value === "single") {
            toggleVisibilityOn(datingTimeDiv)
            toggleVisibilityOff(relationshipTimeDiv)
            toggleVisibilityOff(hasKidsDiv)
            toggleVisibilityOff(kidCountDiv)
            toggleVisibilityOff(kidTimeDiv)


        }
        else if (option.value === "relationship" || option.value === "married") {
            resetSelectById("hasKids");
            resetInputById("relationshipTime")
            resetInputById("datingTime")
            resetInputById("kidCount")
            resetInputById("kidTime")
            toggleVisibilityOn(relationshipTimeDiv);
            toggleVisibilityOn(hasKidsDiv);
            toggleVisibilityOff(datingTimeDiv)
        }
        else if (option.value === "divorced") {
            resetSelectById("hasKids");
            resetInputById("relationshipTime")
            resetInputById("datingTime")
            resetInputById("kidCount")
            resetInputById("kidTime")
            toggleVisibilityOn(hasKidsDiv);
            toggleVisibilityOn(datingTimeDiv);
            toggleVisibilityOff(relationshipTimeDiv);
        }
    })
})

hasKidsSelect.forEach(option => {
    option.addEventListener('change', () => {
        if (option.value === "yes") {
            toggleVisibilityOn(kidCountDiv);
            toggleVisibilityOn(kidTimeDiv);

        }
        else if (option.value === "no") {
            toggleVisibilityOff(kidCountDiv);
            toggleVisibilityOff(kidTimeDiv);
        }
    })
})


// Calling / Church Section
const churchCallingSelect = document.querySelectorAll('select[name=churchCalling]');
const callingTimeDiv = document.getElementById('callingTimeDiv');

churchCallingSelect.forEach(option => {
    option.addEventListener('change', () => {
        if (option.value === "yes") {
            toggleVisibilityOn(callingTimeDiv);
        }
        else if (option.value === "no") {
            toggleVisibilityOff(callingTimeDiv);
        }

    })
})


// Meal Section
const userCooksSelect = document.querySelectorAll('select[name=userCooks]');

const mealsCookedDiv = document.getElementById('mealsCookedDiv');
const cookingTimeDiv = document.getElementById('cookingTimeDiv');

userCooksSelect.forEach(option => {
    option.addEventListener('change', () => {
        if (option.value === "yes") {
            toggleVisibilityOn(mealsCookedDiv);
            toggleVisibilityOn(cookingTimeDiv);
        }
        else if (option.value === "no") {
            toggleVisibilityOff(mealsCookedDiv);
            toggleVisibilityOff(cookingTimeDiv);
        }
    })
})


// Functions to toggle visibility 
function toggleVisibilityOn(element) {
    element.classList.remove("hidden");
}

function toggleVisibilityOff(element) {
    element.classList.add("hidden");
}


// Functions to reset select and number inputs
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

// Allow some inputs to be saved in case a user misclicks, 
// but then before running calculations remove any hidden input text
function clearHiddenInputs() {
    const hiddenElements = document.querySelectorAll('.hidden');

    hiddenElements.forEach(div => {
        const inputs = div.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.value = '';
        })
    })
}

function clearTables() {
    document.getElementById('resultsBody').innerHTML = '';
    document.getElementById('summaryRows').innerHTML = '';
}


// Grab inputs
function getElementValue(id) {
    return Number(document.getElementById(id).value) || 0;
}

// Save & Load inputs to Local storage
function saveInputToLocalStorage(id) {
    const element = document.getElementById(id);
    if (element) {
        localStorage.setItem(id, element.value)
    }
}



function loadInputFromLocalStorage(id) {
    const element = document.getElementById(id);
    if (element) {
        const savedValue = localStorage.getItem(id);
        if (savedValue !== null) {
            element.value = savedValue;
        }

    }
}



const idsToLoad = [
    "classCount", "classTime", "salary", "hourly", "hourlyRate",
    "salaryRate", "hoursWorked", "maritalStatus", "datingTime",
    "relationshipTime", "hasKids", "kidCount", "kidTime", "churchCalling",
    "callingTime", "spiritualTime", "exerciseTime", "sleepTime", "userCooks",
    "cookingTime", "minecraftTime", "scrollingTime"];


function loadAllInputs() {
    idsToLoad.forEach(id => {
        loadInputFromLocalStorage(id)
    });
}

// Self explanitory funcitons
function multiplyCountByTime(count, time) {
    return count * time;
}


function addTimeToTotal(currentTotal, timeToAdd) {
    return currentTotal + timeToAdd;
}

function convertToWeeklyTime(time) {
    return time * 7;
}

function calculateCostOfActivity(lengthOfActivity) {
    return lengthOfActivity * hourlyRateOfUserTime;
}


// Global Variables
const hoursInWeek = 7 * 24;
let totalTimeBalanceUSD = 0;
let hourlyRateOfUserTime = 0;
let totalTime = 0;
let totalCost = 0;




// Display Tables
function displayTables(activities, totalTime, totalCost) {
    const resultsBody = document.getElementById('resultsBody')
    const summaryRows = document.getElementById('summaryRows')

    activities.forEach(activity => {


        const row = document.createElement('tr');
        const nameDataContainer = document.createElement('td')
        const timeDataContainer = document.createElement('td')
        const costDataContainer = document.createElement('td')

        nameDataContainer.textContent = activity.name;
        timeDataContainer.textContent = `${activity.time.toFixed(1)} hrs.`;
        costDataContainer.textContent = `$${activity.cost.toFixed(2)}`;
        row.append(nameDataContainer);
        row.append(timeDataContainer);
        row.append(costDataContainer);

        if (activity.time > 0) {
            resultsBody.append(row)
        }

    });

    const availableRow = document.createElement('tr');
    availableRow.classList.add('summary-row', 'total-available');

    const availableTotalContainer = document.createElement('td');
    const availableTimeContainer = document.createElement('td');
    const availableCostContainer = document.createElement('td');

    availableTotalContainer.textContent = "Available: "
    availableTimeContainer.textContent = `${hoursInWeek.toFixed(1)} hrs.`
    availableCostContainer.textContent = `$${totalTimeBalanceUSD.toFixed(2)}`;

    availableRow.append(availableTotalContainer);
    availableRow.append(availableTimeContainer);
    availableRow.append(availableCostContainer);
    summaryRows.append(availableRow);



    const spentRow = document.createElement('tr');
    spentRow.classList.add('summary-row', 'total-spent');

    const spentContainer = document.createElement('td');
    const spentTimeContainer = document.createElement('td');
    const spentCostContainer = document.createElement('td');

    spentContainer.textContent = "Total Spent:";
    spentTimeContainer.textContent = `${totalTime.toFixed(1)} hrs.`
    spentCostContainer.textContent = `$${totalCost.toFixed(2)}`;

    spentRow.append(spentContainer);
    spentRow.append(spentTimeContainer);
    spentRow.append(spentCostContainer);
    summaryRows.append(spentRow);

    const remainingRow = document.createElement('tr');
    remainingRow.classList.add('summary-row', 'total-remaining');

    const remainingTotalContainer = document.createElement('td');
    const remainingTimeContainer = document.createElement('td');
    const remainingCostContainer = document.createElement('td');

    remainingTotalContainer.textContent = "Remaining: "
    remainingTimeContainer.textContent = `${(hoursInWeek - totalTime).toFixed(1)} hrs.`
    remainingCostContainer.textContent = `$${(totalTimeBalanceUSD - totalCost).toFixed(2)}`;

    remainingRow.append(remainingTotalContainer);
    remainingRow.append(remainingTimeContainer);
    remainingRow.append(remainingCostContainer);
    summaryRows.append(remainingRow);
}


const resultsTable = document.getElementById('resultsTable');

document.addEventListener("DOMContentLoaded", () => {
    const savedRadioValue = localStorage.getItem("payType");
    if (savedRadioValue) {
        const radioInput = document.querySelector(`input[name="payType"][value="${savedRadioValue}"]`);
        if (radioInput) {
            radioInput.checked = true;
            if (savedRadioValue === 'salary') {
                toggleVisibilityOn(salaryRateDiv);
                toggleVisibilityOff(hourlyRateDiv);
            }
            else if (savedRadioValue === 'hourly') {
                toggleVisibilityOn(hourlyRateDiv);
                toggleVisibilityOff(salaryRateDiv);
            }
        }
    }
    loadAllInputs();

});



const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', () => {
    clearHiddenInputs();

    idsToLoad.forEach(id => {
        saveInputToLocalStorage(id)
    });

    toggleVisibilityOn(resultsTable);
    let totalTime = 0;
    let totalCost = 0;


    const classCount = getElementValue('classCount');
    const classTime = getElementValue('classTime');
    const hoursWorked = getElementValue('hoursWorked');

    const datingTime = getElementValue('datingTime');
    const relationshipTime = getElementValue('relationshipTime');
    const kidCount = getElementValue('kidCount');
    const kidTime = getElementValue('kidTime');

    const callingTime = getElementValue('callingTime');
    const spiritualTime = getElementValue('spiritualTime');

    const exerciseTime = getElementValue('exerciseTime');
    const sleepTime = getElementValue('sleepTime');

    const mealsCooked = getElementValue('mealsCooked');
    const cookingTime = getElementValue('cookingTime');

    const scrollingTime = getElementValue('scrollingTime');
    const minecraftTime = getElementValue('minecraftTime');



    // Some 
    const totalClassTime = multiplyCountByTime(classCount, convertToWeeklyTime(classTime))
    totalTime = addTimeToTotal(totalTime, totalClassTime);

    totalTime = addTimeToTotal(totalTime, hoursWorked);

    totalTime = addTimeToTotal(totalTime, datingTime);
    const totalRelationshipTime = convertToWeeklyTime(relationshipTime)
    totalTime = addTimeToTotal(totalTime, totalRelationshipTime);
    const totalKidTime = multiplyCountByTime(kidCount, kidTime)
    totalTime = addTimeToTotal(totalTime, totalKidTime);


    totalTime = addTimeToTotal(totalTime, callingTime);
    // spiritual time is the only one in minutes and 
    // it's not worth creating a minutes to hours calculator. 
    const totalSpiritualTime = convertToWeeklyTime((spiritualTime / 60))
    totalTime = addTimeToTotal(totalTime, totalSpiritualTime);

    totalTime = addTimeToTotal(totalTime, exerciseTime);
    const totalSleepTime = convertToWeeklyTime(sleepTime)
    totalTime = addTimeToTotal(totalTime, totalSleepTime);

    const totalCookingTime = multiplyCountByTime(mealsCooked, cookingTime)
    totalTime = addTimeToTotal(totalTime, totalCookingTime);

    totalTime = addTimeToTotal(totalTime, minecraftTime);
    const totalScrollingTime = convertToWeeklyTime(scrollingTime);
    totalTime = addTimeToTotal(totalTime, totalScrollingTime);

    // Code to calcualte how much the users time is worth a week
    const selectedRadio = document.querySelector('input[name=payType]:checked');

    if (selectedRadio) {
        localStorage.setItem("payType", selectedRadio.value);
        if (selectedRadio.value === 'salary') {
            const salaryRate = getElementValue('salaryRate');
            hourlyRateOfUserTime = ((salaryRate / 52) / hoursWorked);
            totalTimeBalanceUSD = (((salaryRate / 52) / hoursWorked) * hoursInWeek);
        }
        else if (selectedRadio.value === 'hourly') {
            const hourlyRate = getElementValue('hourlyRate');
            hourlyRateOfUserTime = hourlyRate;
            totalTimeBalanceUSD = (hourlyRate * hoursInWeek);
        }
    }




    // Activities array 
    const activities = [
        { name: "Class", time: totalClassTime, cost: 0 },
        { name: "Dating", time: datingTime, cost: 0 },
        { name: "Relationship", time: totalRelationshipTime, cost: 0 },
        { name: "Kids", time: totalKidTime, cost: 0 },
        { name: "Work", time: hoursWorked, cost: 0 },
        { name: "Calling", time: callingTime, cost: 0 },
        { name: "Spiritual", time: totalSpiritualTime, cost: 0 },
        { name: "Exercise", time: exerciseTime, cost: 0 },
        { name: "Sleep", time: totalSleepTime, cost: 0 },
        { name: "Cooking", time: totalCookingTime, cost: 0 },
        { name: "Minecraft", time: minecraftTime, cost: 0 },
        { name: "Scrolling", time: totalScrollingTime, cost: 0 },
    ]


    activities.forEach(activity => {
        if (activity.name !== "Work") {
            activity.cost = calculateCostOfActivity(activity.time);
            totalCost += activity.cost;
        }
    });


    clearTables();
    displayTables(activities, totalTime, totalCost);


})

