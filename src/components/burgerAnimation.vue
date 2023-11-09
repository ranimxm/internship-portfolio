<template>
    <div id="body">
        <div id="ground"></div>
        <div id="floor">
            <div id="burger-container">
            <div class="burder burger-top">
              <div class="burger2-top-inner"></div>
              <div class="burger-top-inner"></div>
              <div class="dot dot-one"></div>
              <div class="dot dot-two"></div>
              <div class="dot dot-three"></div>
              <div class="dot dot-four"></div>
              <div class="dot dot-five"></div>
              <div class="dot dot-six"></div>
              <div class="dot dot-seven"></div>
              <div class="dot dot-eight"></div>
              <div id="eye-left"></div>
              <div id="eye-right"></div>
            </div>
            <div class="green">
              <div class="green-inner">
                <div class="sub-green"></div>
              </div>
              <div class="green-shadow"></div>
            </div>
            <div class='red'>
              <div class="red-inner"></div>
              <div class="red-shadow"></div>
            </div>
            <div class="burder burger-bottom">
              <div class="burger2-bottom-inner"></div>
              <div class="burger-bottom-inner"></div>
            </div>

          </div>
          <!--- start of chopsticks --->
          <div id="chopsticks-container">
            <div class='eye-s-left'></div>
            <div class='eye-s-right'></div>

            <div class="stick one">
              <div class="inside-stick">
                <div class="stick-shadow"></div>
              </div>
              <div class='stick-out-shadow'></div>
            </div>
            <div class="stick two">
              <div class="inside-stick">
                <div class="stick-shadow"></div>
                <div class='stick-out-shadow'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<style scoped>

div#floor {
  height: 4px;
  width: 800px;
  background-color: black;
  position: absolute;
  top: 90%;
  left: 50%;
  transform: translate(-50%, -50%);
}
/* burger */
div#burger-container {
  width: 200px;
  height: 200px;
  position: absolute;
  bottom: 0px;
  transform-origin: 200% center;
  left: 13%;
  animation: ddd 0.7s ease 1, back 1s ease 1.5s 1;
}
@keyframes back {
  25% {
    bottom: 8px;
  }
  50% {
    left: -2%;
    bottom: 0px;
  }

  100% {
    left: 13%;
    bottom: 0px;
  }
}
@keyframes ddd {
  25% {
    bottom: 50px;
  }
  50% {
    bottom: 0px;
    left: 50%;
  }
  80% {
    left: 50%;
  }

  100% {
    left: 13%;
  }
}

div.burger-top {
  width: 150px;
  height: 40px;
  border: 3px solid black;
  border-radius: 43px 43px 0px 0px;
  position: absolute;
  background-color: rgb(255, 255, 255);
  top: 35.5%;
  left: 6%;
  transform-origin: left bottom;
  overflow: hidden;
  animation: sss 0.7s ease 1, back2 1s ease 1.5s 1;
}

@keyframes back2 {
  25% {
    top: 30%;
  }
  50% {
    top: 35.5%;
  }
  100% {
    top: 35.5%;
  }
}

@keyframes sss {
  50% {
    transform: rotate(-25deg);
    top: 25%;
  }
  60% {
    transform: rotate(0deg);
    height: 30px;
  }
  100% {
    transform: rotate(0deg);
    top: 35.5%;
    height: 40px;
  }
}
div.burger-top-inner {
  width: 100px;
  z-index: 3;
  height: 40px;
  border-radius: 43px 43px 0px 0px;
  position: absolute;
  left: 43px;
  top: 0px;
  background-color: rgb(243, 190, 109);
}
div.burger2-top-inner {
  width: 130px;
  z-index: 2;
  height: 40px;
  border-radius: 43px 43px 0px 0px;
  position: absolute;
  left: 0px;
  top: 0px;
  background-color: rgb(190, 152, 94);
}
div.green {
  width: 160px;
  height: 10px;
  border: 2px solid black;
  background-color: rgb(243, 250, 243);
  border-radius: 8px 8px 8px 8px;
  position: absolute;
  top: 58.5%;
  left: 4%;
  transform-origin: right bottom;
  animation: gree 3s ease 1, green-back 1s ease 1.5s 1;
}
@keyframes green-back {
  25% {
    top: 56%;
  }
  50% {
    top: 58.5%;
  }
  100% {
    top: 58.5%;
  }
}
@keyframes gree {
  10% {
    transform: rotate(3deg);
  }
  15% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
div.green-shadow {
  width: 45px;
  opacity: 0.3;
  height: 10px;
  background-color: rgb(57, 133, 57);
  border-radius: 8px 0px 0px 8px;
  position: absolute;
}
div.green-inner {
  width: 157px;
  height: 10px;
  background-color: rgb(138, 216, 138);
  border-radius: 8px 8px 8px 8px;
  position: absolute;
}
div.red {
  width: 160px;
  height: 18px;
  border: 2px solid black;
  background-color: rgb(255, 255, 255);
  border-radius: 18px 18px 18px 18px;
  position: absolute;
  top: 65%;
  left: 4%;
}
div.red-inner {
  width: 155px;
  height: 18px;
  background-color: rgb(255, 80, 49);
  border-radius: 18px 18px 18px 18px;
  position: absolute;
}
div.red-shadow {
  width: 44px;
  height: 18px;
  background-color: rgb(192, 61, 37);
  border-radius: 18px 0px 0px 18px;
  position: absolute;
}
div.burger-bottom {
  width: 150px;
  height: 40px;
  border: 3px solid black;
  border-radius: 0px 0px 43px 43px;
  position: absolute;
  background-color: rgb(248, 248, 247);
  top: 75.88%;
  left: 6%;
}
div.burger-bottom-inner {
  width: 105px;
  height: 40px;
  border-radius: 0px 0px 43px 43px;
  position: absolute;
  left: 38px;
  background-color: rgb(243, 189, 108);
}
div.burger2-bottom-inner {
  width: 105px;
  height: 40px;
  border-radius: 0px 0px 43px 43px;
  position: absolute;
  background-color: rgb(185, 144, 81);
}
div.dot {
  z-index: 4;
  width: 2px;
  height: 2px;
  border-radius: 50%;
  background-color: rgb(240, 231, 231);
  position: absolute;
}
div.dot-one {
  top: 45%;
  left: 15%;
}
div.dot-two {
  top: 35%;
  left: 20%;
}
div.dot-three {
  top: 20%;
  left: 25%;
}
div.dot-four {
  top: 45%;
  left: 30%;
}
div.dot-five {
  top: 10%;
  left: 35%;
}
div.dot-six {
  top: 20%;
  left: 55%;
}
div.dot-seven {
  top: 30%;
  left: 60%;
}
div.dot-eight {
  top: 25%;
  left: 65%;
}
div.sub-green {
  width: 155px;
  height: 5px;
  background-color: rgb(55, 199, 55);
  margin-top: 4px;
  border-radius: 50%;
  z-index: 5;
}
div#eye-left {
  width: 15px;
  height: 8px;
  position: absolute;
  border: 2px solid black;
  border-radius: 0px 8px 8px 30px;
  transform-origin: center center;
  transform: rotate(20deg);
  background-color: white;
  left: 60%;
  top: 40%;
  z-index: 5;
  animation: eye 1.5s ease infinite, up 0.5s ease 1;
}
@keyframes up {
  50% {
    top: 10%;
  }
  100% {
    top: 40%;
  }
}
div#eye-right {
  width: 15px;
  height: 8px;
  position: absolute;
  border: 2px solid black;
  border-radius: 0px 8px 8px 30px;
  transform-origin: center center;
  transform: rotate(-20deg);
  background-color: white;
  left: 85%;
  top: 40%;
  z-index: 5;
  animation: eye 1.5s ease infinite, up 1s ease 1;
}

@keyframes eye {
  0% {
    visibility: visible;
  }
  95% {
    visibility: hidden;
  }
  100% {
    visibility: hidden;
  }
}
/* chopstics */
div#chopsticks-container {
  position: absolute;
  width: 200px;
  height: 200px;
  top: -98px;
  left: 64%;
  transform: translate(-50%, -50%) rotate(35deg);
  animation: chop 1s ease 1, go 1s ease 1.5s 1;
}
@keyframes go {
  50% {
    left: 30%;
    top: -60px;
  }
  100% {
    left: 64%;
    top: -98px;
  }
}
@keyframes chop {
  50% {
    left: 85%;
  }
  100% {
    left: 64%;
  }
}
div.stick {
  margin: 0 auto;
  height: 150px;
  width: 7px;
  left: 30%;
  border: 2px solid rgb(27, 26, 97);
  border-radius: 80px 80px 0px 80px;
  position: absolute;
  background-color: rgb(247, 223, 196);
}
div.one {
  transform: rotate(30deg);
  animation: rot 1s ease 1, one 0.4s ease 1.8s 1;
}
@keyframes rot {
  50% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(30deg);
  }
}
@keyframes one {
  50% {
    transform: rotate(18deg);
  }
  100% {
    transform: rotate(30deg);
  }
}
div.two {
  transform: rotate(-10deg);
  animation: rot2 1s ease 1, two 0.4s ease 1.8s 1;
}
@keyframes rot2 {
  50% {
    transform: rotate(-40deg);
  }
  100% {
    transform: rotate(-10deg);
  }
}
@keyframes two {
  50% {
    transform: rotate(18deg);
  }
  100% {
    transform: rotate(-10deg);
  }
}
div.inside-stick {
  width: 7px;
  height: 30px;
  border-bottom: 2px solid black;
  background-color: rgb(243, 233, 239);
}
div.stick-shadow {
  width: 3px;
  height: 30px;
  background-color: rgb(201, 188, 188);
}
div.stick-out-shadow {
  height: 116px;
  width: 3px;
  margin-top: 2px;
  background-color: rgb(233, 156, 68);
}
div.eye-s-left {
  width: 10px;
  height: 1px;
  border: 2px solid black;
  border-bottom: 0;
  position: absolute;
  top: 20%;
  left: 10%;
  transform: rotate(-15deg);
  z-index: 3;
  animation: eye 1.5s ease 0.5s infinite;
}
div.eye-s-right {
  width: 10px;
  height: 1px;
  border: 2px solid black;
  border-bottom: 0;
  position: absolute;
  top: 7%;
  left: 28%;
  transform: rotate(-55deg);
  z-index: 3;
  animation: eye 1.5s ease 0.5s infinite;
}

@media screen and (max-width: 768px) {
  div#floor{
    height: .3em;
    width: 100%;
  }
  div#chopsticks-container{
    left: 56%;
    height: 287px;
  }
}
@media screen and (max-width: 568px) {
  div#floor{
    top: 100%;
  }
}
</style>
