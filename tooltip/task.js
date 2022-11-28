const hasTooltip = document.querySelectorAll('.has-tooltip');
let div = document.createElement('div');

for(let index = 0; index < hasTooltip.length; index++) {
    hasTooltip[index].addEventListener('click', (event) => {
        let toolTip = document.querySelector('.tooltip');
        if (toolTip) {
            toolTip.remove();
        } else {
            let coordinates = hasTooltip[index].getBoundingClientRect();
            div.textContent = hasTooltip[index].title;
            div.className = 'tooltip tooltip_active';
            div.style.left = coordinates.left + 'px';
            hasTooltip[index].appendChild(div);
        }
        event.preventDefault();
    })
}