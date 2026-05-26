# 🔥 Laboratorio No. 1 — Cloud Database con Firebase & Firestore

<div align="center">

![Node.js](https://img.shields.io/badge/Node.js-18%2B-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase_Admin-13.10.0-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Firestore](https://img.shields.io/badge/Cloud_Firestore-NoSQL-4285F4?style=for-the-badge&logo=google-cloud&logoColor=white)
![Maestría](https://img.shields.io/badge/Maestría-Arquitectura_Software-8B5CF6?style=for-the-badge)

**Fundamentos de la Tecnología Cloud · Laboratorio No. 1**
*Politécnico Grancolombiano — Maestría en Arquitectura de Software*

</div>

---

## 📐 ¿Qué hace este proyecto?

Provee un script de carga masiva de datos hacia **Google Cloud Firestore** usando el SDK de Firebase Admin para Node.js. El script inserta un conjunto de 10 registros de estudiantes del Politécnico Grancolombiano en una colección NoSQL en la nube, demostrando el ciclo completo de:

1. Autenticación con Service Account de Google Cloud
2. Inicialización de la conexión a Firestore
3. Escritura asíncrona de documentos en una colección
4. Validación por consola de cada inserción

---

## 🏗️ Arquitectura del Sistema

```
┌─────────────────────────────────────────────────────────────────┐
│                     MÁQUINA LOCAL                               │
│                                                                 │
│   ┌─────────────────────┐    ┌──────────────────────────────┐  │
│   │   cargar-datos.js   │    │  Service Account (.json)     │  │
│   │   (Script Node.js)  │───▶│  Credenciales GCP            │  │
│   └─────────┬───────────┘    └──────────────────────────────┘  │
│             │                                                   │
└─────────────┼───────────────────────────────────────────────────┘
              │  HTTPS (Firebase Admin SDK v13)
              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    GOOGLE CLOUD PLATFORM                        │
│                                                                 │
│   ┌────────────────────────────────────────────────────────┐   │
│   │              Firebase Project                          │   │
│   │         (estudiantes-politecnico)                      │   │
│   │                                                        │   │
│   │   ┌────────────────────────────────────────────────┐   │   │
│   │   │            Cloud Firestore (NoSQL)             │   │   │
│   │   │                                                │   │   │
│   │   │   Collection: "estudiantes"                    │   │   │
│   │   │   ┌──────────────────────────────────────┐    │   │   │
│   │   │   │ Document (auto-ID)                   │    │   │   │
│   │   │   │ ├── nombre:      string              │    │   │   │
│   │   │   │ ├── apellido:    string              │    │   │   │
│   │   │   │ ├── telefono:    string              │    │   │   │
│   │   │   │ ├── edad:        number              │    │   │   │
│   │   │   │ ├── correo:      string              │    │   │   │
│   │   │   │ ├── direccion:   string              │    │   │   │
│   │   │   │ ├── universidad: string              │    │   │   │
│   │   │   │ ├── semestre:    number              │    │   │   │
│   │   │   │ ├── jornada:     string              │    │   │   │
│   │   │   │ └── promedio:    number              │    │   │   │
│   │   │   └──────────────────────────────────────┘    │   │   │
│   │   └────────────────────────────────────────────────┘   │   │
│   └────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🧰 Stack Tecnológico

| Capa | Tecnología | Versión | Rol |
|------|-----------|---------|-----|
| **Runtime** | Node.js | 18+ | Ejecución del script |
| **SDK** | Firebase Admin | ^13.10.0 | Acceso privilegiado a Firebase |
| **Base de datos** | Cloud Firestore | Managed | Almacenamiento NoSQL en nube |
| **Auth** | Google Service Account | — | Autenticación server-to-server |
| **Plataforma** | Google Cloud Platform | — | Infraestructura cloud |

---

## 📊 Esquema de Datos

### Colección: `estudiantes`

Cada documento almacena el perfil académico de un estudiante:

```json
{
  "nombre":      "Daniela",
  "apellido":    "Castro",
  "telefono":    "3008901234",
  "edad":        25,
  "correo":      "daniela.castro@politecnico.edu.co",
  "direccion":   "Av 30 #55-60, Bogotá",
  "universidad": "Politécnico Grancolombiano",
  "semestre":    9,
  "jornada":     "Nocturna",
  "promedio":    4.9
}
```

### Dataset cargado (10 registros)

| Nombre | Apellido | Ciudad | Semestre | Jornada | Promedio |
|--------|----------|--------|----------|---------|---------|
| Carlos | Ramírez | Bogotá | 3 | Diurna | 4.2 |
| Laura | Gómez | Bogotá | 5 | Nocturna | 3.8 |
| Andrés | Martínez | Bogotá | 2 | Virtual | 4.5 |
| Valentina | Torres | Bogotá | 7 | Diurna | 3.5 |
| Santiago | López | Medellín | 4 | Nocturna | 4.0 |
| Mariana | Herrera | Cali | 6 | Virtual | 4.7 |
| Juan | Díaz | Barranquilla | 3 | Diurna | 3.2 |
| Daniela | Castro | Bogotá | 9 | Nocturna | 4.9 |
| Felipe | Moreno | Bogotá | 5 | Diurna | 3.6 |
| Isabella | Vargas | Bogotá | 4 | Virtual | 4.3 |

---

## 🚀 Configuración y Ejecución

### Prerrequisitos

- Node.js 18 o superior
- Una cuenta en [Firebase Console](https://console.firebase.google.com/)
- Proyecto Firebase con Firestore habilitado
- Service Account con permisos de escritura en Firestore

### 1. Clonar e instalar dependencias

```bash
# Instalar dependencias
npm install
```

### 2. Configurar credenciales de Firebase

Descarga el archivo Service Account desde Firebase Console:

```
Firebase Console → Project Settings → Service Accounts → Generate new private key
```

Coloca el archivo `.json` en la raíz del proyecto. El archivo tiene esta estructura:

```json
{
  "type": "service_account",
  "project_id": "tu-proyecto-id",
  "private_key_id": "...",
  "private_key": "-----BEGIN PRIVATE KEY-----\n...",
  "client_email": "firebase-adminsdk-...@tu-proyecto.iam.gserviceaccount.com",
  ...
}
```

### 3. Actualizar la referencia en el script

En `cargar-datos.js`, ajusta la ruta al nombre exacto de tu archivo `.json`:

```js
const serviceAccount = require("./tu-archivo-service-account.json");
```

### 4. Ejecutar el script

```bash
node cargar-datos.js
```

### Salida esperada

```
✅ Registrado: Carlos Ramírez
✅ Registrado: Laura Gómez
✅ Registrado: Andrés Martínez
✅ Registrado: Valentina Torres
✅ Registrado: Santiago López
✅ Registrado: Mariana Herrera
✅ Registrado: Juan Díaz
✅ Registrado: Daniela Castro
✅ Registrado: Felipe Moreno
✅ Registrado: Isabella Vargas

🎉 ¡Los 10 registros fueron cargados exitosamente!
```

---

## 🔍 Cómo funciona el código

### Flujo de ejecución

```
node cargar-datos.js
        │
        ▼
admin.initializeApp()          ← Autentica con Service Account
        │
        ▼
db.collection("estudiantes")   ← Referencia a la colección Firestore
        │
        ▼
for (estudiante of estudiantes)
        │
        ├── coleccion.add(estudiante)   ← Escribe documento (ID automático)
        │         │
        │         └── console.log(✅)   ← Confirma en consola
        │
        ▼
process.exit(0)                ← Termina limpiamente
```

### Puntos clave del diseño

**Autenticación via Service Account** — El SDK de Firebase Admin usa un JWT firmado con la clave privada del Service Account para obtener tokens de acceso a la API de Firestore. No requiere interacción del usuario.

**Escritura secuencial con `async/await`** — El bucle usa `await coleccion.add()` para garantizar que cada documento se confirme antes de proceder al siguiente. Esto evita condiciones de carrera en la respuesta de confirmación pero sacrifica throughput vs. escritura paralela.

**IDs automáticos** — `coleccion.add()` deja que Firestore genere un ID único por documento. Si se necesitan IDs predecibles, la alternativa es `coleccion.doc("id-fijo").set(data)`.

---

## 🔒 Seguridad — Puntos críticos

> ⚠️ **IMPORTANTE: El archivo Service Account contiene una clave privada RSA. Nunca lo subas a un repositorio público.**

### Qué hacer

```bash
# Agregar el Service Account al .gitignore
echo "*.json" >> .gitignore

# O más específico:
echo "estudiantes-politecnico-firebase-adminsdk-*.json" >> .gitignore
```

### Principio de mínimo privilegio

Para producción, el Service Account solo debería tener el rol `Cloud Datastore User` (escritura en Firestore), no roles de administrador completo.

```
Firebase Console → Project Settings → Service Accounts
IAM Console → Otorgar solo: roles/datastore.user
```

---

## 📁 Estructura del Proyecto

```
Laboratorio No. 1/
├── cargar-datos.js                          # Script principal de carga
├── estudiantes-politecnico-firebase-*.json  # Credenciales Service Account ⚠️
├── package.json                             # Configuración npm + dependencias
├── package-lock.json                        # Lockfile de dependencias
├── U2_ActividadSumativa.pdf                 # Enunciado del laboratorio
├── Bitacora_BaseDatos_Nube_*.pdf            # Bitácora de ejecución
└── node_modules/                            # Dependencias instaladas
```

---

## 📚 Conceptos Cloud demostrados

| Concepto | Implementación en este lab |
|----------|--------------------------|
| **DBaaS (Database as a Service)** | Firestore es una BD totalmente gestionada — sin servidores que administrar |
| **NoSQL Document Store** | Datos en documentos JSON flexibles, sin esquema rígido |
| **Autenticación Server-to-Server** | Service Account + JWT en lugar de usuario/contraseña |
| **SDK de alto nivel** | Firebase Admin abstrae las llamadas REST a la API de Firestore |
| **Escalabilidad automática** | Firestore escala horizontalmente sin configuración |
| **Multiregión** | Los datos de GCP se replican automáticamente |

---

## 🔄 Próximos pasos posibles

- [ ] Agregar consultas de lectura (`db.collection().get()`, `.where()`, `.orderBy()`)
- [ ] Implementar actualización y eliminación de documentos
- [ ] Agregar validación de esquema antes de insertar (Joi, Zod)
- [ ] Migrar a escritura paralela con `Promise.all()` para mayor throughput
- [ ] Configurar reglas de seguridad de Firestore para ambiente productivo
- [ ] Conectar una aplicación frontend (React/Vue) al mismo proyecto Firebase

---

## 📖 Referencias

- [Firebase Admin SDK — Node.js Docs](https://firebase.google.com/docs/admin/setup)
- [Cloud Firestore — Documentación oficial](https://firebase.google.com/docs/firestore)
- [Google Cloud IAM — Service Accounts](https://cloud.google.com/iam/docs/service-accounts)
- [Firestore Security Rules](https://firebase.google.com/docs/firestore/security/get-started)

---

<div align="center">

**Maestría en Arquitectura de Software**
Fundamentos de la Tecnología Cloud · Laboratorio No. 1
*Politécnico Grancolombiano — 2026*

</div>
