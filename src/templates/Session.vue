<template>
  <div>{{ $page.session.speaker }}</div>
</template>

<page-query>
query Session ($path: String!) {
  session (path: $path) {
    speaker
    bio
    title
    abstract
  }
}
</page-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$page.session.speaker
    };
  }
};
</script>
