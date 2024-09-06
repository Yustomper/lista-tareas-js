const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTareas = document.getElementById('lista-de-tareas');

function agregarTarea() {
  if (input.value) {
    let tareaNueva = document.createElement('div');
    tareaNueva.classList.add('tarea');

    let texto = document.createElement('p');
    texto.innerText = input.value;

    tareaNueva.appendChild(texto);

    let iconos = document.createElement('div');
    iconos.classList.add('iconos');

    let completar = document.createElement('i');
    completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
    completar.addEventListener('click', () => {
      texto.style.textDecoration = texto.style.textDecoration === 'line-through' ? '' : 'line-through';
    });

    let eliminar = document.createElement('i');
    eliminar.classList.add('bi', 'bi-trash-fill', 'icono-eliminar');
    eliminar.addEventListener('click', () => {
      listaDeTareas.removeChild(tareaNueva);
    });

    let editar = document.createElement('i');
    editar.classList.add('bi', 'bi-pencil-fill', 'icono-editar');
    editar.addEventListener('click', () => {
      const nuevoTexto = prompt('Edita tu tarea:', texto.innerText);
      if (nuevoTexto) {
        texto.innerText = nuevoTexto;
      }
    });

    iconos.append(completar, eliminar, editar);
    tareaNueva.appendChild(iconos);
    listaDeTareas.appendChild(tareaNueva);
    input.value = '';
  } else {
    alert('Por favor, ingresa una tarea');
  }
}

boton.addEventListener('click', agregarTarea);

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    agregarTarea();
  }
});
