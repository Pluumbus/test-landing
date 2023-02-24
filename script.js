const LookMap = document.querySelector('mapclick').addEventListener('mouseenter', (e)=> {
    const maphover = document.getElementById('maphover').style.opacity = 1;
    setTimeout(()=> {
        const maphover = document.getElementById('maphover').style.opacity = 0;
    }, 1500)
})
const btn1 = document.querySelector('btn1').addEventListener('mouseenter', (e)=> {
    const arrow = document.getElementById('arrow').style.transform = 'rotate(45deg)'
    setTimeout(()=> {
        const arrow = document.getElementById('arrow').style.transform = 'rotate(0deg)'
    }, 1500)
})
window.onscroll = function () {
    if (document.documentElement.scrollTop > 170) {
        document.getElementById('mouse').style.transform = 'translateY(5vw)'
    } else {
        document.getElementById('mouse').style.transform = 'translateY(0vw)'

      }
}

let disabled = document.getElementById("input").disabled = true;
 document.getElementById('btn').onclick = function() {
        document.getElementById("input").disabled = false;
        document.getElementById('btn').style.backgroundColor = '#FD2016'

}

function openPop(number) {
if (number == 1) {
    document.getElementById('open').style.display = 'flex';
    document.getElementById('open').style.position = 'fixed';
}
else {
    document.getElementById('open').style.display = 'none';

}
}
document.getElementById('menu').onclick = function () {
    document.querySelector('menu').classList.toggle('active')
    document.querySelector('Header1').classList.toggle('active-color')
    document.getElementById('menu').style.backgroundColor = 'black'
    document.getElementById('call').classList.toggle('active-color')
}