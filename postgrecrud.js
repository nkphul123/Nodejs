import pool from "./db.js";

const createUser = async(name, email)=>{
  const result = await pool.query(
    "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
    [name, email]
  );
  console.log("Created:", result.rows[0]);
}

const getUsers = async()=>{
  const result = await pool.query("SELECT * FROM users");
  console.log("All Users:", result.rows);
}

const updateUser = async(id, name)=>{
  const result = await pool.query(
    "UPDATE users SET name = $1 WHERE id = $2 RETURNING *",
    [name, id]
  );
  console.log("Updated:", result.rows[0]);
}

const deleteUser = async(id)=>{
  const result = await pool.query(
    "DELETE FROM users WHERE id = $1 RETURNING *",
    [id]
  );
  console.log("Deleted:", result.rows[0]);
}

// Call functions in an async wrapper one by one
async function main() {
  await createUser("Navneet", "navneet@example.com");
//   await getUsers();
//   await updateUser(16, "Dr. Navneet Kaur");
//   await deleteUser(16);

  pool.end();
}

main();
