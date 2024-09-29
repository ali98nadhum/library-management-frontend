import React from 'react';
import style from "./home.module.css";
import Container from '../../utils/Container/Container';
import { FaBookOpen } from "react-icons/fa";
import { Card, CardContent, Typography, Grid } from '@mui/material';

const HomePage = () => {
  const totalBooks = 150; // هنا ضع العدد الإجمالي للكتب
  const ordersLastWeek = 25; // هنا ضع عدد الطلبات في الأسبوع الماضي

  return (
    <Container>
      <Grid container spacing={4} justifyContent="center">
        {/* الكارت الأول */}
        <Grid item xs={12} md={6}>
          <Card className={style.card}>
            <CardContent>
              <Typography variant="h5" component="div">
                <FaBookOpen /> عدد الكتب الكلي
              </Typography>
              <Typography variant="h4" color="text.secondary">
                {totalBooks}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* الكارت الثاني */}
        <Grid item xs={12} md={6}>
          <Card className={style.card}>
            <CardContent>
              <Typography variant="h5" component="div">
                الطلبات في آخر أسبوع
              </Typography>
              <Typography variant="h4" color="text.secondary">
                {ordersLastWeek}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
