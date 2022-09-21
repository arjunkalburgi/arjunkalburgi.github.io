<script>
  import { onMount } from 'svelte';
  import { animate } from '@arjunanimations/leaves';
	import { base } from '$app/paths';

  export let alt;
  export let src;

  const animationData = {
    className: 'elements_animation_container',
    numOfSprites: 5,
    pathsOfSprites: [base + '/favicon.png']
  };

  onMount(() => {
    // animate(animationData);
  });
</script>

<div class="elements_animation_container">
  <div class="oval" />
  <img class="main" {alt} {src} />
</div>

<style lang="scss">
  div {
    position: relative;
  }
  .main {
    width: 100%;
  }
  .oval {
    width: 80%;
    position: absolute;
    bottom: -18%;
    z-index: -1;
    left: 0;
    right: 0;
    margin: auto;
    height: 40%;
    background-color: #484e64;
    border-radius: 100%;
  }
</style>
