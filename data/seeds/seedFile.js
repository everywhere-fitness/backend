const classes = [
  {
    class_name: "Hard Hitter",
    type: "HITT",
    duration_minutes: 60,
    intensity: 10,
    location: "Globo Gym",
    registered_users: 1,
    max_class_size: 10,
    instructor_id: 1,
    class_id: 1
  },
  {
    class_name: "Dime Aerobics",
    type: "Aerobics",
    duration_minutes: 45,
    intensity: 2,
    location: "Cycling Studio next to the Wine Bar",
    registered_users: 2,
    max_class_size: 10,
    instructor_id: 2,
    class_id: 2
  },
];

const users = [
  {
    username: "globo_guy",
    password: "abc123",
    first_name: "White",
    last_name: "Goodman",
    user_type: 1,
  },
  {
    username: "perfect_aerobics",
    password: "abc123",
    first_name: "Jessie",
    last_name: "Wilson",
    user_type: 1,
  },
  {
    username: "rlngstne_reporter",
    password: "abc123",
    first_name: "Adam",
    last_name: "Lawrence",
    user_type: 2,
  },
  {
    username: "dog_whisperer",
    password: "abc123",
    first_name: "Ceasar",
    last_name: "Milan",
    user_type: 2,
  },
];

const user_type = [
  {
    type: "instructor",
  },
  {
    type: "athlete",
  },
];

const registered = [
  {
    class_id: 1,
    user_id: 3,
  },
  {
    class_id: 2,
    user_id: 3,
  },
  {
    class_id: 2,
    user_id: 4,
  },
];

exports.seed = async function (knex) {
  await knex("user_type").insert(user_type);
  await knex.raw('TRUNCATE TABLE users CASCADE')
  .then(function () {
      return knex("users").insert(users)
    });
  await knex.raw('TRUNCATE TABLE classes CASCADE')
  .then(function () {
      return knex("classes").insert(classes)
  });
  await knex.raw('TRUNCATE TABLE registered CASCADE')
  .then(function () {
    return knex("registered").insert(registered)
  });
};
