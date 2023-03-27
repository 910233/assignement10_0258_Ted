import { Box, Typography, Card, Grid, CardMedia, CardContent } from "@mui/material"

function Content(){
    return(
        <Grid container direction="column" >
                <Box>
                    <Typography variant="h4" gutterBottom>Welcome to My Website</Typography>
                    <Typography variant="body1" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet risus 
                    non elit eleifend hendrerit. Maecenas blandit purus nisl, ac egestas nulla 
                    feugiat et. Mauris rutrum justo quis hendrerit ornare. Morbi ut congue lectus, 
                    in finibus turpis. Sed ex quam, ornare at libero quis, sodales maximus eros. 
                    Nam consectetur tincidunt interdum. Aenean sagittis, risus sed convallis 
                    sagittis, ex nulla elementum sapien, in facilisis nibh sapien sit amet elit.
                    </Typography> 
                    <Typography variant="body1" gutterBottom>
                    Aliquam luctus odio ante, a consequat mi gravida ac. Donec eleifend arcu ac 
                    gravida faucibus. Curabitur quis augue at erat vestibulum aliquam pellentesque 
                    et nulla. Sed arcu magna, ultrices sit amet leo quis, lacinia rhoncus justo. 
                    Nullam commodo congue fermentum. Quisque dapibus erat sapien, a dignissim velit 
                    molestie eget. In mattis aliquet feugiat.
                    </Typography>
                </Box>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Card>
                        <CardMedia 
                            sx={{ height: 140 }}
                            image="../src/assets/beach.jpeg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">Card Title</Typography>
                            <Typography variant="body1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet risus non elit eleifend hendrerit. Maecenas blandit purus nisl, ac egestas nulla feugiat et. Mauris rutrum justo quis hendrerit ornare. Morbi ut congue lectus, in finibus turpis. Sed ex quam, ornare at libero quis, sodales maximus eros. Nam consectetur tincidunt interdum. Aenean sagittis, risus sed convallis sagittis, ex nulla elementum sapien, in facilisis nibh sapien sit amet elit.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardMedia 
                            sx={{ height: 140 }}
                            image="../src/assets/beach.jpeg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">Card Title</Typography>
                            <Typography variant="body1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet risus non elit eleifend hendrerit. Maecenas blandit purus nisl, ac egestas nulla feugiat et. Mauris rutrum justo quis hendrerit ornare. Morbi ut congue lectus, in finibus turpis. Sed ex quam, ornare at libero quis, sodales maximus eros. Nam consectetur tincidunt interdum. Aenean sagittis, risus sed convallis sagittis, ex nulla elementum sapien, in facilisis nibh sapien sit amet elit.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Card>
                        <CardMedia 
                            sx={{ height: 140 }}
                            image="../src/assets/beach.jpeg"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="div">Card Title</Typography>
                            <Typography variant="body1">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sit amet risus non elit eleifend hendrerit. Maecenas blandit purus nisl, ac egestas nulla feugiat et. Mauris rutrum justo quis hendrerit ornare. Morbi ut congue lectus, in finibus turpis. Sed ex quam, ornare at libero quis, sodales maximus eros. Nam consectetur tincidunt interdum. Aenean sagittis, risus sed convallis sagittis, ex nulla elementum sapien, in facilisis nibh sapien sit amet elit.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Content;