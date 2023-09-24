import { ColDef } from 'ag-grid-community';

export const rowData = [
  {
    id: '8a35e7c7-d52f-4a8d-af5c-06dbf2d891f1',
    make: 'Toyota',
    model: 'Celica',
    price: 35000
  },
  {
    id: 'fd34bcde-5678-9012-3456-7890abcdef12',
    make: 'Toyota',
    model: 'Corolla',
    price: 25000
  },
  {
    id: 'ab12cdef-3456-7890-1234-5678abcdef90',
    make: 'Ford',
    model: 'Mustang',
    price: 45000
  },
  {
    id: '6789abcd-1234-5678-90ab-cdef12345678',
    make: 'Honda',
    model: 'Civic',
    price: 20000
  },
  {
    id: '5432efgh-7890-1234-5678-90abcdef1234',
    make: 'Chevrolet',
    model: 'Camaro',
    price: 40000
  },
  {
    id: 'bcdef123-4567-8901-2345-6789abcdef01',
    make: 'BMW',
    model: 'X5',
    price: 60000
  },
  {
    id: '9012abcd-3456-7890-1234-5678abcdef90',
    make: 'Mercedes-Benz',
    model: 'E-Class',
    price: 55000
  },
  {
    id: 'defg5678-90ab-cdef-1234-567890abcdef',
    make: 'Audi',
    model: 'A4',
    price: 48000
  },
  {
    id: '56789012-3456-7890-abcd-ef1234567890',
    make: 'Volkswagen',
    model: 'Golf',
    price: 30000
  },
  {
    id: 'abcd1234-5678-90ef-1234-567890abcdef',
    make: 'Nissan',
    model: 'Altima',
    price: 28000
  },
  {
    id: '1234efgh-5678-90ab-cdef-1234567890ab',
    make: 'Hyundai',
    model: 'Elantra',
    price: 22000
  },
  {
    id: 'efgh5678-90ab-cdef-1234-567890abcd12',
    make: 'Kia',
    model: 'Sorento',
    price: 32000
  },
  {
    id: '23456789-0abc-def1-2345-67890abcdef1',
    make: 'Mazda',
    model: 'CX-5',
    price: 35000
  },
  {
    id: '78901234-56ab-cdef-1234-567890abcdef',
    make: 'Subaru',
    model: 'Forester',
    price: 32000
  },
  {
    id: '34567890-abcd-ef12-3456-7890abcdef12',
    make: 'Jeep',
    model: 'Wrangler',
    price: 40000
  },
  {
    id: '9012abcd-ef12-3456-7890-abcdef123456',
    make: 'GMC',
    model: 'Sierra',
    price: 45000
  },
  {
    id: 'def12345-6789-0abc-def1-234567890abc',
    make: 'Ram',
    model: '1500',
    price: 50000
  },
  {
    id: '23456789-0abc-def1-2345-67890abcdef12',
    make: 'Chevrolet',
    model: 'Silverado',
    price: 48000
  },
  {
    id: '34567890-abcd-ef12-3456-7890abcdef123',
    make: 'Ford',
    model: 'F-150',
    price: 52000
  },
  {
    id: '9012abcd-ef12-3456-7890-abcdef123456',
    make: 'Dodge',
    model: 'Charger',
    price: 38000
  }
];

export const columnDefs: ColDef[] = [
  { headerName: 'Make', field: 'make' },
  { headerName: 'Model', field: 'model' },
  { headerName: 'Price', field: 'price', editable: true }
];
