const { doc } = require("prettier");

const newFormHandler = async (event) => {
    event.preventDefault();

    const comment = document.querySelector('#comment').value.trim();
    const title = document.querySelector('#title').value;

    if (comment) {
        const response = await fetch(`/api/projects/comment`, {
            method: 'POST',
            body: JSON.stringify({ comment, title }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post');
        }
    }
};

document
    .querySelector('.new-comment-form')
    .addEventListener('submit', newFormHandler);