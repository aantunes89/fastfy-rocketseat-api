export async function up(knex) {
    const hasSessionId = await knex.schema.hasColumn("transactions", "session_id");
    if (!hasSessionId) {
        await knex.schema.alterTable("transactions", (table) => {
            table.uuid("session_id").after("id").index();
        });
    }
}
export async function down(knex) {
    const hasSessionId = await knex.schema.hasColumn("transactions", "session_id");
    if (hasSessionId) {
        await knex.schema.alterTable("transactions", (table) => {
            table.dropColumn("session_id");
        });
    }
}
//# sourceMappingURL=20261001120000_ensure-session-id-on-transactions.js.map