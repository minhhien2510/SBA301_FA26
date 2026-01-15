import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";
import banners from "../data/banner";

function BannerCarousel() {
    return (
        <Carousel fade interval={3000}>
            {banners.map((banner) => (
                <Carousel.Item key={banner.id}>
                    <Image
                        className="d-block w-100"
                        src={banner.image}
                        alt={banner.title}
                        style={{
                            height: "clamp(240px, 50vh, 520px)",
                            objectFit: "cover",
                        }}
                    />
                    <Carousel.Caption
                        style={{
                            background: "rgba(0,0,0,0.5)",
                            borderRadius: "10px",
                            padding: "10px 20px",
                        }}
                        className="d-none d-md-block"
                    >
                        <h3>{banner.title}</h3>
                        <p>{banner.description}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default BannerCarousel;
