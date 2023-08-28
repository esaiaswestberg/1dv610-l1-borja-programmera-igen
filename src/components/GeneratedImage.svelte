<script lang="ts">
  import { sha512 } from 'js-sha512'
  import { onMount } from 'svelte'

  export let input: string

  let canvas: HTMLCanvasElement

  onMount(async () => {
    const hash = await sha512(input)
    const chars = hash.split('')

    const parts: number[] = []
    const partLength = 2
    while (chars.length >= partLength) {
      const slice = chars.splice(0, partLength)
      parts.push(parseInt(slice.join(''), 16))
    }

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const width = canvas.width / 8
    const height = canvas.height / 8
    for (let i = 0; i < parts.length; i++) {
      const value = parts[i]
      const brightnessG = Math.sin(value / 80) * 255
      const brightnessB = Math.max(Math.cos(value / 65) * 255, 200)

      const x = i % 8
      const y = Math.floor(i / 8)

      ctx.fillStyle = `rgb(0, ${brightnessG % 255}, ${brightnessB})`
      ctx.fillRect(x * width, y * height, width, height)
    }
  })
</script>

<canvas bind:this={canvas} class={$$props.class} />
