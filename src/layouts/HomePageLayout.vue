<template>
  <div class="layout">
    <Navbar/>
    <slot/>
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import Navbar from "@/components/Navbar";

export default {
  components: {
    Navbar
  }
};
</script>


<style>
body {
  font-family: -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  margin: 0;
  padding: 0;
  line-height: 1.5;
  font-size: 16px;
}

.layout {
  max-width: 100%;
  margin: 0 auto;
  padding-left: 0px;
  padding-right: 0px;
}
</style>