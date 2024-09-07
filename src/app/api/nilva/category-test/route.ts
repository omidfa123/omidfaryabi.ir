export function GET() {
  const data = {
    categories: [
      {
        name: 'کالای دیجیتال',
        subcategories: [
          {
            name: 'موبایل',
            items: [
              {
                name: 'اپل',
                link: '/mobile/apple',
              },
              {
                name: 'سامسونگ',
                link: '/mobile/samsung',
              },
              {
                name: 'شیائومی',
                link: '/mobile/xiaomi',
              },
              {
                name: 'موتورولا',
                link: '/mobile/motorola',
              },
              {
                name: 'هواوی',
                link: '/mobile/huawei',
              },
              {
                name: 'نوکیا',
                link: '/mobile/nokia',
              },
              {
                name: 'کت',
                link: '/mobile/cat',
              },
              {
                name: 'گوگل',
                link: '/mobile/google',
              },
              {
                name: 'وان پلاس',
                link: '/mobile/oneplus',
              },
              {
                name: 'داکس',
                link: '/mobile/dox',
              },
              {
                name: 'آرد',
                link: '/mobile/ard',
              },
              {
                name: 'جی پلاس',
                link: '/mobile/gplus',
              },
              {
                name: 'ایسوس',
                link: '/mobile/asus',
              },
              {
                name: 'آزتاجایزر',
                link: '/mobile/aztajizer',
              },
            ],
          },
          {
            name: 'لپ تاپ',
            items: [
              {
                name: 'ایسوس',
                link: '/laptop/asus',
              },
              {
                name: 'لنوو',
                link: '/laptop/lenovo',
              },
              {
                name: 'ایسر',
                link: '/laptop/acer',
              },
              {
                name: 'ام اس آی',
                link: '/laptop/msi',
              },
              {
                name: 'اچ پی',
                link: '/laptop/hp',
              },
              {
                name: 'هواوی',
                link: '/laptop/huawei',
              },
              {
                name: 'مایکروسافت',
                link: '/laptop/microsoft',
              },
              {
                name: 'دل',
                link: '/laptop/dell',
              },
            ],
          },
          {
            name: 'تبلت',
            items: [
              {
                name: 'اپل',
                link: '/tablet/apple',
              },
              {
                name: 'مایکروسافت',
                link: '/tablet/microsoft',
              },
              {
                name: 'سامسونگ',
                link: '/tablet/samsung',
              },
              {
                name: 'هواوی',
                link: '/tablet/huawei',
              },
              {
                name: 'لنوو',
                link: '/tablet/lenovo',
              },
            ],
          },
          {
            name: 'کامپیوتر',
            items: [
              {
                name: 'پردازنده (CPU)',
                link: '/computer/cpu',
              },
              {
                name: 'مادربرد',
                link: '/computer/motherboard',
              },
              {
                name: 'رم کامپیوتر',
                link: '/computer/ram',
              },
              {
                name: 'پاور',
                link: '/computer/power',
              },
              {
                name: 'قاب کیس',
                link: '/computer/case',
              },
              {
                name: 'مانیتور',
                link: '/computer/monitor',
              },
              {
                name: 'کارت گرافیک',
                link: '/computer/graphic-card',
              },
            ],
          },
          {
            name: 'دوربین عکاسی',
            items: [
              {
                name: 'نیکون',
                link: '/camera/nikon',
              },
              {
                name: 'کنن',
                link: '/camera/canon',
              },
              {
                name: 'سونی',
                link: '/camera/sony',
              },
              {
                name: 'فوجی فیلم',
                link: '/camera/fujifilm',
              },
              {
                name: 'عکاسی و فیلم برداری',
                link: '/camera/photography',
              },
              {
                name: 'لوازم جانبی پرینتر',
                link: '/camera/printer-accessories',
              },
              {
                name: 'لوازم جانبی بازی',
                link: '/camera/game-accessories',
              },
            ],
          },
          {
            name: 'کنسول و تجهیزات بازی',
            items: [
              {
                name: 'سونی',
                link: '/gaming/sony',
              },
              {
                name: 'مایکروسافت',
                link: '/gaming/microsoft',
              },
            ],
          },
          {
            name: 'لوازم جانبی',
            items: [
              {
                name: 'هدفون اپل',
                link: '/accessories/apple-headphone',
              },
              {
                name: 'لوازم جانبی لپ تاپ',
                link: '/accessories/laptop-accessories',
              },
              {
                name: 'لوازم جانبی تبلت',
                link: '/accessories/tablet-accessories',
              },
              {
                name: 'هدفون، هندزفری، ایرپاد',
                link: '/accessories/headphones',
              },
              {
                name: 'کیبورد',
                link: '/accessories/keyboard',
              },
              {
                name: 'موس',
                link: '/accessories/mouse',
              },
            ],
          },
          {
            name: 'ماشین های اداری',
            items: [
              {
                name: 'پرینتر',
                link: '/office/printer',
              },
              {
                name: 'اسکنر',
                link: '/office/scanner',
              },
              {
                name: 'فکس',
                link: '/office/fax',
              },
            ],
          },
          {
            name: 'ساعت هوشمند',
            items: [
              {
                name: 'اپل',
                link: '/smartwatch/apple',
              },
              {
                name: 'سامسونگ',
                link: '/smartwatch/samsung',
              },
              {
                name: 'گارمین',
                link: '/smartwatch/garmin',
              },
            ],
          },
          {
            name: 'مچ بند هوشمند',
            items: [
              {
                name: 'شیائومی',
                link: '/smartband/xiaomi',
              },
            ],
          },
          {
            name: 'شبکه',
            items: [
              {
                name: 'مودم',
                link: '/network/modem',
              },
              {
                name: 'سوییچ',
                link: '/network/switch',
              },
              {
                name: 'کارت شبکه',
                link: '/network/network-card',
              },
              {
                name: 'روتر و اکسس پوینت',
                link: '/network/router',
              },
            ],
          },
          {
            name: 'رهیاب ماهواره ای (GPS)',
            items: [
              {
                name: 'رهیاب جی پی اس',
                link: '/gps/gps-navigator',
              },
              {
                name: 'گارمین',
                link: '/gps/garmin',
              },
            ],
          },
        ],
      },
      {
        name: 'لوازم خانگی',
        subcategories: [
          {
            name: 'لوازم آشپزخانه',
            items: [
              {
                name: 'یخچال',
                link: '/home-appliances/refrigerator',
              },
              {
                name: 'اجاق گاز',
                link: '/home-appliances/stove',
              },
              {
                name: 'ماشین لباسشویی',
                link: '/home-appliances/washing-machine',
              },
              {
                name: 'مایکروویو',
                link: '/home-appliances/microwave',
              },
            ],
          },
          {
            name: 'تهویه مطبوع',
            items: [
              {
                name: 'کولر گازی',
                link: '/home-appliances/air-conditioner',
              },
              {
                name: 'پنکه',
                link: '/home-appliances/fan',
              },
              {
                name: 'بخاری',
                link: '/home-appliances/heater',
              },
            ],
          },
          {
            name: 'نظافت و شستشو',
            items: [
              {
                name: 'جاروبرقی',
                link: '/home-appliances/vacuum-cleaner',
              },
              {
                name: 'بخارشوی',
                link: '/home-appliances/steam-cleaner',
              },
              {
                name: 'کارواش خانگی',
                link: '/home-appliances/home-car-wash',
              },
            ],
          },
        ],
      },
    ],
  }

  return Response.json({ data })
}
