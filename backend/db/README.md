# Access postgres (in order)
docker exec -it backend-skincare.pg-1 /bin/bash
psql -U skincare -d skincare

# Useful pg commands

\du+
list all users

\l 
list all databases

\c skincare
switch to skincare database

\dt 
list all tables

CREATE TABLE leads (id INTEGER PRIMARY KEY, name VARCHAR);
create table


SELECT c_defaults  FROM user_info WHERE c_uid = 'testuser';
select