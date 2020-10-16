document.querySelector('.grandparent-bubble').addEventListener('click', (e) => {
    console.log("Bubble Grandparent");
    //e.stopPropagation();
});
document.querySelector('.parent-bubble').addEventListener('click', (e) => {
    console.log("Bubble Parent");
});
document.querySelector('.child-bubble').addEventListener('click', (e) => {
    console.log("Bubble Child");
    //e.stopPropagation(); //to stop the propagation
});
//useCapture is false by default

document.querySelector('.grandparent-capture').addEventListener('click', (e) => {
    console.log("Capture Grandparent");
    //e.stopPropagation();
}, useCapture = true);
document.querySelector('.parent-capture').addEventListener('click', (e) => {
    console.log("Capture Parent");
}, useCapture = true);
document.querySelector('.child-capture').addEventListener('click', (e) => {
    console.log("Capture Child");
}, useCapture = true);