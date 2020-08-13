# Shared Styles

## Variables

### Screen Sizes:
```scss
$screen-xs: 320px;
$screen-sm: 480px;
$screen-md: 768px;
$screen-lg: 992px;
$screen-xl: 1200px;
```

## Visibility Helper

Using the sizes listed above (`xs`, `sm`, `md`, `lg`, `xl`), you can use these helper classes to show certain DOM elements for only certain screen sizes.

### `.show-[size]`
Show only for the given size. Example:  
```html
<div className="show-md">
  Will only appear from 768px to 991px.
</div>
<div className="show-lg">
  Will only appear from 992px to 1199px.
</div>
```


### `.show-[size 1]-[size 2]`
Show only for a given range. `size-1` must be a smaller size than `size-2`. Example:  
```html
<div className="show-xs-md">
  Will appear on xs, sm and md screens (from 320px to 991px).
</div>
```

### `show-[size]-up`
Show for the given size and all larger sizes. Example:  
```html
<div className='show-md-up'>
  Will appear on md and all larger sizes (from 768px+).
</div>
```

### .show-[display]
The display property will default to `block` unless you add one of these classes. Available display options:  
* `flex`
* `inline`
* `inline-block`

Example:  
```html
<div className="show-xs-md show-flex">
  Will appear from xs to md screens and will have "display: flex;".
</div>
```
