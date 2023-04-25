export const seedPermissions = async (permissions: string[]) => {
  const publicRole = await strapi.db.query('plugin::users-permissions.role').findOne({
    where: {
      type: 'public',
    },
  });

  return Promise.all(
    permissions.map((action) =>
      strapi.query('plugin::users-permissions.permission').create({ data: { action, role: publicRole.id } })
    )
  );
};
