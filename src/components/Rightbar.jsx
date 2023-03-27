import {Box, Typography, ImageList, ImageListItem} from "@mui/material"

const rightbarStyle = {
    flexDirection: "column"
}

const itemData = [
    {
        img:"../src/assets/pizza.jpg",
        alt:"Pizza",
    },
    {
        img:"../src/assets/iphone.jpg",
        alt:"Iphone",
    },
    {
        img:"../src/assets/car.jpg",
        alt:"Car"
    },
    {
        img:"../src/assets/coffee.jpg",
        alt:"Coffee",
    },
]

function Rightbar(){
    return(
        <Box sx={rightbarStyle}>
            <Typography variant="h6">Latest photos</Typography>
            <ImageList sx={{width: "250px", height: "250px"}} cols={2}>
                {itemData.map((item) => (
                    <ImageListItem key={item.img}>
                        <img 
                            src={item.img}
                            alt={item.alt}
                        />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    )
}

export default Rightbar;