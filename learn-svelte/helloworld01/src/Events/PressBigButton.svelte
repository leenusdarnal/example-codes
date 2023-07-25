<script lang="ts">
  import BigRedButton from './BigRedButton.svelte'
  import horn from './../assets/horn.mp3'

  const audio = new Audio()
  audio.src = horn

  const handleClick = () => {
    audio.play()
  }
</script>

<BigRedButton on:click={handleClick} />
