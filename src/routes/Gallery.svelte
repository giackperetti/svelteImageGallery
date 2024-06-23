<script>
  import { images } from "../lib/index.ts";

 const numberOfImages = Object.keys(images).length; 
</script>

<p>Number of images: {numberOfImages}</p>
<div id="gallery-container">
    {#each Object.entries(images) as [id, image]}
      <img class="image" src={image} alt={id}>
    {/each}
</div>

<style>
  #gallery-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
    padding: 10px;
  }

  .image {
    flex: 1 1 45%; 
    margin: 5px;
    border: 2px solid #ebdbb2;
    border-radius: 5px;
    overflow: hidden;
    width: 100%;
    height: auto;
  }

  @media (min-width: 600px) {
    .image {
      flex-basis: calc(50% - 10px);
    }
  }

  @media (min-width: 900px) {
    .image {
      flex-basis: calc(25% - 10px);
    }
  }
</style>

