export type HeaderProps = {
    title: string;
}

function Header(props: HeaderProps){
    return(
    <header>
        {props.title}
    </header>
    )
}

export default Header;