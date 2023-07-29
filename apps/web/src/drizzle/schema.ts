import { pgTable, pgEnum, pgSchema, AnyPgColumn, serial, varchar, timestamp, json, text, jsonb, boolean, index, foreignKey, integer, numeric, unique, date } from "drizzle-orm/pg-core"


import { sql } from "drizzle-orm"

export const strapiMigrations = pgTable("strapi_migrations", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }),
	time: timestamp("time", { mode: 'string' }),
});

export const strapiDatabaseSchema = pgTable("strapi_database_schema", {
	id: serial("id").primaryKey().notNull(),
	schema: json("schema"),
	time: timestamp("time", { mode: 'string' }),
	hash: varchar("hash", { length: 255 }),
});

export const strapiCoreStoreSettings = pgTable("strapi_core_store_settings", {
	id: serial("id").primaryKey().notNull(),
	key: varchar("key", { length: 255 }),
	value: text("value"),
	type: varchar("type", { length: 255 }),
	environment: varchar("environment", { length: 255 }),
	tag: varchar("tag", { length: 255 }),
});

export const strapiWebhooks = pgTable("strapi_webhooks", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }),
	url: text("url"),
	headers: jsonb("headers"),
	events: jsonb("events"),
	enabled: boolean("enabled"),
});

export const adminUsers = pgTable("admin_users", {
	id: serial("id").primaryKey().notNull(),
	firstname: varchar("firstname", { length: 255 }),
	lastname: varchar("lastname", { length: 255 }),
	username: varchar("username", { length: 255 }),
	email: varchar("email", { length: 255 }),
	password: varchar("password", { length: 255 }),
	resetPasswordToken: varchar("reset_password_token", { length: 255 }),
	registrationToken: varchar("registration_token", { length: 255 }),
	isActive: boolean("is_active"),
	blocked: boolean("blocked"),
	preferedLanguage: varchar("prefered_language", { length: 255 }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id"),
	updatedById: integer("updated_by_id"),
},
(table) => {
	return {
		createdByIdFk: index("admin_users_created_by_id_fk").on(table.createdById),
		updatedByIdFk: index("admin_users_updated_by_id_fk").on(table.updatedById),
		adminUsersCreatedByIdFk: foreignKey({
			columns: [table.createdById],
			foreignColumns: [table.id]
		}).onDelete("set null"),
		adminUsersUpdatedByIdFk: foreignKey({
			columns: [table.updatedById],
			foreignColumns: [table.id]
		}).onDelete("set null"),
	}
});

export const adminPermissions = pgTable("admin_permissions", {
	id: serial("id").primaryKey().notNull(),
	action: varchar("action", { length: 255 }),
	subject: varchar("subject", { length: 255 }),
	properties: jsonb("properties"),
	conditions: jsonb("conditions"),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
	updatedById: integer("updated_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
},
(table) => {
	return {
		createdByIdFk: index("admin_permissions_created_by_id_fk").on(table.createdById),
		updatedByIdFk: index("admin_permissions_updated_by_id_fk").on(table.updatedById),
	}
});

export const adminRoles = pgTable("admin_roles", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }),
	code: varchar("code", { length: 255 }),
	description: varchar("description", { length: 255 }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
	updatedById: integer("updated_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
},
(table) => {
	return {
		createdByIdFk: index("admin_roles_created_by_id_fk").on(table.createdById),
		updatedByIdFk: index("admin_roles_updated_by_id_fk").on(table.updatedById),
	}
});

export const strapiApiTokens = pgTable("strapi_api_tokens", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }),
	description: varchar("description", { length: 255 }),
	type: varchar("type", { length: 255 }),
	accessKey: varchar("access_key", { length: 255 }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
	updatedById: integer("updated_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
},
(table) => {
	return {
		createdByIdFk: index("strapi_api_tokens_created_by_id_fk").on(table.createdById),
		updatedByIdFk: index("strapi_api_tokens_updated_by_id_fk").on(table.updatedById),
	}
});

export const files = pgTable("files", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }),
	alternativeText: varchar("alternative_text", { length: 255 }),
	caption: varchar("caption", { length: 255 }),
	width: integer("width"),
	height: integer("height"),
	formats: jsonb("formats"),
	hash: varchar("hash", { length: 255 }),
	ext: varchar("ext", { length: 255 }),
	mime: varchar("mime", { length: 255 }),
	size: numeric("size", { precision: 10, scale:  2 }),
	url: varchar("url", { length: 255 }),
	previewUrl: varchar("preview_url", { length: 255 }),
	provider: varchar("provider", { length: 255 }),
	providerMetadata: jsonb("provider_metadata"),
	folderPath: varchar("folder_path", { length: 255 }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
	updatedById: integer("updated_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
},
(table) => {
	return {
		uploadFilesFolderPathIdx: index("upload_files_folder_path_index").on(table.folderPath),
		createdByIdFk: index("files_created_by_id_fk").on(table.createdById),
		updatedByIdFk: index("files_updated_by_id_fk").on(table.updatedById),
	}
});

export const uploadFolders = pgTable("upload_folders", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }),
	pathId: integer("path_id"),
	path: varchar("path", { length: 255 }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
	updatedById: integer("updated_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
},
(table) => {
	return {
		createdByIdFk: index("upload_folders_created_by_id_fk").on(table.createdById),
		updatedByIdFk: index("upload_folders_updated_by_id_fk").on(table.updatedById),
		uploadFoldersPathIdIndex: unique("upload_folders_path_id_index").on(table.pathId),
		uploadFoldersPathIndex: unique("upload_folders_path_index").on(table.path),
	}
});

export const i18NLocale = pgTable("i18n_locale", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }),
	code: varchar("code", { length: 255 }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
	updatedById: integer("updated_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
},
(table) => {
	return {
		createdByIdFk: index("i18n_locale_created_by_id_fk").on(table.createdById),
		updatedByIdFk: index("i18n_locale_updated_by_id_fk").on(table.updatedById),
	}
});

export const upPermissions = pgTable("up_permissions", {
	id: serial("id").primaryKey().notNull(),
	action: varchar("action", { length: 255 }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
	updatedById: integer("updated_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
},
(table) => {
	return {
		createdByIdFk: index("up_permissions_created_by_id_fk").on(table.createdById),
		updatedByIdFk: index("up_permissions_updated_by_id_fk").on(table.updatedById),
	}
});

export const upRoles = pgTable("up_roles", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }),
	description: varchar("description", { length: 255 }),
	type: varchar("type", { length: 255 }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
	updatedById: integer("updated_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
},
(table) => {
	return {
		createdByIdFk: index("up_roles_created_by_id_fk").on(table.createdById),
		updatedByIdFk: index("up_roles_updated_by_id_fk").on(table.updatedById),
	}
});

export const upUsers = pgTable("up_users", {
	id: serial("id").primaryKey().notNull(),
	username: varchar("username", { length: 255 }),
	email: varchar("email", { length: 255 }),
	provider: varchar("provider", { length: 255 }),
	password: varchar("password", { length: 255 }),
	resetPasswordToken: varchar("reset_password_token", { length: 255 }),
	confirmationToken: varchar("confirmation_token", { length: 255 }),
	confirmed: boolean("confirmed"),
	blocked: boolean("blocked"),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
	updatedById: integer("updated_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
},
(table) => {
	return {
		createdByIdFk: index("up_users_created_by_id_fk").on(table.createdById),
		updatedByIdFk: index("up_users_updated_by_id_fk").on(table.updatedById),
	}
});

export const applicationMetadatas = pgTable("application_metadatas", {
	id: serial("id").primaryKey().notNull(),
	version: varchar("version", { length: 255 }),
	versionUpdatedAt: date("version_updated_at"),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	publishedAt: timestamp("published_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
	updatedById: integer("updated_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
},
(table) => {
	return {
		createdByIdFk: index("application_metadatas_created_by_id_fk").on(table.createdById),
		updatedByIdFk: index("application_metadatas_updated_by_id_fk").on(table.updatedById),
	}
});

export const methods = pgTable("methods", {
	id: serial("id").primaryKey().notNull(),
	title: varchar("title", { length: 255 }),
	description: text("description"),
	icon: varchar("icon", { length: 255 }),
	href: varchar("href", { length: 255 }),
	tag: varchar("tag", { length: 255 }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	publishedAt: timestamp("published_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
	updatedById: integer("updated_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
	locale: varchar("locale", { length: 255 }),
},
(table) => {
	return {
		createdByIdFk: index("methods_created_by_id_fk").on(table.createdById),
		updatedByIdFk: index("methods_updated_by_id_fk").on(table.updatedById),
	}
});

export const pages = pgTable("pages", {
	id: serial("id").primaryKey().notNull(),
	name: varchar("name", { length: 255 }),
	slug: varchar("slug", { length: 255 }),
	content: text("content"),
	order: integer("order"),
	cmsPage: boolean("cms_page"),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	publishedAt: timestamp("published_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
	updatedById: integer("updated_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
},
(table) => {
	return {
		createdByIdFk: index("pages_created_by_id_fk").on(table.createdById),
		updatedByIdFk: index("pages_updated_by_id_fk").on(table.updatedById),
	}
});

export const publishers = pgTable("publishers", {
	id: serial("id").primaryKey().notNull(),
	owner: varchar("owner", { length: 255 }),
	repo: varchar("repo", { length: 255 }),
	secret: varchar("secret", { length: 255 }),
	name: varchar("name", { length: 255 }),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	publishedAt: timestamp("published_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
	updatedById: integer("updated_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
},
(table) => {
	return {
		createdByIdFk: index("publishers_created_by_id_fk").on(table.createdById),
		updatedByIdFk: index("publishers_updated_by_id_fk").on(table.updatedById),
	}
});

export const adminPermissionsRoleLinks = pgTable("admin_permissions_role_links", {
	id: serial("id").primaryKey().notNull(),
	permissionId: integer("permission_id").references(() => adminPermissions.id, { onDelete: "cascade" } ),
	roleId: integer("role_id").references(() => adminRoles.id, { onDelete: "cascade" } ),
},
(table) => {
	return {
		fk: index("admin_permissions_role_links_fk").on(table.permissionId),
		invFk: index("admin_permissions_role_links_inv_fk").on(table.roleId),
	}
});

export const adminUsersRolesLinks = pgTable("admin_users_roles_links", {
	id: serial("id").primaryKey().notNull(),
	userId: integer("user_id").references(() => adminUsers.id, { onDelete: "cascade" } ),
	roleId: integer("role_id").references(() => adminRoles.id, { onDelete: "cascade" } ),
},
(table) => {
	return {
		fk: index("admin_users_roles_links_fk").on(table.userId),
		invFk: index("admin_users_roles_links_inv_fk").on(table.roleId),
	}
});

export const filesRelatedMorphs = pgTable("files_related_morphs", {
	id: serial("id").primaryKey().notNull(),
	fileId: integer("file_id").references(() => files.id, { onDelete: "cascade" } ),
	relatedId: integer("related_id"),
	relatedType: varchar("related_type", { length: 255 }),
	field: varchar("field", { length: 255 }),
	order: integer("order"),
},
(table) => {
	return {
		fk: index("files_related_morphs_fk").on(table.fileId),
	}
});

export const filesFolderLinks = pgTable("files_folder_links", {
	id: serial("id").primaryKey().notNull(),
	fileId: integer("file_id").references(() => files.id, { onDelete: "cascade" } ),
	folderId: integer("folder_id").references(() => uploadFolders.id, { onDelete: "cascade" } ),
},
(table) => {
	return {
		fk: index("files_folder_links_fk").on(table.fileId),
		invFk: index("files_folder_links_inv_fk").on(table.folderId),
	}
});

export const uploadFoldersParentLinks = pgTable("upload_folders_parent_links", {
	id: serial("id").primaryKey().notNull(),
	folderId: integer("folder_id").references(() => uploadFolders.id, { onDelete: "cascade" } ),
	invFolderId: integer("inv_folder_id").references(() => uploadFolders.id, { onDelete: "cascade" } ),
},
(table) => {
	return {
		fk: index("upload_folders_parent_links_fk").on(table.folderId),
		invFk: index("upload_folders_parent_links_inv_fk").on(table.invFolderId),
	}
});

export const upPermissionsRoleLinks = pgTable("up_permissions_role_links", {
	id: serial("id").primaryKey().notNull(),
	permissionId: integer("permission_id").references(() => upPermissions.id, { onDelete: "cascade" } ),
	roleId: integer("role_id").references(() => upRoles.id, { onDelete: "cascade" } ),
},
(table) => {
	return {
		fk: index("up_permissions_role_links_fk").on(table.permissionId),
		invFk: index("up_permissions_role_links_inv_fk").on(table.roleId),
	}
});

export const upUsersRoleLinks = pgTable("up_users_role_links", {
	id: serial("id").primaryKey().notNull(),
	userId: integer("user_id").references(() => upUsers.id, { onDelete: "cascade" } ),
	roleId: integer("role_id").references(() => upRoles.id, { onDelete: "cascade" } ),
},
(table) => {
	return {
		fk: index("up_users_role_links_fk").on(table.userId),
		invFk: index("up_users_role_links_inv_fk").on(table.roleId),
	}
});

export const methodsLocalizationsLinks = pgTable("methods_localizations_links", {
	id: serial("id").primaryKey().notNull(),
	methodId: integer("method_id").references(() => methods.id, { onDelete: "cascade" } ),
	invMethodId: integer("inv_method_id").references(() => methods.id, { onDelete: "cascade" } ),
},
(table) => {
	return {
		fk: index("methods_localizations_links_fk").on(table.methodId),
		invFk: index("methods_localizations_links_inv_fk").on(table.invMethodId),
	}
});

export const blogArticles = pgTable("blog_articles", {
	id: serial("id").primaryKey().notNull(),
	title: varchar("title", { length: 255 }),
	category: varchar("category", { length: 255 }),
	content: text("content"),
	createdAt: timestamp("created_at", { precision: 6, mode: 'string' }),
	updatedAt: timestamp("updated_at", { precision: 6, mode: 'string' }),
	publishedAt: timestamp("published_at", { precision: 6, mode: 'string' }),
	createdById: integer("created_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
	updatedById: integer("updated_by_id").references(() => adminUsers.id, { onDelete: "set null" } ),
	description: text("description"),
},
(table) => {
	return {
		createdByIdFk: index("blog_articles_created_by_id_fk").on(table.createdById),
		updatedByIdFk: index("blog_articles_updated_by_id_fk").on(table.updatedById),
	}
});