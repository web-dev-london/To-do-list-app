window.addEventListener('load', () => {
  const form = document.querySelector('#task-form');
  const input = document.querySelector('#task-input');
  const list_el = document.querySelector('#tasks');

  // It will stop refreshing the page
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get value of input
    const task = input.value;

    // Create element of div parent node
    const task_el = document.createElement('div');
    task_el.classList.add('task');

    // Cearte element of div child node
    const task_content_el = document.createElement('div');
    task_content_el.classList.add('content');

    // Add child node to parent node with appendChild method
    task_el.appendChild(task_content_el);

    // Create element of input with value, type & attribute
    const task_input_el = document.createElement('input');
    task_input_el.classList.add('text');
    task_input_el.type = 'text';
    task_input_el.value = task;
    task_input_el.setAttribute('readonly', 'readonly');

    // Add child node to parent node element
    task_content_el.appendChild(task_input_el);

    // Create element of div
    const task_actions_el = document.createElement('div');
    task_actions_el.classList.add('actions');

    // Create element of button with class edit and text
    const task_edit_el = document.createElement('button');
    task_edit_el.classList.add('edit');
    task_edit_el.innerText = 'Edit';

    // Create element of button with class delete and text
    const task_delete_el =
      document.createElement('button');
    task_delete_el.classList.add('delete');
    task_delete_el.innerText = 'Delete';

    // Add two elements child(buttons) nodes to parent
    task_actions_el.appendChild(task_edit_el);
    task_actions_el.appendChild(task_delete_el);

    // Add element to parent node
    task_el.appendChild(task_actions_el);

    // Add element to parent node
    list_el.appendChild(task_el);

    // Set value of input to empty string
    input.value = '';

    // Add Event Handler to Edit button
    task_edit_el.addEventListener('click', () => {
      if (
        task_edit_el.innerText.toLowerCase() === 'edit'
      ) {
        task_edit_el.innerText = 'Save';
        task_input_el.removeAttribute('readonly');
        task_input_el.setAttribute(
          'placeholder',
          'Edit your task...',
        );
        task_input_el.focus();
        return;
      }
      task_edit_el.innerText = 'Edit';
      task_input_el.setAttribute('readonly', 'readonly');
      task_input_el.removeAttribute(
        'placeholder',
        'Edit your task...',
      );
    });

    // Add Event Handler to Delete button
    task_delete_el.addEventListener('click', () => {
      list_el.removeChild(task_el);
    });
  });
});
