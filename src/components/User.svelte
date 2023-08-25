<script lang="ts">
  import GeneratedImage from './GeneratedImage.svelte'
  import UserBody from './UserBody.svelte'

  export let name: string
</script>

<GeneratedImage class="w-32 h-32 rounded overflow-hidden" input={name} />
<UserBody {name} />
