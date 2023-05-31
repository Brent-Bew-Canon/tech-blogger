const updateHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#postTitle').value
    const content = document.querySelector('#postContent').value
    const id = document.querySelector('#id').innerHTML

    const response = await fetch(`/api/projects`, {
        method: 'PUT',
        body: JSON.stringify({ title, content, id }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
        console.log("update successfull!")
    } else {
        alert('Failed to update post');
    }
};

document
    .querySelector('.update')
    .addEventListener('click', updateHandler);