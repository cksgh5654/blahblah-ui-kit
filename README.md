# front-common-ui-kit

## Installation

```sh
$ npm i blahblah-front-common-ui-kit
```

## AspectRatio

### Source

[src/components/AspectRatio - front-common-ui-kit]

### Children

- Root
- Image

## Usage

### Without Container

```jsx
<AspectRatio ratio={16 / 8}>
  <AspectRatio.Image src="" alt="" className="" />
</AspectRatio>
```

### With Container

```jsx
<div style={{ width: "300px" }}>
  <AspectRatio ratio={16 / 8}>
    <AspectRatio.Image src="" alt="" className="" />
  </AspectRatio>
</div>
```

---

## TextArea

### Source

[src/components/TextArea - front-common-ui-kit]

### Children

- Root

### Usage

```jsx
<Textarea className="" placeholder="type message" />
```

## **Pagination**

### Children

- Root
- Buttons
- Navigator

### Example

`````jsx
<Pagination total={235} value={0} onPageChange={handlePageChange}>
  <Pagination.Navigator style={{ display: "flex" }}>
    <Pagination.Buttons />
  </Pagination.Navigator>
</Pagination>
<<<<<<< HEAD
```

## **Popover**

### Children

- Root
- Trigger
- Content

### Example

```jsx
<Popover position="bottom-left">
  <Popover.Trigger>Open</Popover.Trigger>
  <Popover.Content>Place content for the popover here.</Popover.Content>
</Popover>
```
=======
## Tabs

## Source

[src/components/Tabs - front-common-ui-kit]

## Children

- Root
- List
- Trigger
- Content

## Usage

````jsx
<Tabs.Root defaultValue="value1">
  <Tabs.List>
    <Tabs.Trigger value="value1">Id</Tabs.Trigger>
    <Tabs.Trigger value="value2">Password</Tabs.Trigger>
  </Tabs.List>
  <Tabs.Content value="value1">Id Content</Tabs.Content>
  <Tabs.Content value="value2">Password Content</Tabs.Content>
</Tabs.Root>
`````
>>>>>>> 884fd297a2cb3d92e03b1ef58a08a42df4b0f85e
