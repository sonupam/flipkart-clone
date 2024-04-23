import { Box, InputBase, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

const Searchcontainer = styled(Box)`
    background: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
`

const InputSearchBase = styled(InputBase)`
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`

const SearchIconwrapper = styled(Box)`
    color: blue;
    padding: 5px;
    display:flex;
`

const Search = () => {
    return (
        <Searchcontainer>
            <InputSearchBase
                placeholder="Search for product, Brand and More" />
            
            <SearchIconwrapper>
                <SearchIcon />
            </SearchIconwrapper>
        </Searchcontainer>
    )
}

export default Search;
