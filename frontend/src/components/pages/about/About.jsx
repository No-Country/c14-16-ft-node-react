import DogCat from '/assets/bgDogCat.jpeg';

const About = () => {
    const pageStyle = {
        backgroundImage: `url(${DogCat})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh', 
    };

    return (
        <div style={pageStyle}>
            <header className="container mx-auto">
                <h1 className="text-center">Sobre Nosotros</h1>
            </header>
            <main>
                <section className="container mx-auto p-8">
                    <article className="p-8 bg-[rgba(224,224,224,0.80)] rounded-xl">
                        <h3 className="text-black font-bold text-lg">¿Quienes somos?</h3>
                        <p className="">
                            Doggy’s House es la unión de distintas guarderías porteñas como
                            “Ciudad mascotera”, “Guardería Canina Belgrano R”, “Moni Guardería
                            Canina”, “Rock&dog guardería canina”, “Ruta canina” y muchas otras
                            más; para que tus hijos peludos tengan siempre la mejor atención
                            posible.
                        </p>
                    </article>
                    <article>
                        <h3>¿De dónde nace la idea?</h3>
                        <p>
                            Doggy’s House nace de la iniciativa de un grupo de estudiantes de
                            sistemas, viendo un problema en el mercado encontraron esta
                            solución tanto para los dueños de las guarderías como para los
                            dueños de facilitar la reserva y seguridad a la hora de pagar.
                        </p>
                    </article>
                    <article>
                        <h3>¿Por qué elegir Doggy’s House?</h3>
                        <p>
                            En Doogy’s house sabemos que la vida a veces puede complicarse.
                            Nuestro objetivo es que viajes con tranquilidad y disfrutes de tus
                            actividades favoritas sin la preocupación de quién cuidará a tu
                            perro. Con la cobertura veterinaria (si esta incluida), las fotos
                            y videos semanales que recibirás y los cuidadores verificados por
                            el equipo de Doogy’s house, no volverás a tener dudas sobre dónde
                            dejar a tu mascota cuando no te pueda acompañar
                        </p>
                    </article>
                </section>
                <section className="container mx-auto">
                    <h2>Doggy’s House en numeros</h2>
                    <article>
                        <div>
                            <h4>
                                <span>1537</span> días
                            </h4>
                            <p>Días reservados el último mes</p>
                        </div>
                        <div>
                            <h4>
                                <span>8</span>
                            </h4>
                            <p>Sucursales Habilitadas</p>
                        </div>
                        <div>
                            <h4>
                                <span>486</span>
                            </h4>
                            <p>Reseñas de 5 estrellas</p>
                        </div>
                    </article>
                </section>
            </main>
        </div>
    );
};

export default About;