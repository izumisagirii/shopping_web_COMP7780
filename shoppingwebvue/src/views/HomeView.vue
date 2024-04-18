<template>
  <div class="home-page">
    <div class="text-center mb-5">
      <h1 class="tt-points">{{ title }}</h1>
      <p class="key-points">
        Company: Sipper website is committed to promoting the rich Chinese wine culture to the world.
      </p>
      <p class="key-points">
        Product: Chinese wine is divided into fermented wine and distilled wine, each with its own
        characteristics, deeply loved by people and used in different cultural occasions.
      </p>
      <img src="../assets/cs_logo.png" alt="mainpic" class="img-fluid">
    </div>

    <div class="row mb-4 intro">
      <div class="col-md-6">
        <p>{{ text1 }}</p>
      </div>
      <div class="col-md-6">
        <img src="../assets/about.png" alt="pic1" class="img-fluid">
      </div>
    </div>

    <div class="row intro">
      <div class="col-md-6">
        <img src="../assets/home.png" alt="pic2" class="img-fluid">
      </div>
      <div class="col-md-6">
        <p>{{ text2 }}</p>
      </div>
    </div>

    <div class="text-center mt-5">
      <button class="btn btn-primary btn-lg" onclick="location.href='/products';">Purchase</button>
      <p class="reminder-text mt-3">Reminder: Please log in or register first.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      title: 'Sipper: Art of Drinking in China',
      image: '../assets/cs_logo.png',
      text1: 'China has a long and diverse history of alcohol culture, dating back to ancient times. Drinking\
        alcohol is not only a way of socializing and celebrating, but also a way of expressing respect,\
        friendship, and\
        gratitude. Chinese alcohol culture is also closely related to other aspects of Chinese culture,\
        such as poetry,\
        medicine, and philosophy.\
          Sipper is a website that aims to introduce and promote Chinese alcohol culture to the world.',
      image1: '../assets/cs_logo.png',
      text2: 'The history of Chinese alcohol is long and rich, dating back to the Neolithic period, about 7000 years ago.\
Chinese alcohol can be divided into two main categories: fermented drinks, such as huangjiu(yellow wine) and mijiu(rice wine), and distilled drinks, such as baijiu(white liquor) and gaoliangjiu(sorghum liquor)\
Different types of alcohol have different flavors, aromas, production methods, and cultural meanings.Some are used for cooking, medicine, ceremonies, or offerings, while others are enjoyed for leisure, socializing, or celebration.',
      image2: '../assets/cs_logo.png'
    }
  }
}
</script>

<style scoped>
.home-page {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
}

.intro {
  max-width: 800px;
  margin: 0 auto;
}

.tt-points {
  margin-top: 1rem;
}

.reminder-text {
  color: #fcc000;
}

.key-points {
  font-size: 1.2em;
  margin-top: 1rem;
  margin-bottom: 1rem;
  color: #333;
  text-align: left;
}
</style>
