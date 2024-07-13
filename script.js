document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.sim-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const simNumber = this.getAttribute('data-sim');
            if (simNumber === '8') {
                window.location.href = 'https://irispelled.github.io/moon-and-earth/';
            } else {
                openSimulation(simNumber);
            }
        });
    });
});

function openSimulation(simNumber) {
    const simUrl = `simulation${simNumber}.html`;
    window.open(simUrl, '_blank');
}
