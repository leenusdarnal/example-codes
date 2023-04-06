import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()
// { log: ['query', 'error'] } inside prismaCLient to view

const main = async () => {
  // await prisma.user.deleteMany()
  // await prisma.userPreference.deleteMany()
  // const user = await prisma.user
  //   // .deleteMany()
  //   .create({
  //     data: {
  //       name: 'yetano',
  //       email: 'example.com',
  //       UserPreference: {
  //         create: {},
  //       },
  //     },
  //     select: {
  //       name: true,
  //       email: true,
  //       UserPreference: { select: { emailUpdates: true } },
  //     },
  //     // include: {
  //     //   UserPreference: true,
  //     // },
  //   })
  // const user = await prisma.user.findUnique({
  //   where: {
  //     email_name: {
  //       email: 'example.com',
  //       name: 'yetano',
  //     },
  //   },
  // })
  // const user = await prisma.user.findFirst({
  //   where: {
  //     writtenPost: {
  //       every: {
  //         title: 'test',
  //       },
  //     },
  //   },
  // })
  // console.log(user)
}

main()
  .catch((e) => {
    console.error(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
