console.log(632)
        const li = document.createElement('li');
        li.innerText = "Hiii6777";
        const ul = document.getElementById('ul-id');

        const buttonId = document.getElementById('button-id');
        console.log(buttonId);
        buttonId.addEventListener('click', function () {
            console.log(64565)
            const inputId = document.getElementById('input-id');
            console.log(inputId);
            const inputValue = inputId.value;
            console.log(inputValue)

            const newComment = document.createElement('p');
            console.log(newComment)
            newComment.innerText = inputValue;

            const allCommentsIs = document.getElementById('all-comments');
            allCommentsIs.appendChild(newComment)

            inputId.value = ''
        })