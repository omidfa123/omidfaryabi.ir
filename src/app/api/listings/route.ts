import { corsHeaders } from '@/lib/cors'
import { NextRequest, NextResponse } from 'next/server'

interface AgentProfile {
  profileImageUrl: string
}

interface ListingTag {
  text: string
  type: 'new_construction' | 'dedicated_parking' | string
}

interface ListingRating {
  score: number
  reviewCount: number
}

interface ListingPrice {
  amount: number
  currency: string
  period: string
}

export interface ListingCard {
  // Exporting for potential frontend use
  id: string
  mainImageUrl: string
  title: string
  location: {
    address: string
  }
  isFavorited: boolean
  features: string[]
  propertyDetails: {
    bedrooms: number
    floor: string
    agents?: AgentProfile[]
  }
  tags: ListingTag[]
  rating: ListingRating
  price: ListingPrice
  detailPageUrl?: string
}

const listingsData: ListingCard[] = [
  {
    id: 'listing-001',
    mainImageUrl: '/images/property-sample-1.jpg',
    title: 'آپارتمان دنج در شمال شهر',
    location: {
      address: 'نیاوران، خیابان بوکان، پلاک ۲۳',
    },
    isFavorited: false,
    features: [
      'نورگیر عالی از جنوب',
      'دسترسی آسان به پارک',
      'آشپزخانه نیمه فرنیش',
    ],
    propertyDetails: {
      bedrooms: 2,
      floor: 'چهارم',
      agents: [
        { profileImageUrl: '/images/agent-a1.jpg' },
        { profileImageUrl: '/images/agent-a2.jpg' },
      ],
    },
    tags: [
      { text: 'ساختمان کم واحد', type: 'low_density_building' },
      { text: 'پارکینگ سندی', type: 'deeded_parking' },
    ],
    rating: {
      score: 4.2,
      reviewCount: 15,
    },
    price: {
      amount: 12000000,
      currency: 'Toman',
      period: 'ماهانه',
    },
    detailPageUrl: '/listings/listing-001',
  },
  {
    id: 'listing-002',
    mainImageUrl: '/images/property-sample-2.jpg',
    title: 'ویلای مدرن با استخر در لواسان',
    location: {
      address: 'لواسان، بلوار امام خمینی، کوچه افرا',
    },
    isFavorited: true,
    features: [
      'استخر چهار فصل',
      'روف گاردن با ویو ۳۶۰ درجه',
      'سیستم هوشمند BMS',
      'متریال برند اروپایی',
    ],
    propertyDetails: {
      bedrooms: 5,
      floor: 'دوبلکس',
      agents: [{ profileImageUrl: '/images/agent-b1.jpg' }],
    },
    tags: [
      { text: 'لوکس', type: 'luxury' },
      { text: 'نوساز', type: 'new_construction' },
      { text: 'فروشنده واقعی', type: 'motivated_seller' },
    ],
    rating: {
      score: 4.9,
      reviewCount: 32,
    },
    price: {
      amount: 85000000000,
      currency: 'Toman',
      period: 'کل',
    },
    detailPageUrl: '/listings/listing-002',
  },
  {
    id: 'listing-003',
    mainImageUrl: '/images/property-sample-3.jpg',
    title: 'واحد اداری بر اصلی میرداماد',
    location: {
      address: 'میرداماد، جنب مترو، برج تجاری آفتاب',
    },
    isFavorited: false,
    features: [
      'موقعیت عالی برای کسب و کار',
      'نگهبانی ۲۴ ساعته',
      'چند خط تلفن',
      'پارکینگ عمومی نزدیک',
    ],
    propertyDetails: {
      bedrooms: 0, // For office
      floor: 'هفتم',
      agents: [{ profileImageUrl: '/images/agent-c1.jpg' }],
    },
    tags: [
      { text: 'موقعیت اداری', type: 'office_space' },
      { text: 'سند اداری', type: 'commercial_deed' },
    ],
    rating: {
      score: 4.0,
      reviewCount: 8,
    },
    price: {
      amount: 250000000,
      currency: 'Toman',
      period: 'رهن کامل', // Or "اجاره ماهانه"
    },
    detailPageUrl: '/listings/listing-003',
  },
  {
    id: 'listing-004',
    mainImageUrl: '/images/property-sample-4.jpg',
    title: 'آپارتمان نقلی در سعادت آباد',
    location: {
      address: 'سعادت آباد، علامه شمالی، کوچه ۳۲',
    },
    isFavorited: true,
    features: ['بازسازی شده کامل', 'آشپزخانه اپن MDF', 'نورگیر خوب'],
    propertyDetails: {
      bedrooms: 1,
      floor: 'دوم',
      agents: [
        { profileImageUrl: '/images/agent-a2.jpg' },
        { profileImageUrl: '/images/agent-d1.jpg' },
      ],
    },
    tags: [
      { text: 'مناسب زوج جوان', type: 'young_couple_friendly' },
      { text: 'اکازیون', type: 'bargain' },
    ],
    rating: {
      score: 3.8,
      reviewCount: 22,
    },
    price: {
      amount: 4500000000,
      currency: 'Toman',
      period: 'کل',
    },
    detailPageUrl: '/listings/listing-004',
  },
  {
    id: 'listing-005',
    mainImageUrl: '/images/property-sample-5.jpg',
    title: 'خانه ویلایی قدیمی در تجریش',
    location: {
      address: 'تجریش، دزاشیب، خیابان عمار',
    },
    isFavorited: false,
    features: [
      'حیاط بزرگ و مشجر',
      'قابل سکونت و یا مناسب ساخت',
      'دو طبقه مجزا',
    ],
    propertyDetails: {
      bedrooms: 4,
      floor: 'دربست',
      agents: [{ profileImageUrl: '/images/agent-e1.jpg' }],
    },
    tags: [
      { text: 'سرمایه گذاری', type: 'investment' },
      { text: 'موقعیت عالی', type: 'prime_location' },
    ],
    rating: {
      score: 4.1,
      reviewCount: 12,
    },
    price: {
      amount: 60000000000,
      currency: 'Toman',
      period: 'کل',
    },
    detailPageUrl: '/listings/listing-005',
  },
  {
    id: 'listing-006',
    mainImageUrl: '/images/property-sample-6.jpg',
    title: 'پنت هاوس لوکس در فرمانیه',
    location: {
      address: 'فرمانیه شرقی، برج آسمان، طبقه آخر',
    },
    isFavorited: true,
    features: [
      'تراس وسیع با جکوزی',
      'آشپزخانه فول فرنیش Gaggenau',
      'چشم انداز بی نظیر شهر',
      'سه پارکینگ سندی',
    ],
    propertyDetails: {
      bedrooms: 4,
      floor: 'بیستم (پنت هاوس)',
      agents: [
        { profileImageUrl: '/images/agent-f1.jpg' },
        { profileImageUrl: '/images/agent-b1.jpg' },
      ],
    },
    tags: [
      { text: 'فوق لوکس', type: 'ultra_luxury' },
      { text: 'ویو ابدی', type: 'eternal_view' },
    ],
    rating: {
      score: 5.0,
      reviewCount: 45,
    },
    price: {
      amount: 150000000000,
      currency: 'Toman',
      period: 'کل',
    },
    detailPageUrl: '/listings/listing-006',
  },
  {
    id: 'listing-007',
    mainImageUrl: '/images/property-sample-7.jpg',
    title: 'آپارتمان سه خوابه در گیشا',
    location: {
      address: 'گیشا، خیابان ۲۲، پلاک ۱۱',
    },
    isFavorited: false,
    features: [
      'سالن بزرگ پرده خور',
      'هر سه خواب نور مستقیم',
      'انباری و پارکینگ',
    ],
    propertyDetails: {
      bedrooms: 3,
      floor: 'سوم',
      agents: [{ profileImageUrl: '/images/agent-g1.jpg' }],
    },
    tags: [
      { text: 'خانوادگی', type: 'family_friendly' },
      { text: 'خوش نقشه', type: 'well_designed_layout' },
    ],
    rating: {
      score: 4.3,
      reviewCount: 19,
    },
    price: {
      amount: 9500000000,
      currency: 'Toman',
      period: 'کل',
    },
    detailPageUrl: '/listings/listing-007',
  },
  {
    id: 'listing-008',
    mainImageUrl: '/images/property-sample-8.jpg',
    title: 'سوئیت مبله نزدیک دانشگاه تهران',
    location: {
      address: 'انقلاب، خیابان کارگر شمالی، کوچه مهر',
    },
    isFavorited: true,
    features: ['مبلمان کامل', 'اینترنت پرسرعت', 'مناسب دانشجو'],
    propertyDetails: {
      bedrooms: 0, // Studio
      floor: 'اول',
      agents: [{ profileImageUrl: '/images/agent-h1.jpg' }],
    },
    tags: [
      { text: 'اجاره کوتاه مدت', type: 'short_term_rental' },
      { text: 'مبله', type: 'furnished' },
    ],
    rating: {
      score: 3.9,
      reviewCount: 25,
    },
    price: {
      amount: 8500000,
      currency: 'Toman',
      period: 'ماهانه',
    },
    detailPageUrl: '/listings/listing-008',
  },
  {
    id: 'listing-009',
    mainImageUrl: '/images/property-sample-9.jpg',
    title: 'کلنگی دو نبش در ونک',
    location: {
      address: 'ونک، خیابان شیراز جنوبی، گذر یاس',
    },
    isFavorited: false,
    features: ['بر عالی برای ساخت', 'مجوز ساخت ۵ طبقه', 'دسترسی فوق العاده'],
    propertyDetails: {
      bedrooms: 3, // Existing structure
      floor: 'دو طبقه قدیمی',
      agents: [{ profileImageUrl: '/images/agent-i1.jpg' }],
    },
    tags: [
      { text: 'مشارکت در ساخت', type: 'joint_construction_venture' },
      { text: 'اکازیون سرمایه گذاری', type: 'investment_bargain' },
    ],
    rating: {
      score: 4.0,
      reviewCount: 5,
    },
    price: {
      amount: 70000000000,
      currency: 'Toman',
      period: 'کل',
    },
    detailPageUrl: '/listings/listing-009',
  },
  {
    id: 'listing-010',
    mainImageUrl: '/images/property-sample-10.jpg',
    title: 'آپارتمان نوساز در چیتگر',
    location: {
      address: 'چیتگر، اطراف دریاچه، برج مروارید',
    },
    isFavorited: true,
    features: ['ویو دریاچه', 'لابی مجلل و هتلینگ', 'سالن ورزش و اجتماعات'],
    propertyDetails: {
      bedrooms: 2,
      floor: 'دهم',
      agents: [
        { profileImageUrl: '/images/agent-j1.jpg' },
        { profileImageUrl: '/images/agent-j2.jpg' },
      ],
    },
    tags: [
      { text: 'کلید نخورده', type: 'brand_new_unkeyed' },
      { text: 'برج نشینان', type: 'tower_living' },
    ],
    rating: {
      score: 4.6,
      reviewCount: 55,
    },
    price: {
      amount: 6800000000,
      currency: 'Toman',
      period: 'کل',
    },
    detailPageUrl: '/listings/listing-010',
  },
  {
    id: 'listing-011',
    mainImageUrl: '/images/property-sample-11.jpg',
    title: 'واحد تجاری در پاساژ کوروش',
    location: {
      address: 'بزرگراه ستاری، مجتمع تجاری کوروش، طبقه دوم',
    },
    isFavorited: false,
    features: ['پاخور عالی', 'مناسب پوشاک و اکسسوری', 'دکوراسیون شیک'],
    propertyDetails: {
      bedrooms: 0, // Commercial unit
      floor: 'دوم تجاری',
      agents: [{ profileImageUrl: '/images/agent-k1.jpg' }],
    },
    tags: [
      { text: 'تجاری', type: 'commercial_unit' },
      { text: 'پرتردد', type: 'high_traffic' },
    ],
    rating: {
      score: 4.4,
      reviewCount: 11,
    },
    price: {
      amount: 50000000,
      currency: 'Toman',
      period: 'اجاره ماهانه',
    },
    detailPageUrl: '/listings/listing-011',
  },
  {
    id: 'listing-012',
    mainImageUrl: '/images/property-sample-12.jpg',
    title: 'باغ ویلا در شهریار',
    location: {
      address: 'شهریار، منطقه ویلایی، کوچه باغستان',
    },
    isFavorited: true,
    features: [
      'درختان میوه مثمر',
      'استخر و آلاچیق',
      'انشعابات کامل',
      'سرایداری مجزا',
    ],
    propertyDetails: {
      bedrooms: 3,
      floor: 'یک طبقه',
      agents: [{ profileImageUrl: '/images/agent-l1.jpg' }],
    },
    tags: [
      { text: 'تفریحی', type: 'recreational' },
      { text: 'سند شش دانگ', type: 'full_ownership_deed' },
    ],
    rating: {
      score: 4.7,
      reviewCount: 28,
    },
    price: {
      amount: 22000000000,
      currency: 'Toman',
      period: 'کل',
    },
    detailPageUrl: '/listings/listing-012',
  },
  {
    id: 'listing-013',
    mainImageUrl: '/images/property-sample-13.jpg',
    title: 'آپارتمان قدیمی در مرکز شهر',
    location: {
      address: 'میدان فردوسی، خیابان جمهوری، بن بست لاله',
    },
    isFavorited: false,
    features: ['نیاز به بازسازی', 'قیمت مناسب', 'دسترسی به بازار'],
    propertyDetails: {
      bedrooms: 2,
      floor: 'اول',
      agents: [{ profileImageUrl: '/images/agent-m1.jpg' }],
    },
    tags: [
      { text: 'زیر قیمت منطقه', type: 'below_market_price' },
      { text: 'فرصت بازسازی', type: 'renovation_opportunity' },
    ],
    rating: {
      score: 3.5,
      reviewCount: 9,
    },
    price: {
      amount: 3200000000,
      currency: 'Toman',
      period: 'کل',
    },
    detailPageUrl: '/listings/listing-013',
  },
  {
    id: 'listing-014',
    mainImageUrl: '/images/property-sample-14.jpg',
    title: 'واحد ۱۰۰ متری در یوسف آباد',
    location: {
      address: 'یوسف آباد، خیابان اسدآبادی، نبش فتحی شقاقی',
    },
    isFavorited: true,
    features: ['پلان مهندسی بدون پرتی', 'آفتابگیر مستقیم', 'بالکن کاربردی'],
    propertyDetails: {
      bedrooms: 2,
      floor: 'پنجم',
      agents: [
        { profileImageUrl: '/images/agent-n1.jpg' },
        { profileImageUrl: '/images/agent-a1.jpg' },
      ],
    },
    tags: [
      { text: 'فروش یا معاوضه', type: 'sale_or_exchange' },
      { text: 'دسترسی عالی', type: 'great_access' },
    ],
    rating: {
      score: 4.5,
      reviewCount: 30,
    },
    price: {
      amount: 11000000000,
      currency: 'Toman',
      period: 'کل',
    },
    detailPageUrl: '/listings/listing-014',
  },
  {
    id: 'listing-015',
    mainImageUrl: '/images/property-sample-15.jpg',
    title: 'زمین مسکونی در کردان',
    location: {
      address: 'کردان، چهارباغ، منطقه ویلایی تهراندشت',
    },
    isFavorited: false,
    features: ['قطعه بندی شده', 'داخل شهرک با نگهبانی', 'آماده ساخت ویلا'],
    propertyDetails: {
      bedrooms: 0, // Land
      floor: 'زمین',
      agents: [{ profileImageUrl: '/images/agent-o1.jpg' }],
    },
    tags: [
      { text: 'زمین', type: 'land' },
      { text: 'شهرکی', type: 'gated_community' },
    ],
    rating: {
      score: 4.0, // Rating might be less relevant for land
      reviewCount: 3,
    },
    price: {
      amount: 7500000000,
      currency: 'Toman',
      period: 'کل',
    },
    detailPageUrl: '/listings/listing-015',
  },
]
export async function GET(request: NextRequest) {
  // const searchParams = request.nextUrl.searchParams
  // const id = searchParams.get('id')

  // const userId = await getUserId(request)
  // if (!userId) {
  //   return corsHeaders(
  //     NextResponse.json({ error: 'User ID is required' }, { status: 401 }),
  //   )
  // }

  // if (id) {
  //   const { rows } =
  //     await sql`SELECT * FROM todos WHERE id = ${id} AND user_id = ${userId}`

  //   return corsHeaders(NextResponse.json(rows))
  // }

  // const { rows } = await sql`
  //   SELECT * FROM todos
  //   WHERE user_id = ${userId}
  //   ORDER BY id
  // `
  return corsHeaders(NextResponse.json(listingsData))
}
