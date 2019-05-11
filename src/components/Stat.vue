<style scoped>
.stat {
  display: inline-block;
  font-size: 32px;
  font-weight: bold;
  min-width: 125px;
  text-align: center;
  vertical-align: middle;
}

.stat > i {
  font-size: 36px;
  vertical-align: middle;
}
</style>

<template>
  <span class="stat">
    <i :class="['fas', 'fa-'+fa]"></i>
    {{statNumber(num)}}
  </span>
</template>

<script>
export default {
  name: "stat",
  props: {
    num: Number,
    fa: String
  },
  data: function() {
    return {
      symbols: ["", "k", "M", "G"]
    };
  },
  methods: {
    statNumber(stat, symbol) {
      symbol = symbol | 0;
      stat = stat | 0;
      if (stat / 1000 > 1)
        return this.statNumber(
          parseFloat(Math.round(stat) / 1000).toFixed(1),
          symbol + 1
        );
      else return stat + this.symbols[symbol];
    }
  }
};
</script>
