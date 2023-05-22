import Super from '../super';

export class Navbar extends Super {
  constructor() {
    super();
    this.navbar = document.getElementById('navbar');
  }

  navScroll() {
    if (window.scrollY >= 80) {
      this.navbar.classList.add('nav-scroll');
    } else {
      this.navbar.classList.remove('nav-scroll');
    }
  }

  onScroll() {
    window.addEventListener('scroll', this.debounce(this.navScroll, 200));
  }
}

export class NavResponsive extends Super {
  constructor() {
    super();
    this.navbarList = document.getElementById('navbar_list');
    this.navbarItems = document.querySelectorAll('#navbar_list > li > a');
    this.openMenu = document.getElementById('open_menu');
    this.closeMenu = document.getElementById('close_menu');
    this.mainContent = document.querySelector('main');
  }

  openNavList = (e) => {
    e.stopPropagation();
    this.navbarList.classList.add('navbar-res');
    this.openMenu.style.display = 'none';
    this.closeMenu.style.display = 'block';
  };

  closeNavList = (e) => {
    e.stopPropagation();
    if (window.innerWidth <= 768) {
      this.navbarList.classList.remove('navbar-res');
      this.openMenu.style.display = 'block';
      this.closeMenu.style.display = 'none';
    }
  };

  windowResize = () => {
    if (window.innerWidth <= 768) {
      this.openMenu.style.display = 'block';
    } else {
      this.openMenu.style.display = 'none';
      if (this.closeMenu.style.display === 'block') {
        this.navbarList.classList.remove('navbar-res');
        this.closeMenu.style.display = 'none';
      }
    }
  };

  onResize() {
    this.openMenu.addEventListener('click', this.openNavList);
    this.closeMenu.addEventListener('click', this.closeNavList);
    this.mainContent.addEventListener('click', this.closeNavList);
    this.navbarItems.forEach((item) => item.addEventListener('click', this.closeNavList));
    window.addEventListener('resize', this.debounce(this.windowResize, 300));
  }
}
