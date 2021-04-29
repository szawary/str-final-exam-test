function changeElements() {
    // example osztályú elemek kiválasztása, 
    // héttér vörös, betű dölt
    document.querySelectorAll('.example').forEach(elem => {
        elem.style.backgroundColor = 'red';
        elem.style.fontStyle = 'italic';
    });
}


export { changeElements };