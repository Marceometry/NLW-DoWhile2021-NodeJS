import prismaClient from '../prisma'

export function CreateMessageService() {
  async function execute(text: string, user_id: string) {
    const message = await prismaClient.message.create({
      data: {
        text,
        user_id
      },
      include: {
        user: true
      }
    })

    return message
  }

  return { execute }
}
