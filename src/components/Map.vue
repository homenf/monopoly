<template>
  <div>
    <div v-for="city in map.cities" :key="city.id" class="land" 
      :class="{
              'current': currPos == city.id,
            }">
      <div>{{city.name}}</div>
      <div>{{city.price}}</div>
    </div>
    <button @click="goNext"> next </button>
  </div>
</template>


<script>
import ChainMap from "@/chainMap.js";
import PlayerManager from "@/playerManager.js";
import Manager from "@/manager.js";

export default {
  name: 'Map',
  data () {
    return {
      map: null,
      currPos: 0, // tile's id
      currPlayer: 1,
      playerManager: null,
    };
  },

  created () {
    this.map = new ChainMap();
    this.playerManager = new PlayerManager();
    this.manager = new Manager();
    console.log(this.map.cities);
  },

  methods: {
    goNext () {
      this.manager.move(1);
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.land {
  background-color: lightblue;
  display: inline-block;
  width: 300px;
  border: 3px white solid;
}

.land.current {
  background-color: lightcoral;
}
</style>
