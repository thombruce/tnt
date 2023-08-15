<script>
export default {
  props: {
    score: {
      type: [String, Number],
      default: 0
    }
  }
}
</script>

<template>
  <div class="rating block rating-lg rating-half">
    <input type="radio" name="rating-10" class="rating-hidden" :checked="score == 0" />
    <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" :checked="score == 1" />
    <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" :checked="score == 2" />
    <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" :checked="score == 3" />
    <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" :checked="score == 4" />
    <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" :checked="score == 5" />
    <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" :checked="score == 6" />
    <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" :checked="score == 7" />
    <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" :checked="score == 8" />
    <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-1" :checked="score == 9" />
    <input type="radio" name="rating-10" class="bg-green-500 mask mask-star-2 mask-half-2" :checked="score == 10" />
  </div>
</template>
