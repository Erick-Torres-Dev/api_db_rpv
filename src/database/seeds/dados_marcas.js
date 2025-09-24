/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('marcas').del()
  await knex('marcas').insert([
    {id: 1, nome: 'apple',site: 'https://www.apple.com.br', telefone: '(11) 1234-5678'} 
  
  ]);
}
