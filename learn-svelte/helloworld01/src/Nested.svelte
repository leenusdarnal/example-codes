<script lang="ts">
  // export let count: number = 9000

  export let name: string
  export let version: number
  export let speed: string
  export let website: string

  $: href = `https://www.npmjs.com/package/${name}`
</script>

<p>
  The <code>{name}</code> package is {speed} fast. Downlaod version{version}
  form <a {href}>npm </a> and <a href={website}>learn more here </a>
</p>
