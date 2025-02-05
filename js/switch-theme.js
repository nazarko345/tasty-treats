document.addEventListener('DOMContentLoaded', function() {
    const switchContainers = document.querySelectorAll('.switch-container-universal, .switch-container-mob');
    switchContainers.forEach(switchContainer => {
      switchContainer.addEventListener('click', function() {
        document.body.classList.toggle('dark');
        switchContainer.classList.toggle('dark');
      });
    });
  });