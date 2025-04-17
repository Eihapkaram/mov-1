<template>
  <div class="container-fluid">
    <br />
    <header id="head">
      <h3>
        Watch list <img style="width: 30px" src="../assets/quotation.png" />
      </h3>
    </header>
  </div>
  <hr />
  <div id="coon">
    <h4 v-if="this.list.length == 0">
      You have not saved items in the Watch Later list
    </h4>
    <swiper-slide id="swip" v-for="film in this.list" :key="film.id"
      ><img id="item" :src="sr + '/' + film.poster_path" />
      <div id="popup">
        <img
          style="
            width: 50px;
            position: absolute;
            left: -0.5rem;
            top: -5px;
            z-index: 20;
          "
          id="add1"
          src="../assets/delitemlist.svg"
          @click.prevent="this.delitemL(film.id)"
        />
        <div class="coninform">
          <span class="type">{{ film.original_language }}</span>
          <span class="riting"
            >{{ film.vote_average }} <span class="fa fa-star checked"></span
          ></span>
          <span class="type2">web-DL</span>
        </div>
        <img
          @click.prevent="
            film.first_air_date
              ? $router.push({ name: 'AboutTV', params: { filmid: film.id } })
              : trialasync(film.id)
          "
          class="btn1in"
          src="../assets/play.png"
        />
        <h3 id="movenamein">
          {{ film.first_air_date ? film.original_name : film.title }}
        </h3>
      </div>
    </swiper-slide>
  </div>
  <hr />
</template>
<script>
import { ListsStore1 } from "@/store/Lists";
import { mapActions, mapState } from "pinia";
import { mystore } from "@/store/count";
import "swiper/css";

import "swiper/css/scrollbar";
// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { Scrollbar } from "swiper/modules";
//import $ from "jquery";
export default {
  data() {
    return {
      shipping: 20,
      item: "",
      nums: [],
      total: [],
      itemurl: ["home", "cartpage", "checkout"],
      cantry: ["Egypt", "afercan", "alex"],
      email: "",
      select: "",
      checkbox: "",
      sr: "https://image.tmdb.org/t/p/w500",
    };
  },
  computed: { ...mapState(ListsStore1, ["list"]) },
  methods: {
    async trialasync(id) {
      await this.getTrialmovie(id);

      this.$router.push({ name: "AboutAll", params: { filmid: id } });
    },
    ...mapActions(mystore, [
      "dogetAll",
      "dogetAlltv",
      "dogetTV",
      "doget",
      "getTrialmovie",
      "ALLfun",
    ]),
    ...mapActions(ListsStore1, ["GetCartL", "delitemL", "updateL"]),
    muns(item) {
      let q = item.quantity;
      if (q == 1) {
        return;
      } else {
        item.quantity--;
      }
    },
  },
  setup() {
    return {
      modules: [Pagination, Navigation, Scrollbar],
    };
  },
  async mounted() {
    window.scroll(0, 0);
    await this.GetCartL();
  },
};
</script>
<style scoped>
#head h3 {
  margin-right: 20px;
  position: relative;
  left: 0px;
}
.checked {
  color: orange;
}
.swiper {
  width: 100%;
  height: 100%;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: transparent;
  filter: drop-shadow();
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
#nextbtn {
  display: flex;
  justify-content: center;
  align-content: center;
}
swiper-slide #item {
  display: block;
  width: 10rem;
  object-fit: cover;
  gap: 2rem;
  border-radius: 5px;
  position: relative;
}
#coon {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 100%;
  height: 50rem;
}
#swip {
  text-align: center;
  font-size: 18px;
  background: transparent;
  filter: drop-shadow();
  height: 50%;
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}
.checked {
  color: orange;
}

#swip #item {
  width: 15rem;
  object-fit: cover;
  gap: 2rem;
  border-radius: 5px;
  position: relative;
}
.btn1in {
  width: 50px;
  height: 50px;
  display: ;
  cursor: pointer;
  border: 2px solid orange;
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  position: relative;
  align-self: center;
  top: -50px;
  right: auto;
  background-color: orange;
}
#swip {
  border-radius: 5px;
}
#popup:hover .btn1in {
  animation: btnani 2s infinite linear;
}
#swip:hover #popup {
  display: flex;
  border-radius: 5px;
}
@keyframes btnani {
  0% {
    box-shadow: 0 0 0 0 rgba(226, 193, 7, 0.8);
    opacity: 1;
  }
  40% {
    box-shadow: 0 0 0 0 rgba(226, 193, 7, 0.8);
    opacity: 0.7;
  }
  80% {
    box-shadow: 0 0 0 50px rgba(226, 193, 7, 0.8);
    opacity: 0.7;
  }
  100% {
    box-shadow: 0 0 0 0 rgba(226, 193, 7, 0.8);
    opacity: 0.7;
  }
}
#movenamein {
  position: relative;
  z-index: 3;
  color: rgb(255, 250, 250);
  top: -180px;
  font-size: large;
  align-self: center;
}
#moveitem {
  position: absolute;
  z-index: 3;
  color: whitesmoke;
  top: 350px;
  font-size: small;
  align-self: center;
}
.coninform {
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-end;
  position: relative;
  top: 0px;
  right: 0px;
  row-gap: 3px;
  height: 100%;
  width: 290px;
}
#popup {
  display: none;
  background-color: rgba(0, 0, 0, 70%);
  flex-flow: column;
  justify-content: flex-start;
  align-items: flex-end;
  position: absolute;
  height: 57%;
  width: 240px;
}
.riting {
  background-color: rgba(0, 0, 0, 70%);
  border-radius: 5px;
  color: beige;
  width: 80px;
}
.type {
  background-color: rgb(250, 186, 10);
  border-radius: 5px;
  color: black;
  width: 80px;
  margin-block: 3px;
}
.type2 {
  background-color: rgba(0, 0, 0, 70%);
  border-radius: 5px;
  color: beige;
  width: 80px;
}
/*/desktop/*/
@media (max-width: 1366px) {
}
/*/tablet/*/
@media (max-width: 991px) {
  #nextbtn {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  #popup {
    display: none;
    background-color: rgba(0, 0, 0, 70%);
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-end;
    position: absolute;
    height: 33%;
    width: 240px;
  }
  .btn1in {
    width: 50px;
    height: 50px;
    display: ;
    cursor: pointer;
    border: 2px solid orange;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    position: relative;
    align-self: center;
    top: 20px;
    right: auto;
    background-color: orange;
  }
  #movenamein {
    position: relative;
    z-index: 3;
    color: rgb(255, 250, 250);
    top: -90px;
    font-size: large;
    align-self: center;
  }
}
/*/mobile/*/
@media (max-width: 500px) {
  #popup {
    display: none;
    background-color: rgba(0, 0, 0, 70%);
    flex-flow: column;
    justify-content: flex-start;
    align-items: flex-end;
    position: absolute;
    height: 200px;
    width: 130px;
  }
  #nextbtn {
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .btn1in {
    width: 50px;
    height: 50px;
    display: ;
    cursor: pointer;
    border: 2px solid orange;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    position: relative;
    align-self: center;
    top: -10px;
    right: auto;
    background-color: orange;
  }
  #movenamein {
    position: relative;
    z-index: 3;
    color: rgb(255, 250, 250);
    top: 0px;
    font-size: large;
    align-self: center;
  }
}
</style>
