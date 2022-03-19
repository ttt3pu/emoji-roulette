<script lang="ts">
  import twemoji from 'twemoji';
  export let emoji: string;
  const emojiCode = twemoji.convert.toCodePoint(emoji);
  export const src = `https://twemoji.maxcdn.com/v/latest/svg/${emojiCode}.svg`;
</script>

<img src={src} alt={emoji} >

<style>
img {
  width: 30px;
  height: 30px;
}
</style>
