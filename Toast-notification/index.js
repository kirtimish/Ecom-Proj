const btn = document.getElementById('btn');
const container = document.getElementById('container');

btn.addEventListener('click',() => {
    createToastNotification();
});

function createToastNotification() {
    const notify = document.createElement('div');
    notify.classList.add("Toast");

    notify.innerText = `This task is crazy`;

    container.appendChild(notify);

    setTimeout(() => {
        notify.remove();
    }, 3000);
}