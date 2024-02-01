async function generate() {
    const res = await fetch('https://api.adviceslip.com/advice');
    const body = await res.json();

    document.querySelector('h1').innerText = 'A D V I S E # ' + body.slip.id;
    document.querySelector('p').innerText = '"' + body.slip.advice + '"';
}
document.addEventListener('DOMContentLoaded', generate);
document.querySelector('button').addEventListener('click', () => {
    generate();
});
