const admin = require("firebase-admin");
const serviceAccount = require("./estudiantes-politecnico-firebase-adminsdk-fbsvc-3c3468eeed.json");

// Reemplaza el nombre del archivo .json con el nombre exacto que tienes
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

const estudiantes = [
  { nombre: "Carlos", apellido: "Ramírez", telefono: "3101234567", edad: 20, correo: "carlos.ramirez@politecnico.edu.co", direccion: "Cra 15 #45-20, Bogotá", universidad: "Politécnico Grancolombiano", semestre: 3, jornada: "Diurna", promedio: 4.2 },
  { nombre: "Laura", apellido: "Gómez", telefono: "3152345678", edad: 22, correo: "laura.gomez@politecnico.edu.co", direccion: "Cll 80 #20-15, Bogotá", universidad: "Politécnico Grancolombiano", semestre: 5, jornada: "Nocturna", promedio: 3.8 },
  { nombre: "Andrés", apellido: "Martínez", telefono: "3203456789", edad: 19, correo: "andres.martinez@politecnico.edu.co", direccion: "Av 68 #30-10, Bogotá", universidad: "Politécnico Grancolombiano", semestre: 2, jornada: "Virtual", promedio: 4.5 },
  { nombre: "Valentina", apellido: "Torres", telefono: "3004567890", edad: 24, correo: "valentina.torres@politecnico.edu.co", direccion: "Cra 7 #100-50, Bogotá", universidad: "Politécnico Grancolombiano", semestre: 7, jornada: "Diurna", promedio: 3.5 },
  { nombre: "Santiago", apellido: "López", telefono: "3115678901", edad: 21, correo: "santiago.lopez@politecnico.edu.co", direccion: "Cll 45 #60-30, Medellín", universidad: "Politécnico Grancolombiano", semestre: 4, jornada: "Nocturna", promedio: 4.0 },
  { nombre: "Mariana", apellido: "Herrera", telefono: "3166789012", edad: 23, correo: "mariana.herrera@politecnico.edu.co", direccion: "Cra 50 #20-80, Cali", universidad: "Politécnico Grancolombiano", semestre: 6, jornada: "Virtual", promedio: 4.7 },
  { nombre: "Juan", apellido: "Díaz", telefono: "3187890123", edad: 20, correo: "juan.diaz@politecnico.edu.co", direccion: "Cll 10 #15-40, Barranquilla", universidad: "Politécnico Grancolombiano", semestre: 3, jornada: "Diurna", promedio: 3.2 },
  { nombre: "Daniela", apellido: "Castro", telefono: "3008901234", edad: 25, correo: "daniela.castro@politecnico.edu.co", direccion: "Av 30 #55-60, Bogotá", universidad: "Politécnico Grancolombiano", semestre: 9, jornada: "Nocturna", promedio: 4.9 },
  { nombre: "Felipe", apellido: "Moreno", telefono: "3019012345", edad: 22, correo: "felipe.moreno@politecnico.edu.co", direccion: "Cra 20 #70-10, Bogotá", universidad: "Politécnico Grancolombiano", semestre: 5, jornada: "Diurna", promedio: 3.6 },
  { nombre: "Isabella", apellido: "Vargas", telefono: "3130123456", edad: 21, correo: "isabella.vargas@politecnico.edu.co", direccion: "Cll 90 #40-25, Bogotá", universidad: "Politécnico Grancolombiano", semestre: 4, jornada: "Virtual", promedio: 4.3 }
];

async function cargarDatos() {
  const coleccion = db.collection("estudiantes");
  for (const estudiante of estudiantes) {
    await coleccion.add(estudiante);
    console.log(`✅ Registrado: ${estudiante.nombre} ${estudiante.apellido}`);
  }
  console.log("\n🎉 ¡Los 10 registros fueron cargados exitosamente!");
  process.exit(0);
}

cargarDatos();