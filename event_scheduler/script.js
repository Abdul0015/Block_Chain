document.addEventListener('DOMContentLoaded', () => {
    const addEventButton = document.getElementById('addEventButton');
    const eventTitleInput = document.getElementById('eventTitle');
    const startTimeInput = document.getElementById('startTime');
    const endTimeInput = document.getElementById('endTime');
    const eventsList = document.getElementById('eventsList');

    addEventButton.addEventListener('click', () => {
        const title = eventTitleInput.value;
        const start = startTimeInput.value;
        const end = endTimeInput.value;

        if (!title || !start || !end) {
            alert('Please fill in all fields');
            return;
        }

        const li = document.createElement('li');
        li.textContent = `${title} - ${start} to ${end}`;
        eventsList.appendChild(li);

        eventTitleInput.value = '';
        startTimeInput.value = '';
        endTimeInput.value = '';
    });
});