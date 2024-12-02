



<template >
<div class="bg-Corbeau-900 w-screen  md:min-w-full min-h-screen conatiner flex flex-col  justify-center order-1  overflow-y-scroll overflow-hidden ">
   

  
  <Header :scrollToSection="scrollToSection"/>
    

    <section id="home" ref="home">
        <Home/>
    </section>

    <section id="about" ref="about">
        <About/>
    </section>
    
    <section id="projects" ref="projects">
      <Projects/>
  </section>
  <section  id="contact" ref="contact">
      <Contact/>
  </section>


      
      
  

</div>  
   



    
    
  
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import Header from './components/Header.vue';
import Home from './views/Home.vue';
import About from './views/AboutMe.vue';
import Projects from './views/Projects.vue';
import Contact from './views/Contact.vue';

export default {
  components: {
    Home,
    About,
    Projects,
    Contact,
    Header,
  },
  setup() {
    const home = ref(null);
    const about = ref(null);
    const contact = ref(null);
    const projects = ref(null);
    
    const scrollToSection = (section) => {
   
      if (section === 'home') {
        home.value.scrollIntoView({ behavior: 'smooth' });
      } else if (section === 'about') {
        about.value.scrollIntoView({ behavior: 'smooth' });
      }else if (section === 'contact') {
        contact.value.scrollIntoView({ behavior: 'smooth' });
      }else if (section === 'projects') {
        projects.value.scrollIntoView({ behavior: 'smooth' });
      }
      
    };

    const test= () => {
      const element = document.getElementById('about');
    const offsetTop = element.offsetTop;
    //console.log(offsetTop);
    }

    onMounted(() => {
        window.addEventListener('scroll', test);
        
      });

    return {
      home,
      about,
      contact,
      projects,
      scrollToSection,
    };
  },
};
</script>
<style>
/* Optional custom styles */
html, body {
  scroll-behavior: smooth;
}
</style>