import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import axios from "axios";
import Card from "../components/Card";
import Loader from "../components/Loader.jsx";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = ({type}) => {
  const [videos, setVideos] = useState([]);
  const [isloading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/api/videos/${type}`);
        console.log(videos)
        setVideos(res.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchVideos();
  }, [type]);
  return (
    <Container>
      {isloading ? <Loader /> : videos.map((video) => <Card key={video._id} 
            video={video}
      />)}
    </Container>
  );
};

export default Home;
