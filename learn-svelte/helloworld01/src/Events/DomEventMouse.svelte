<script lang="ts">
  let mouseCoordinate = { x: 0, y: 0 }
  const handleMouseMove = (event: MouseEvent) => {
    mouseCoordinate.x = event.clientX
    mouseCoordinate.y = event.clientY
  }
</script>

<!-- InLine Handlers -->
<div
  on:pointermove={(event) => {
    mouseCoordinate.x = event.clientX
    mouseCoordinate.y = event.clientY
  }}
>
  The Pointer is at X={mouseCoordinate.x} and Y={mouseCoordinate.y}
</div>

<!-- 
<div on:pointermove={handleMouseMove}>
  The Pointer is at X={mouseCoordinate.x} and Y={mouseCoordinate.y}
</div> -->

<style>
  div {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    padding: 1rem;
  }
</style>
