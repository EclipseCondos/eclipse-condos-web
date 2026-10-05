'use client';
import React, { useState, useEffect } from 'react';
import { usePageTitle } from '../../src/hooks/usePageTitle';
import styles from './FAQ.module.css';

const faqData = [
    {
        id: 1,
        category: "Departamentos",
        question: "¿Qué tipos de departamentos ofrecen en Eclipse Condos?",
        answer: "Ofrecemos diferentes tipos de departamentos, desde unidades para 2 personas hasta opciones familiares para 8 huéspedes. Cada uno cuenta con amenidades modernas y vistas privilegiadas. Consulta la sección de departamentos para ver las opciones disponibles."
    },
    {
        id: 2,
        category: "Departamentos",
        question: "¿Los departamentos incluyen cocina completa?",
        answer: "Sí, todos nuestros departamentos cuentan con cocina completamente equipada que incluye refrigerador, estufa, horno, microondas, utensilios de cocina, vajilla y electrodomésticos básicos para que puedas preparar tus comidas cómodamente."
    },
    {
        id: 3,
        category: "Políticas",
        question: "¿Cuál es la política de cancelación?",
        answer: "Ofrecemos cancelación gratuita hasta 48 horas antes de la fecha de check-in. Para cancelaciones dentro de las 48 horas, se aplicará un cargo del 50% del total de la reserva. No se realizan reembolsos por no-shows."
    },
    {
        id: 4,
        category: "Políticas",
        question: "¿Puedo modificar las fechas de mi reserva?",
        answer: "Sí, puedes modificar las fechas de tu reserva hasta 24 horas antes del check-in, sujeto a disponibilidad. Si hay diferencia en el precio, se aplicará el ajuste correspondiente."
    },
    {
        id: 5,
        category: "Servicios",
        question: "¿Ofrecen servicio de limpieza?",
        answer: "Sí, incluimos servicio de limpieza antes de tu llegada y después de tu salida. Para estancias de más de 7 días, ofrecemos limpieza intermedia sin costo adicional."
    },
    {
        id: 6,
        category: "Servicios",
        question: "¿Hay WiFi disponible?",
        answer: "Todos nuestros condominios incluyen WiFi de alta velocidad sin costo adicional dentro de las unidades. Este servicio no está disponible en las áreas de piscinas ni en las playas. En cuanto a los restaurantes del complejo, la disponibilidad de WiFi puede variar y debe consultarse directamente con el establecimiento."
    },
    {
        id: 7,
        category: "Ubicación",
        question: "¿Qué tan cerca están de la playa?",
        answer: "Eclipse Condos se encuentra a solo 2 minutos caminando de la playa principal. Tenemos acceso directo a una playa privada y semi-privada para nuestros huéspedes."
    },
    {
        id: 8,
        category: "Amenidades",
        question: "¿Hay restaurantes cerca?",
        answer: "Sí, Contamos con varios restaurantes dentro del complejo a distancia caminable, incluyendo opciones de mariscos frescos, cocina local e internacional. Los restaurantes dentro del complejo son Faro Azul (desayunos y comidas) y Punto Azul (comidas y cenas). También hay supermercados y tiendas de conveniencia cerca."
    },
    
    {
        id: 9,
        category: "Amenidades",
        question: "¿Tienen piscina?",
        answer: "Sí, contamos con una hermosa piscina infinity con vista al mar, área de jacuzzi y zona de descanso. Está abierta las 24 horas para nuestros huéspedes."
    },
    {
        id: 10,
        category: "Amenidades",
        question: "¿Hay estacionamiento disponible?",
        answer: "Sí, ofrecemos estacionamiento gratuito y seguro para todos nuestros huéspedes. Cada departamento tiene al menos un espacio asignado."
    },
    {
        id: 11,
        category: "Amenidades",
        question: "¿Tienen gimnasio?",
        answer: "Sí, contamos con un gimnasio equipado para nuestros huéspedes sin costo adicional. Está abierto de 6:00 am a 10:00 pm todos los días. Es necesario realizar una reservación previa para su uso en recepción.",
    },
    {
        id: 12,
        category: "Ubicación",
        question: "¿Cómo llego desde el aeropuerto?",
        answer: "Desde el Aeropuerto Internacional de Cancún, puedes tomar un taxi o un servicio de transporte privado que te llevará directamente a Eclipse Condos en aproximadamente 45 minutos. También ofrecemos servicios de traslado bajo solicitud previa."
    },
    {
        id: 13,
        category: "Amenidades",
        question: "¿Tiene canchas de tenis y/o pádel?",
        answer: "Sí, Eclipse Condos cuenta con canchas de tenis y pádel disponibles para nuestros huéspedes. Se debe reservar en la recepción y no tiene costo adicional."
    },
    {
        id: 14,
        category: "Amenidades",
        question: "¿Hay camastros y sombrillas en alberca y playa? ¿Tienen costo?",
        answer: "Sí, en Eclipse Condos ofrecemos camastros y sombrillas en la alberca y en la playa. Estos están disponibles sin costo adicional para nuestros huéspedes."
    },
    {   
        id: 15,
        category: "Departamentos",
        question: "¿La renta del departamento es todo incluido?",
        answer: "La renta del departamento incluye el alojamiento y el uso de las amenidades del condominio. Sin embargo, no incluye alimentos, bebidas, transporte u otros servicios adicionales que puedas requerir durante tu estancia. Puedes optar por servicios adicionales según tus necesidades."
    },
    {
        id: 16,
        category: "Amenidades",
        question: "¿Hay estacionamiento disponible para huéspedes?",
        answer: "Sí, Eclipse Condos ofrece un cajón de estacionamiento gratuito por departamento para la duración de tu estancia."
    }, 
    {
        id: 17,
        category: "Ubicación",
        question: "¿Qué tan lejos está Eclipse Condos de la quinta avenida?",
        answer: "Eclipse Condos está ubicado a aproximadamente 5 minutos en coche de la quinta avenida, donde encontrarás una gran variedad de tiendas, restaurantes y vida nocturna."
    },
    {
        id: 18,
        category: "Ubicación",
        question: "¿Qué tan lejos está Eclipse Condos del centro de Cancún?",
        answer: "Eclipse Condos se encuentra a aproximadamente 70 minutos en coche del centro de Cancún, dependiendo del tráfico."
    },
    {
        id: 19,
        category: "Ubicación",
        question: "¿Qué tan lejos está Eclipse Condos de la zona hotelera de Cancún?",
        answer: "Eclipse Condos está ubicado a aproximadamente 1 hora en coche de la zona hotelera de Cancún, donde encontrarás playas, restaurantes y vida nocturna."
    },
    {
        id: 20,
        category: "Ubicación",
        question: "¿Qué tan lejos está Eclipse Condos de Costa Mujeres?",
        answer: "Eclipse Condos está ubicado a aproximadamente 90 minutos en coche de Costa Mujeres, dependiendo del tráfico."
    },
    {
        id: 21,
        category: "Ubicación",
        question: "¿Qué tan lejos está Eclipse Condos de Islas Mujeres?",
        answer: "Eclipse Condos está ubicado a aproximadamente 80 minutos en coche y 20 minutos de ferry a Islas Mujeres, dependiendo del tráfico."
    },
    {
        id: 22,
        category: "Ubicación",
        question: "¿Qué tan lejos está Eclipse Condos de Chichen Itzá?",
        answer: "Eclipse Condos está ubicado a aproximadamente 2 horas en coche de Chichen Itzá, por la autopista Valladolid, dependiendo del tráfico."
    },
    {
        id: 23,
        category: "Ubicación",
        question: "¿Qué tan lejos está Eclipse Condos del área arqueológica de Tulum?",
        answer: "Eclipse Condos está ubicado a aproximadamente 1 hora en coche del área arqueológica de Tulum, dependiendo del tráfico."
    },
    {
        id: 24,
        category: "Servicios",
        question: "¿Tienen algún servicio de comida tipo cocinero privado o chef a domicilio?",
        answer: "Este servicio no se incluye de forma estándar. El huésped deberá contratar y pagar directamente con un externo. La responsabilidad total, tanto contractual como económica, recaerá exclusivamente en el huésped."
    },
    {
        id: 25,
        category: "Políticas",
        question: "¿Se permite fumar dentro de los departamentos?",
        answer: "No, está estrictamente prohibido fumar dentro de los departamentos para garantizar la comodidad y seguridad de todos nuestros huéspedes. Hay áreas designadas para fumadores fuera de los edificios."
    },
    {
        id: 26,
        category: "Políticas",
        question: "¿Cuál es la política por daños a la propiedad?",
        answer: "Los huéspedes son responsables del costo total de reparación, reemplazo y sanciones por daños o pérdidas a la propiedad, mobiliario o instalaciones. Se exige cuidado y notificación inmediata de incidentes."
    }
];

const categories = ["Todos", "Departamentos", "Políticas", "Servicios", "Ubicación", "Amenidades"];

// Opciones de contacto específicas por departamento
const generalContactOptions = [
  {
    id: 1,
    type: "Airbnb",
    name: "Consultas por Mensaje",
    description: "Para preguntas sobre Eclipse Condos",
    link: "https://wa.me/5215551234567?text=Hola, tengo una pregunta sobre Eclipse Condos",
    icon: "💬",
    color: "Airbnb"
  },
  {
    id: 2,
    type: "Correo",
    name: "Consultas por correo",
    description: "Para preguntas sobre Eclipse Condos",
    link: "mailto:eclipsecondominios@gmail.com",
    icon: "📧",
    color: "mail"
  }
];

const apartmentOptions = [
  {
    id: 1,
    type: "airbnb",
    name: "Departamento Arena",
    description: "2-4 personas • Vista al jardín",
    link: "http://airbnb.com/h/casaeclipsedearena", // Cambiar por el link real
    icon: "🏖️",
    color: "arena"
  },
  {
    id: 2,
    type: "airbnb",
    name: "Departamento Luna",
    description: "2-4 personas • Vista al mar",
    link: "http://airbnb.com/h/casaeclipsedeluna", // Cambiar por el link real
    icon: "🌙",
    color: "luna"
  },
  {
    id: 3,
    type: "airbnb",
    name: "Departamento Sol",
    description: "4-6 personas • Terraza amplia",
    link: "http://airbnb.com/h/casaeclipsedesol", // Cambiar por el link real
    icon: "☀️",
    color: "sol"
  },
  {
    id: 4,
    type: "airbnb",
    name: "Departamento Mar",
    description: "2-4 personas • Frente al océano",
    link: "http://airbnb.com/h/casaeclipsedemar", // Cambiar por el link real
    icon: "🌊",
    color: "mar"
  },
  {
    id: 5,
    type: "airbnb",
    name: "Departamento Tierra",
    description: "6-8 personas • Espacios amplios",
    link: "http://airbnb.com/h/casaeclipsedetierra", // Cambiar por el link real
    icon: "🌿",
    color: "tierra"
  }
];

const FAQ = () => {
    const [selectedCategory, setSelectedCategory] = useState("Todos");
    const [openQuestions, setOpenQuestions] = useState({});
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        category: 'General',
        question: ''
    });

    // Usar el hook para manejar el título automáticamente
    usePageTitle();

    // Ocultar el video de fondo al montar el componente
    useEffect(() => {
        document.body.classList.add('faq-page');
        return () => {
            document.body.classList.remove('faq-page');
        };
    }, []);

    const filteredFAQs = selectedCategory === "Todos" 
        ? faqData 
        : faqData.filter(faq => faq.category === selectedCategory);

    const toggleQuestion = (id) => {
        setOpenQuestions(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí puedes agregar la lógica para enviar el formulario
        alert('¡Gracias por tu pregunta! Te contactaremos pronto.');
        setFormData({ name: '', email: '', category: 'General', question: '' });
    };

    return (
        <div className={styles.faqPage}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <h1 className={styles.title}>Preguntas Frecuentes</h1>
                    <p className={styles.subtitle}>
                        Encuentra respuestas a las preguntas más comunes sobre Eclipse Condos
                    </p>
                </div>

                {/* Category Filter */}
                <div className={styles.categoryFilter}>
                    {categories.map(category => (
                        <button
                            key={category}
                            className={`${styles.categoryButton} ${
                                selectedCategory === category ? styles.active : ''
                            }`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* FAQ List */}
                <div className={styles.faqList}>
                    {filteredFAQs.map(faq => (
                        <div key={faq.id} className={styles.faqItem}>
                            <button
                                className={styles.questionButton}
                                onClick={() => toggleQuestion(faq.id)}
                                aria-expanded={openQuestions[faq.id]}
                            >
                                <span className={styles.question}>{faq.question}</span>
                                <span className={`${styles.icon} ${openQuestions[faq.id] ? styles.open : ''}`}>
                                    ▼
                                </span>
                            </button>
                            {openQuestions[faq.id] && (
                                <div className={styles.answer}>
                                    <p>{faq.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Contact Section */}
                <div className={styles.contactSection}>
                    <h2 className={styles.contactTitle}>¿No encuentras tu respuesta?</h2>
                    
                    {/* General Contact */}
                    <div className={styles.generalContact}>
                        <h3 className={styles.sectionTitle}>Consultas Generales</h3>
                        <p className={styles.sectionSubtitle}>
                            Para preguntas sobre Eclipse Condos o información general
                        </p>
                        <div className={styles.contactGrid}>
                            {generalContactOptions.map(option => (
                                <a
                                    key={option.id}
                                    href={option.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${styles.contactCard} ${styles[option.color]}`}
                                >
                                    <div className={styles.cardIcon}>{option.icon}</div>
                                    <div className={styles.cardContent}>
                                        <h4 className={styles.cardTitle}>{option.name}</h4>
                                        <p className={styles.cardDescription}>{option.description}</p>
                                        <span className={styles.cardAction}>
                                            {option.type === 'whatsapp' ? 'Chatear' : 'Ver en Airbnb'}
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Apartments Section */}
                    <div className={styles.apartmentsContact}>
                        <h3 className={styles.sectionTitle}>Reservar Departamentos</h3>
                        <p className={styles.sectionSubtitle}>
                            Explora y reserva directamente en Airbnb
                        </p>
                        <div className={styles.contactGrid}>
                            {apartmentOptions.map(option => (
                                <a
                                    key={option.id}
                                    href={option.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`${styles.contactCard} ${styles[option.color]}`}
                                >
                                    <div className={styles.cardIcon}>{option.icon}</div>
                                    <div className={styles.cardContent}>
                                        <h4 className={styles.cardTitle}>{option.name}</h4>
                                        <p className={styles.cardDescription}>{option.description}</p>
                                        <span className={styles.cardAction}>
                                            {option.type === 'whatsapp' ? 'Chatear' : 'Ver en Airbnb'}
                                        </span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <form className={styles.contactForm} onSubmit={handleSubmit}>
                        <h3 className={styles.formTitle}>Envía tu pregunta</h3>
                        <div className={styles.formRow}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Tu nombre"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={styles.formInput}
                                required
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Tu email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={styles.formInput}
                                required
                            />
                        </div>
                        <select
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                            className={styles.formSelect}
                        >
                            <option value="General">General</option>
                            <option value="Departamentos">Departamentos</option>
                            <option value="Reservaciones">Reservaciones</option>
                            <option value="Servicios">Servicios</option>
                            <option value="Ubicación">Ubicación</option>
                            <option value="Amenidades">Amenidades</option>
                        </select>
                        <textarea
                            name="question"
                            placeholder="Tu pregunta..."
                            value={formData.question}
                            onChange={handleInputChange}
                            className={styles.formTextarea}
                            rows="4"
                            required
                        ></textarea>
                        <button type="submit" className={styles.submitButton}>
                            Enviar Pregunta
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default FAQ;