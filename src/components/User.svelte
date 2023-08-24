<script lang="ts">
  import GeneratedImage from './GeneratedImage.svelte'

  export let name: string
</script>

<GeneratedImage class="w-32 h-32 rounded overflow-hidden" input={name} />

<p class="text-2xl font-bold">@{name}</p>
<p>Detta ska vara någon typ av information om personen.</p>
