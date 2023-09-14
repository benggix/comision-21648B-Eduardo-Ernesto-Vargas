
// Eliminacion del post

function deletePost(postId) {
    fetch(`/delete/${postId}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    })

// El If --> se elimina un post --> recarga la pagina
     
    .then(response => {
        if (response.ok) {
            window.location.reload();
        } else {
            console.error('Error al eliminar el post');
        }
    })
    .catch(error => {
        console.error('Error al eliminar el post:', error);
    });
}

// le damos evento al click --> borrar la id

document.querySelectorAll('.delete-button').forEach(button => {
    button.addEventListener('click', () => {
        const postId = button.getAttribute('data-post-id');
        deletePost(postId);
    });
});
