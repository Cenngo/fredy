export function up(db) {
    db.exec(`CREATE UNIQUE INDEX IF NOT EXISTS idx_user_api_token ON users (api_token)`);
}