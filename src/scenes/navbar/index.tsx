
import FlexBetween from "@/Components/FlexBetween"
import PixIcon from '@mui/icons-material/Pix';
import { Box, Typography, useTheme} from "@mui/material";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const {palette} = useTheme()
  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
        <FlexBetween gap="0.75rem">
            <PixIcon sx={{fontSize:"28px"}}/>
            <Typography variant="h4" fontSize={"16px"}>
                Finanseer
            </Typography>
        </FlexBetween>
        <FlexBetween gap={"2em"}>
            <Box sx={{"&:hover":{color: palette.primary[100]}}}>
               <NavLink to='/' style={({isActive})=>{
                return isActive?{color:palette.grey[700], textDecoration:"inherit"}:{color:"inherit"}
               }}>
                    dashboard
               </NavLink>
               
            </Box>
            <Box>
            <NavLink to='/predictions' style={({isActive})=>{
                return isActive?{color:palette.grey[700],textDecoration:"inherit"}:{color:"inherit"}
               }}>
                    predictions
               </NavLink>
            </Box>
        </FlexBetween>
    </FlexBetween>
  )
}

export default Navbar