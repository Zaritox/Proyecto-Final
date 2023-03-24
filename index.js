alert('Toda la información que aparezca en esta página es falsa, inventada y ficticia');
alert('Este es el primer HTML, CSS y JS que trabajo. No estoy seguro si entendí correctamente la consigna, pero lo interpreté y realicé lo siguiente...');

const btn = document.getElementById('btn');
const miDiv = document.getElementById('miDiv');

btn.addEventListener('click', () => {
if (miDiv.style.display === 'none') {
    miDiv.style.display = 'block';
} else {
    miDiv.style.display = 'none';
}
});

const img = document.getElementById('myImage');

img.addEventListener('mouseenter', () => {
    img.style.transform = 'scale(1.3)';
});

img.addEventListener('mouseleave', () => {
    img.style.transform = 'scale(1)';
});
