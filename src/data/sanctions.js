export const sanctionsData = {
  software: {
    id: 'software',
    title: 'Программное обеспечение',
    description: 'Ограничения на использование зарубежного ПО',
    icon: '💻',
    items: [
      {
        id: 1,
        name: 'Microsoft',
        products: ['Windows', 'Office 365', 'Azure', 'Visual Studio'],
        description: 'Ограничение продаж новых лицензий и облачных сервисов',
        impact: 'Затруднён доступ к обновлениям и новым версиям ПО',
        alternatives: [
          { name: 'Linux', url: 'https://www.linux.org/' },
          { name: 'MyOffice', url: 'https://myoffice.ru/' },
          { name: 'Yandex.Cloud', url: 'https://cloud.yandex.ru/' }
        ],
        date: '2022-03-04'
      },
      {
        id: 2,
        name: 'Adobe',
        products: ['Photoshop', 'Illustrator', 'Creative Cloud', 'Premiere Pro'],
        description: 'Полное прекращение продаж и обслуживания',
        impact: 'Отсутствие доступа к Creative Cloud и новым версиям',
        alternatives: [
          { name: 'Figma', url: 'https://www.figma.com/' },
          { name: 'GIMP', url: 'https://www.gimp.org/' },
          { name: 'Movavi', url: 'https://www.movavi.ru/' }
        ],
        date: '2022-03-06'
      }
    ]
  },
  social_networks: {
    id: 'social_networks',
    title: 'Социальные сети',
    description: 'Ограничения на использование зарубежных социальных сетей',
    icon: '👥',
    items: [
      {
        id: 6,
        name: 'Instagram',
        products: ['Instagram', 'Instagram Direct'],
        description: 'Блокировка доступа к сервису на территории РФ',
        impact: 'Отсутствие доступа к платформе без VPN, потеря аудитории для бизнеса',
        alternatives: [
          { name: 'VKontakte', url: 'https://vk.com/' },
          { name: 'Telegram', url: 'https://telegram.org/' },
          { name: 'Яндекс.Дзен', url: 'https://dzen.ru/' }
        ],
        date: '2022-03-14'
      },
      {
        id: 7,
        name: 'Facebook',
        products: ['Facebook', 'Facebook Messenger'],
        description: 'Блокировка доступа к сервису на территории РФ',
        impact: 'Ограничение доступа к платформе, проблемы с рекламой',
        alternatives: [
          { name: 'VKontakte', url: 'https://vk.com/' },
          { name: 'Одноклассники', url: 'https://ok.ru/' }
        ],
        date: '2022-03-04'
      },
      {
        id: 8,
        name: 'Twitter',
        products: ['Twitter'],
        description: 'Ограничение доступа к сервису',
        impact: 'Затруднение доступа к платформе без VPN',
        alternatives: [
          { name: 'VKontakte', url: 'https://vk.com/' },
          { name: 'Telegram', url: 'https://telegram.org/' }
        ],
        date: '2022-03-04'
      }
    ]
  },
  games_pc: {
    id: 'games_pc',
    title: 'Игры для ПК',
    description: 'Ограничения на игровые сервисы и игры для компьютеров',
    icon: '🎮',
    items: [
      {
        id: 9,
        name: 'Steam (ограничения)',
        products: ['Steam Store', 'Steam Wallet'],
        description: 'Ограничения на оплату в российских рублях',
        impact: 'Сложности с покупкой игр и пополнением кошелька',
        alternatives: [
          { name: 'VK Play', url: 'https://vkplay.ru/' },
          { name: 'RuStore', url: 'https://rustore.ru/' }
        ],
        date: '2022-03-10'
      },
      {
        id: 10,
        name: 'Epic Games Store',
        products: ['Epic Games Store', 'Fortnite'],
        description: 'Ограничения на покупки и транзакции',
        impact: 'Проблемы с оплатой игр и внутриигровых покупок',
        alternatives: [
          { name: 'VK Play', url: 'https://vkplay.ru/' },
          { name: 'RuStore', url: 'https://rustore.ru/' }
        ],
        date: '2022-03-11'
      }
    ]
  },
  mobile_android: {
    id: 'mobile_android',
    title: 'Приложения Android',
    description: 'Ограничения на мобильные приложения для Android',
    icon: '📱',
    items: [
      {
        id: 11,
        name: 'Google Play',
        products: ['Google Play Store', 'Google Play Payments'],
        description: 'Ограничения на оплату приложений и подписок',
        impact: 'Невозможность покупки приложений и внутриигровых покупок',
        alternatives: [
          { name: 'RuStore', url: 'https://rustore.ru/' },
          { name: 'NashStore', url: 'https://nashstore.ru/' }
        ],
        date: '2022-03-10'
      },
      {
        id: 12,
        name: 'Netflix',
        products: ['Netflix Android App'],
        description: 'Прекращение работы в России',
        impact: 'Отсутствие доступа к стриминговому сервису',
        alternatives: [
          { name: 'Кинопоиск', url: 'https://www.kinopoisk.ru/' },
          { name: 'IVI', url: 'https://www.ivi.ru/' },
          { name: 'ОККО', url: 'https://okko.tv/' }
        ],
        date: '2022-03-07'
      }
    ]
  },
  mobile_ios: {
    id: 'mobile_ios',
    title: 'Приложения iOS',
    description: 'Ограничения на мобильные приложения для iPhone и iPad',
    icon: '🍎',
    items: [
      {
        id: 13,
        name: 'App Store',
        products: ['App Store', 'In-App Purchases'],
        description: 'Ограничения на оплату приложений и подписок',
        impact: 'Сложности с покупкой приложений и внутриигровыми покупками',
        alternatives: [
          { name: 'Веб-версии сервисов', url: '#' },
          { name: 'Альтернативные платформы', url: '#' }
        ],
        date: '2022-03-10'
      },
      {
        id: 14,
        name: 'Apple Services',
        products: ['Apple Music', 'Apple TV+', 'iCloud'],
        description: 'Ограничения на подписки и оплату сервисов',
        impact: 'Проблемы с оплатой подписок и использованием сервисов',
        alternatives: [
          { name: 'VK Музыка', url: 'https://music.vk.com/' },
          { name: 'Яндекс.Музыка', url: 'https://music.yandex.ru/' },
          { name: 'Облако Mail.ru', url: 'https://cloud.mail.ru/' }
        ],
        date: '2022-03-08'
      }
    ]
  },
  cloud_services: {
    id: 'cloud_services',
    title: 'Облачные сервисы',
    description: 'Ограничения на использование международных облачных платформ',
    icon: '☁️',
    items: [
      {
        id: 3,
        name: 'Amazon Web Services',
        products: ['EC2', 'S3', 'Lambda', 'RDS'],
        description: 'Прекращение обслуживания новых клиентов',
        impact: 'Сложности с хостингом и облачной инфраструктурой',
        alternatives: [
          { name: 'Yandex.Cloud', url: 'https://cloud.yandex.ru/' },
          { name: 'VK Cloud', url: 'https://cloud.vk.com/' },
          { name: 'SberCloud', url: 'https://sbercloud.ru/' }
        ],
        date: '2022-03-08'
      }
    ]
  },
  development: {
    id: 'development',
    title: 'Средства разработки',
    description: 'Ограничения на использование инструментов разработки',
    icon: '🛠️',
    items: [
      {
        id: 4,
        name: 'GitHub',
        products: ['GitHub Enterprise', 'GitHub Copilot', 'GitHub Actions'],
        description: 'Ограничения для компаний из санкционного списка',
        impact: 'Затруднения в корпоративной разработке и CI/CD',
        alternatives: [
          { name: 'GitLab', url: 'https://gitlab.com/' },
          { name: 'Bitbucket', url: 'https://bitbucket.org/' },
          { name: 'Gitea', url: 'https://gitea.io/' }
        ],
        date: '2022-04-15'
      }
    ]
  },
  payment_systems: {
    id: 'payment_systems',
    title: 'Платёжные системы',
    description: 'Ограничения на проведение международных платежей',
    icon: '💳',
    items: [
      {
        id: 5,
        name: 'PayPal',
        products: ['PayPal Payments', 'Xoom'],
        description: 'Прекращение работы в России',
        impact: 'Невозможность проведения международных платежей',
        alternatives: [
          { name: 'ЮMoney', url: 'https://yoomoney.ru/' },
          { name: 'СБП', url: 'https://sbp.nspk.ru/' },
          { name: 'UnionPay', url: 'https://www.unionpayintl.com/' }
        ],
        date: '2022-03-10'
      }
    ]
  },
  import_substitution: {
    id: 'import-substitution',
    title: 'Импортозамещение',
    description: 'Российские аналоги зарубежного программного обеспечения и сервисов',
    icon: '🔄',
    items: [
      {
        id: 1,
        name: 'Операционные системы',
        products: ['Astra Linux', 'RED OS', 'Alt Linux', 'РЕД ОС'],
        description: 'Отечественные операционные системы для замены Windows и macOS',
        impact: 'Переход государственных учреждений и крупных компаний на российские ОС',
        alternatives: [
          { 
            name: 'Astra Linux',
            url: 'https://astralinux.ru/',
            description: 'Сертифицированная ОС для государственных и корпоративных нужд'
          },
          {
            name: 'RED OS',
            url: 'https://redos.red-soft.ru/',
            description: 'Российская операционная система на базе Linux'
          }
        ],
        date: '2022-03-15'
      },
      {
        id: 2,
        name: 'Офисное ПО',
        products: ['МойОфис', 'Р7-Офис', 'OnlyOffice'],
        description: 'Российские офисные пакеты для замены Microsoft Office',
        impact: 'Обеспечение независимости от зарубежного офисного ПО',
        alternatives: [
          {
            name: 'МойОфис',
            url: 'https://myoffice.ru/',
            description: 'Полный набор офисных приложений с облачной синхронизацией'
          },
          {
            name: 'Р7-Офис',
            url: 'https://r7-office.ru/',
            description: 'Офисный пакет для работы с документами, таблицами и презентациями'
          }
        ],
        date: '2022-04-01'
      },
      {
        id: 3,
        name: 'Системы управления базами данных',
        products: ['Postgres Pro', 'Ред База Данных', 'Линтер'],
        description: 'Отечественные СУБД для замены Oracle, Microsoft SQL Server и других',
        impact: 'Обеспечение безопасности и независимости корпоративных данных',
        alternatives: [
          {
            name: 'Postgres Pro',
            url: 'https://postgrespro.ru/',
            description: 'Профессиональная СУБД с поддержкой российских криптографических алгоритмов'
          },
          {
            name: 'Ред База Данных',
            url: 'https://red-soft.ru/ru/products/red-database',
            description: 'Сертифицированная СУБД для государственных информационных систем'
          }
        ],
        date: '2022-03-20'
      },
      {
        id: 4,
        name: 'Средства разработки',
        products: ['Qt Russia', 'LiteIDE', 'Ред Платформа'],
        description: 'Инструменты разработки и средства создания приложений',
        impact: 'Обеспечение технологической независимости в разработке ПО',
        alternatives: [
          {
            name: 'Qt Russia',
            url: 'https://qt.ru/',
            description: 'Российская версия Qt для разработки кроссплатформенных приложений'
          },
          {
            name: 'Ред Платформа',
            url: 'https://red-soft.ru/ru/products/red-platform',
            description: 'Платформа для создания корпоративных приложений'
          }
        ],
        date: '2022-05-10'
      },
      {
        id: 5,
        name: 'Браузеры',
        products: ['Яндекс.Браузер', 'Атом', 'Спутник'],
        description: 'Отечественные веб-браузеры',
        impact: 'Обеспечение безопасного доступа к веб-ресурсам',
        alternatives: [
          {
            name: 'Яндекс.Браузер',
            url: 'https://browser.yandex.ru/',
            description: 'Современный браузер с защитой от угроз и встроенными сервисами'
          },
          {
            name: 'Атом',
            url: 'https://browser.ru/',
            description: 'Защищённый браузер для корпоративного использования'
          }
        ],
        date: '2022-03-10'
      }
    ]
  }
};
