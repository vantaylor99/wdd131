

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



// const maritalStatusSelect = document.querySelectorAll('select[name=maritalStatus]');
// const hasKidsSelect = document.querySelectorAll('select[name=hasKids]');

// const datingCountDiv = document.getElementById('datingCountDiv');
// const relationshipCountDiv = document.getElementById('relationshipCountDiv');
// const hasKidsDiv = document.getElementById('hasKidsDiv');
// const kidCountDiv = document.getElementById('kidCountDiv');
// const kidTimeDiv = document.getElementById('kidTimeDiv');


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


// Function to toggle visibility 
function toggleVisibilityOn(element) {
    element.classList.remove("hidden");
}

function toggleVisibilityOff(element) {
    element.classList.add("hidden");
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

function clearHiddenInputs() {
    const hiddenElements = document.querySelectorAll('.hidden');

    hiddenElements.forEach(div => {
        const inputs = div.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.value = '';
        })
    })
}

function getElementValue(id) {
    return Number(document.getElementById(id).value) || 0;
}


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



const calculateButton = document.getElementById('calculate');
calculateButton.addEventListener('click', () => {
    clearHiddenInputs();


    // const classCount = getElementValue('classCount');
    // const classTime = getElementValue('classTime');

    // const salaryRate = getElementValue('salaryRate').toFixed(2);
    // const hourlyRate = getElementValue('hourlyRate').toFixed(2);
    // const hoursWorked = getElementValue('hoursWorked');

    // const datingTime = getElementValue('datingTime');
    // const relationshipTime = getElementValue('relationshipTime');
    // const kidCount = getElementValue('kidCount');
    // const kidTime = getElementValue('kidTime');

    // const callingTime = getElementValue('callingTime');
    // const spiritualTime = getElementValue('spiritualTime');

    // const exerciseTime = getElementValue('exerciseTime');
    // const sleepTime = getElementValue('sleepTime');

    // const mealsCooked = getElementValue('mealsCooked');
    // const cookingTime = getElementValue('cookingTime');

    // const scrollingTime = getElementValue('scrollingTime');
    // const minecraftTime = getElementValue('minecraftTime');


    const classCount = 2;
    const classTime = 1.5; // hours/day

    // Work
    const hoursWorked = 40;
    const salaryRate = 52000; // annual salary
    const hourlyRate = 25; // if you're testing hourly instead

    // Relationships
    const datingTime = 1; // hours/day
    const relationshipTime = 1.5; // hours/day
    const kidCount = 3;
    const kidTime = 1; // per kid per week

    // Church
    const callingTime = 2; // hours/week
    const spiritualTime = 30; // minutes/day

    // Self-care
    const exerciseTime = 3; // hours/week
    const sleepTime = 7; // hours/night

    // Meals
    const mealsCooked = 4;
    const cookingTime = 1; // hours per meal

    // Media
    const minecraftTime = 2; // hours/week
    const scrollingTime = 0.5; // hours/day




    let totalTime = 0;
    const totalClassTime = multiplyCountByTime(classCount, convertToWeeklyTime(classTime))
    totalTime = addTimeToTotal(totalTime, totalClassTime);

    totalTime = addTimeToTotal(totalTime, hoursWorked);

    totalTime = addTimeToTotal(totalTime, datingTime);
    const totalRelationshipTime = convertToWeeklyTime(relationshipTime)
    totalTime = addTimeToTotal(totalTime, totalRelationshipTime);
    const totalKidTime = multiplyCountByTime(kidCount, kidTime)
    totalTime = addTimeToTotal(totalTime, totalKidTime);


    totalTime = addTimeToTotal(totalTime, callingTime);
    // spiritual time is in minutes and it's not worth creating a minutes to hours calculator. 
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
        if (selectedRadio.value === 'salary') {
            hourlyRateOfUserTime = ((salaryRate / 52) / hoursWorked);
            totalTimeBalanceUSD = (((salaryRate / 52) / hoursWorked) * hoursInWeek);
        }
        else if (selectedRadio.value === 'hourly') {
            hourlyRateOfUserTime = hourlyRate;
            totalTimeBalanceUSD = (hourlyRate * hoursInWeek);
        }
    }





    const activities = [
        { name: "Class", time: totalClassTime },
        { name: "Dating", time: datingTime },
        { name: "Relationship", time: totalRelationshipTime },
        { name: "Kids", time: totalKidTime },
        { name: "Calling", time: callingTime },
        { name: "Spiritual", time: totalSpiritualTime },
        { name: "Exercise", time: exerciseTime },
        { name: "Sleep", time: totalSleepTime },
        { name: "Cooking", time: totalCookingTime },
        { name: "Minecraft", time: minecraftTime },
        { name: "Scrolling", time: totalScrollingTime },
    ]

    let totalCost = 0;

    activities.forEach(activity => {
        activity.cost = calculateCostOfActivity(activity.time);
        totalCost += activity.cost;
        console.log(`${activity.name}: $${activity.cost.toFixed(2)}`)
    })

    console.log(`Total: $${totalCost.toFixed(2)}`);
})



