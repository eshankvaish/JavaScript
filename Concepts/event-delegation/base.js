document.querySelector('#list').addEventListener('click', (e) => {
    if(e.target.tagName === 'LI') {
        console.log(e.target.id + " was clicked!!");
    }
});