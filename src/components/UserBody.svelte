<script lang="ts">
  export let name: string
</script>

<p class="text-2xl font-bold">@{name}</p>
<p>Välkommen {name}! Som en present från oss har vi genererat en unik bild åt dig.</p>

<h2 class="text-xl font-semibold">Hur är den skapad?</h2>

<h3 class="font-semibold">1. Hasha namnet</h3>
<p>
  Först tar vi namnet och kör det genom en hashfunktion. I detta fallet använder vi <a target="_blank" class="text-pink-500 hover:text-pink-400" href="https://en.wikipedia.org/wiki/SHA-2">SHA-512</a>. Detta ger oss en unik sträng som är 128
  tecken lång i hexadecimal form. Att det är hexadecimalt betyder att det bara innehåller siffrorna 0-9 och bokstäverna A-F, vilket kommer vara viktigt senare.
</p>

<h3 class="font-semibold">2. Hämta värden</h3>
<p>
  Nästa steg är att dela upp strängen i mindre delar. Vi gör detta genom att ta två tecken i taget och konvertera dem från hexadecimal (bas 16) till decimal (bas 10). Detta ger oss ett tal mellan 0 och 255. Vi gör detta för alla par av
  tecken i strängen, vilket ger oss 64 tal.
</p>

<h3 class="font-semibold">3. Rita bilden</h3>
<p>
  Sist så ritar vi bilden. Vi har 64 tal mellan 0 och 255. Bilden kommer vara 8 x 8 pixlar stor vilket ger oss 64 pixlar vilket betyder att vi måste använda ett tal per pixel. Vi använder det talet för att bestämma två olika värden,
  <code class="bg-gray-200 p-1 rounded">brightnessG</code> & <code class="bg-gray-200 p-1 rounded">brightnessB</code>. Man skulle även kunna räkna ut ett värde för den röda kanalen, men jag valde att inte göra det på grund av att det inte
  såg bra ut. I mitt fall räknar jag ut <code class="bg-gray-200 p-1 rounded">brightnessG</code> genom att dela värdet med 80, ta sinus på det och sedan multiplicera med 255 så att jag får ett värde mellan -255 & 255. För att alltid få rätt
  så höga värden utan blå så tar jag och delar värdet med 65, tar cosinus på det och sedan multiplicerar med 255, fast jag sätter också ett minumum värde på 200. Detta ger mig ett värde mellan 200 & 255. Sedan sätter vi pixelns färg till
  <code class="bg-gray-200 p-1 rounded">rgb(0, brightnessG % 255, brightnessB)</code>. Vi använder modulus på <code class="bg-gray-200 p-1 rounded">brightnessG</code> för att få ett värde mellan 0 & 255. Detta betyder att om vi har -100 så kommer
  vi få 155.
</p>
