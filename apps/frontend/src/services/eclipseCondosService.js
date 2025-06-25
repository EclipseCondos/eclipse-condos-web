// Ejemplo de uso del backend desde el frontend
// Este archivo muestra cómo acceder a archivos del backend usando los alias

// ====================================
// IMPORTACIONES DESDE EL BACKEND
// ====================================

// Si necesitas acceder a configuraciones del backend
// import { AppConfig } from '~/backend/config/app';

// Si necesitas modelos compartidos
// import { UserModel } from '~/backend/app/Domain/Models/User';

// Si necesitas utilidades del backend
// import { ValidationUtils } from '~/backend/app/Application/Utils/Validation';

// ====================================
// IMPORTACIONES DESDE LIBS COMPARTIDAS
// ====================================

// Si tienes librerías compartidas
// import { SharedAPI } from '~/libs/data/api';
// import { CommonUtils } from '~/libs/utils/common';

// ====================================
// IMPORTACIONES DEL FRONTEND
// ====================================

// Para archivos del frontend, usa @/
import { apiService } from '@/services/api';
import { formatDate } from '@/utils/date';

// ====================================
// EJEMPLO DE SERVICIO QUE USA BACKEND
// ====================================

class EclipseCondosService {
  constructor() {
    // Configuración que podría venir del backend
    // this.config = AppConfig;
  }

  async getProperties() {
    try {
      // Llamada a API que podría usar configuración del backend
      const response = await apiService.get('/properties');
      return response.data;
    } catch (error) {
      console.error('Error fetching properties:', error);
      throw error;
    }
  }

  validateProperty(propertyData) {
    // Validación que podría usar utilidades del backend
    // return ValidationUtils.validateProperty(propertyData);
    return true;
  }
}

export default EclipseCondosService;

// ====================================
// NOTAS IMPORTANTES
// ====================================

/*
1. Usa @/ para todo lo que esté en el frontend
2. Usa ~/ para acceder al backend, libs, docs, etc.
3. Asegúrate de que el servidor esté reiniciado después de cambios en next.config.js
4. El IntelliSense funcionará automáticamente con estos alias
*/
