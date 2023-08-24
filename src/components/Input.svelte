<script lang="ts">
  export let label: string
  export let placeholder: string
  export let value: string
</script>

<div class="flex flex-col gap-1 items-start justify-center w-full group">
  <label for={label} class="font-semibold text-sm group-focus-within:text-pink-400 transition-colors">{label}</label>
  <input type="text" id={label} class="border-2 border-gray-300 rounded-md p-2 w-full transition-colors focus:border-pink-400 focus:outline-none" {placeholder} bind:value />
</div>
