// script.js

const calendar = document.getElementById('calendar');
const yearDisplay = document.getElementById('yearDisplay');
let currentYear = new Date().getFullYear();

document.getElementById('prevYear').addEventListener('click', () => {
    currentYear--;
    generateCalendar(currentYear);
});

document.getElementById('nextYear').addEventListener('click', () => {
    currentYear++;
    generateCalendar(currentYear);
});

function generateCalendar(year) {
    calendar.innerHTML = ''; // Clear existing calendar
    yearDisplay.textContent = year;

    const daysInMonth = [31, isLeapYear(year) ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    for (let month = 0; month < 12; month++) {
        for (let day = 1; day <= daysInMonth[month]; day++) {
            const date = new Date(year, month, day);
            const dayElement = document.createElement('div');
            dayElement.classList.add('calendar-day');
            dayElement.innerHTML = `
                <strong>${monthNames[month]} ${day}</strong>
                <input type="text" placeholder="Add notes...">
            `;
            calendar.appendChild(dayElement);
        }
    }
}

function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

generateCalendar(currentYear);
