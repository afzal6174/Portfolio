const tabLinks = document.querySelectorAll('.tab-item');
const tabPanels = document.querySelectorAll('.panel');

function handleClick(event) {
    event.preventDefault();

    tabLinks.forEach((tabLink) => {
        tabLink.setAttribute('aria-selected', 'false');
    });

    event.target.setAttribute('aria-selected', 'true');

    const id = event.target.getAttribute('aria-controls');

    tabPanels.forEach((tabPanel) => {
        if (tabPanel.getAttribute('id') === id) {
            tabPanel.removeAttribute('hidden');
            tabPanel.setAttribute('aria-hidden', 'false');
        } else {
            tabPanel.setAttribute('hidden', '');
            tabPanel.setAttribute('aria-hidden', 'true');
        }
    });
}

tabLinks.forEach((tabLink) => {
    tabLink.addEventListener('click', handleClick);
});
