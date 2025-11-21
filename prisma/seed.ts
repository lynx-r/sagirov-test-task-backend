import { Advantage, ButtonProps, MenuItem, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
async function main() {
  console.log('Начало заполнения базы данных...');

  await prisma.menuItem.deleteMany();
  await prisma.advantage.deleteMany();
  await prisma.buttonProps.deleteMany();
  console.log('Существующие записи удалены.');

  const menu: Omit<MenuItem, 'id'>[] = [
    {
      label: 'Главная',
      to: '#',
      active: true,
    },
    {
      label: 'Каталог',
      to: '#',
      active: null,
    },
    {
      label: 'Бренды',
      to: '#',
      active: null,
    },
    {
      label: 'Доставка и оплата',
      to: '#',
      active: null,
    },
    {
      label: 'Помощь',
      to: '#',
      active: null,
    },
    {
      label: 'Компания',
      to: '#',
      active: null,
    },
  ];
  await prisma.menuItem.createMany({
    data: menu,
  });

  const advantages: Omit<Advantage, 'id'>[] = [
    {
      title: 'Доверие и гарантии',
      description:
        'Покупка у официального или специализированного дилера снижает риск приобретения поддельных или модифицированных устройств (что является серьезной проблемой при покупке крипто-устройств с рук или на сомнительных площадках). Магазин предоставляет гарантию и сервисное обслуживание.',
      image_url:
        'https://repository-images.githubusercontent.com/274263743/ed158780-87df-11eb-98d2-84ef4a40310d',
      orientation: null,
    },
    {
      title: 'Широкий ассортимент нишевых товаров',
      description:
        'В отличие от крупных маркетплейсов, такой магазин может предложить более глубокий и актуальный ассортимент именно крипто-устройств, включая последние модели, аксессуары и редкие бренды.',
      image_url: 'https://www.sostav.ru/blogs/images/feeds/60/119940.jpg',
      orientation: null,
    },
    {
      title: 'Образовательный элемент',
      description:
        'Магазин может служить образовательным центром, проводя вебинары, мастер-классы или предоставляя информационные материалы о важности аппаратной безопасности и о том, как работают устройства.',
      image_url:
        'https://dps.krasnodar.ru/upload/iblock/b83/g1q0n22werzkr144w222wxjc77dvlxun/Foto.jpg',
      orientation: null,
    },
  ];
  await prisma.advantage.createMany({
    data: advantages,
  });

  const advantagesDb = await prisma.advantage.findMany();
  // @ts-ignore
  const links: Omit<ButtonProps, 'id'> = [
    {
      label: 'Начать пользоваться',
      color: 'neutral',
      trailingIcon: null,
      variant: null,
      advantageId:
        advantagesDb.find((a) => a.title === advantages[0].title)?.id || null,
    },
    {
      label: 'Узнать больше',
      color: 'neutral',
      variant: 'subtle',
      trailingIcon: 'i-lucide-arrow-right',
      advantageId:
        advantagesDb.find((a) => a.title === advantages[0].title)?.id || null,
    },
    {
      label: 'Начать пользоваться',
      color: 'neutral',
      trailingIcon: null,
      variant: null,
      advantageId:
        advantagesDb.find((a) => a.title === advantages[1].title)?.id || null,
    },
    {
      label: 'Узнать больше',
      color: 'neutral',
      variant: 'subtle',
      trailingIcon: 'i-lucide-arrow-right',
      advantageId:
        advantagesDb.find((a) => a.title === advantages[1].title)?.id || null,
    },
    {
      label: 'Начать пользоваться',
      color: 'neutral',
      trailingIcon: null,
      variant: null,
      advantageId:
        advantagesDb.find((a) => a.title === advantages[2].title)?.id || null,
    },
    {
      label: 'Узнать больше',
      color: 'neutral',
      variant: 'subtle',
      trailingIcon: 'i-lucide-arrow-right',
      advantageId:
        advantagesDb.find((a) => a.title === advantages[2].title)?.id || null,
    },
  ];
  await prisma.buttonProps.createMany({
    data: links,
  });

  console.log('Заполнение базы данных завершено.');
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
