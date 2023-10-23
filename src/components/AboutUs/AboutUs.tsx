import { useSpring, animated } from 'react-spring';
import './AboutUs.css'; // Importa el archivo CSS para estilos personalizados

const AboutUs = () => {
  const name = 'Mi Tienda de Ropa';
  const yearFounded = 2020;
  const mission = 'proporcionar a nuestros clientes las últimas tendencias en moda a precios asequibles';
  const description = 'En Mi Tienda de Ropa, nos enorgullece ofrecer una amplia gama de ropa para hombres, mujeres y niños. Trabajamos con diseñadores de moda talentosos y colaboramos con las mejores marcas para asegurarnos de que nuestros clientes estén siempre a la moda. Gracias por elegir Mi Tienda de Ropa para tus necesidades de moda. ¡Esperamos que disfrutes de tu experiencia de compra con nosotros!';

  // Animación de desvanecimiento
  const fadeAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div style={fadeAnimation} className="about-us-container">
      <h2>Acerca de {name}</h2>
      <p>Somos una tienda de ropa comprometida con la calidad y la moda. Nuestra misión es {mission}. Fundada en {yearFounded}, hemos crecido y prosperado gracias a nuestros fieles clientes y empleados dedicados.</p>
      <p>{description}</p>
    </animated.div>
  );
}

export default AboutUs