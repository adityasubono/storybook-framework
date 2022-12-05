import Button from "../components/Button"

export default {
    title: "Components/Button",
    component: Button,
    argTypes: {
        handleClick:
            { action: "handleClick" }
    },
}

const Template = args => <Button {...args} />

export const Orange = Template.bind({})
Orange.args = {
    backgroundColor: "orange",
    label: "Press Me XL",
    size: "sm",
}

export const Pink = Template.bind({})
Pink.args = {
    backgroundColor: "pink",
    label: "Press Me XL",
    size: "xl",
}

export const Blue = Template.bind({})
Blue.args = {
    backgroundColor: "blue",
    label: "Press Me",
    size: "md",
}

export const Green = Template.bind({})
Green.args = {
    backgroundColor: "green",
    label: "Press Me",
    size: "md",
}

export const Small = Template.bind({})
Small.args = {
    backgroundColor: "red",
    label: "Press Me",
    size: "sm",
}

export const Large = Template.bind({})
Large.args = {
    backgroundColor: "red",
    label: "Press Me",
    size: "lg",
}

export const LongLabel = Template.bind({})
LongLabel.args = {
    backgroundColor: "red",
    label: "Press Me adsf asdf asdf asdfasdfasd fasd fasd fasd",
    size: "md",
}
