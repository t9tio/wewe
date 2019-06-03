create table "groups" (
  "id" integer primary key autoincrement,
  "name" varchar unique,
  "description" varchar,
  "logoUrl" varchar,
  "userCount" varchar,
  "type" varchar,
  "timezone" varchar
);
