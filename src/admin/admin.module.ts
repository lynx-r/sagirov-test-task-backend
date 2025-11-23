import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { PrismaService } from '../prisma/prisma.service';
// import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [
    // ConfigModule.forRoot(),
    import('@adminjs/nestjs').then(({ AdminModule: AdminJsModule }) => {
      return AdminJsModule.createAdminAsync({
        useFactory: async (prisma: PrismaService) => {
          const AdminJS = (await import('adminjs')).default;
          const { Database, Resource, getModelByName } = await import(
            '@adminjs/prisma'
          );

          AdminJS.registerAdapter({ Database, Resource });

          return {
            adminJsOptions: {
              rootPath: '/admin',
              resources: [
                {
                  resource: {
                    model: getModelByName('MenuItem'),
                    client: prisma,
                  },
                  options: {
                    listProperties: ['id', 'label', 'to', 'active'],
                    editProperties: ['label', 'to', 'active'],
                    showProperties: ['id', 'label', 'to', 'active'],
                    filterProperties: ['label', 'to', 'active'],
                    actions: {
                      listAll: {
                        actionType: 'resource',
                        component: false,
                        handler: async () => {
                          const records = await prisma.menuItem.findMany();
                          return {
                            records,
                          };
                        },
                      },
                    },
                  },
                },
                {
                  resource: {
                    model: getModelByName('Advantage'),
                    client: prisma,
                  },
                  options: {
                    listProperties: ['id', 'title', 'description', 'image_url'],
                    editProperties: ['title', 'description', 'image_url'],
                    showProperties: ['id', 'title', 'description', 'image_url'],
                    filterProperties: ['title', 'description', 'image_url'],
                    actions: {
                      listAll: {
                        actionType: 'resource',
                        component: false,
                        handler: async () => {
                          const records = await prisma.advantage.findMany({
                            include: {
                              links: true,
                            },
                          });
                          return {
                            records,
                          };
                        },
                      },
                    },
                  },
                },
                {
                  resource: {
                    model: getModelByName('ButtonProps'),
                    client: prisma,
                  },
                },
              ],
            },
          };
        },
        inject: [PrismaService],
        imports: [PrismaModule],
      });
    }),
  ],
  providers: [PrismaService],
})
export class AdminModule {}
