document.addEventListener('click', (e) => {

    const viewer = document.getElementById('imageModal');
    const viewerImg = document.getElementById('modalImage');

    if (!viewer || !viewerImg) return;

    const img = e.target.closest('.gallery-item img');

    // ABRIR
    if (img) {
        viewer.classList.add('active');
        viewerImg.src = img.src;
        return;
    }

    // CERRAR BOTÓN
    if (e.target.closest('.close-modal')) {
        viewer.classList.remove('active');
        return;
    }

    // CERRAR AFUERA
    if (viewer.classList.contains('active') && e.target !== viewerImg) {
        viewer.classList.remove('active');
    }

});