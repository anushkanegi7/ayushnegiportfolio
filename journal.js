function openEntry(index) {
    const container = document.getElementById('app-container');
    container.classList.remove('view-calendar');
    container.classList.add('view-entry');
    
    // Optional: Scroll to the specific entry in your stack
    const entries = document.querySelectorAll('.stack-layer');
    if(entries[index]) {
        entries[index].scrollIntoView();
    }
}

function showCalendar() {
    const container = document.getElementById('app-container');
    container.classList.remove('view-entry');
    container.classList.add('view-calendar');
}