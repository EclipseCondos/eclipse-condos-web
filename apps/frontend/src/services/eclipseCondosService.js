// Stub temporal P0.
// Este servicio queda listo para conectarse cuando se inicialice la API en Laravel.

class EclipseCondosService {
  async getProperties() {
    return [];
  }

  validateProperty(propertyData) {
    return Boolean(propertyData);
  }
}

export default EclipseCondosService;
