# Toast Stack

:breadcrumbs

:toc

## Usage

```html
<script setup>
const toasts = useToasts()

if (!process.server) {
  toasts.value.push(
    {
      uid: `tnt-toast-${_uniqueId()}`,
      duration: 10000, // default = 10000; set to 0 for infinite toast
      color: 'primary',
      body: [
        { is: 'strong', props: { class: 'text-lg' }, content: 'Error' },
        { is: 'p', content: 'This is text.' },
      ],
      actions: [
        { is: 'Icon', props: { class: 'text-2xl', name: 'fa:info' } }
      ]
    },
  )
}
</script>
```

## Example

::browser-mockup{url="https://tnt.thombruce.com"}
  :::toast{uid='tnt-docs-toast-1' color='primary'}
    ::strong
      Toast
    ::
    ::p
      This is a toast
    ::
  :::
::

Or try adding some demo toasts to the built-in toast stack:

:toast-button

:prev-next
