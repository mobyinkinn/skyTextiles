"use client";

import { Box, Button, Stack, Typography } from "@mui/material";
import Navbar from "../../../navbar/Navbar";
import Footer from "../../../footer/Footer";
import banner from "../assets/conference.png";
import Image from "next/image";
import time from "../assets/clock.png";
import location from "../assets/location.png";
import flowers from "../assets/flowers.png";
import laptop from "../assets/laptop.png";
import girlOnLaptop from "../assets/girlOnLaptop.png";

import img1 from "../assets/Events/independenceDay/1.jpg";
import img2 from "../assets/Events/independenceDay/2.jpg";
import img3 from "../assets/Events/independenceDay/3.jpg";
import img4 from "../assets/Events/independenceDay/4.jpg";

import ganesh from "../assets/Events/ganeshChaturthi/1.jpg";
import independence from "../assets/Events/independenceDay/2.jpg";
import navratri from "../assets/Events/navratri/1.jpg";
import { useRouter } from "next/navigation";

const data = [
  {
    Date: "15th Aug, 2023",
    Title: "Independence Day celebration",
    time: "11 AM - 1 PM",
    location: "Sky Textiles",
    route:
      "/sustainability/event-yarn-fabrics-textile-manufacturer-gujarat-india/independence-day",
    image: independence,
    description:
      "Independence Day celebration fostering patriotism and unity among our team.",
  },
  {
    Date: "19th Sept, 2023",
    Title: "Ganesh Chaturthi",
    time: "11 AM - 1 PM",
    location: "Sky Textiles",
    route:
      "/sustainability/event-yarn-fabrics-textile-manufacturer-gujarat-india/ganesh-chaturthi",
    image: ganesh,
    description:
      "Joyful Ganesh Chaturthi celebration uniting our factory team in devotion.",
  },
  {
    Date: "15th Oct, 2023",
    Title: "Navratri Celebration",
    time: "11 AM - 1 PM",
    location: "Sky Textiles",
    route:
      "/sustainability/event-yarn-fabrics-textile-manufacturer-gujarat-india/navratri",
    image: navratri,
    description:
      "Navratri celebration at our factory embraces Gujarat's culture, dance, and unity.",
  },
];

export default function Event() {
  const router = useRouter();
  return (
    <Stack>
      <Navbar />
      <Box
        height={{ lg: "90vh", smm: "50vh", xs: "30vh" }}
        sx={{
          backgroundImage: `url(${img1.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          width: "100vw",
          marginTop: "50px",
        }}
      ></Box>
      <Stack margin={{ md: "50px", smm: "30px", xs: "20px" }} gap={"10px"}>
        <Typography fontSize={{ lg: "2.5rem", smm: "1.7rem", xs: "1rem" }}>
          Independence Day
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          It Is A Long Established Fact That A Reader Will Be Distracted By The
          Readable Content Of A Page When Looking At Its Layout. The Point Of
          Using Lorem Ipsum Is That It Has A More-or-less Normal Distribution Of
          Letters, As Opposed To Using 'content Here, Content Here', Making It
          Look Like Readable English. Many Desktop Publishing Packages And Web
          Page Editors Now Use Lorem Ipsum As Their Default Model Text, And A
          Search For 'lorem Ipsum' Will Uncover Many Web Sites Still In Their
          Infancy. Various Versions Have Evolved Over The Years, Sometimes By
          Accident, Sometimes On Purpose (Injected Humour And The Like).
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          It Is A Long Established Fact That A Reader Will Be Distracted By The
          Readable Content Of A Page When Looking At Its Layout. The Point Of
          Using Lorem Ipsum Is That It Has A More-or-less Normal Distribution Of
          Letters, As Opposed To Using 'content Here, Content Here', Making It
          Look Like Readable English. Many Desktop Publishing Packages And Web
          Page Editors Now Use Lorem Ipsum As Their Default Model Text, And A
          Search For 'lorem Ipsum' Will Uncover Many Web Sites Still In Their
          Infancy. Various Versions Have Evolved Over The Years, Sometimes By
          Accident, Sometimes On Purpose (Injected Humour And The Like).
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          It Is A Long Established Fact That A Reader Will Be Distracted By The
          Readable Content Of A Page When Looking At Its Layout. The Point Of
          Search For 'lorem Ipsum' Will Uncover Many Web Sites Still In Their
          Infancy. Various Versions Have Evolved Over The Years, Sometimes By
          Accident, Sometimes On Purpose (Injected Humour And The Like).
        </Typography>
        <Typography fontSize={{ lg: "2.5rem", smm: "1.7rem", xs: "1rem" }}>
          Steering Clear of Common AI Writing Pitfalls
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          It Is A Long Established Fact That A Reader Will Be Distracted By The
          Readable Content Of A Page When Looking At Its Layout. The Point Of
          Using Lorem Ipsum Is That It Has A More-or-less Normal Distribution Of
          Letters, As Opposed To Using 'content Here, Content Here', Making It
          Infancy. Various Versions Have Evolved Over The Years, Sometimes By
          Accident, Sometimes On Purpose (Injected Humour And The Like).
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          It Is A Long Established Fact That A Reader Will Be Distracted By The
          Readable Content Of A Page When Looking At Its Layout. The Point Of
          Using Lorem Ipsum Is That It Has A More-or-less Normal Distribution Of
          Letters, As Opposed To Using 'content Here, Content Here', Making It
          Look Like Readable English. Many Desktop Publishing Packages And Web
          Page Editors Now Use Lorem Ipsum As Their Default Model Text, And A
          Search For 'lorem Ipsum' Will Uncover Many Web Sites Still In Their
          Infancy. Various Versions Have Evolved Over The Years, Sometimes By
          Accident, Sometimes On Purpose (Injected Humour And The Like).
        </Typography>
        <Typography fontSize={{ md: "1rem", xs: "0.7rem" }}>
          Infancy. Various Versions Have Evolved Over The Years, Sometimes By
          Accident, Sometimes On Purpose (Injected Humour And The Like).
        </Typography>
        <Stack
          direction={{ md: "row" }}
          gap={"20px"}
          justifyContent={"space-between"}
          marginTop={"30px"}
        >
          <Box
            sx={{
              backgroundImage: `url(${img2.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
              height: "110vh",
            }}
            width={{ md: "48%", xs: "100%" }}
          ></Box>
          <Stack
            width={{ md: "48%", xs: "100%" }}
            justifyContent={"space-between"}
            gap={"20px"}
          >
            <Box
              sx={{
                backgroundImage: `url(${img3.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                width: "100%",
                height: { md: "50vh", xs: "70vh" },
              }}
            ></Box>
            <Box
              sx={{
                backgroundImage: `url(${img4.src})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
                width: "100%",
                height: { md: "50vh", xs: "70vh" },
              }}
            ></Box>
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Typography
          margin={{ md: "0 50px", smm: "0 30px", xs: "0 20px" }}
          fontSize={{ lg: "2.5rem", smm: "1.7rem", xs: "1rem" }}
        >
          Events
        </Typography>

        <Stack
          margin={{
            xl: "20px 70px 200px 70px",
            md: "20px 40px 200px 40px",
            smm: "10px 30px 200px 30px",
            sm: "10px 20px 200px 20px",
          }}
          justifyContent={"center"}
          direction={{ md: "row" }}
          flexWrap={"wrap"}
          gap={"20px"}
        >
          {data.map((d) => (
            <Stack
              gap={"10px"}
              fontSize={"5px"}
              width={{ xl: "30%", lg: "40%", md: "40%", sm: "95%" }}
              padding={"20px"}
              backgroundColor={"#f9f9f9"}
              sx={{
                cursor: "pointer",
                transition: "all 0.3s ease",
                "&:hover": {
                  boxShadow: "2px 1px 20px 0 rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <Box
                width="100%"
                height="30vh"
                sx={{
                  backgroundImage: `url(${d.image.src})`,
                  backgroundSize: "cover",
                  borderRadius: "5px",
                }}
              ></Box>
              <Typography
                fontSize={"0.9rem"}
                backgroundColor={"#D9D9D9"}
                padding={"5px 8px"}
                borderRadius={"3px"}
                width={"fit-content"}
                margin={"10px 0"}
              >
                {d.Date}
              </Typography>
              <Typography fontSize={"1.3rem"} fontWeight={"bold"}>
                {d.Title}
              </Typography>
              {/* <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
                <Image src={time} alt="" height={15} width={15} />
                <Typography>{d.time}</Typography>
              </Stack> */}
              <Stack direction={"row"} gap={"10px"} alignItems={"center"}>
                <Image src={location} alt="" height={16} width={12} />
                <Typography>{d.Title}</Typography>
              </Stack>
              <Typography>{d.description}</Typography>
              <Button
                sx={{
                  marginTop: "20px",
                  width: "200px",
                  borderRadius: "5px",
                  padding: "10px",
                  fontSize: "1.2rem",
                  border: "none",
                  backgroundColor: "#F85658",
                  color: "white",
                  transition: "all 0.4s ease",
                  "&:hover": {
                    transform: "scale(1.04)",
                  },
                }}
                onClick={() => router.push(d.route)}
              >
                View More
              </Button>
            </Stack>
          ))}
        </Stack>
      </Stack>
      <Footer />
    </Stack>
  );
}