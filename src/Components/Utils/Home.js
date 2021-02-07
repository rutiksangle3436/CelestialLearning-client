import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import CourseCard from './CourseCard';
import HomeCarousel from './HomeCarousel';
import Footer1 from './Footer';
import { Container, Row, Col } from 'shards-react';
import axios from 'axios';
import CarouselDemo from "../Utils/Carousel"

export default function Home({ history }) {

    const [courses , setCourses] = useState([])

    useEffect(() => {
        axios.get('/homePage').then(res => {
            console.log("Result : " , res.data.courseData  )
            setCourses(res.data.courseData)

        })

    }, [])

    return (
        <div className="home">
            <div className="header">
                <Header />
            </div>
            <HomeCarousel />

            {/* <div className="main">
                {courses.map(course => (
                    <Container className="cc">
                        <Row>
                            <Col>
                                <CourseCard course={course} />
                            </Col>
                        </Row>
                    </Container>
                ))}
                
            </div> */}
            
            <CarouselDemo />
            <Footer1 />
        </div>
    );
}
