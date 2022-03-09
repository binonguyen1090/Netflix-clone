import React from "react";
import { Link as  ReactRouterLink} from "react-router-dom";
import {Dropdown, Picture, Profile, Background,Container,Logo, Group, Feature, FeatureCallOut, Text, ButtonLink, Link} from "./styles/header";

const Header = ({bg = true, children,  ...restProps})  =>{
    return (
        bg ? <Background {...restProps}>{children}</Background> : children
    )
}
Header.Feature = function HeaderFeature({children, ...restProps}){
    return (
        <Feature {...restProps}>{children}</Feature>
    )
}
Header.Text = function HeaderText({children, ...restProps}){
    return (
        <Text {...restProps}>{children}</Text>
    )
}
Header.Profile = function HeaderProfile({children, ...restProps}){
    return (
        <Profile {...restProps}>{children}</Profile>
    )
}
Header.Dropdown = function HeaderDropdown({children, ...restProps}){
    return (
        <Dropdown {...restProps}>{children}</Dropdown>
    )
}
Header.Picture = function HeaderPicture({src, ...restProps}){
    return (
        <Picture { ... restProps} src={`/images/users/${src}.png`} />
    )
}
Header.TextLink = function HeaderTextLink({children, ...restProps}){
    return (
        <Link {...restProps}>{children}</Link>
    )
}
Header.Group = function HeaderGroup({children, ...restProps}){
    return (
        <Group {...restProps}>{children}</Group>
    )
}
Header.FeatureCallOut = function HeaderFeatureCallOut({children, ...restProps}){
    return (
        <FeatureCallOut {...restProps}>{children}</FeatureCallOut>
    )
}

Header.Frame = function HeaderFrame({children, ...restProps}){
    return (
        <Container {...restProps}>{children}</Container>
    )
}
Header.Logo = function HeaderLogo({to, ...restProps}){
    return (
        <ReactRouterLink to={to}><Logo {...restProps}/></ReactRouterLink>
    )
}
Header.ButtonLink = function HeaderButtonLink({children, ...restProps}){
    return (
        <ButtonLink {...restProps}>{children}</ButtonLink>
    )
}


export default Header