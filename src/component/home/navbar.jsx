import { Box,Typography,styled } from "@mui/material";
import { navData } from "../../constants/data";




const Component = styled(Box)`
    display:flex;
    margin: 55px 135px 0 130px;
    justify-content: space-between;
`
const Conatiner = styled(Box)`
    padding: 12px 8px;
    text-align: center;

`

const Text = styled(Typography)`
    font-size:14px;
    font-weight: 600;
    font-family:inherit;
`

const Navbar = () =>{
    return (
        <Component >
           {
            navData.map(data => (
             <Conatiner>
                <img src={data.url} alt="nav" style={{width:64}} />
                <Text>{data.text}</Text>
             </Conatiner>

            ))
           }
        </Component >
    )
}


export default Navbar;