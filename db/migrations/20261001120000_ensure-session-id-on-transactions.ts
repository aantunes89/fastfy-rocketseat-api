import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  const hasSessionId = await knex.schema.hasColumn(
    "transactions",
    "session_id",
  );

  if (!hasSessionId) {
    await knex.schema.alterTable("transactions", (table) => {
      table.uuid("session_id").after("id").index();
    });
  }
}

export async function down(knex: Knex): Promise<void> {
  const hasSessionId = await knex.schema.hasColumn(
    "transactions",
    "session_id",
  );

  if (hasSessionId) {
    await knex.schema.alterTable("transactions", (table) => {
      table.dropColumn("session_id");
    });
  }
}
