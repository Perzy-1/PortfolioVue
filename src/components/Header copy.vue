
<template>
    <div class="md:min-w-full w-screen   rounded-full flex self-center justify-center items-center  ">
   
      <div :class="{' fixed  p-6  flex flex-row rounded-full transition-all  animate-collapse duration-500 ease-in-out   self-center justify-center items-center ': hideNav, 'animate-recollapse ': !hideNav }" 
        class=" fixed border-none z-50 top-0 bg-Corbeau-800 flex self-center justify-center items-center ease-in-out duration-500 py-2   ">
        
            <nav id="nav"class="relative w-fit place-self-center bg-Corbeau-800  gap-1  flex" >
              
              <a id="1" href="#home" class="btn-nav-style"     @click.prevent="handleClick($event)">Home</a>
              <a id="2" href="#about" class="btn-nav-style"  @click.prevent="handleClick($event)" >About</a>
              <a id="3" href="#projects"class="btn-nav-style"  @click.prevent="handleClick($event)" >Projects</a>
              <a id="4"href="#contact"class="peer  btn-nav-style"   @click.prevent="handleClick($event)"  >Contact</a>
              <a :class="{'border-none transition duration-1000 ease-in': hideNav}" to="/resume"class="  border border-solid border-opacity-20 border-Moonraker text-Llilacquered-900 rounded-lg px-4 py-2 font-sans btn-hover-effect cursor-pointer">Resume</a>
              
              <span id="menu-indicator"class=" z-0 w-93px h-10 btn-active-effect absolute left-0 " >     </span>

            </nav>
            
      </div>

      
    
    </div>
    
  </template>
  
  <script>
  import { ref, onMounted, onUnmounted } from 'vue';
  
  export default {
  

    props: {
      scrollToSection: Function, // Receiving the scrollToSection method from parent component
    },
    setup() {
      


      
      
      const updateActiveSection = () => {
        const sections = document.querySelectorAll('section');
        
      sections.forEach((section) =>{
        const scrollPosition = window.pageYOffset;
        const offsetTop = section.offsetTop + 600 ;
        const offsetHeight = section.offsetHeight;
        const id = section.getAttribute('id');
       
        
        if (scrollPosition <= offsetTop && scrollPosition > offsetTop - offsetHeight  ){
         
          const current = document.querySelector('nav a[href*=' + id + ']')
          console.log(current.offsetLeft);
          const indicator = document.getElementById('menu-indicator');
          indicator.style.left = current.offsetLeft+ "px";
          
        }
        
      });
    };


    const hideNav = ref(false);
    let lastScrollTop = 0;
  
    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
          hideNav.value = true; // Hide the nav when scrolling down
        } 
        if (window.pageYOffset==0){
          hideNav.value = false; // Show the nav when scrolling up
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
      };
  
      onMounted(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('scroll', updateActiveSection);
      });
  
      onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('scroll', updateActiveSection);
      });
  
      return {
        hideNav, 
        sliderPosition: 0,
        selectedElementWidth: 93,
        selectedIndex: 0,

      };
    },
      methods: {
      sliderIndicator(id) {
        let el = document.getElementById(id);
       
        this.sliderPosition = el.offsetLeft;
        this.selectedElementWidth = el.offsetWidth;
        this.selectedIndex = id;

        const indicator = document.getElementById('menu-indicator');
        indicator.style.left = this.sliderPosition + "px";
        
      },
      handleClick(event) {
        const href = event.target.getAttribute('href'); // Get the href attribute
        const id = event.target.getAttribute('id'); // Get the href attribute
        let cleanHref = href.replace("#", "");
        
        this.scrollToSection(cleanHref); // Example: Using href to scroll
        this.sliderIndicator(id);
      },
      
    },
 

  };
  </script>
  
