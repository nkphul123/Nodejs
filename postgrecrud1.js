// import dotenv from "dotenv";
// dotenv.config(); // load .env

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const createUser = async (name, email) => {
  const user = await prisma.user.create({data:{name, email }});
  console.log("Created:", user);
};

const getUsers = async () => {
  const users = await prisma.user.findMany();
  console.log("All Users:", users);
};

const updateUser = async (id, name) => {
  const user = await prisma.user.update({where: {id},data: {name}});
  console.log("Updated:", user);
};

const deleteUser = async (id) => {
  const user = await prisma.user.delete({where: { id }});
  console.log("Deleted:", user);
};

async function main() {
  // await createUser("Navneet", "navneet@example.com");
  await getUsers();
  // await updateUser(1, "Dr. Navneet Kaur");
  // await deleteUser(1);
}

main().catch(console.error).finally(() => prisma.$disconnect());