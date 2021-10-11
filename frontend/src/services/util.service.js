
const cursorColors = ['#A8E6CE', '#DCEDC2', '#FFD3B5', '#FFAAA6', '#FF8C94', '#FAD02C', '#FFA384', '#74BDCB', '#EEB5EB', '#FBAA60', '#FBC490']


export const utilService = {
    makeId,
    resolve,
    debounce,
    getRandomColor,
    getRandomInt,
    isTouchDevice
}


function makeId(length = 6) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}


function resolve(path, obj) {
    return path.split('.').reduce(function (prev, curr) {
        return prev ? prev[curr] : null
    }, obj)
}

function debounce(func, timeout = 0.75) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


function getRandomColor() {
    return cursorColors[getRandomInt(0, cursorColors.length - 1)]
}

function isTouchDevice(){
    return (('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0));
}