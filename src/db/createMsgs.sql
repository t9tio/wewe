create table "msgs" (
  "id" integer primary key autoincrement,
  "groupId" integer references "groups" on delete cascade,
  "groupName" varchar,
  "text" varchar,
  "from" varchar,
  "date" varchar
);


-- refs: 
--   auto increment id in sqlite: https://stackoverflow.com/questions/7905859/is-there-an-auto-increment-in-sqlite
--   default time in sqlite: https://stackoverflow.com/questions/200309/sqlite-database-default-time-value-now
