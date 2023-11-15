<template>
        <!-- <img src="{{ asset('favicon.ico') }}" alt="Custom Logo"/> -->
        <img :src="favicon" alt="Custom Logo">
</template>


<script>
// Import the image or asset
// import favicon from '@favicon.ico'; // Replace with your correct path

export default {
  data() {
    return {
      favicon: '/favicon.ico', // Use the imported image as src
    };
  },
};
</script>