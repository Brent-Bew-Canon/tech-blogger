const createPost = (event) => {
  event.preventDefault();
  document.location.replace('/createPost');
}

// const delButtonHandler = async (event) => {
//   if (event.target.hasAttribute('data-id')) {
//     const id = event.target.getAttribute('data-id');

//     const response = await fetch(`/api/projects/${id}`, {
//       method: 'DELETE',
//     });

//     if (response.ok) {
//       document.location.replace('/profile');
//     } else {
//       alert('Failed to delete project');
//     }
//   }
// };



document
  .querySelector('.create-post')
  .addEventListener('click', createPost);

// document
//   .querySelector('.project-list')
//   .addEventListener('click', delButtonHandler);
