# front-common-ui-kit

## Installation

```sh
$ npm i blahblah-front-common-ui-kit
```

## AspectRatio

## Source

[src/components/AspectRatio - front-common-ui-kit]

## Children

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
<div style={{ width: '300px' }}>
  <AspectRatio ratio={16 / 8}>
    <AspectRatio.Image src="" alt="" className="" />
  </AspectRatio>
</div>
```

---

## TextArea

## Source

[src/components/TextArea - front-common-ui-kit]

## Children

- Root

## Usage

```jsx
<Textarea className="" placeholder="type message" />
```

## Select

## Source

[src/components/Select - front-common-ui-kit]

## Children

- Root
- Trigger
- Value
- Icon
- Content
- Item

## Usage

```jsx
const [selectedMenu, setSelectedMenu] = useState < string > '';

const handleMenu = (value: string) => {
  setSelectedMenu(value);
};

const options = ['apple', 'banana', 'blueberry', 'grapes', 'pineapple'];

<Select className="">
  <Select.Trigger className="">
    <Select.Value className="" placeholder="" value={selectedMenu} />
    <Select.Icon className="" width={20} />
  </Select.Trigger>

  <Select.Content className="">
    {options.map((option) => (
      <Select.Item
        key={option}
        className=""
        onOption={handleMenu}
        value={option}
        isSelected={selectedMenu === option}
      >
        {option}
      </Select.Item>
    ))}
  </Select.Content>
</Select>;
```
