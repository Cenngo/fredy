export function up(db) {
    const columns = db.prepare(`PRAGMA table_info(users)`).all();
    if (!columns.some((col) => col.name === 'api_token')) {
        db.exec(`ALTER TABLE users ADD COLUMN api_token TEXT`);
    }
}