/* =============================================================
   Lente Vivo — form.js
   Validación del formulario de cotización #cotizacionForm.
   Depende de: Bootstrap (clases is-invalid / invalid-feedback)
               contacto.css (.alert-exito / .visible)
   ============================================================= */

document.addEventListener('DOMContentLoaded', () => {

  const form          = document.getElementById('cotizacionForm');
  const mensajeExito  = document.getElementById('mensajeExito');

  if (!form) return; // el script solo actúa en la página de contacto

  /* ── Campos ──────────────────────────────────────────────── */
  const campos = {
    nombre:  document.getElementById('nombre'),
    email:   document.getElementById('email'),
    asunto:  document.getElementById('asunto'),
    mensaje: document.getElementById('mensaje'),
  };

  /* ── Regex de email ──────────────────────────────────────── */
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  /* ── Reglas de validación por campo ─────────────────────── */
  const reglas = {
    nombre:  (v) => v.trim() !== '',
    email:   (v) => regexEmail.test(v.trim()),
    asunto:  (v) => v !== '',
    mensaje: (v) => v.trim() !== '',
  };

  /* ── Helpers ─────────────────────────────────────────────── */
  function marcarInvalido(el) {
    el.classList.add('is-invalid');
    el.classList.remove('is-valid');
  }

  function marcarValido(el) {
    el.classList.remove('is-invalid');
    el.classList.add('is-valid');
  }

  function validarCampo(nombre) {
    const el    = campos[nombre];
    const valido = reglas[nombre](el.value);
    valido ? marcarValido(el) : marcarInvalido(el);
    return valido;
  }

  /* ── Limpiar is-invalid al escribir (evento input) ───────── */
  Object.keys(campos).forEach((nombre) => {
    const el = campos[nombre];
    const evento = el.tagName === 'SELECT' ? 'change' : 'input';

    el.addEventListener(evento, () => {
      if (el.classList.contains('is-invalid')) {
        validarCampo(nombre);
      }
    });
  });

  /* ── Submit ──────────────────────────────────────────────── */
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validar todos los campos y acumular resultado
    const todoValido = Object.keys(campos)
      .map((nombre) => validarCampo(nombre))
      .every(Boolean);

    if (!todoValido) return; // detiene si alguno falló

    // ── Éxito: ocultar form y mostrar confirmación ────────────
    form.style.display = 'none';

    if (mensajeExito) {
      mensajeExito.classList.add('visible');   // activa contacto.css
    }
  });

});
