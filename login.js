
function createElement() {
    let container = document.querySelector('.container')
    let span = document.createElement('span');

    var size = Math.random() * 50;

    span.style.height = 50 + size + 'px';
    span.style.width = 50 + size + 'px';
    span.style.top = Math.random() * innerHeight + 'px';
    span.style.left = Math.random() * innerWidth + 'px';

    container.appendChild(span);

    setInterval(() => {
        span.remove()
    },5000);

}
// setInterval(createElement,150);    