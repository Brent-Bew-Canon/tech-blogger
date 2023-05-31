const del = document.querySelectorAll(".btn-danger")

const createPost = (event) => {
  event.preventDefault();
  document.location.replace('/createPost');
}

const delButtonHandler = async (event) => {
  if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/projects/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to delete project');
    }
  } else {
    console.log("couldn't send to delete route")
  }
};



document
  .querySelector('.create-post')
  .addEventListener('click', createPost);

del.forEach(button => {
  button.addEventListener('click', delButtonHandler)
})

// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);
