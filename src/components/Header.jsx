
import { AppBar, Toolbar, styled} from '@mui/material'

const Container = styled(AppBar)`
        background: #060606;
`

const Header = () =>{
    return(
        <Container position="static">
            <Toolbar>
            <img
  src="https://assets.codepen.io/t-1/codepen-logo.svg"
  alt="CodePen Logo as SVG"
  style={{ width: 100, filter: "brightness(0) invert(1)" }}
/>

            </Toolbar>
        </Container>
    );
}

export default Header 