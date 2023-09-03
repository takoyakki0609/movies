import { Box } from "@mui/material";
import styled from "styled-components";
import SearchIcon from '@mui/icons-material/Search';
import Icon from '@mui/material/Icon';

const NaviBox = styled('div')({
    display:'flex',
    background:'black',
})

const Logo = styled('div')({

})
const MenuList = styled('div')({

})

const InfoBox = styled('div')({

})
export default function Navigation(){
    return(
        <Box>
            <NaviBox>
                <Logo>

                </Logo>
                <MenuList>

                </MenuList>
                <InfoBox>
                <SearchIcon />
                </InfoBox>
            </NaviBox>
        </Box>
    )
}