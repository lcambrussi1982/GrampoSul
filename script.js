document.addEventListener('DOMContentLoaded', () => {
  // Script para alternar a visibilidade do menu de navegação no mobile
  const toggleButton = document.querySelector('.toggle-button');
  const sidenav = document.querySelector('.sidenav');

  // Ativa/desativa a classe 'active' na sidenav (menu lateral)
  toggleButton.addEventListener('click', () => {
    sidenav.classList.toggle('active');
  });

  // Script para adicionar a classe 'scrolled' à navbar quando o usuário rola a página
  const backToTopButton = document.getElementById('backToTop');
  const navbar = document.querySelector('.navbar');

  // Função de rolagem
  window.addEventListener('scroll', () => {
    // Verificar se a rolagem atingiu mais de 50px
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled'); // Adiciona a classe 'scrolled' na navbar
    } else {
      navbar.classList.remove('scrolled'); // Remove a classe 'scrolled' se menos de 50px
    }

    // Mostrar o botão de voltar ao topo quando o usuário rolar mais de 300px
    if (window.scrollY > 300) {
      if (!backToTopButton.classList.contains('show')) {
        backToTopButton.classList.add('show');
      }
    } else {
      if (backToTopButton.classList.contains('show')) {
        backToTopButton.classList.remove('show');
      }
    }
  });

  // Função para rolagem suave para links internos
  const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

  smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault(); // Impede o comportamento padrão do link

      const targetId = link.getAttribute('href').substring(1); // Obtém o ID do alvo
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - document.querySelector('.navbar').offsetHeight, // Ajusta a rolagem considerando a altura da navbar
          behavior: 'smooth' // Define o comportamento suave
        });
      }
    });
  });

  // Função para rolar suavemente até o topo quando o botão for clicado
  backToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
