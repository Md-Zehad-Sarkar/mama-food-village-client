"use client";
import { useGetAllReviewsQuery } from "@/redux/api/reviews/reviewsApi";
import Ratings from "@/utils/Ratings";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper/modules";

const AboutSlider = () => {
  const { data, isLoading } = useGetAllReviewsQuery(undefined);
  const reviews = data?.data;
  return (
    <>
      <Swiper
        slidesPerView={1}
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {reviews?.map((review: any) => (
          <SwiperSlide key={review?._id}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                maxWidth: "600px",
                width: "100%",
                margin: "0 auto",
                paddingY:'10px'
              }}
            >
              <Image
                src={review?.profile_image}
                alt={review?.profile_image}
                width={70}
                height={70}
                style={{ borderRadius: 10, marginBottom: "5px" }}
              />
              <Ratings value={4} />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  maxWidth: "600px",
                  width: "100%",
                  margin: "0 auto",
                  marginTop: "10px",
                  paddingX: { xs: "30px" },
                }}
              >
                <Typography mt={2}>
                  {review?.review.slice(0, 200)}...
                </Typography>
                <Box>
                  <Typography fontWeight={600} mt={2}>
                    {review?.name}
                  </Typography>
                  <Typography>{review?.designation || "CEO"}</Typography>
                </Box>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>Slide 1</SwiperSlide> */}
      </Swiper>
    </>
  );
};

export default AboutSlider;
