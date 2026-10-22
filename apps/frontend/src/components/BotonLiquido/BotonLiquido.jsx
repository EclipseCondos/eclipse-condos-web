import styles from './BotonLiquido.module.css';

// Botón redondo de vidrio líquido: transparente como una gota de agua, con el
// destello y el reflejo de una lente. Es un <a>; recibe href, aria-label, target, etc.
export default function BotonLiquido({ className = '', children, ...props }) {
  return (
    <a className={`${styles.gota} ${className}`} {...props}>
      {children}
    </a>
  );
}
