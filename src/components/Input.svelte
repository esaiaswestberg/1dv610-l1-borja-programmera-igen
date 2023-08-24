<script lang="ts">
  import strEmpty from '$lib/strEmpty'

  export let label: string
  export let placeholder: string
  export let value: string

  export let errorMessage: string = ''
  $: hasError = !strEmpty(errorMessage)
</script>

<div class="flex flex-col gap-1 items-start justify-center w-full group">
  <label for={label} class="font-semibold text-sm group-focus-within:text-pink-400 transition-colors" class:text-red-400={hasError}>{label}</label>
  <input
    type="text"
    id={label}
    class="border-2 border-gray-300 rounded-md p-2 w-full transition-colors focus:border-pink-400 focus:outline-none"
    class:border-red-400={hasError}
    class:text-red-400={hasError}
    {placeholder}
    bind:value
    on:input
  />

  {#if hasError}
    <span class="text-sm text-red-500">{errorMessage}</span>
  {/if}
</div>
