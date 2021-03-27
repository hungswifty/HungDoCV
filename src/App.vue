<template>
  <div id="container">
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Montserrat"
      rel="stylesheet"
      type="text/css"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Lato"
      rel="stylesheet"
      type="text/css"
    />
    
      <div class="banner">
        <h2 id="text">HUNG DO</h2>
        <div class="clouds">
          <img src="./assets/cloud1.png" style="--i:1;" />
          <img src="./assets/cloud2.png" style="--i:2;" />
          <img src="./assets/cloud3.png" style="--i:3;" />
          <img src="./assets/cloud4.png" style="--i:4;" />
          <img src="./assets/cloud5.png" style="--i:5;" />
          <img src="./assets/cloud1.png" style="--i:10;" />
          <img src="./assets/cloud2.png" style="--i:9;" />
          <img src="./assets/cloud3.png" style="--i:8;" />
          <img src="./assets/cloud4.png" style="--i:7;" />
          <img src="./assets/cloud5.png" style="--i:6;" />
        </div>
      </div>
      <section>
        <div class="card-container">
          <h2 class="bsinfo-label">BASIC INFORMATION</h2>
          <!-- Card 1-->
          <div class="card">
            <div class="imgBx">
              <h3 class="card-label">CONTACT</h3>
              <img src="./assets/ts3.png" data-text="Design">
            </div>
            <div class="content">
              <div>
                <h3>Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis officiis sunt hic! Facere possimus illo animi, quam fugit voluptates assumenda deserunt ipsa repellendus necessitatibus nisi. Tenetur dolorem dolores veritatis nostrum?</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <!-- Card 2-->
          <div class="card">
            <div class="imgBx">
              <h3 class="card-label">EDUCATION</h3>
              <img class="" src="./assets/ts2.jpg" data-text="Launch" >
            </div>
            <div class="content">
              <div>
                <h3>Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis officiis sunt hic! Facere possimus illo animi, quam fugit voluptates assumenda deserunt ipsa repellendus necessitatibus nisi. Tenetur dolorem dolores veritatis nostrum?</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
          <!-- Card 3 -->
          <div class="card">
            <div class="imgBx">
              <h3 class="card-label">CERTs</h3>
              <img src="./assets/ts.jpg" data-text="Earn" >
            </div>
            <div class="content">
              <div>
                <h3>Design</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis officiis sunt hic! Facere possimus illo animi, quam fugit voluptates assumenda deserunt ipsa repellendus necessitatibus nisi. Tenetur dolorem dolores veritatis nostrum?</p>
                <a href="#">Read More</a>
              </div>
            </div>
          </div>
        <!-- End card -->
        
      </div>
      <!-- SKills -->
      <div class="skills">
        <h2 class="skills-label">SKILLS</h2>
        <li>
          <h3>HTML5 & CSS</h3><span class="bar"><span class="html-css"></span></span>
        </li>
        <li>
          <h3>Javascript</h3><span class="bar"><span class="js"></span></span>
        </li>
        <li>
          <h3>PHP</h3><span class="bar"><span class="php"></span></span>
        </li>
        <li>
          <h3>Bootstrap</h3><span class="bar"><span class="bootstrap"></span></span>
        </li>
        <li>
          <h3>VueJS</h3><span class="bar"><span class="vuejs"></span></span>
        </li>
        <li>
          <h3>ReactJS</h3><span class="bar"><span class="reactjs"></span></span>
        </li>
        <li>
          <h3>React Native</h3><span class="bar"><span class="reactnative"></span></span>
        </li>
        <li>
          <h3>Jquery</h3><span class="bar"><span class="jquery"></span></span>
        </li>
        <li>
          <h3>Laravel</h3><span class="bar"><span class="laravel"></span></span>
        </li>
      </div>
      </section>
    </div>

</template>

<script>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "app",
  components: {},
  mounted: function() {
    this.checkWidthToUseScrollTrigger();
    this.flyingText();
  },
  methods: {
    checkWidthToUseScrollTrigger(){
      if (window.matchMedia("(min-width: 850px)").matches) {
        this.scrollAnimation();
      }
    },
    scrollAnimation(){
      let tl1 = gsap.timeline({
        scrollTrigger: {
          trigger: "section",
          start: "20% center",
          end: "bottom top",
          // markers: true,
          scrub: true,
          pin: true,
        }
      })
      tl1.from(".bsinfo-label", { x : innerWidth * 1, opacity: 0 })
      tl1.from(".skills-label", { x : innerWidth * -1, opacity: 0 })
    // tl1.from(".text3", { x : innerWidth * 1, opacity: 0 })
    // tl1.from(".logo", { y: innerHeight * 2, opacity: 0, duration: 1.5 })

    // let tl2 = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".box2",
    //     start: "center center",
    //     end: "bottom top",
    //     // markers: true,
    //     scrub: true,
    //     pin: true,
    //   }
    // })
    // tl2.from(".text4", { x : innerWidth * 1, opacity: 0 })
    // tl2.from(".text5", { x : innerWidth * 1, opacity: 0 })
    // tl2.from(".text6", { x : innerWidth * 1, opacity: 0 })
    },
    

    flyingText() {
      let text = document.getElementById("text");
      window.addEventListener("scroll", function() {
        let value = window.scrollY;
        text.style.marginBottom = value * 2 + "px";
      });
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700;800;900&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
body{
  overflow-x: hidden;
}
.banner {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("./assets/ts.jpg");
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
}
.banner #text {
  position: relative;
  font-size: 10em;
  text-shadow: 2px 2px darkgrey;
  color: #fff;
}
.banner .clouds {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}
.banner .clouds img {
  position: absolute;
  bottom: 0;
  max-width: 100%;
  animation: animate calc(2s * var(--i)) linear infinite;
}
@keyframes animate {
  0% {
    opacity: 0;
    transform: scale(1);
  }
  25%,
  75% {
    opacity: 0.8;
  }
  100% {
    opacity: 0;
    transform: scale(3);
  }
}
section {
  position: relative;
  padding: 75px 100px;
}
section h2 {
  position: relative;
  font-size: 2.5em;
  margin-bottom: 20px;
}

/* Card */
.card-container {
  position: relative;
  /* width: 100%; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px;
}
.card-container h2.bsinfo-label {
  width: 100%
}
.card-container .card{
  position: relative;
  height: 400px;
  background: #fff;
  display: flex;
  width: 30%;
  margin: 35px 0;
}
.card-container .card .imgBx{
  position: absolute;
  top: 0;
  left: 0;
  background: #333;
  z-index: 1;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  overflow: hidden;
  transition: 0.5s ease-in-out;
}
.card-container .card:hover .imgBx{
  border-radius: 50%;
  width: 150px;
  height: 150px;
  top: -125px;
  left: calc(50% - 75px);
  transition: 0.5 ease-in-out;
  background: #ff0057;
}
.card-container .card h3.card-label{
  cursor: default;
  position: absolute;
  bottom: 15%;
  left: 15%;
  width: 100%;
  font-size: 3em;
  color: rgba(255,255,255,.05);
  font-weight: 700;
}
.card-container .card .imgBx img{
  max-width: 100px;
  transition: 0.5s ease-in-out;
}
.card-container .card:hover .imgBx img{
  max-width: 75px;
}
.card-container .card .content{
  position: absolute;
  right: 0;
  width: calc(100% - 75px);
  height: calc(100% - 50px);
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;  
}
.card-container .card .content div{
  height: 100%;
  
}
.card-container .card .content h3{
  margin-bottom: 5px;
  font-size: 24px;
}
.card-container .card .content p{
  height: 100px;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-container .card .content a{
  display: inline-block;
  margin-top: 10px;
  padding: 5px 10px;
  background: #333;
  text-decoration: none;
  color: #fff;
}

/* Scrollbar */
::-webkit-scrollbar{
  width: 12px;
  border-top: 30%;
}
::-webkit-scrollbar-thumb{
  background:linear-gradient(340deg, rgba(2,0,36,1) 0%, rgba(119,119,119,1) 46%, rgba(229,251,255,1) 100%);
  
}

/* Skills */
.skills{
  /* width: vw; */
  background: url("./assets/ts5.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.skills h2.skills-label{
  width:100%;
}
.skills li{
  list-style-type: none;
  margin: 20px 0;
}
.skills li h3{
  color: #fff;
  text-shadow: 2px 2px #353b48;
}
.bar{
  background: #353b48;
  display: block;
  height: 6px;
  border: 1px solid rgba(0,0,0,0.3);
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 0 10px #2187e7b3;
}
.bar span{
  height: 3px;
  float: left;
  background: #2187e7;
}
.html-css{
  width: 75%;
  animation: skillAnimation 5s;
}
.js{
  width: 60%;
  animation: skillAnimation 5s;
}
.php{
  width: 70%;
  animation: skillAnimation 5s;
}
.bootstrap{
  width: 70%;
  animation: skillAnimation 5s;
}
.vuejs{
  width: 60%;
  animation: skillAnimation 5s;
}
.reactjs{
  width: 60%;
  animation: skillAnimation 5s;
}
.reactnative{
  width: 65%;
  animation: skillAnimation 5s;
}
.jquery{
  width: 60%;
  animation: skillAnimation 5s;
}
.laravel{
  width: 75%;
}

@keyframes skillAnimation {
  0%{
   width: 0;
  }
}
/* Responsive */

@media (max-width: 1150px ){
  .banner #text{
    font-size: 9em;
  }
  .card-container{
    width: 100%;
    flex-direction: row;
    align-items: center;

  }
  .card-container .card{
    width: 300px;
  }
}

@media (max-width: 768px ){
  .banner #text{
    font-size: 7em;
  }
  .card-container .card{
    max-width: 300px;
    flex-direction: column;
    height: 100%;
    border-radius: 10px 10px 0 0;
  }

  .card-container .card .imgBx{
    position: relative;
  }
  .card-container .card .imgBx,
  .card-container .card:hover .imgBx{
    width: 100%;
    height: 200px;
    left:0;
    top:0;
    border-radius: 10px 10px 0 0;

  }

  .card-container .card .imgBx:hover{
    
  }
  .card-container .card .imgBx img,
  .card-container .card:hover .imgBx img{
    max-width: 100px;

  }
  .card-container .card .content{
    position: relative;
    widows: 100%;
  }
  
}
</style>
