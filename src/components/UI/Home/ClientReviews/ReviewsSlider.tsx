"use client";
import Ratings from "@/utils/Ratings";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import { useGetAllReviewsQuery } from "@/redux/api/reviews/reviewsApi";

const ReviewsSlider = () => {
  const { data, isLoading } = useGetAllReviewsQuery(undefined);
  const reviews = data?.data;

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 100,
    autoplaySpeed: 5000,
    cssEase: "linear",
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {reviews?.map((review: any) => (
          <Box
            key={review?._id}
            sx={{
              bgcolor: "#FFFFFF",
              padding: "5px 15px",
              boxShadow: 2,
              height: 350,
              borderRadius: 5,
            }}
          >
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ display: "flex", gap: 1 }}>
                <Image
                  src={review?.profile_image}
                  alt={review?.profile_image}
                  width={70}
                  height={70}
                  style={{ borderRadius: 50 }}
                />
                <Box>
                  <Typography>{review?.name}</Typography>
                  <Typography>{review?.designation || "CEO"}</Typography>
                </Box>
              </Box>
              <Ratings value={4} />
            </Box>
            <Typography mt={2}>{review?.review.slice(0, 200)}...</Typography>
          </Box>
        ))}
      </Slider>
    </div>
  );
};

export default ReviewsSlider;
