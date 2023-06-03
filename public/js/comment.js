

const newFormHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment').value.trim();
    const url = window.location.href;
    let title = url.split('https://arcane-depths-18823.herokuapp.com/project/');
    title = title[1]
    title = Number(title)
    console.log(title)
    console.log(comment)

    if (comment) {
        const response = await fetch(`/api/projects/comment`, {
            method: 'POST',
            body: JSON.stringify({ comment, title }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.reload();
            console.log('success')
        }
        // else {
        //     alert('Failed to post comment');
        // }
    }
};

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);