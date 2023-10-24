import { Carousel } from "react-bootstrap"

const CarrouselHome = () => {
    return (
        <Carousel>

            <Carousel.Item>
                <img
                    className='d-block w-100'
                    style={{ maxHeight: "500px", objectFit: 'cover' }}
                    src="https://img.freepik.com/foto-gratis/hombre-joven-que-elige-ropa-estante-sala-exposicion_23-2148175631.jpg?size=626&ext=jpg"
                    alt="First Slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className='d-block w-100'
                    style={{ maxHeight: "500px", objectFit: 'cover' }}
                    src="https://img.freepik.com/fotos-premium/ropa-vintage-perchas-tienda_23-2150082944.jpg?w=740"
                    alt="Second Slide"
                />
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className='d-block w-100'
                    style={{ maxHeight: "500px", objectFit: 'cover' }}
                    src="https://www.hogarmania.com/archivos/202106/por-que-lavar-desinfectar-ropa-segunda-mano-consejos-XxXx80.jpg"
                    alt="Third Slide"
                />
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

    )
}

export default CarrouselHome

