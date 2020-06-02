import knex from "knex";

export async function seed(knex: knex) {
  await knex("items").insert([
    { title: "Lampadas", image: "lampadas.svg" },
    { title: "Pilhas e baterias", image: "baterias.svg" },
    { title: "Papeis e papelão", image: "papeis-papelao.svg" },
    { title: "Residuos Eletrônicos", image: "eletronicos.svg" },
    { title: "Residuos Orgânicos", image: "organicos.svg" },
    { title: "Oleo de Cozinha", image: "oleo.svg" },
  ]);
}
