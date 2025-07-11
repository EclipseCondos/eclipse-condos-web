'use client';
import React, { useState, useEffect } from 'react';
import styles from './FAQ.module.css';

const faqData = [
  {
    id: 1,
    category: "Departamentos",
    question: "¿Cuántas personas pueden hospedarse en cada departamento?",
    answer: "Nuestros departamentos están diseñados para diferentes capacidades: Departamento Luna (2-4 personas), Departamento Sol (4-6 personas), Departamento Mar (2-4 personas), y Departamento Tierra (6-8 personas). Todos incluyen amenidades completas para una estancia cómoda."
  },
  {
    id: 2,
    category: "Departamentos",
    question: "¿Los departamentos incluyen cocina completa?",
    answer: "Sí, todos nuestros departamentos cuentan con cocina completamente equipada que incluye refrigerador, estufa, horno, microondas, utensilios de cocina, vajilla y electrodomésticos básicos para que puedas preparar tus comidas cómodamente."
  },
  {
    id: 3,
    category: "Reservaciones",
    question: "¿Cuál es la política de cancelación?",
    answer: "Ofrecemos cancelación gratuita hasta 48 horas antes de la fecha de check-in. Para cancelaciones dentro de las 48 horas, se aplicará un cargo del 50% del total de la reserva. No se realizan reembolsos por no-shows."
  },
  {
    id: 4,
    category: "Reservaciones",
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
    answer: "Todos nuestros departamentos cuentan con WiFi de alta velocidad incluido sin costo adicional. También tenemos áreas comunes con conexión reforzada."
  },
  {
    id: 7,
    category: "Ubicación",
    question: "¿Qué tan cerca están de la playa?",
    answer: "Eclipse Condos se encuentra a solo 2 minutos caminando de la playa principal. Tenemos acceso directo a una playa privada y semi-privada para nuestros huéspedes."
  },
  {
    id: 8,
    category: "Ubicación",
    question: "¿Hay restaurantes cerca?",
    answer: "Sí, tenemos varios restaurantes a distancia caminable, incluyendo opciones de mariscos frescos, cocina local e internacional. También hay supermercados y tiendas de conveniencia cerca."
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
  }
];

const categories = ["Todos", "Departamentos", "Reservaciones", "Servicios", "Ubicación", "Amenidades"];

// Opciones de contacto específicas por departamento
const generalContactOptions = [
  {
    id: 1,
    type: "whatsapp",
    name: "Consultas Generales",
    description: "Para preguntas sobre Eclipse Condos",
    link: "https://wa.me/5215551234567?text=Hola, tengo una pregunta sobre Eclipse Condos",
    icon: "💬",
    color: "whatsapp"
  }
];

const apartmentOptions = [
  {
    id: 2,
    type: "airbnb",
    name: "Departamento Luna",
    description: "2-4 personas • Vista al mar",
    link: "https://www.airbnb.com/rooms/luna-placeholder", // Cambiar por el link real
    icon: "🌙",
    color: "luna"
  },
  {
    id: 3,
    type: "airbnb",
    name: "Departamento Sol",
    description: "4-6 personas • Terraza amplia",
    link: "https://www.airbnb.com/rooms/sol-placeholder", // Cambiar por el link real
    icon: "☀️",
    color: "sol"
  },
  {
    id: 4,
    type: "airbnb",
    name: "Departamento Mar",
    description: "2-4 personas • Frente al océano",
    link: "https://www.airbnb.com/rooms/mar-placeholder", // Cambiar por el link real
    icon: "🌊",
    color: "mar"
  },
  {
    id: 5,
    type: "airbnb",
    name: "Departamento Tierra",
    description: "6-8 personas • Espacios amplios",
    link: "https://www.airbnb.com/rooms/tierra-placeholder", // Cambiar por el link real
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