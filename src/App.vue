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
    <div class="row">
      <div class="col-md-4 sidebar pd-top-300">
        <div class="avatar">
          <img
            class="img-fluid"
            id="myAvatar"
            src="./assets/newCVpic2806.jpeg"
            width="35%"
            alt="Do Manh Hung"
          />
          <h2 class="name">Do Manh Hung</h2>
          <h4 class="job">04/03/1995</h4>
        </div>

        <div class="module">
          <h3 class="module__title">
            <i class="fas fa-graduation-cap circle circle--medium"></i>
            <span>Education</span>
          </h3>
          <div class="module__content">
            <ul>
              <li class="flex">
                <i class="fas fa-school circle circle--small circle--white"></i>
                <div>Vietnam Trade Union University (2013 > 2015)</div>
                <br />
              </li>
              <li class="flex">
                <i class="fas fa-school circle circle--small circle--white"></i>
                <div>University of Transport Technology (2015 > 2019)</div>
                <br />
              </li>
              <li class="flex">
                <i
                  class="fas fa-graduation-cap circle circle--small circle--white"
                ></i>
                <div>Bachelor of Information Technology</div>
              </li>
            </ul>
          </div>
        </div>

        <div class="module">
          <h3 class="module__title">
            <i class="fas fa-graduation-cap circle circle--medium"></i>
            <span>CERTIFICATIONS</span>
          </h3>
          <div class="module__content">
            <ul>
              <li class="flex">
                <i class="fas fa-school circle circle--small circle--white"></i>
                <div>TOEIC score: 815</div>
                <br />
              </li>
            </ul>
          </div>
        </div>

        <div class="module">
          <h3 class="module__title">
            <i class="fas fa-address-book circle circle--medium"></i>
            <span>Contact</span>
          </h3>
          <div class="module__content">
            <ul>
              <li class="flex">
                <i
                  class="fa fa-map-marker circle circle--small circle--white"
                ></i>
                <span>Hanoi</span>
              </li>
              <li class="flex">
                <i class="fab fa-github circle circle--small circle--white"></i>
                <div>https://github.com/hungswifty</div>
              </li>
              <li class="flex">
                <i
                  class="fas fa-envelope circle circle--small circle--white"
                ></i>
                <div>domanhhung4395@gmail.com</div>
              </li>
              <li class="flex">
                <i class="fab fa-skype circle circle--small circle--white"></i>
                <div>domanhhung4395@gmail.com</div>
              </li>
              <li class="flex">
                <i class="fa fa-mobile circle circle--small circle--white"></i>
                <span>(+84) 386 086 724</span>
              </li>
            </ul>
          </div>
        </div>
        <!-- End .module #2 -->

        <div class="module module--progress">
          <h3 class="module__title">
            <i class="fa fa-graduation-cap circle circle--medium"></i>
            <span>Skill</span>
          </h3>
          <div class="module__content">
            <ul>
              <li class="flex">
                <i class="fab fa-html5 circle circle--small circle--white"></i>
                <div class="flex--1">
                  <span>HTML & CSS</span>
                  <span class="progress-bar"
                    ><span style="width:65%"></span
                  ></span>
                </div>
              </li>
              <li class="flex">
                <i
                  class="fab fa-js-square circle circle--small circle--white"
                ></i>
                <div class="flex--1">
                  <span>Javascript</span>
                  <span class="progress-bar"
                    ><span style="width:50%"></span
                  ></span>
                </div>
              </li>
              <li class="flex">
                <i
                  class="fab fa-stripe-s circle circle--small circle--white"
                ></i>
                <div class="flex--1">
                  <span>Scala</span>
                  <span class="progress-bar"
                    ><span style="width:50%"></span
                  ></span>
                </div>
              </li>
              <li class="flex">
                <i
                  class="fab fa-autoprefixer circle circle--small circle--white"
                ></i>
                <div class="flex--1">
                  <span>Apache Spark</span>
                  <span class="progress-bar"
                    ><span style="width:60%"></span
                  ></span>
                </div>
              </li>
              <li class="flex">
                <i class="fab fa-php circle circle--small circle--white"></i>
                <div class="flex--1">
                  <span>PHP</span>
                  <span class="progress-bar"
                    ><span style="width:60%"></span
                  ></span>
                </div>
              </li>
              <li class="flex">
                <i
                  class="fab fa-bootstrap circle circle--small circle--white"
                ></i>
                <div class="flex--1">
                  <span>Bootstrap</span>
                  <span class="progress-bar"
                    ><span style="width:70%"></span
                  ></span>
                </div>
              </li>
              <li class="flex">
                <i class="fab fa-vuejs circle circle--small circle--white"></i>
                <div class="flex--1">
                  <span>VueJS</span>
                  <span class="progress-bar"
                    ><span style="width:55%"></span
                  ></span>
                </div>
              </li>
              <li class="flex">
                <i class="fab fa-react circle circle--small circle--white"></i>
                <div class="flex--1">
                  <span>ReactJS</span>
                  <span class="progress-bar"
                    ><span style="width:50%"></span
                  ></span>
                </div>
              </li>
              <li class="flex">
                <i class="fab fa-react circle circle--small circle--white"></i>
                <div class="flex--1">
                  <span>React Native</span>
                  <span class="progress-bar"
                    ><span style="width:55%"></span
                  ></span>
                </div>
              </li>
              <li class="flex">
                <i class="fab fa-js circle circle--small circle--white"></i>
                <div class="flex--1">
                  <span>Jquery</span>
                  <span class="progress-bar"
                    ><span style="width:50%"></span
                  ></span>
                </div>
              </li>
              <li class="flex">
                <i
                  class="fab fa-laravel circle circle--small circle--white"
                ></i>
                <div class="flex--1">
                  <span>Laravel</span>
                  <span class="progress-bar"
                    ><span style="width:60%"></span
                  ></span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="module">
          <h3 class="module__title">
            <i class="fas fa-thumbs-up circle circle--medium"></i>
            <span>Hobby</span>
          </h3>
          <div class="module__content">
            <ul>
              <li class="flex">
                <i class="fa fa-book circle circle--small circle--white"></i>
                <div>Learning</div>
              </li>
              <li class="flex">
                <i
                  class="fab fa-foursquare circle circle--small circle--white"
                ></i>
                <div>Listening to music</div>
              </li>
              <li class="flex">
                <i class="fa fa-video circle circle--small circle--white"></i>
                <div>Watching Anime.</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-8 content">
        <div class="">
          <div class="section">
            <h2 class="module">
              <i class="fas fa-business-time circle circle--medium"></i>
              <span class="font-weight-bold gradient-text">EXPERIENCE</span>
              <!-- <button class="btn btn-info" id="downloadPdfBtn">To PDF</button> -->
            </h2>

            <!-- End .section__content -->

            <div class="section__content">
              <div class="module">
                <h3 class="module__title">
                  <i class="fa fa-meteor circle circle--small"></i>
                  <span class="gradient-text">Viettel Solutions</span>
                </h3>
                <div class="module__meta">
                  <span><i class="fas fa-user-md"></i>Data Engineer</span>
                </div>
                <div class="module__meta">
                  <span
                    ><i class="fa fa-globe"></i
                    >https://solutions.viettel.vn/</span
                  >
                  <span><i class="fa fa-calendar"></i>Jan 2021 > Now </span>
                </div>
                <div class="module__content">
                  <ul class="title title-margin">
                    <li>
                      ● Description: Developing system using Big Data technology
                    </li>
                    <li>
                      ● Researching on building Data Lake and Data Warehouse
                    </li>
                    <li>● Transforming data using Apache Spark</li>
                    <li>● Testing data quality by Deequ and Apache Spark</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="section__content">
              <div class="module">
                <h3 class="module__title">
                  <i class="fa fa-meteor circle circle--small"></i>
                  <span class="gradient-text">Viettelimex</span>
                </h3>
                <div class="module__meta">
                  <span><i class="fas fa-user-md"></i>Outsourcing</span>
                </div>
                <div class="module__meta">
                  <span
                    ><i class="fa fa-calendar"></i>SEP 2020 > DEC 2020
                  </span>
                </div>
                <div class="module__content">
                  <ul class="title title-margin">
                    <li>
                      ● Description: Developing system using Big Data technology
                    </li>
                    <li>● Backend: Using Scala with Apache Spark</li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="section__content">
              <div class="module">
                <h3 class="module__title">
                  <i class="fa fa-meteor circle circle--small"></i>
                  <span class="gradient-text">Connectiv Viet Nam</span>
                </h3>
                <div class="module__meta">
                  <span><i class="fas fa-user-md"></i>PHP Developer</span>
                  <span
                    ><i class="fas fa-user-md"></i>React Native Developer</span
                  >
                </div>
                <div class="module__meta">
                  <span
                    ><i class="fa fa-globe"></i
                    >https://connectiv.jp/connectiv-vietnam/</span
                  >
                  <span
                    ><i class="fa fa-calendar"></i>JUL 2019 - Jun 2020
                  </span>
                </div>
                <div class="module__content">
                  <h4>
                    <span class="gradient-text">
                      <i class="fas fa-star circle--medium"></i>
                      Freak Project (Jul 2019 - Nov 2019)
                    </span>
                  </h4>
                  <ul class="title title-margin">
                    <li>● Description: Recruitment website</li>
                    <li>
                      ● Frontend: Creating admin interface as required (VueJS)
                    </li>
                    <li>
                      ● Backend: Building admin functions and some of company
                      functions such as preview, sending mail, applying, etc.
                      (Laravel)
                    </li>
                    <li>
                      ● Website:
                      <a href="https://afternext.work"
                        >https://afternext.work</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="module__content">
                  <h4>
                    <span class="gradient-text">
                      <i class="fas fa-star circle--medium"></i>
                      Base Project and Stair project (Nov 2019 - March 1, 2020)
                    </span>
                  </h4>
                  <ul class="title title-margin">
                    <li>
                      ● Description: A web/app where student, company can
                      connect together
                    </li>
                    <li>
                      ● Frontend: Creating UI for IOS/Android App (React Native)
                    </li>
                  </ul>
                </div>
                <div class="module__content">
                  <h4>
                    <span class="gradient-text">
                      <i class="fas fa-star circle--medium"></i>
                      BConnectiv project (March 1, 2020 - Jun 2020)
                    </span>
                  </h4>
                  <ul class="title title-margin">
                    <li>
                      ● Description: Company's product
                    </li>
                    <li>
                      ● Frontend: Creating UI for IOS/Android App (React Native)
                    </li>
                    <li>
                      ● Backend: Building API such as showing user information,
                      editing user information, blocking user...
                    </li>
                  </ul>
                </div>
              </div>
              <!-- End .module #4 -->
            </div>

            <div class="section__content">
              <div class="module">
                <h3 class="module__title">
                  <i class="fa fa-meteor circle circle--small"></i>
                  <span class="gradient-text">T3H Education</span>
                </h3>
                <div class="module__meta">
                  <span><i class="fas fa-user-md"></i>Student</span>
                </div>
                <div class="module__meta">
                  <span><i class="fa fa-globe"></i>https://t3h.edu.vn</span>
                  <span
                    ><i class="fa fa-calendar"></i>JUN 2018 > DEC 2018
                  </span>
                </div>
                <div class="module__content">
                  <ul class="title title-margin">
                    <li>● Description: News/E-commerce website</li>
                    <li>● Frontend: Using HTML5, Bootstrap, JS, JQuery</li>
                    <li>● Backend: Using PHP/Laravel framework</li>
                  </ul>
                </div>
              </div>
              <!-- End .module #4 -->
            </div>
            <!-- End .section__content -->
          </div>
        </div>
        <div class="section">
          <h2 class="section__title">
            <i class="fas fa-project-diagram circle circle--medium"></i>
            <span class="font-weight-bold gradient-text">Side projects</span>
          </h2>

          <div class="section__content">
            <div class="module">
              <h3 class="module__title">
                <i class="fa fa-meteor circle circle--small"></i>
                <span class="gradient-text">Website</span>
              </h3>

              <div class="module__content">
                <ul class="title title-margin">
                  <li class="">
                    ● Description: Developing a real estate website using
                    laravel framework (Final year project)
                  </li>
                  <li>
                    ● Frontend: Using HTML5, Bootstrap to create main site.
                    Using VueJS to create admin interface
                  </li>
                  <li>
                    ● Backend: Building API such as login, forgotten password,
                    creating new post, editing, etc.
                  </li>
                </ul>
              </div>
            </div>

            <div class="module mt-0">
              <h3 class="module__title">
                <i class="fa fa-meteor circle circle--small"></i>
                <span class="gradient-text">Website</span>
              </h3>

              <div class="module__content">
                <ul class="title title-margin">
                  <li class="">
                    ● Description: Developing a Taylor Swift's News using
                    laravel framework
                  </li>
                  <li>
                    ● Frontend: Using HTML5, Bootstrap to create User interface
                    and Admin interface.
                  </li>
                  <li>
                    ● Backend: Building API such as creating, updating post,
                    removing user, comment, etc.
                  </li>
                </ul>
              </div>
            </div>
            <!-- End .module #4 -->
          </div>
          <!-- End .section #1 -->
          <div class="section" style="margin-left:0;">
            <h2 class="section__title">
              <i class="fa fa-briefcase circle circle--medium"></i>
              <span class="font-weight-bold gradient-text">Other skills</span>
            </h2>
            <div class="section__content">
              <div class="module">
                <div class="module__content">
                  <ul class="title">
                    <li>● Being fluent in both teamwork and independent.</li>
                    <li>
                      ● Reading documents and following request carefully.­
                    </li>
                    <li>● High responsibility at work.</li>
                    <li>● Withstanding the high pressure work</li>
                    <li>● Solidarity, honesty.</li>
                    <li>● Managing work effectively and clearly.</li>
                  </ul>
                </div>
              </div>
              <!-- End .module #4 -->
            </div>
            <!-- End .section__content -->
          </div>
          <!-- End .section #1 -->
          <div class="section"></div>
          <!-- End .section #2 -->
          <div class="section" style="margin-left:0">
            <h2 class="section__title">
              <i class="fa fa-briefcase circle circle--medium"></i>
              <span class="font-weight-bold gradient-text">Objectives</span>
            </h2>
            <div class="section__content">
              <div class="module">
                <div class="module__content">
                  <ul class="title">
                    <li>
                      ● Working in a professional, active and fairly competitive
                      working environment and having opportunities to get
                      promotion.
                    </li>
                    <li>
                      ● Improving myself and learning new skills while being on
                      the job unceasingly. In the future, my aim is to become a
                      valued employee of a company. Using my skills and
                      experiences to finish my job as good as i can
                    </li>
                  </ul>
                </div>
              </div>
              <!-- End .module #7 -->
            </div>
            <!-- End .section #2 -->
          </div>
          <!-- End .content -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";

export default {
  name: "app",
  components: {},
  mounted: function() {
    this.myMove();
    this.fadeInText();
  },
  methods: {
    myMove() {
      var element = document.getElementById("myAvatar");
      var pos = 0;
      var id = setInterval(frame, 0.5);
      function frame() {
        if (pos == 140) {
          clearInterval(id);
        } else {
          pos++;
          element.style.top = pos + "px";
          if (pos == 0) {
            element.style.opacity = 0;
          } else if (pos <= 30) {
            element.style.opacity = 0.3;
          } else if (pos <= 60) {
            element.style.opacity = 0.6;
          } else {
            element.style.opacity = 1;
          }
        }
      }
    },
    fadeInText() {
      $(window).on("load", function() {
        $(window)
          .scroll(function() {
            var windowBottom = $(this).scrollTop() + $(this).innerHeight();

            if ($(this).scrollTop() > 130) {
              $(".sidebar").css(
                "background-image",
                "linear-gradient(120deg, #43c6ac, #191654)"
              );
            } else {
              $(".sidebar").css(
                "background-image",
                "linear-gradient(120deg, #3d80bb, #9377aa, #d387a0)"
              );
            }

            $(".module").each(function() {
              /* Check the location of each desired element */
              var objectBottom = $(this).offset().top + $(this).outerHeight();

              /* If the element is completely within bounds of the window, fade it in */
              if (objectBottom < windowBottom) {
                //object comes into view (scrolling down)
                if ($(this).css("opacity") == 0) {
                  $(this).fadeTo(500, 1);
                }
              } else {
                //object goes out of view (scrolling up)
                if ($(this).css("opacity") == 1) {
                  $(this).fadeTo(500, 0);
                }
              }
            });
          })
          .scroll(); //invoke scroll-handler on page-load
      });
    },
  },
};
</script>

<style>
* {
  cursor: default;
}
html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
.row {
  margin-right: 0px !important;
}
body {
  line-height: 1.625;
  font-size: 16px;
  color: #263238;
  font-family: "Roboto Slab", serif;
  -webkit-font-smoothing: antialiased;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*,
*:before,
*:after {
  box-sizing: border-box;
}
img {
  vertical-align: middle;
  max-width: 100%;
}
.module__content ul {
  margin-top: 15px;
  padding-left: 1px;
}
.module__content p {
  padding-left: 50px;
}
.module__content .title li {
  margin-bottom: 10px;
}
.title-margin li {
  padding-left: 45px;
}
.content .module__content .flex {
  padding-left: 50px;
}
.content .module__content .flex:first-child {
  padding-left: 0px;
}
p {
  margin: 0 0 10px;
}
.pd-top-300 {
  padding-top: 350px;
}

/* Helper Class */
.flex {
  display: flex;
  margin-bottom: 10px;
}
.flex i {
  width: 30px !important;
}
.fa-map-marker,
.fa-linkedin {
  padding: 0px 10px !important;
}
.flex .flex--1 {
  flex: 1;
}
.flex .flex--1 p {
  padding-left: 0px;
}
.flex .flex--1 span {
  padding-bottom: 10px;
  display: block;
}
.flex .flex--1 span.progress-bar {
  width: 100% !important;
  height: 4px !important;
}

/* Global Layout */

.sidebar {
  background-image: linear-gradient(120deg, #1657a1, #9377aa, #af4a47);
  color: #fff;
  padding-right: 0px !important;
}

/* Gradient text */

/* Avatar */
h2.name {
  font-size: 24px;
}
h4.job {
  font-size: 18px;
}
.avatar {
  width: 100%;
  text-align: center;
  padding: 70px 0;
}
.avatar img {
  border-radius: 50%;
  border: 5px double rgba(1, 28, 1, 0.1);
  left: 33%;
  position: absolute;
}
h2.module {
  font-size: 18px;
}
.avatar h1 {
  font-size: 32px;
  text-transform: uppercase;
  margin: 25px 0 0;
  line-height: 1;
}
.avatar h4 {
  font-size: 22px;
  margin-top: 10px;
}

/* Module */
.sidebar .module {
  padding: 0 45px;
  margin-top: 50px;
}
.sidebar .module:last-child {
  margin-bottom: 50px;
}
.module__content {
  margin-left: 5px;
}
.module__title {
  font-size: 18px;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}
.module__meta {
  font-size: 14px;
  color: #90a4ae;
  margin-bottom: 15px;
  margin-top: 15px;
  padding-left: 45px;
}
.module__meta i {
  margin-right: 10px;
}
.module__meta span {
  margin-right: 20px;
}
.module__title .circle {
  margin-right: 10px;
}
.circle {
  font-size: 14px;
  color: #fff;
  background: #263238;
  border-radius: 50%;
  text-align: center;
  margin-right: 20px;
}
.circle.circle--large {
  width: 60px;
  height: 60px;
  line-height: 60px;
}
.circle.circle--medium {
  width: 42px;
  height: 42px;
  line-height: 42px;
}
.circle.circle--small {
  width: 30px;
  height: 30px;
  line-height: 30px;
}
.circle.circle--white {
  background: #fff;
  color: #263238;
}

/* Progress bar */
.progress-bar,
.progress-bar span {
  height: 6px;
  background: #fff;
  border-radius: 6px;
  display: block;
}
.progress-bar span {
  background: #263238;
}
.module--progress li {
  margin-bottom: 10px;
}
i.fa-star {
  color: white;
}

/* Section */
.section:not(.last-child) {
  margin-bottom: 25px;
  margin-left: 40px;
}
.section__title {
  font-size: 18px;
  text-transform: uppercase;
  margin: 0 0 10px;
}
.section__content {
  padding-left: 74px;
}
.content {
  padding-top: 30px;
}
.content .module:not(:first-child) {
  margin-top: 50px;
}
.content .module__title {
  margin-bottom: 0;
}

/* Language */

.lang__content h4 {
  text-transform: uppercase;
  margin-top: 15px;
}
a {
  color: #00428a !important;
}
.content .module__content .flex i {
  position: relative;
  bottom: 4px;
}
/*ressponsive*/
@media (max-width: 1141px) {
  .sidebar {
    min-width: 470px !important;
    max-width: 470px !important;
  }
  .content {
    max-width: calc(100% - 470px) !important;
  }
}
@media (max-width: 1024px) {
  .section:not(.last-child) {
    margin-left: 15px;
  }
}
@media (max-width: 942px) {
  .sidebar .module {
    padding: 0 10px;
    margin-top: 35px;
  }
  .sidebar {
    min-width: 410px !important;
    max-width: 410px !important;
  }
  .content {
    max-width: calc(100% - 410px) !important;
  }
  .fa-github {
    padding: 0px 10px;
  }
}
@media (max-width: 914px) {
  .sidebar {
    max-width: 100% !important;
    flex: 0px !important;
  }
  .content {
    max-width: 100% !important;
  }
  .sidebar .module {
    padding: 0 25px;
  }
  .content {
    flex: 0px !important;
  }
  .content .col-md-12 {
    padding: 0px 25px !important;
  }
}
@media (max-width: 540px) {
  .content .col-md-12,
  .sidebar .module {
    padding: 0px 15px 0px 15px !important;
  }
  .section__content {
    padding-left: 10px;
  }
  .content .module__title .circle {
    margin-right: 30px;
  }
  .title-margin li,
  .module__meta,
  .content .module__content .flex {
    padding-left: 0px;
  }

  .section__title {
    font-size: 18px;
  }
  .module__title span {
    font-size: 18px;
  }
  i.fa-star {
    display: none;
  }
  body {
    font-size: 14px !important;
  }
}
</style>
