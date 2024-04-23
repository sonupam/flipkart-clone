
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'



import styled from "@emotion/styled";
import { bannerData } from "../../constants/data";


const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };



  const Image = styled('img')({
     width:'100%',
     height:280
  })
  
  

const Banner = () => {
    return(
        <Carousel responsive={responsive}>
            {
                bannerData.map(data =>(
                        <Image src={data.url} alt="banner" />
                ))
            }
        </Carousel>
    )
}

export default Banner;