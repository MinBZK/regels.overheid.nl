import {
  pgTable,
  serial,
  varchar,
  timestamp,
  json,
  text,
  jsonb,
  boolean,
  index,
  foreignKey,
  integer,
  bigint,
  numeric,
  unique,
  date,
  doublePrecision,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

export const strapiMigrations = pgTable('strapi_migrations', {
  id: serial('id').primaryKey().notNull(),
  name: varchar('name', { length: 255 }),
  time: timestamp('time', { mode: 'string' }),
});

export const strapiDatabaseSchema = pgTable('strapi_database_schema', {
  id: serial('id').primaryKey().notNull(),
  schema: json('schema'),
  time: timestamp('time', { mode: 'string' }),
  hash: varchar('hash', { length: 255 }),
});

export const strapiCoreStoreSettings = pgTable('strapi_core_store_settings', {
  id: serial('id').primaryKey().notNull(),
  key: varchar('key', { length: 255 }),
  value: text('value'),
  type: varchar('type', { length: 255 }),
  environment: varchar('environment', { length: 255 }),
  tag: varchar('tag', { length: 255 }),
});

export const strapiWebhooks = pgTable('strapi_webhooks', {
  id: serial('id').primaryKey().notNull(),
  name: varchar('name', { length: 255 }),
  url: text('url'),
  headers: jsonb('headers'),
  events: jsonb('events'),
  enabled: boolean('enabled'),
});

export const adminUsers = pgTable(
  'admin_users',
  {
    id: serial('id').primaryKey().notNull(),
    firstname: varchar('firstname', { length: 255 }),
    lastname: varchar('lastname', { length: 255 }),
    username: varchar('username', { length: 255 }),
    email: varchar('email', { length: 255 }),
    password: varchar('password', { length: 255 }),
    resetPasswordToken: varchar('reset_password_token', { length: 255 }),
    registrationToken: varchar('registration_token', { length: 255 }),
    isActive: boolean('is_active'),
    blocked: boolean('blocked'),
    preferedLanguage: varchar('prefered_language', { length: 255 }),
    createdAt: timestamp('created_at', { precision: 6, mode: 'string' }),
    updatedAt: timestamp('updated_at', { precision: 6, mode: 'string' }),
    createdById: integer('created_by_id'),
    updatedById: integer('updated_by_id'),
  },
  (table) => {
    return {
      createdByIdFk: index('admin_users_created_by_id_fk').on(table.createdById),
      updatedByIdFk: index('admin_users_updated_by_id_fk').on(table.updatedById),
      adminUsersCreatedByIdFk: foreignKey({
        columns: [table.createdById],
        foreignColumns: [table.id],
        name: 'admin_users_created_by_id_fk',
      }).onDelete('set null'),
      adminUsersUpdatedByIdFk: foreignKey({
        columns: [table.updatedById],
        foreignColumns: [table.id],
        name: 'admin_users_updated_by_id_fk',
      }).onDelete('set null'),
    };
  }
);

export const adminPermissions = pgTable(
  'admin_permissions',
  {
    id: serial('id').primaryKey().notNull(),
    action: varchar('action', { length: 255 }),
    actionParameters: jsonb('action_parameters'),
    subject: varchar('subject', { length: 255 }),
    properties: jsonb('properties'),
    conditions: jsonb('conditions'),
    createdAt: timestamp('created_at', { precision: 6, mode: 'string' }),
    updatedAt: timestamp('updated_at', { precision: 6, mode: 'string' }),
    createdById: integer('created_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
    updatedById: integer('updated_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
  },
  (table) => {
    return {
      createdByIdFk: index('admin_permissions_created_by_id_fk').on(table.createdById),
      updatedByIdFk: index('admin_permissions_updated_by_id_fk').on(table.updatedById),
    };
  }
);

export const adminRoles = pgTable(
  'admin_roles',
  {
    id: serial('id').primaryKey().notNull(),
    name: varchar('name', { length: 255 }),
    code: varchar('code', { length: 255 }),
    description: varchar('description', { length: 255 }),
    createdAt: timestamp('created_at', { precision: 6, mode: 'string' }),
    updatedAt: timestamp('updated_at', { precision: 6, mode: 'string' }),
    createdById: integer('created_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
    updatedById: integer('updated_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
  },
  (table) => {
    return {
      createdByIdFk: index('admin_roles_created_by_id_fk').on(table.createdById),
      updatedByIdFk: index('admin_roles_updated_by_id_fk').on(table.updatedById),
    };
  }
);

export const strapiApiTokens = pgTable(
  'strapi_api_tokens',
  {
    id: serial('id').primaryKey().notNull(),
    name: varchar('name', { length: 255 }),
    description: varchar('description', { length: 255 }),
    type: varchar('type', { length: 255 }),
    accessKey: varchar('access_key', { length: 255 }),
    lastUsedAt: timestamp('last_used_at', { precision: 6, mode: 'string' }),
    expiresAt: timestamp('expires_at', { precision: 6, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    lifespan: bigint('lifespan', { mode: 'number' }),
    createdAt: timestamp('created_at', { precision: 6, mode: 'string' }),
    updatedAt: timestamp('updated_at', { precision: 6, mode: 'string' }),
    createdById: integer('created_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
    updatedById: integer('updated_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
  },
  (table) => {
    return {
      createdByIdFk: index('strapi_api_tokens_created_by_id_fk').on(table.createdById),
      updatedByIdFk: index('strapi_api_tokens_updated_by_id_fk').on(table.updatedById),
    };
  }
);

export const strapiApiTokenPermissions = pgTable(
  'strapi_api_token_permissions',
  {
    id: serial('id').primaryKey().notNull(),
    action: varchar('action', { length: 255 }),
    createdAt: timestamp('created_at', { precision: 6, mode: 'string' }),
    updatedAt: timestamp('updated_at', { precision: 6, mode: 'string' }),
    createdById: integer('created_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
    updatedById: integer('updated_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
  },
  (table) => {
    return {
      createdByIdFk: index('strapi_api_token_permissions_created_by_id_fk').on(table.createdById),
      updatedByIdFk: index('strapi_api_token_permissions_updated_by_id_fk').on(table.updatedById),
    };
  }
);

export const strapiTransferTokens = pgTable(
  'strapi_transfer_tokens',
  {
    id: serial('id').primaryKey().notNull(),
    name: varchar('name', { length: 255 }),
    description: varchar('description', { length: 255 }),
    accessKey: varchar('access_key', { length: 255 }),
    lastUsedAt: timestamp('last_used_at', { precision: 6, mode: 'string' }),
    expiresAt: timestamp('expires_at', { precision: 6, mode: 'string' }),
    // You can use { mode: "bigint" } if numbers are exceeding js number limitations
    lifespan: bigint('lifespan', { mode: 'number' }),
    createdAt: timestamp('created_at', { precision: 6, mode: 'string' }),
    updatedAt: timestamp('updated_at', { precision: 6, mode: 'string' }),
    createdById: integer('created_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
    updatedById: integer('updated_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
  },
  (table) => {
    return {
      createdByIdFk: index('strapi_transfer_tokens_created_by_id_fk').on(table.createdById),
      updatedByIdFk: index('strapi_transfer_tokens_updated_by_id_fk').on(table.updatedById),
    };
  }
);

export const strapiTransferTokenPermissions = pgTable(
  'strapi_transfer_token_permissions',
  {
    id: serial('id').primaryKey().notNull(),
    action: varchar('action', { length: 255 }),
    createdAt: timestamp('created_at', { precision: 6, mode: 'string' }),
    updatedAt: timestamp('updated_at', { precision: 6, mode: 'string' }),
    createdById: integer('created_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
    updatedById: integer('updated_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
  },
  (table) => {
    return {
      createdByIdFk: index('strapi_transfer_token_permissions_created_by_id_fk').on(table.createdById),
      updatedByIdFk: index('strapi_transfer_token_permissions_updated_by_id_fk').on(table.updatedById),
    };
  }
);

export const files = pgTable(
  'files',
  {
    id: serial('id').primaryKey().notNull(),
    name: varchar('name', { length: 255 }),
    alternativeText: varchar('alternative_text', { length: 255 }),
    caption: varchar('caption', { length: 255 }),
    width: integer('width'),
    height: integer('height'),
    formats: jsonb('formats'),
    hash: varchar('hash', { length: 255 }),
    ext: varchar('ext', { length: 255 }),
    mime: varchar('mime', { length: 255 }),
    size: numeric('size', { precision: 10, scale: 2 }),
    url: varchar('url', { length: 255 }),
    previewUrl: varchar('preview_url', { length: 255 }),
    provider: varchar('provider', { length: 255 }),
    providerMetadata: jsonb('provider_metadata'),
    folderPath: varchar('folder_path', { length: 255 }),
    createdAt: timestamp('created_at', { precision: 6, mode: 'string' }),
    updatedAt: timestamp('updated_at', { precision: 6, mode: 'string' }),
    createdById: integer('created_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
    updatedById: integer('updated_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
  },
  (table) => {
    return {
      uploadFilesFolderPathIdx: index('upload_files_folder_path_index').on(table.folderPath),
      uploadFilesCreatedAtIdx: index('upload_files_created_at_index').on(table.createdAt),
      uploadFilesUpdatedAtIdx: index('upload_files_updated_at_index').on(table.updatedAt),
      uploadFilesNameIdx: index('upload_files_name_index').on(table.name),
      uploadFilesSizeIdx: index('upload_files_size_index').on(table.size),
      uploadFilesExtIdx: index('upload_files_ext_index').on(table.ext),
      createdByIdFk: index('files_created_by_id_fk').on(table.createdById),
      updatedByIdFk: index('files_updated_by_id_fk').on(table.updatedById),
    };
  }
);

export const uploadFolders = pgTable(
  'upload_folders',
  {
    id: serial('id').primaryKey().notNull(),
    name: varchar('name', { length: 255 }),
    pathId: integer('path_id'),
    path: varchar('path', { length: 255 }),
    createdAt: timestamp('created_at', { precision: 6, mode: 'string' }),
    updatedAt: timestamp('updated_at', { precision: 6, mode: 'string' }),
    createdById: integer('created_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
    updatedById: integer('updated_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
  },
  (table) => {
    return {
      createdByIdFk: index('upload_folders_created_by_id_fk').on(table.createdById),
      updatedByIdFk: index('upload_folders_updated_by_id_fk').on(table.updatedById),
      uploadFoldersPathIdIndex: unique('upload_folders_path_id_index').on(table.pathId),
      uploadFoldersPathIndex: unique('upload_folders_path_index').on(table.path),
    };
  }
);

export const strapiReleases = pgTable(
  'strapi_releases',
  {
    id: serial('id').primaryKey().notNull(),
    name: varchar('name', { length: 255 }),
    releasedAt: timestamp('released_at', { precision: 6, mode: 'string' }),
    scheduledAt: timestamp('scheduled_at', { precision: 6, mode: 'string' }),
    timezone: varchar('timezone', { length: 255 }),
    status: varchar('status', { length: 255 }),
    createdAt: timestamp('created_at', { precision: 6, mode: 'string' }),
    updatedAt: timestamp('updated_at', { precision: 6, mode: 'string' }),
    createdById: integer('created_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
    updatedById: integer('updated_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
  },
  (table) => {
    return {
      createdByIdFk: index('strapi_releases_created_by_id_fk').on(table.createdById),
      updatedByIdFk: index('strapi_releases_updated_by_id_fk').on(table.updatedById),
    };
  }
);

export const strapiReleaseActions = pgTable(
  'strapi_release_actions',
  {
    id: serial('id').primaryKey().notNull(),
    type: varchar('type', { length: 255 }),
    targetId: integer('target_id'),
    targetType: varchar('target_type', { length: 255 }),
    contentType: varchar('content_type', { length: 255 }),
    locale: varchar('locale', { length: 255 }),
    isEntryValid: boolean('is_entry_valid'),
    createdAt: timestamp('created_at', { precision: 6, mode: 'string' }),
    updatedAt: timestamp('updated_at', { precision: 6, mode: 'string' }),
    createdById: integer('created_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
    updatedById: integer('updated_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
  },
  (table) => {
    return {
      createdByIdFk: index('strapi_release_actions_created_by_id_fk').on(table.createdById),
      updatedByIdFk: index('strapi_release_actions_updated_by_id_fk').on(table.updatedById),
    };
  }
);

export const i18NLocale = pgTable(
  'i18n_locale',
  {
    id: serial('id').primaryKey().notNull(),
    name: varchar('name', { length: 255 }),
    code: varchar('code', { length: 255 }),
    createdAt: timestamp('created_at', { precision: 6, mode: 'string' }),
    updatedAt: timestamp('updated_at', { precision: 6, mode: 'string' }),
    createdById: integer('created_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
    updatedById: integer('updated_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
  },
  (table) => {
    return {
      createdByIdFk: index('i18n_locale_created_by_id_fk').on(table.createdById),
      updatedByIdFk: index('i18n_locale_updated_by_id_fk').on(table.updatedById),
    };
  }
);

export const upPermissions = pgTable(
  'up_permissions',
  {
    id: serial('id').primaryKey().notNull(),
    action: varchar('action', { length: 255 }),
    createdAt: timestamp('created_at', { precision: 6, mode: 'string' }),
    updatedAt: timestamp('updated_at', { precision: 6, mode: 'string' }),
    createdById: integer('created_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
    updatedById: integer('updated_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
  },
  (table) => {
    return {
      createdByIdFk: index('up_permissions_created_by_id_fk').on(table.createdById),
      updatedByIdFk: index('up_permissions_updated_by_id_fk').on(table.updatedById),
    };
  }
);

export const upRoles = pgTable(
  'up_roles',
  {
    id: serial('id').primaryKey().notNull(),
    name: varchar('name', { length: 255 }),
    description: varchar('description', { length: 255 }),
    type: varchar('type', { length: 255 }),
    createdAt: timestamp('created_at', { precision: 6, mode: 'string' }),
    updatedAt: timestamp('updated_at', { precision: 6, mode: 'string' }),
    createdById: integer('created_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
    updatedById: integer('updated_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
  },
  (table) => {
    return {
      createdByIdFk: index('up_roles_created_by_id_fk').on(table.createdById),
      updatedByIdFk: index('up_roles_updated_by_id_fk').on(table.updatedById),
    };
  }
);

export const upUsers = pgTable(
  'up_users',
  {
    id: serial('id').primaryKey().notNull(),
    username: varchar('username', { length: 255 }),
    email: varchar('email', { length: 255 }),
    provider: varchar('provider', { length: 255 }),
    password: varchar('password', { length: 255 }),
    resetPasswordToken: varchar('reset_password_token', { length: 255 }),
    confirmationToken: varchar('confirmation_token', { length: 255 }),
    confirmed: boolean('confirmed'),
    blocked: boolean('blocked'),
    createdAt: timestamp('created_at', { precision: 6, mode: 'string' }),
    updatedAt: timestamp('updated_at', { precision: 6, mode: 'string' }),
    createdById: integer('created_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
    updatedById: integer('updated_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
  },
  (table) => {
    return {
      createdByIdFk: index('up_users_created_by_id_fk').on(table.createdById),
      updatedByIdFk: index('up_users_updated_by_id_fk').on(table.updatedById),
    };
  }
);

export const applicationMetadatas = pgTable(
  'application_metadatas',
  {
    id: serial('id').primaryKey().notNull(),
    version: varchar('version', { length: 255 }),
    versionUpdatedAt: date('version_updated_at'),
    createdAt: timestamp('created_at', { precision: 6, mode: 'string' }),
    updatedAt: timestamp('updated_at', { precision: 6, mode: 'string' }),
    publishedAt: timestamp('published_at', { precision: 6, mode: 'string' }),
    createdById: integer('created_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
    updatedById: integer('updated_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
  },
  (table) => {
    return {
      createdByIdFk: index('application_metadatas_created_by_id_fk').on(table.createdById),
      updatedByIdFk: index('application_metadatas_updated_by_id_fk').on(table.updatedById),
    };
  }
);

export const methods = pgTable(
  'methods',
  {
    id: serial('id').primaryKey().notNull(),
    title: varchar('title', { length: 255 }),
    description: text('description'),
    icon: varchar('icon', { length: 255 }),
    href: varchar('href', { length: 255 }),
    tag: varchar('tag', { length: 255 }),
    createdAt: timestamp('created_at', { precision: 6, mode: 'string' }),
    updatedAt: timestamp('updated_at', { precision: 6, mode: 'string' }),
    publishedAt: timestamp('published_at', { precision: 6, mode: 'string' }),
    createdById: integer('created_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
    updatedById: integer('updated_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
    locale: varchar('locale', { length: 255 }),
  },
  (table) => {
    return {
      createdByIdFk: index('methods_created_by_id_fk').on(table.createdById),
      updatedByIdFk: index('methods_updated_by_id_fk').on(table.updatedById),
    };
  }
);

export const pages = pgTable(
  'pages',
  {
    id: serial('id').primaryKey().notNull(),
    name: varchar('name', { length: 255 }),
    slug: varchar('slug', { length: 255 }),
    content: text('content'),
    order: integer('order'),
    cmsPage: boolean('cms_page'),
    showInNav: boolean('show_in_nav'),
    openInNewTab: boolean('open_in_new_tab'),
    createdAt: timestamp('created_at', { precision: 6, mode: 'string' }),
    updatedAt: timestamp('updated_at', { precision: 6, mode: 'string' }),
    publishedAt: timestamp('published_at', { precision: 6, mode: 'string' }),
    createdById: integer('created_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
    updatedById: integer('updated_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
  },
  (table) => {
    return {
      createdByIdFk: index('pages_created_by_id_fk').on(table.createdById),
      updatedByIdFk: index('pages_updated_by_id_fk').on(table.updatedById),
    };
  }
);

export const publishers = pgTable(
  'publishers',
  {
    id: serial('id').primaryKey().notNull(),
    owner: varchar('owner', { length: 255 }),
    repo: varchar('repo', { length: 255 }),
    secret: varchar('secret', { length: 255 }),
    name: varchar('name', { length: 255 }),
    createdAt: timestamp('created_at', { precision: 6, mode: 'string' }),
    updatedAt: timestamp('updated_at', { precision: 6, mode: 'string' }),
    publishedAt: timestamp('published_at', { precision: 6, mode: 'string' }),
    createdById: integer('created_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
    updatedById: integer('updated_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
  },
  (table) => {
    return {
      createdByIdFk: index('publishers_created_by_id_fk').on(table.createdById),
      updatedByIdFk: index('publishers_updated_by_id_fk').on(table.updatedById),
    };
  }
);

export const adminPermissionsRoleLinks = pgTable(
  'admin_permissions_role_links',
  {
    id: serial('id').primaryKey().notNull(),
    permissionId: integer('permission_id').references(() => adminPermissions.id, { onDelete: 'cascade' }),
    roleId: integer('role_id').references(() => adminRoles.id, { onDelete: 'cascade' }),
    permissionOrder: doublePrecision('permission_order'),
  },
  (table) => {
    return {
      fk: index('admin_permissions_role_links_fk').on(table.permissionId),
      invFk: index('admin_permissions_role_links_inv_fk').on(table.roleId),
      orderInvFk: index('admin_permissions_role_links_order_inv_fk').on(table.permissionOrder),
      adminPermissionsRoleLinksUnique: unique('admin_permissions_role_links_unique').on(
        table.permissionId,
        table.roleId
      ),
    };
  }
);

export const adminUsersRolesLinks = pgTable(
  'admin_users_roles_links',
  {
    id: serial('id').primaryKey().notNull(),
    userId: integer('user_id').references(() => adminUsers.id, { onDelete: 'cascade' }),
    roleId: integer('role_id').references(() => adminRoles.id, { onDelete: 'cascade' }),
    roleOrder: doublePrecision('role_order'),
    userOrder: doublePrecision('user_order'),
  },
  (table) => {
    return {
      fk: index('admin_users_roles_links_fk').on(table.userId),
      invFk: index('admin_users_roles_links_inv_fk').on(table.roleId),
      orderFk: index('admin_users_roles_links_order_fk').on(table.roleOrder),
      orderInvFk: index('admin_users_roles_links_order_inv_fk').on(table.userOrder),
      adminUsersRolesLinksUnique: unique('admin_users_roles_links_unique').on(table.userId, table.roleId),
    };
  }
);

export const strapiApiTokenPermissionsTokenLinks = pgTable(
  'strapi_api_token_permissions_token_links',
  {
    id: serial('id').primaryKey().notNull(),
    apiTokenPermissionId: integer('api_token_permission_id').references(() => strapiApiTokenPermissions.id, {
      onDelete: 'cascade',
    }),
    apiTokenId: integer('api_token_id').references(() => strapiApiTokens.id, { onDelete: 'cascade' }),
    apiTokenPermissionOrder: doublePrecision('api_token_permission_order'),
  },
  (table) => {
    return {
      fk: index('strapi_api_token_permissions_token_links_fk').on(table.apiTokenPermissionId),
      invFk: index('strapi_api_token_permissions_token_links_inv_fk').on(table.apiTokenId),
      orderInvFk: index('strapi_api_token_permissions_token_links_order_inv_fk').on(table.apiTokenPermissionOrder),
      strapiApiTokenPermissionsTokenLinksUnique: unique('strapi_api_token_permissions_token_links_unique').on(
        table.apiTokenPermissionId,
        table.apiTokenId
      ),
    };
  }
);

export const strapiTransferTokenPermissionsTokenLinks = pgTable(
  'strapi_transfer_token_permissions_token_links',
  {
    id: serial('id').primaryKey().notNull(),
    transferTokenPermissionId: integer('transfer_token_permission_id').references(
      () => strapiTransferTokenPermissions.id,
      { onDelete: 'cascade' }
    ),
    transferTokenId: integer('transfer_token_id').references(() => strapiTransferTokens.id, { onDelete: 'cascade' }),
    transferTokenPermissionOrder: doublePrecision('transfer_token_permission_order'),
  },
  (table) => {
    return {
      fk: index('strapi_transfer_token_permissions_token_links_fk').on(table.transferTokenPermissionId),
      invFk: index('strapi_transfer_token_permissions_token_links_inv_fk').on(table.transferTokenId),
      orderInvFk: index('strapi_transfer_token_permissions_token_links_order_inv_fk').on(
        table.transferTokenPermissionOrder
      ),
      strapiTransferTokenPermissionsTokenLinksUnique: unique('strapi_transfer_token_permissions_token_links_unique').on(
        table.transferTokenPermissionId,
        table.transferTokenId
      ),
    };
  }
);

export const filesRelatedMorphs = pgTable(
  'files_related_morphs',
  {
    id: serial('id').primaryKey().notNull(),
    fileId: integer('file_id').references(() => files.id, { onDelete: 'cascade' }),
    relatedId: integer('related_id'),
    relatedType: varchar('related_type', { length: 255 }),
    field: varchar('field', { length: 255 }),
    order: doublePrecision('order'),
  },
  (table) => {
    return {
      fk: index('files_related_morphs_fk').on(table.fileId),
      orderIdx: index().on(table.order),
      idColumnIdx: index('files_related_morphs_id_column_index').on(table.relatedId),
    };
  }
);

export const filesFolderLinks = pgTable(
  'files_folder_links',
  {
    id: serial('id').primaryKey().notNull(),
    fileId: integer('file_id').references(() => files.id, { onDelete: 'cascade' }),
    folderId: integer('folder_id').references(() => uploadFolders.id, { onDelete: 'cascade' }),
    fileOrder: doublePrecision('file_order'),
  },
  (table) => {
    return {
      fk: index('files_folder_links_fk').on(table.fileId),
      invFk: index('files_folder_links_inv_fk').on(table.folderId),
      orderInvFk: index('files_folder_links_order_inv_fk').on(table.fileOrder),
      filesFolderLinksUnique: unique('files_folder_links_unique').on(table.fileId, table.folderId),
    };
  }
);

export const uploadFoldersParentLinks = pgTable(
  'upload_folders_parent_links',
  {
    id: serial('id').primaryKey().notNull(),
    folderId: integer('folder_id').references(() => uploadFolders.id, { onDelete: 'cascade' }),
    invFolderId: integer('inv_folder_id').references(() => uploadFolders.id, { onDelete: 'cascade' }),
    folderOrder: doublePrecision('folder_order'),
  },
  (table) => {
    return {
      fk: index('upload_folders_parent_links_fk').on(table.folderId),
      invFk: index('upload_folders_parent_links_inv_fk').on(table.invFolderId),
      orderInvFk: index('upload_folders_parent_links_order_inv_fk').on(table.folderOrder),
      uploadFoldersParentLinksUnique: unique('upload_folders_parent_links_unique').on(
        table.folderId,
        table.invFolderId
      ),
    };
  }
);

export const strapiReleaseActionsReleaseLinks = pgTable(
  'strapi_release_actions_release_links',
  {
    id: serial('id').primaryKey().notNull(),
    releaseActionId: integer('release_action_id').references(() => strapiReleaseActions.id, { onDelete: 'cascade' }),
    releaseId: integer('release_id').references(() => strapiReleases.id, { onDelete: 'cascade' }),
    releaseActionOrder: doublePrecision('release_action_order'),
  },
  (table) => {
    return {
      fk: index('strapi_release_actions_release_links_fk').on(table.releaseActionId),
      invFk: index('strapi_release_actions_release_links_inv_fk').on(table.releaseId),
      orderInvFk: index('strapi_release_actions_release_links_order_inv_fk').on(table.releaseActionOrder),
      strapiReleaseActionsReleaseLinksUnique: unique('strapi_release_actions_release_links_unique').on(
        table.releaseActionId,
        table.releaseId
      ),
    };
  }
);

export const upPermissionsRoleLinks = pgTable(
  'up_permissions_role_links',
  {
    id: serial('id').primaryKey().notNull(),
    permissionId: integer('permission_id').references(() => upPermissions.id, { onDelete: 'cascade' }),
    roleId: integer('role_id').references(() => upRoles.id, { onDelete: 'cascade' }),
    permissionOrder: doublePrecision('permission_order'),
  },
  (table) => {
    return {
      fk: index('up_permissions_role_links_fk').on(table.permissionId),
      invFk: index('up_permissions_role_links_inv_fk').on(table.roleId),
      orderInvFk: index('up_permissions_role_links_order_inv_fk').on(table.permissionOrder),
      upPermissionsRoleLinksUnique: unique('up_permissions_role_links_unique').on(table.permissionId, table.roleId),
    };
  }
);

export const upUsersRoleLinks = pgTable(
  'up_users_role_links',
  {
    id: serial('id').primaryKey().notNull(),
    userId: integer('user_id').references(() => upUsers.id, { onDelete: 'cascade' }),
    roleId: integer('role_id').references(() => upRoles.id, { onDelete: 'cascade' }),
    userOrder: doublePrecision('user_order'),
  },
  (table) => {
    return {
      fk: index('up_users_role_links_fk').on(table.userId),
      invFk: index('up_users_role_links_inv_fk').on(table.roleId),
      orderInvFk: index('up_users_role_links_order_inv_fk').on(table.userOrder),
      upUsersRoleLinksUnique: unique('up_users_role_links_unique').on(table.userId, table.roleId),
    };
  }
);

export const methodsLocalizationsLinks = pgTable(
  'methods_localizations_links',
  {
    id: serial('id').primaryKey().notNull(),
    methodId: integer('method_id').references(() => methods.id, { onDelete: 'cascade' }),
    invMethodId: integer('inv_method_id').references(() => methods.id, { onDelete: 'cascade' }),
    methodOrder: doublePrecision('method_order'),
  },
  (table) => {
    return {
      fk: index('methods_localizations_links_fk').on(table.methodId),
      invFk: index('methods_localizations_links_inv_fk').on(table.invMethodId),
      orderFk: index('methods_localizations_links_order_fk').on(table.methodOrder),
      methodsLocalizationsLinksUnique: unique('methods_localizations_links_unique').on(
        table.methodId,
        table.invMethodId
      ),
    };
  }
);

export const events = pgTable(
  'events',
  {
    id: serial('id').primaryKey().notNull(),
    title: varchar('title', { length: 255 }).notNull(),
    intro: text('intro').notNull(),
    start: timestamp('start', { precision: 6, mode: 'string' }).notNull(),
    end: timestamp('end', { precision: 6, mode: 'string' }).notNull(),
    subject: varchar('subject', { length: 255 }).notNull(),
    address: varchar('address', { length: 255 }).notNull(),
    content: text('content').notNull(),
    slug: varchar('slug', { length: 255 }).notNull(),
    addressName: varchar('address_name', { length: 255 }).notNull(),
    eventbrite: text('eventbrite'),
    eventbriteTitle: varchar('eventbrite_title', { length: 255 }),
    createdAt: timestamp('created_at', { precision: 6, mode: 'string' }),
    updatedAt: timestamp('updated_at', { precision: 6, mode: 'string' }),
    publishedAt: timestamp('published_at', { precision: 6, mode: 'string' }),
    createdById: integer('created_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
    updatedById: integer('updated_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
    report: text('report'),
  },
  (table) => {
    return {
      createdByIdFk: index('events_created_by_id_fk').on(table.createdById),
      updatedByIdFk: index('events_updated_by_id_fk').on(table.updatedById),
      eventsSlugUnique: unique('events_slug_unique').on(table.slug),
    };
  }
);

export const blogArticles = pgTable(
  'blog_articles',
  {
    id: serial('id').primaryKey().notNull(),
    title: varchar('title', { length: 255 }),
    category: varchar('category', { length: 255 }),
    content: text('content'),
    description: text('description'),
    createdAt: timestamp('created_at', { precision: 6, mode: 'string' }),
    updatedAt: timestamp('updated_at', { precision: 6, mode: 'string' }),
    publishedAt: timestamp('published_at', { precision: 6, mode: 'string' }),
    createdById: integer('created_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
    updatedById: integer('updated_by_id').references(() => adminUsers.id, { onDelete: 'set null' }),
    source: text('source'),
  },
  (table) => {
    return {
      createdByIdFk: index('blog_articles_created_by_id_fk').on(table.createdById),
      updatedByIdFk: index('blog_articles_updated_by_id_fk').on(table.updatedById),
    };
  }
);
