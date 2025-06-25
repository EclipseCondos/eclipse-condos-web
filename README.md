# Eclipse Condos Web Monorepo

Monorepo con arquitectura MVVM + DDD:

- apps/frontend: Next.js (View + ViewModel)
- apps/backend: Laravel (DDD)
- libs/ui: componentes React compartidos
- libs/data: tipos y clientes HTTP compartidos
- infra/nginx: configuración de servidor

## Scripts

### Frontend

```bash
cd apps/frontend && npm install
npm run dev
```

### Backend

```bash
cd apps/backend && composer install
php artisan serve
```

### Infra
docker-compose up -d
