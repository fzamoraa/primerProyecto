    // Adaptado para articulo-pitch-pixel.html
    // Muestra una animación (SweetAlert2) al enviar el formulario de comentarios

    document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form.form-comentario');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Evita que se recargue la página

        const nombreEl = document.getElementById('p-nombre');
        const mensajeEl = document.getElementById('p-mensaje');

        const nombre = (nombreEl?.value || '').trim() || 'Anónimo';
        const mensaje = (mensajeEl?.value || '').trim();

        // Animación de confirmación usando SweetAlert2
        Swal.fire({
        title: '¡Comentario enviado!',
        html: `Muchas gracias por tu comentario <b>${nombre}</b>`,
        icon: 'success',
        confirmButtonText: 'Cerrar',
        showClass: { popup: 'swal2-show' },
        hideClass: { popup: 'swal2-hide' }
        }).then(() => {
        // Limpia el formulario después de cerrar el modal
        form.reset();
        });
    });
    });
