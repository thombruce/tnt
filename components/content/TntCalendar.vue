<script setup lang="ts">
// TODO: The idea is straightforward enough. A calendar view.

// Said calendar view should have 7 columns with...
// 4 - 6 rows for month views
// 1 row for a week view
// 53 - 54 (?) rows for a year view
// Inf rows for a continuous view

// So it will have columns from 1 to 7 with placement determined
// by the day of week a date falls on.

// And that basic premise can be used for those different view types
// described above.

// It would also be nice to have a year view that wasn't continuous
// rows, but instead was 12 blocks each containing one month. Have that
// as like a 3x4 or 4x3 grid (or 2x6, 1x2 dependent on screen size).

// Fill it with what data?
// By default... just the present week/month/year (determined by which view
// we're looking at).
// It should take props for start and end dates (filtering).

// And once we have the views setup, we can think about displaying actual
// event data on it... probably stored in /content but... with other options.

import dayjs, { Dayjs } from 'dayjs'

const { date, start, end, view = 'month' } = defineProps<{
  date?: string,
  start?: string,
  end?: string,
  view?: string, // week, month, year
}>()

const parsedDate = dayjs(date)
const parsedStart = start ? dayjs(start) : undefined
const parsedEnd = end ? dayjs(end) : undefined
const parsedView = view

const generateDates = () => {
  let dates: Dayjs[] = []

  if (parsedStart && parsedEnd) {
    const days = parsedEnd.diff(parsedStart, 'day')

    let count = 0

    while (count <= days) {
      dates.push(parsedStart.add(count, 'day'))
      count++
    }
  } else {
    const daysInMonth = parsedDate.daysInMonth()

    let day = 1

    while (day <= daysInMonth) {
      dates.push(parsedDate.date(day))
      day++
    }
  }

  return dates
}

const days = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su']

const dates = generateDates()

const startOfMonth = dates[0].day()
</script>

<template lang="pug">
.tnt-calendar
  .grid.grid-cols-7
    .text-center(v-for="day in days")
      strong {{ day }}
  .grid.grid-cols-7
    .text-center(v-for="i in startOfMonth - 1")
    .text-center(v-for="date in dates") {{ date.date() }}
</template>

<style lang="postcss">
</style>