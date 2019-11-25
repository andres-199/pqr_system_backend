/*
 Navicat Premium Data Transfer

 Source Server         : pqrsystem
 Source Server Type    : PostgreSQL
 Source Server Version : 100003
 Source Host           : localhost:5432
 Source Catalog        : pqr_system
 Source Schema         : public

 Target Server Type    : PostgreSQL
 Target Server Version : 100003
 File Encoding         : 65001

 Date: 25/11/2019 18:05:17
*/


-- ----------------------------
-- Sequence structure for campos_codigo_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."campos_codigo_seq";
CREATE SEQUENCE "public"."campos_codigo_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 32767
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for campos_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."campos_id_seq";
CREATE SEQUENCE "public"."campos_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 32767
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for contratos_codigo_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."contratos_codigo_seq";
CREATE SEQUENCE "public"."contratos_codigo_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for contratos_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."contratos_id_seq";
CREATE SEQUENCE "public"."contratos_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for ejecuciones_codigo_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."ejecuciones_codigo_seq";
CREATE SEQUENCE "public"."ejecuciones_codigo_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for ejecuciones_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."ejecuciones_id_seq";
CREATE SEQUENCE "public"."ejecuciones_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for estados_codigo_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."estados_codigo_seq";
CREATE SEQUENCE "public"."estados_codigo_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 32767
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for estados_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."estados_id_seq";
CREATE SEQUENCE "public"."estados_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 32767
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for flow_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."flow_id_seq";
CREATE SEQUENCE "public"."flow_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for pqrs_codigo_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."pqrs_codigo_seq";
CREATE SEQUENCE "public"."pqrs_codigo_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for pqrs_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."pqrs_id_seq";
CREATE SEQUENCE "public"."pqrs_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for predios_codigo_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."predios_codigo_seq";
CREATE SEQUENCE "public"."predios_codigo_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for predios_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."predios_id_seq";
CREATE SEQUENCE "public"."predios_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 9223372036854775807
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for productos_a_gestionar_codigo_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."productos_a_gestionar_codigo_seq";
CREATE SEQUENCE "public"."productos_a_gestionar_codigo_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 32767
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for productos_a_gestionar_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."productos_a_gestionar_id_seq";
CREATE SEQUENCE "public"."productos_a_gestionar_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 32767
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for roles_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."roles_id_seq";
CREATE SEQUENCE "public"."roles_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 32767
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for terceros_codigo_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."terceros_codigo_seq";
CREATE SEQUENCE "public"."terceros_codigo_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for terceros_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."terceros_id_seq";
CREATE SEQUENCE "public"."terceros_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for tipos_pqr_codigo_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tipos_pqr_codigo_seq";
CREATE SEQUENCE "public"."tipos_pqr_codigo_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 32767
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for tipos_pqr_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."tipos_pqr_id_seq";
CREATE SEQUENCE "public"."tipos_pqr_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 32767
START 1
CACHE 1;

-- ----------------------------
-- Sequence structure for usuarios_id_seq
-- ----------------------------
DROP SEQUENCE IF EXISTS "public"."usuarios_id_seq";
CREATE SEQUENCE "public"."usuarios_id_seq" 
INCREMENT 1
MINVALUE  1
MAXVALUE 2147483647
START 1
CACHE 1;

-- ----------------------------
-- Table structure for campos
-- ----------------------------
DROP TABLE IF EXISTS "public"."campos";
CREATE TABLE "public"."campos" (
  "id" int2 NOT NULL DEFAULT nextval('campos_id_seq'::regclass),
  "codigo" int2 NOT NULL DEFAULT nextval('campos_codigo_seq'::regclass),
  "nombre" varchar(255) COLLATE "pg_catalog"."default",
  "descripcion" text COLLATE "pg_catalog"."default",
  "createdAt" timestamp(6),
  "updatedAt" timestamp(6)
)
;

-- ----------------------------
-- Records of campos
-- ----------------------------
INSERT INTO "public"."campos" VALUES (1, 1, 'Niscota-Operación', 'Campo en operación de Equion ', '2019-11-18 06:53:41.386', '2019-11-25 21:02:13.351');
INSERT INTO "public"."campos" VALUES (13, 13, 'Piedemonte-Operación ', 'Campo en Operación (CPF- El Morro)', '2019-11-25 09:41:04.341', '2019-11-25 21:06:10.962');
INSERT INTO "public"."campos" VALUES (14, 14, 'Predios 100% Equion', 'Campo de predios que hacen parte a los predios cuenta 100% Equion', '2019-11-25 21:07:48.203', '2019-11-25 21:07:48.203');

-- ----------------------------
-- Table structure for contratos
-- ----------------------------
DROP TABLE IF EXISTS "public"."contratos";
CREATE TABLE "public"."contratos" (
  "id" int8 NOT NULL DEFAULT nextval('contratos_id_seq'::regclass),
  "codigo" int8 NOT NULL DEFAULT nextval('contratos_codigo_seq'::regclass),
  "fecha" date,
  "valor" numeric(255),
  "fecha_entrega" date,
  "createdAt" timestamp(6),
  "updatedAt" timestamp(6),
  "pqr_id" int8
)
;

-- ----------------------------
-- Records of contratos
-- ----------------------------
INSERT INTO "public"."contratos" VALUES (1, 1, '2019-02-02', 500000, '2019-03-20', '2019-11-25 20:54:07.772', '2019-11-25 20:54:07.772', NULL);

-- ----------------------------
-- Table structure for ejecuciones
-- ----------------------------
DROP TABLE IF EXISTS "public"."ejecuciones";
CREATE TABLE "public"."ejecuciones" (
  "id" int8 NOT NULL DEFAULT nextval('ejecuciones_id_seq'::regclass),
  "pqr_id" int8,
  "actividades" json,
  "codigo" int8 NOT NULL DEFAULT nextval('ejecuciones_codigo_seq'::regclass),
  "fecha_visita_campo" date,
  "fecha_entrega_revision" date,
  "fecha_aprovacion_respuesta" date,
  "fecha_entrega_respuesta" date,
  "fecha_cierre_respuesta" date,
  "requiere_accion_posterior" bool,
  "createdAt" timestamp(6),
  "updatedAt" timestamp(6)
)
;

-- ----------------------------
-- Table structure for estados
-- ----------------------------
DROP TABLE IF EXISTS "public"."estados";
CREATE TABLE "public"."estados" (
  "id" int2 NOT NULL DEFAULT nextval('estados_id_seq'::regclass),
  "codigo" int2 NOT NULL DEFAULT nextval('estados_codigo_seq'::regclass),
  "nombre" varchar(255) COLLATE "pg_catalog"."default",
  "descripcion" text COLLATE "pg_catalog"."default",
  "createdAt" timestamp(6),
  "updatedAt" timestamp(6)
)
;

-- ----------------------------
-- Records of estados
-- ----------------------------
INSERT INTO "public"."estados" VALUES (3, 3, 'En seguimiento a Acción posterior', NULL, '2019-11-25 04:23:37.503', '2019-11-25 04:23:37.503');
INSERT INTO "public"."estados" VALUES (2, 2, 'cerrada con Accion Posterior', NULL, '2019-11-25 09:21:53.67', '2019-11-25 04:24:48.95');
INSERT INTO "public"."estados" VALUES (4, 4, 'Con Acción posterior: Contrato Firma ', NULL, '2019-11-25 04:25:39.888', '2019-11-25 04:25:39.888');

-- ----------------------------
-- Table structure for flow
-- ----------------------------
DROP TABLE IF EXISTS "public"."flow";
CREATE TABLE "public"."flow" (
  "id" int8 NOT NULL DEFAULT nextval('flow_id_seq'::regclass),
  "pqr_id" int8,
  "profesional_id" int8,
  "archivos" json,
  "fecha" timestamp(6),
  "createdAt" timestamp(6),
  "updatedAt" timestamp(6)
)
;

-- ----------------------------
-- Table structure for pqrs
-- ----------------------------
DROP TABLE IF EXISTS "public"."pqrs";
CREATE TABLE "public"."pqrs" (
  "id" int8 NOT NULL DEFAULT nextval('pqrs_id_seq'::regclass),
  "codigo" int8 NOT NULL DEFAULT nextval('pqrs_codigo_seq'::regclass),
  "campo_id" int4,
  "tipo_pqr_id" int4,
  "estado_id" int4,
  "fecha_solicitud" date,
  "detalle" text COLLATE "pg_catalog"."default",
  "tiempo_gestion" int4,
  "fecha_cancelacion" date,
  "observaciones_seguimiento" json,
  "producto_gestionar_id" int4,
  "profesional_id" int4,
  "fecha_cierre_respuesta" date,
  "fecha_cierre_queja" date,
  "predio_id" int8,
  "createdAt" timestamp(6),
  "updatedAt" timestamp(6)
)
;
COMMENT ON COLUMN "public"."pqrs"."tiempo_gestion" IS 'el tiempo es un número en días';

-- ----------------------------
-- Records of pqrs
-- ----------------------------
INSERT INTO "public"."pqrs" VALUES (1, 1, 13, 2, NULL, '2019-11-24', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt massa a eros viverra, quis bibendum nulla semper. Nullam nec magna sed purus consequat luctus.', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 3, '2019-11-25 17:45:52.205', '2019-11-25 17:45:52.205');
INSERT INTO "public"."pqrs" VALUES (2, 2, 1, 4, NULL, '2019-11-25', 'La señora Floresminda Alvarez solicita que se revise el tema de la servidumbre ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4, '2019-11-25 21:18:21.065', '2019-11-25 21:18:21.065');
INSERT INTO "public"."pqrs" VALUES (3, 3, 1, 4, NULL, '2019-11-25', 'La señora Floresminda Alvarez solicita que se revise el tema de la servidumbre ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4, '2019-11-25 21:18:23.2', '2019-11-25 21:18:23.2');
INSERT INTO "public"."pqrs" VALUES (4, 4, 1, 4, NULL, '2019-11-25', 'La señora Floresminda Alvarez solicita que se revise el tema de la servidumbre ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4, '2019-11-25 21:18:25.098', '2019-11-25 21:18:25.098');
INSERT INTO "public"."pqrs" VALUES (5, 5, 1, 4, NULL, '2019-11-25', 'La señora Floresminda Alvarez solicita que se revise el tema de la servidumbre ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4, '2019-11-25 21:18:26.417', '2019-11-25 21:18:26.417');
INSERT INTO "public"."pqrs" VALUES (6, 6, 1, 4, NULL, '2019-11-25', 'La señora Floresminda Alvarez solicita que se revise el tema de la servidumbre ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4, '2019-11-25 21:18:34.334', '2019-11-25 21:18:34.334');
INSERT INTO "public"."pqrs" VALUES (7, 7, 1, 4, NULL, '2019-11-25', 'La señora Floresminda Alvarez solicita que se revise el tema de la servidumbre ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4, '2019-11-25 21:18:39.574', '2019-11-25 21:18:39.574');
INSERT INTO "public"."pqrs" VALUES (8, 8, 1, 4, NULL, '2019-11-25', 'La señora Floresminda Alvarez solicita que se revise el tema de la servidumbre ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4, '2019-11-25 21:18:40.874', '2019-11-25 21:18:40.874');
INSERT INTO "public"."pqrs" VALUES (9, 9, 1, 4, NULL, '2019-11-25', 'La señora Floresminda Alvarez solicita que se revise el tema de la servidumbre ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4, '2019-11-25 21:18:41.364', '2019-11-25 21:18:41.364');
INSERT INTO "public"."pqrs" VALUES (10, 10, 1, 4, NULL, '2019-11-25', 'La señora Floresminda Alvarez solicita que se revise el tema de la servidumbre ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4, '2019-11-25 21:18:42.068', '2019-11-25 21:18:42.068');
INSERT INTO "public"."pqrs" VALUES (11, 11, 1, 4, NULL, '2019-11-25', 'La señora floresminda Alvarez, solicita verificación de la servidumbre. ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4, '2019-11-25 21:25:07.871', '2019-11-25 21:25:07.871');
INSERT INTO "public"."pqrs" VALUES (12, 12, 1, 4, NULL, '2019-11-25', 'La señora floresminda Alvarez, solicita verificación de la servidumbre. ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4, '2019-11-25 21:25:09.201', '2019-11-25 21:25:09.201');
INSERT INTO "public"."pqrs" VALUES (13, 13, 1, 4, NULL, '2019-11-25', 'La señora floresminda Alvarez, solicita verificación de la servidumbre. ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4, '2019-11-25 21:25:11.075', '2019-11-25 21:25:11.075');
INSERT INTO "public"."pqrs" VALUES (14, 14, 1, 4, NULL, '2019-11-25', 'La señora floresminda Alvarez, solicita verificación de la servidumbre. ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4, '2019-11-25 21:25:11.702', '2019-11-25 21:25:11.702');
INSERT INTO "public"."pqrs" VALUES (15, 15, 1, 4, NULL, '2019-11-25', 'La señora floresminda Alvarez, solicita verificación de la servidumbre. ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4, '2019-11-25 21:25:13.147', '2019-11-25 21:25:13.147');
INSERT INTO "public"."pqrs" VALUES (16, 16, 1, 4, NULL, '2019-11-25', 'La señora floresminda Alvarez, solicita verificación de la servidumbre. ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4, '2019-11-25 21:25:24.534', '2019-11-25 21:25:24.534');
INSERT INTO "public"."pqrs" VALUES (17, 17, 1, 4, NULL, '2019-11-25', 'La señora floresminda Alvarez, solicita verificación de la servidumbre. ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4, '2019-11-25 21:25:26.265', '2019-11-25 21:25:26.265');
INSERT INTO "public"."pqrs" VALUES (18, 18, 1, 4, NULL, '2019-11-25', 'La señora floresminda Alvarez, solicita verificación de la servidumbre. ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4, '2019-11-25 21:25:27.331', '2019-11-25 21:25:27.331');
INSERT INTO "public"."pqrs" VALUES (19, 19, 1, 4, NULL, '2019-11-25', 'La señora floresminda Alvarez, solicita verificación de la servidumbre. ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4, '2019-11-25 21:25:29.392', '2019-11-25 21:25:29.392');
INSERT INTO "public"."pqrs" VALUES (20, 20, 1, 4, NULL, '2019-11-25', 'La señora floresminda Alvarez, solicita verificación de la servidumbre. ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4, '2019-11-25 21:25:30.722', '2019-11-25 21:25:30.722');
INSERT INTO "public"."pqrs" VALUES (21, 21, 1, 4, NULL, '2019-11-25', 'La señora floresminda Alvarez, solicita verificación de la servidumbre. ', NULL, NULL, NULL, NULL, NULL, NULL, NULL, 4, '2019-11-25 21:28:21.077', '2019-11-25 21:28:21.077');
INSERT INTO "public"."pqrs" VALUES (22, 22, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2019-11-25 21:31:34.925', '2019-11-25 21:31:34.925');
INSERT INTO "public"."pqrs" VALUES (23, 23, NULL, NULL, NULL, NULL, 'asdfasdf', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2019-11-25 22:37:48.915', '2019-11-25 22:37:48.915');
INSERT INTO "public"."pqrs" VALUES (24, 24, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2019-11-25 22:46:38.073', '2019-11-25 22:46:38.073');
INSERT INTO "public"."pqrs" VALUES (25, 25, NULL, NULL, NULL, NULL, 'serf', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2019-11-25 22:58:34.539', '2019-11-25 22:58:34.539');

-- ----------------------------
-- Table structure for predios
-- ----------------------------
DROP TABLE IF EXISTS "public"."predios";
CREATE TABLE "public"."predios" (
  "id" int8 NOT NULL DEFAULT nextval('predios_id_seq'::regclass),
  "codigo" varchar(64) COLLATE "pg_catalog"."default" NOT NULL,
  "nombre" varchar(255) COLLATE "pg_catalog"."default",
  "requirente" varchar(255) COLLATE "pg_catalog"."default",
  "createdAt" timestamp(6),
  "updatedAt" timestamp(6)
)
;

-- ----------------------------
-- Records of predios
-- ----------------------------
INSERT INTO "public"."predios" VALUES (3, '005464', 'predio prueba', 'requirente test', '2019-11-25 04:21:10.731', '2019-11-25 04:21:10.731');
INSERT INTO "public"."predios" VALUES (4, 'NISCS005900B', 'TRES ESQUINAS', 'FLORESMINDA ALVAREZ- DIDIMO ESTEPA', '2019-11-25 20:46:31.052', '2019-11-25 20:46:31.052');
INSERT INTO "public"."predios" VALUES (5, 'PIEDS010900A', 'LAS CAMELIAS', 'ERNESTINA PEÑA TORRES', '2019-11-25 20:47:36.866', '2019-11-25 20:47:36.866');
INSERT INTO "public"."predios" VALUES (6, 'SIN CODIGO', 'LONGA ', 'LONGA DEL ORIENTE', '2019-11-25 20:48:07.059', '2019-11-25 20:48:07.059');
INSERT INTO "public"."predios" VALUES (7, 'PIEDP000800A', 'LA BELLEZA', 'Miembros de asociación Esencias del Casanare', '2019-11-25 20:50:34.819', '2019-11-25 20:50:34.819');
INSERT INTO "public"."predios" VALUES (8, 'SIN CODIGO', 'LOTE', 'MARIA CATALINA CEPEDA', '2019-11-25 20:51:29.438', '2019-11-25 20:51:29.438');

-- ----------------------------
-- Table structure for productos_a_gestionar
-- ----------------------------
DROP TABLE IF EXISTS "public"."productos_a_gestionar";
CREATE TABLE "public"."productos_a_gestionar" (
  "id" int2 NOT NULL DEFAULT nextval('productos_a_gestionar_id_seq'::regclass),
  "codigo" int2 NOT NULL DEFAULT nextval('productos_a_gestionar_codigo_seq'::regclass),
  "nombre" varchar(255) COLLATE "pg_catalog"."default",
  "descripcion" text COLLATE "pg_catalog"."default",
  "createdAt" timestamp(6),
  "updatedAt" timestamp(6)
)
;

-- ----------------------------
-- Records of productos_a_gestionar
-- ----------------------------
INSERT INTO "public"."productos_a_gestionar" VALUES (1, 1, 'Respuesta', NULL, NULL, NULL);
INSERT INTO "public"."productos_a_gestionar" VALUES (2, 2, 'Visita Campo / Respuesta', NULL, NULL, NULL);

-- ----------------------------
-- Table structure for profesionales
-- ----------------------------
DROP TABLE IF EXISTS "public"."profesionales";
CREATE TABLE "public"."profesionales" (
  "id" int4 NOT NULL DEFAULT nextval('terceros_id_seq'::regclass),
  "codigo" int4 NOT NULL DEFAULT nextval('terceros_codigo_seq'::regclass),
  "nombres" varchar(255) COLLATE "pg_catalog"."default",
  "apellidos" varchar(255) COLLATE "pg_catalog"."default",
  "correo" varchar(255) COLLATE "pg_catalog"."default",
  "telefono" varchar(32) COLLATE "pg_catalog"."default",
  "createdAt" timestamp(6),
  "updatedAt" timestamp(6),
  "cargo" varchar(255) COLLATE "pg_catalog"."default"
)
;

-- ----------------------------
-- Records of profesionales
-- ----------------------------
INSERT INTO "public"."profesionales" VALUES (1, 1, 'Jeinner', 'Torres Arias', 'jeinner.torres@gipsas.com', '3143773461', '2019-11-18 22:46:39.973', '2019-11-25 20:55:30.857', 'Administrador del Sistema');
INSERT INTO "public"."profesionales" VALUES (2, 2, 'CARLOS ', 'ORTIZ', 'carlos.ortiz@gipsas.com', '3002675540', '2019-11-25 13:37:52.268', '2019-11-25 20:57:00.643', 'COORDINADOR DE PROYECTOS-OPERACION');
INSERT INTO "public"."profesionales" VALUES (3, 3, 'JENNY ', 'SEGURA', 'jenny.segura@gipsas.com', '3212233332', '2019-11-25 20:57:53.619', '2019-11-25 20:57:53.619', 'ABOGADO');
INSERT INTO "public"."profesionales" VALUES (4, 4, 'JORGE', 'MOLINA', 'jorge.molina@gipsas.com', '3234345353', '2019-11-25 20:58:35.322', '2019-11-25 20:58:35.322', 'GESTOR DE TIERRAS');
INSERT INTO "public"."profesionales" VALUES (5, 5, 'JAVIER', 'CUENCA', 'javier.cuenca@gipsas.com', '3123323422', '2019-11-25 20:59:27.467', '2019-11-25 20:59:27.467', 'COORDINADOR DE TERMINACIONES');
INSERT INTO "public"."profesionales" VALUES (6, 6, 'ONEIDA', 'NUÑEZ', 'oneida.nunez@gipsas.com', '3213456432', '2019-11-25 21:00:11.14', '2019-11-25 21:00:11.14', 'COORDINADOR -PVA');
INSERT INTO "public"."profesionales" VALUES (7, 7, 'LUZ ELENA', 'VIDEZ DUARTE', 'luzelena.videz@equion-energia.com', '32132434543', '2019-11-25 21:01:11.979', '2019-11-25 21:01:11.979', 'LIDER DE TIERRAS');

-- ----------------------------
-- Table structure for roles
-- ----------------------------
DROP TABLE IF EXISTS "public"."roles";
CREATE TABLE "public"."roles" (
  "id" int2 NOT NULL DEFAULT nextval('roles_id_seq'::regclass),
  "nombre" varchar(255) COLLATE "pg_catalog"."default",
  "createdAt" timestamp(6),
  "updatedAt" timestamp(6)
)
;

-- ----------------------------
-- Records of roles
-- ----------------------------
INSERT INTO "public"."roles" VALUES (1, 'Administrador', NULL, NULL);
INSERT INTO "public"."roles" VALUES (2, 'Auxiliar', NULL, NULL);

-- ----------------------------
-- Table structure for tipos_pqr
-- ----------------------------
DROP TABLE IF EXISTS "public"."tipos_pqr";
CREATE TABLE "public"."tipos_pqr" (
  "id" int2 NOT NULL DEFAULT nextval('tipos_pqr_id_seq'::regclass),
  "codigo" int2 NOT NULL DEFAULT nextval('tipos_pqr_codigo_seq'::regclass),
  "nombre" varchar(255) COLLATE "pg_catalog"."default",
  "descripcion" text COLLATE "pg_catalog"."default",
  "createdAt" timestamp(6),
  "updatedAt" timestamp(6)
)
;

-- ----------------------------
-- Records of tipos_pqr
-- ----------------------------
INSERT INTO "public"."tipos_pqr" VALUES (2, 2, 'Petición', NULL, '2019-11-25 04:21:20.656', '2019-11-25 04:21:20.656');
INSERT INTO "public"."tipos_pqr" VALUES (3, 3, 'Queja', NULL, '2019-11-25 04:21:31.513', '2019-11-25 04:21:31.513');
INSERT INTO "public"."tipos_pqr" VALUES (4, 4, 'Solicitud', NULL, '2019-11-25 09:21:37.673', '2019-11-25 22:22:18.475');

-- ----------------------------
-- Table structure for usuarios
-- ----------------------------
DROP TABLE IF EXISTS "public"."usuarios";
CREATE TABLE "public"."usuarios" (
  "username" varchar(255) COLLATE "pg_catalog"."default",
  "password" varchar(255) COLLATE "pg_catalog"."default",
  "rol_id" int4,
  "profesional_id" int4,
  "createdAt" timestamp(6),
  "updatedAt" timestamp(6),
  "enabled" bool DEFAULT true,
  "id" int4 NOT NULL DEFAULT nextval('usuarios_id_seq'::regclass)
)
;

-- ----------------------------
-- Records of usuarios
-- ----------------------------
INSERT INTO "public"."usuarios" VALUES ('admin', '21232f297a57a5a743894a0e4a801fc3', 1, 1, '2019-11-25 03:01:21.824', '2019-11-25 03:01:21.824', 't', 5);
INSERT INTO "public"."usuarios" VALUES ('jenny.segura@gipsas.com', '3d65bf237a019fc507b0338ecc1edd95', 2, 3, '2019-11-25 21:56:29.724', '2019-11-25 21:56:29.724', 't', 7);
INSERT INTO "public"."usuarios" VALUES ('javier.cuenca@gipsas.com', 'fc115f30e745843bb5ff5de845be2b5e', 2, 5, '2019-11-25 21:56:54.869', '2019-11-25 21:56:54.869', 't', 9);
INSERT INTO "public"."usuarios" VALUES ('oneida.nunez@gipsas.com', '0be58747214bca82c06a0fd1392767b6', 2, 6, '2019-11-25 21:57:05.72', '2019-11-25 21:57:05.72', 't', 10);
INSERT INTO "public"."usuarios" VALUES ('luzelena.videz@equion-energia.com', '6c59ba159aadf06f7bc5f002ff489ffd', 2, 7, '2019-11-25 21:57:48.856', '2019-11-25 21:57:48.856', 't', 11);
INSERT INTO "public"."usuarios" VALUES ('jorge.molina@gipsas.com', '1c27295392ef99884ae8159fac76d8ff', 2, 4, '2019-11-26 02:56:43.875', '2019-11-25 21:58:24.236', 't', 8);
INSERT INTO "public"."usuarios" VALUES ('aux', '53e5733361417423cbec0979f23b3def', 2, 2, '2019-11-25 08:38:18.099', '2019-11-25 21:58:34.963', 't', 6);

-- ----------------------------
-- Alter sequences owned by
-- ----------------------------
ALTER SEQUENCE "public"."campos_codigo_seq"
OWNED BY "public"."campos"."codigo";
SELECT setval('"public"."campos_codigo_seq"', 15, true);
ALTER SEQUENCE "public"."campos_id_seq"
OWNED BY "public"."campos"."id";
SELECT setval('"public"."campos_id_seq"', 15, true);
ALTER SEQUENCE "public"."contratos_codigo_seq"
OWNED BY "public"."contratos"."codigo";
SELECT setval('"public"."contratos_codigo_seq"', 2, true);
ALTER SEQUENCE "public"."contratos_id_seq"
OWNED BY "public"."contratos"."id";
SELECT setval('"public"."contratos_id_seq"', 2, true);
ALTER SEQUENCE "public"."ejecuciones_codigo_seq"
OWNED BY "public"."ejecuciones"."codigo";
SELECT setval('"public"."ejecuciones_codigo_seq"', 2, false);
ALTER SEQUENCE "public"."ejecuciones_id_seq"
OWNED BY "public"."ejecuciones"."id";
SELECT setval('"public"."ejecuciones_id_seq"', 2, false);
ALTER SEQUENCE "public"."estados_codigo_seq"
OWNED BY "public"."estados"."codigo";
SELECT setval('"public"."estados_codigo_seq"', 5, true);
ALTER SEQUENCE "public"."estados_id_seq"
OWNED BY "public"."estados"."id";
SELECT setval('"public"."estados_id_seq"', 5, true);
ALTER SEQUENCE "public"."flow_id_seq"
OWNED BY "public"."flow"."id";
SELECT setval('"public"."flow_id_seq"', 2, false);
ALTER SEQUENCE "public"."pqrs_codigo_seq"
OWNED BY "public"."pqrs"."codigo";
SELECT setval('"public"."pqrs_codigo_seq"', 26, true);
ALTER SEQUENCE "public"."pqrs_id_seq"
OWNED BY "public"."pqrs"."id";
SELECT setval('"public"."pqrs_id_seq"', 26, true);
ALTER SEQUENCE "public"."predios_codigo_seq"
OWNED BY "public"."predios"."codigo";
SELECT setval('"public"."predios_codigo_seq"', 2, true);
ALTER SEQUENCE "public"."predios_id_seq"
OWNED BY "public"."predios"."id";
SELECT setval('"public"."predios_id_seq"', 9, true);
ALTER SEQUENCE "public"."productos_a_gestionar_codigo_seq"
OWNED BY "public"."productos_a_gestionar"."codigo";
SELECT setval('"public"."productos_a_gestionar_codigo_seq"', 3, true);
ALTER SEQUENCE "public"."productos_a_gestionar_id_seq"
OWNED BY "public"."productos_a_gestionar"."id";
SELECT setval('"public"."productos_a_gestionar_id_seq"', 3, true);
ALTER SEQUENCE "public"."roles_id_seq"
OWNED BY "public"."roles"."id";
SELECT setval('"public"."roles_id_seq"', 3, true);
ALTER SEQUENCE "public"."terceros_codigo_seq"
OWNED BY "public"."profesionales"."codigo";
SELECT setval('"public"."terceros_codigo_seq"', 8, true);
ALTER SEQUENCE "public"."terceros_id_seq"
OWNED BY "public"."profesionales"."id";
SELECT setval('"public"."terceros_id_seq"', 8, true);
ALTER SEQUENCE "public"."tipos_pqr_codigo_seq"
OWNED BY "public"."tipos_pqr"."codigo";
SELECT setval('"public"."tipos_pqr_codigo_seq"', 5, true);
ALTER SEQUENCE "public"."tipos_pqr_id_seq"
OWNED BY "public"."tipos_pqr"."id";
SELECT setval('"public"."tipos_pqr_id_seq"', 5, true);
ALTER SEQUENCE "public"."usuarios_id_seq"
OWNED BY "public"."usuarios"."id";
SELECT setval('"public"."usuarios_id_seq"', 12, true);

-- ----------------------------
-- Primary Key structure for table campos
-- ----------------------------
ALTER TABLE "public"."campos" ADD CONSTRAINT "campos_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table contratos
-- ----------------------------
ALTER TABLE "public"."contratos" ADD CONSTRAINT "contratos_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table ejecuciones
-- ----------------------------
ALTER TABLE "public"."ejecuciones" ADD CONSTRAINT "ejecuciones_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table estados
-- ----------------------------
ALTER TABLE "public"."estados" ADD CONSTRAINT "estados_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table flow
-- ----------------------------
ALTER TABLE "public"."flow" ADD CONSTRAINT "flow_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table pqrs
-- ----------------------------
ALTER TABLE "public"."pqrs" ADD CONSTRAINT "pqrs_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table predios
-- ----------------------------
ALTER TABLE "public"."predios" ADD CONSTRAINT "predios_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table productos_a_gestionar
-- ----------------------------
ALTER TABLE "public"."productos_a_gestionar" ADD CONSTRAINT "productos_a_gestionar_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table profesionales
-- ----------------------------
ALTER TABLE "public"."profesionales" ADD CONSTRAINT "terceros_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table roles
-- ----------------------------
ALTER TABLE "public"."roles" ADD CONSTRAINT "roles_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Primary Key structure for table tipos_pqr
-- ----------------------------
ALTER TABLE "public"."tipos_pqr" ADD CONSTRAINT "tipos_pqr_pkey" PRIMARY KEY ("id");

-- ----------------------------
-- Uniques structure for table usuarios
-- ----------------------------
ALTER TABLE "public"."usuarios" ADD CONSTRAINT "uk_username" UNIQUE ("username");
ALTER TABLE "public"."usuarios" ADD CONSTRAINT "uk_profesional_id" UNIQUE ("profesional_id");
COMMENT ON CONSTRAINT "uk_username" ON "public"."usuarios" IS 'el nombre de usuario debe ser único';
COMMENT ON CONSTRAINT "uk_profesional_id" ON "public"."usuarios" IS 'el profesional debe tener un solo usuario';

-- ----------------------------
-- Foreign Keys structure for table contratos
-- ----------------------------
ALTER TABLE "public"."contratos" ADD CONSTRAINT "fk_pqr_id" FOREIGN KEY ("pqr_id") REFERENCES "public"."pqrs" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table ejecuciones
-- ----------------------------
ALTER TABLE "public"."ejecuciones" ADD CONSTRAINT "fk_pqr_id" FOREIGN KEY ("pqr_id") REFERENCES "public"."pqrs" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table flow
-- ----------------------------
ALTER TABLE "public"."flow" ADD CONSTRAINT "fk_pqr_id" FOREIGN KEY ("pqr_id") REFERENCES "public"."pqrs" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."flow" ADD CONSTRAINT "fk_profesional_id" FOREIGN KEY ("profesional_id") REFERENCES "public"."profesionales" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table pqrs
-- ----------------------------
ALTER TABLE "public"."pqrs" ADD CONSTRAINT "fk_campo_id" FOREIGN KEY ("campo_id") REFERENCES "public"."campos" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."pqrs" ADD CONSTRAINT "fk_estado_id" FOREIGN KEY ("estado_id") REFERENCES "public"."estados" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."pqrs" ADD CONSTRAINT "fk_predio_id" FOREIGN KEY ("predio_id") REFERENCES "public"."predios" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."pqrs" ADD CONSTRAINT "fk_producto_gestionar_id" FOREIGN KEY ("producto_gestionar_id") REFERENCES "public"."productos_a_gestionar" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."pqrs" ADD CONSTRAINT "fk_profesional_id" FOREIGN KEY ("profesional_id") REFERENCES "public"."profesionales" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."pqrs" ADD CONSTRAINT "fk_tipo_pqr_id" FOREIGN KEY ("tipo_pqr_id") REFERENCES "public"."tipos_pqr" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- ----------------------------
-- Foreign Keys structure for table usuarios
-- ----------------------------
ALTER TABLE "public"."usuarios" ADD CONSTRAINT "fk_profesional_id" FOREIGN KEY ("profesional_id") REFERENCES "public"."profesionales" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
ALTER TABLE "public"."usuarios" ADD CONSTRAINT "fk_rol_id" FOREIGN KEY ("rol_id") REFERENCES "public"."roles" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
