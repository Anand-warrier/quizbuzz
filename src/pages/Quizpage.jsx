import React from 'react';
import { TextField, Grid, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
const QuizPage = () => {
  const topics = [
    { topic: 'Sports', cover:'https://blog.ipleaders.in/wp-content/uploads/2021/08/Return_of_Sports.jpg' },
    { topic: 'Arts', cover:'https://i0.wp.com/xaviernewswire.com/wp-content/uploads/2020/02/art.jpg?fit=948%2C572&ssl=1' },
    { topic: 'Politics', cover:'https://m.media-amazon.com/images/I/81o791tFXeS.jpg' },
    {topic:'Festivals',cover:'https://images.newindianexpress.com/uploads/user/imagelibrary/2022/4/9/w1200X800/Festivals.jpg'},
    { topic: 'Logos', cover: 'https://assets.entrepreneur.com/content/3x2/2000/20160210172912-branding-logos-companies-businesses-identity.jpeg?format=pjeg&auto=webp&crop=16:9' },
    { topic: 'Literary', cover: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS72_aNcdfXvxntAvjOaGZ_9w6BMB1ICAFG2A&usqp=CAU' },
  ];

  const handleSearch = (event) => {
    const searchQuery = event.target.value;
    // Perform search logic
    console.log('Search query:', searchQuery);
  };

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        onChange={handleSearch}
        fullWidth
        sx={{ mb: 4 }}
      />

      <Grid container spacing={3}>
        {topics.map((topic, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <CardActionArea component={Link} to={`/quiz/${topic.topic}`}>
                <CardMedia
                  component="img"
                  height="200"
                  image={topic.cover}
                  alt={topic.topic}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {topic.topic}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default QuizPage;