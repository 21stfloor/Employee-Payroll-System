<template>
    <div>
      <input type="file" @change="uploadImage">
      <img v-if="imageUrl" :src="imageUrl" alt="Uploaded Image">
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        imageUrl: null,
      };
    },
    methods: {
      uploadImage(event) {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append('image', file);
  
        axios.post('/images', formData)
          .then(response => {
            console.log(response.data.success);
            this.imageUrl = `/images/${file.name}`;
          })
          .catch(error => {
            console.error(error);
          });
      },
    },
  };
  </script>
  