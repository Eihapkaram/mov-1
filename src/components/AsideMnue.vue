<template>
  <div id="mune">
    <div>
      <div id="btn" @click="toogle()">
        <div id="top"></div>
        <div id="mid"></div>
        <div id="bottom"></div>
      </div>
    </div>

    <div id="con">
      <ul>
        <li id="lin">
          <img style="width: 30px" src="../assets/trending.png" />
          <label for="lin"
            ><router-link to="/SHowAll">Trending</router-link></label
          >
        </li>
        <li id="lin2">
          <img style="width: 30px" src="../assets/video-player.png" />
          <label for="lin2"
            ><router-link to="/WatchAllmov">Movies</router-link></label
          >
        </li>
        <li id="lin3">
          <img style="width: 30px" src="../assets/icons8-tv-100.png" />
          <label for="lin3"
            ><router-link to="/WatchAllTV">series</router-link></label
          >
        </li>
        <li id="lin3">
          <img style="width: 30px" src="../assets/fav1.png" />
          <label for="lin3"
            ><router-link :to="{ name: 'listpage' }"
              >Watch list

              <v-badge
                style="position: relative; top: -50px"
                color="black"
                :content="this.list.length"
              >
              </v-badge> </router-link
          ></label>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
#btn {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-content: center;
  background-color: transparent;
  position: relative;
  width: 60px;
  height: 60px;
  padding: 5px;
  left: 300px;
  top: 8px;
  border-radius: 5px;
}

#mune {
  width: 300px;
  height: 100rem;
  top: 0px;
  position: fixed;
  background-color: rgb(28, 30, 34);
  z-index: 20;
  transition: all, 2s;
  margin: 0px;
  padding: 0px;
}

a {
  padding-inline: 30%;
  text-decoration: none;
}

label {
  width: 100%;
  cursor: pointer;
}

#con {
  position: relative;
  text-align: center;
}

#con ul {
  position: relative;
  list-style-type: none;
  width: 100%;
  margin: 0px;
  left: -20px;
  text-decoration-style: none;
}

#con ul li {
  position: relative;
  padding: 12px;
  margin-bottom: 10px;
  transition: all, 1s;
  list-style-type: none;
  text-decoration-style: none;
}

#con ul li:hover {
  background-color: rgb(83, 96, 104);
}

#top {
}

#mid {
}

#bottom {
}

#btn div {
  width: 50px;
  height: 5px;
  background-color: rgb(249, 251, 255);
  margin-bottom: 5px;
  border-radius: 5px;
  padding: 2px;
  transition: all, 2s;
}

.hovtop {
  -webkit-transform: rotate(-10deg);
}

.hovbottom {
  -webkit-transform: rotate(10deg);
}

.nothove {
  -webkit-transform: rotate(0deg);
}

.crosstop {
  -webkit-transform: rotate(-70deg);
  transform: rotate(-70deg);
}

.crossmid {
  opacity: 0.1;
}

.crossbottom {
  -webkit-transform: translateY(-20px);
  transform: translateY(-20px);
}

.crosstop2 {
  -webkit-transform: rotate(-0deg);
  transform: rotate(-0deg);
}

.crossmid2 {
  opacity: 1;
}

.crossbottom2 {
  -webkit-transform: translateY(-0px);
  transform: translateY(-0px);
}

/*/mobile/*/
@media (max-width: 500px) {
  #btn {
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-content: center;
    background-color: transparent;
    position: relative;
    width: 60px;
    height: 60px;
    padding: 5px;
    left: 300px;
    top: 12px;
    border-radius: 5px;
  }
}
</style>
<script>
import $ from "jquery";
import { ListsStore1 } from "@/store/Lists";
import { mapActions, mapState } from "pinia";
export default {
  mounted: function () {
    window.setTimeout(function () {
      if (this.isactive) {
        window.mune.style.left = "0px";
      } else {
        window.mune.style.left = "-300px";
      }
      $("#btn").hover(
        function () {
          $("#top").addClass("hovtop");
          $("#bottom").addClass("hovbottom");
        },
        function () {
          $("#top").removeClass("hovtop");
          $("#bottom").removeClass("hovbottom");
        }
      );
    }, 100);
  },
  data() {
    return {
      isactive: false,
    };
  },
  methods: {
    ...mapActions(ListsStore1, ["GetCartL"]),
    toogle() {
      this.isactive = !this.isactive;
      console.log(this.isactive);
      if (this.isactive) {
        window.mune.style.left = "0px";
        $("#top").addClass("crosstop");
        $("#mid").addClass("crossmid");
        $("#bottom").addClass("crossbottom");
      } else {
        window.mune.style.left = "-300px";
        $("#top").removeClass("crosstop");
        $("#mid").removeClass("crossmid");
        $("#bottom").removeClass("crossbottom");
      }
    },
  },
  computed: {
    ...mapState(ListsStore1, ["list"]),
  },
};
</script>
