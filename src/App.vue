<template>
    <div>test</div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      flexiCartData: window.localStorage.getItem('flexiCartData') ? JSON.parse(window.localStorage.getItem('flexiCartData')) : {},
    };
  },
};
</script>
