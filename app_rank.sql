create table app_rank(
    id SERIAL PRIMARY KEY,
    app text,
    stdscore INTEGER
);

create table ranks(
    id SERIAL PRIMARY KEY,
    ranks text,
    score INTEGER
);