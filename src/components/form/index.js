import React from "react";
import { Container,Error, Base, Title, Text, TextSmall, Link, Input, Submit,Demo } from "./styles/form";

const Form = ({children,  ...restProps})  =>{
    return (
        <Container {...restProps}>{children}</Container>
    )
}

Form.Text = function FormText({children, ...restProps}){
    return <Text {...restProps}>{children}</Text>
}
Form.TextSmall = function FormTextSmall({children, ...restProps}){
    return <TextSmall {...restProps}>{children}</TextSmall>
}
Form.Title = function FormTitle({children, ...restProps}){
    return <Title {...restProps}>{children}</Title>
}
Form.Error = function FormError({children, ...restProps}){
    return <Error {...restProps}>{children}</Error>
}
Form.Base = function FormBase({children, ...restProps}){
    return <Base {...restProps}>{children}</Base>
}
Form.Link = function FormLink({children, ...restProps}){
    return <Link {...restProps}>{children}</Link>
}
Form.Submit = function FormSubmit({children, ...restProps}){
    return <Submit {...restProps}>{children}</Submit>
}
Form.Demo = function FormDemo({children, ...restProps}){
    return <Demo {...restProps}>{children}</Demo>
}

Form.Input = function FormInput({children, ...restProps}){
    return <Input {...restProps} />
}

export default Form