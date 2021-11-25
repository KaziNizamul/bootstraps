{/* <div id="category">
<ul>
    <li id="laptop" class="lappy">laptop</li>
    <li id="camera" class="cammy"> camera</li>
    <li id="desktops"> desktop</li>
</ul>
</div> */}


document.querySelector('#category').addEventListener('click', function (event) {
    console.log(event.target.id);

    if (event.target.tagName === 'LI') {
        window.location.href = '/' + event.target.id;
        // console.log(event.currentTarget);
    }
})


