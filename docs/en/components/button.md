# Button

A basic button component for triggering actions.

## Basic Usage

```html
<parrot-button type="primary">Primary</parrot-button>
<parrot-button type="success">Success</parrot-button>
<parrot-button type="warning">Warning</parrot-button>
<parrot-button type="danger">Danger</parrot-button>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| type | `'default' \| 'primary' \| 'success' \| 'warning' \| 'danger'` | `'default'` | Button type |
| size | `'large' \| 'default' \| 'small'` | `'default'` | Button size |
| disabled | `boolean` | `false` | Disabled state |
| loading | `boolean` | `false` | Loading state |
| block | `boolean` | `false` | Full width block button |
| round | `boolean` | `false` | Rounded button |

## Events

| Event | Description |
|-------|-------------|
| click | Triggered on button click (disabled when `disabled` or `loading`) |
