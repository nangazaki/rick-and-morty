<template>
  <header class="w-full absolute mt-1 z-50">
    <nav class="w-full my-4 px-8 sm:px-12 md:px-20 lg:px-28 flex justify-between items-center">
      <router-link :to="{name: 'home'}">
        <img class="w-14" src="@/assets/img/logo.png" alt="Rick and Morty" />
      </router-link>

      <ul class="flex gap-5">
        <li class="animation">
          <a href="https://www.linkedin.com/in/helder-cambuta-81668a192/" class="text-2xl text-light">
            <fa :icon="['fab', 'linkedin']" class="icon" />
          </a>
        </li>
        <li class="animation">
          <a href="https://instagram.com/heldercambuta/" class="text-2xl text-light">
            <fa :icon="['fab', 'instagram']" class="icon" />
          </a>
        </li>
        <li class="animation">
          <a href="https://github.com/heldercambuta/" class="text-2xl text-light">
            <fa :icon="['fab', 'github']" class="icon" />
          </a>
        </li>
      </ul>
    </nav>
  </header>
  <section class="conatiner flex items-center">
    <div class="px-8 sm:px-12 md:px-20 lg:px-28">
      <div class="max-w-default">
        <img src="../assets/img/rickandmorty.png" alt="Rick and Morty Logo" class="block w-full mb-4" />
        <div class="about__text">
          <p class="text-base mb-6 text-light">
            Rick and Morty is an American adult animated science-fiction sitcom
            created by Justin Roiland and Dan Harmon for Cartoon Network's nighttime
            programming block Adult Swim.
          </p>
          <a href="#">
            <button class="p-3 text-sm font-medium text-light uppercase w-52 backdrop-blur-sm 
                           border-base border-color bg-gradient-to-br from-color-grad-from 
                           to-color-grad-to transition-normal duration-md ease-in-out hover:w-56">
              more info
            </button>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

export default {
  name: 'FeaturedComp',
}
</script>

<style scoped>
section {
  height: 560px;
  background: linear-gradient(347.22deg, #030409 13.91%, rgba(3, 4, 9) 13.97%, rgba(3, 4, 9, 0) 309.2%),
    url('@/assets/img/rick-and-morty.png');
  background-position: center;
  background-size: cover;
}

@keyframes an {
  from {
    opacity: 20%;
    transform: translate3d(0, -50px, 0);
  }

  to {
    opacity: 100%;
    transform: translate3d(0, 0, 0);
  }
}

.animation {
  animation: an 1.5s;
}
</style>