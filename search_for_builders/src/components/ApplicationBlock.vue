<template xmlns="http://www.w3.org/1999/html">
<div class="application">
  <div class="image-container">
    <div class="circle">
      <img src="../assets/Ellipse1.png" alt="Image 1">
    </div>
    <div class="circle">
      <img src="../assets/Ellipse2.png" alt="Image 2">
    </div>
    <div class="circle">
      <img src="../assets/Ellipse3.png" alt="Image 3">
    </div>
    <div class="circle">
      <img src="../assets/Ellipse4.png" alt="Image 4">
    </div>
    <div class="circle">
      <img src="../assets/Ellipse5.png" alt="Image 5">
    </div>
  </div>

  <div class="application_title">Стань частью нашей компании и развивай страну вместе с нами!</div>
  <div class="application_subtitle">Заполни форму и мы свяжемся с тобой в ближайшее время</div>
  <div class="form-container">
    <form action="#" method="POST">
      <div class="form-group">
        <input type="text" id="name" name="name" placeholder="Имя" required>
      </div>
      <div class="form-group">
        <input type="tel" id="phone" name="phone" placeholder="Телефон" required>
      </div>
      <button type="submit">Оставить заявку</button>
    </form>
  </div>
  <div class="application_text">Нажимая кнопку «Отправить», я даю согласие
    на обработку моих персональных данных</div>
</div>
</template>

<script>
export default {
  name: "ApplicationBlock"
}
</script>

<style lang="scss" scoped>
.application {
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &_title {
    margin-top: 30px;
    font-size: 64px;
    line-height: 64px;
    font-weight: bold;
    color: black;
  }

  &_subtitle {
    margin-top: 30px;
    font-size: 20px;
    max-width: 300px;
    text-align: center;
    justify-content: center;
  }

  &_text {
    margin-top: 10px;
    color: #8F8F8F;
    font-size: 16px;
    max-width: 450px;
  }
}

.image-container {
  display: flex;
  align-items: center;
  justify-content: center;
}

.circle {
  position: relative;
  width: 100px;
  height: 100px;
  overflow: hidden;
  border-radius: 50%;
  margin-left: -20px; /* Отрицательное значение для перекрытия */
}

.circle:first-child {
  margin-left: 0; /* У первого элемента margin-left равен 0 */
}

.circle img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.form-container {
  margin-top: 40px;
  width: 760px;
  //padding: 20px;
  border-radius: 5px;
  background-color: #fff;
}

.form-group {
  margin-bottom: 20px;
}

input {
  width: 100%;
  padding-bottom: 15px;
  border: none;
  border-bottom: 1px solid #ccc;
  outline: none;
  font-size: 16px;
  color: #707070;
}

input::placeholder {
  color: #707070;
}

button {
  margin-top: 30px;
  width: 100%;
  padding: 15px;
  background-color: black;
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #333;
}



</style>
