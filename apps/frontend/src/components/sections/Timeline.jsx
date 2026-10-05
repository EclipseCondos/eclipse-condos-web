import styles from '@/styles/Home/timeline.module.css';
import aboutStyles from '@/styles/Home/aboutus.module.css';
import TimelineItem from './TimelineItem';


const events = [
	{ id: 1, year: 2021, title: 'Los Inicios', text: 'Fundamos Eclipse Condos con la visión de ofrecer experiencias de hospedaje excepcionales, combinando el confort de casa con el lujo de unas vacaciones memorables.' },
	{ id: 2, year: 2022, title: 'Primer Departamento', text: 'Lanzamos nuestro primer departamento de lujo en Mareazul, estableciendo nuevos estándares en hospedaje vacacional y atención personalizada.' },
	{ id: 3, year: 2023, title: 'Expansión de Servicios', text: 'Ampliamos nuestra oferta con servicios concierge y experiencias personalizadas, llevando la hospitalidad a un nivel superior.' },
	{ id: 4, year: 2024, title: 'Tecnología y Comodidad', text: 'Integramos tecnología inteligente y sistemas automatizados para brindar mayor comodidad y una experiencia de hospedaje verdaderamente moderna.' }
];


const Timeline = () => {
	return (	
        <section className={styles.timelineSection}>
            <div className={aboutStyles.sectionOverlay}>
            </div>
            <div className={`${aboutStyles.container} ${styles.container}`}>
				<div className={aboutStyles.sectionHeader}>
                    <div className={aboutStyles.sectionTag}>
                        <span className={aboutStyles.tagIcon}>📖</span>
                        <span>Nuestra Historia</span>
                    </div>
                    <h2 className={aboutStyles.sectionTitle}>
                        Un viaje de <span className={aboutStyles.gradient}>transformación </span> 
                        y <span className={aboutStyles.gradient}>crecimiento</span>
                    </h2>
                </div>
				<div className={styles.timeline}>
                    {events.map((e, idx) => (
                      <div key={e.year} className={styles.timelineItem}>
                        <TimelineItem year={e.year} title={e.title} text={e.text} />
                      </div>
                    ))}
				</div>
            </div> 
        </section>
	);
};
export default Timeline;